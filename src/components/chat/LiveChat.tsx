import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

interface Message {
  id: string;
  userName: string;
  text: string;
  timestamp: Date;
  likes: number;
  dislikes: number;
  hearts: number;
  userReactions: {
    liked: boolean;
    disliked: boolean;
    hearted: boolean;
  };
}

export const LiveChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      userName: "Alice",
      text: "Oi pessoal! Tudo bem?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      likes: 2,
      dislikes: 0,
      hearts: 1,
      userReactions: { liked: false, disliked: false, hearted: false }
    },
    {
      id: '2',
      userName: "Bob",
      text: "Opa! Tudo ótimo por aqui!",
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      likes: 1,
      dislikes: 0,
      hearts: 2,
      userReactions: { liked: false, disliked: false, hearted: false }
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      userName: "Você",
      text: newMessage,
      timestamp: new Date(),
      likes: 0,
      dislikes: 0,
      hearts: 0,
      userReactions: { liked: false, disliked: false, hearted: false }
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleReaction = (messageId: string, reactionType: 'liked' | 'disliked' | 'hearted') => {
    setMessages(messages.map(message => {
      if (message.id === messageId) {
        const newMessage = { ...message };
        const currentState = newMessage.userReactions[reactionType];
        
        newMessage.userReactions[reactionType] = !currentState;
        
        if (reactionType === 'liked') {
          newMessage.likes += currentState ? -1 : 1;
        } else if (reactionType === 'disliked') {
          newMessage.dislikes += currentState ? -1 : 1;
        } else if (reactionType === 'hearted') {
          newMessage.hearts += currentState ? -1 : 1;
        }
        
        return newMessage;
      }
      return message;
    }));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            {...message}
            onReaction={handleReaction}
          />
        ))}
      </div>
      <ChatInput
        value={newMessage}
        onChange={setNewMessage}
        onSend={handleSendMessage}
      />
    </div>
  );
};