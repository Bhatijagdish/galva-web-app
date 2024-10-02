import { StreamingAdapterObserver, StreamSend } from "@nlux/react";

const apiServerUrl = "http://localhost:8000/api/bot/conversations";
const saveMessageUrl = "http://localhost:8000/api/bot/save_message";

// Generate a unique history_id
const generateHistoryId = () => {
  return Math.random().toString(36).substr(2, 9); // Simple unique ID generator
};

export const openAiAdapter: StreamSend = async (
  prompt: string,
  observer: StreamingAdapterObserver
) => {
  // Retrieve userId and sessionId from localStorage
  const userId = localStorage.getItem('userId') || '1';
  const sessionId = localStorage.getItem('sessionId') || 'defaultSessionId';

  const historyId = generateHistoryId(); // Generate unique history_id

  // Save the user prompt with the generated history_id
  await fetch(saveMessageUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      session_id: sessionId,
      history_id: historyId,
      sender: "user",
      message_text: prompt,
      user_id: parseInt(userId, 10),
    }),
  });

  try {
    const response = await fetch(apiServerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: prompt,
        session_id: sessionId,
        user_id: parseInt(userId, 10),
      }),
    });

    if (response.status !== 200) {
      observer.error(new Error("Failed to connect to the server"));
      return;
    }

    if (!response.body) {
      observer.error(new Error("Empty response body"));
      return;
    }

    const reader = response.body.getReader();
    const textDecoder = new TextDecoder();

    let doneStream = false;
    let aiResponse = "";

    while (!doneStream) {
      const { value, done } = await reader.read();
      if (done) {
        doneStream = true;
        // Save the AI response with the same history_id
        await fetch(saveMessageUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: sessionId,
            history_id: historyId,
            sender: "ai",
            message_text: aiResponse,
            user_id: parseInt(userId, 10),
          }),
        });
      } else {
        const content = textDecoder.decode(value);
        if (content) {
          aiResponse += content;
          observer.next(content);
        }
      }
    }

    observer.complete();
  } catch (error) {
    if (error instanceof Error) {
      observer.error(new Error(`Error occurred: ${error.message}`));
    } else {
      observer.error(new Error("An unknown error occurred"));
    }
  }
};
