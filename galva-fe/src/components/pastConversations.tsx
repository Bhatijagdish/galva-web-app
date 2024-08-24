import { useState, useEffect } from 'react';

interface Conversation {
    id: number;
    title: string;
}

interface PastConversationsProps {
    userId: number;
}

function PastConversations({ userId }: PastConversationsProps) {
    const [conversations, setConversations] = useState<Conversation[]>([]);

    useEffect(() => {
        fetchPastConversations();
    }, []);

    const fetchPastConversations = async () => {
        try {
            const response = await fetch(`/api/bot/get_past_conversations/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const pastConversations: Conversation[] = await response.json();
                setConversations(pastConversations);
            } else {
                console.error('Failed to fetch past conversations');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const loadConversation = (id: number, title: string) => {
        // Logic to load a specific conversation
        console.log(`Loading conversation ${title} with ID: ${id}`);
    };

    return (
        <div>
            {conversations.length === 0 ? (
                <p>No past conversations found.</p>
            ) : (
                conversations.map((convo) => (
                    <div
                        key={convo.id}
                        className="p-2 bg-gray-200 rounded cursor-pointer dark-mode-convo dark:bg-gray-700 mq1900"
                        onClick={() => loadConversation(convo.id, convo.title)}
                    >
                        {convo.title}
                    </div>
                ))
            )}
        </div>
    );
}

export default PastConversations;
