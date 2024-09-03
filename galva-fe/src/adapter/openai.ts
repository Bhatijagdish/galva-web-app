import { StreamingAdapterObserver, StreamSend } from "@nlux/react";

// API endpoint for the custom server
const apiServerUrl = "http://galva.ai/api/bot/conversations";

// Adapter to send query to the server and receive a stream of chunks as response
export const openAiAdapter: StreamSend = async (
  prompt: string,
  observer: StreamingAdapterObserver
) => {
  const body = {
    query: prompt,
    session_id: "givemesomesunshine",  // Provide the actual session ID here
    user_id: 1,  // Since the user_id is fixed at 1
  };

  try {
    const response = await fetch(apiServerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
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
    while (!doneStream) {
      const { value, done } = await reader.read();
      if (done) {
        doneStream = true;
      } else {
        const content = textDecoder.decode(value);
        if (content) {
          observer.next(content);
        }
      }
    }

    observer.complete();
  } catch (error) {
    if (error instanceof Error) {
      observer.error(new Error(`Error occurred: ${error.message}`));
    } else {
      observer.error(new Error('An unknown error occurred'));
    }
  }
};