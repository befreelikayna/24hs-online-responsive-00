import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

interface MessageReactions {
  liked: boolean;
  disliked: boolean;
  hearted: boolean;
}

interface Reply {
  id: string;
  userName: string;
  text: string;
  timestamp: Date;
}

interface Message {
  id: string;
  userName: string;
  text: string;
  timestamp: Date;
  likes: number;
  dislikes: number;
  hearts: number;
  replies: Reply[];
  userReactions: MessageReactions;
  read: boolean;
}

interface LiveChatProps {
  filterUserMessages?: boolean;
}

export const LiveChat = ({ filterUserMessages = false }: LiveChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      userName: "Alice",
      text: "Oi pessoal! Tudo bem?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      likes: 2,
      dislikes: 0,
      hearts: 1,
      replies: [
        {
          id: '1-1',
          userName: "Carol",
          text: "Tudo ótimo! E com você?",
          timestamp: new Date(Date.now() - 1000 * 60 * 4),
        }
      ],
      userReactions: { liked: false, disliked: false, hearted: false },
      read: false
    },
    {
      id: '2',
      userName: "Bob",
      text: "Opa! Tudo ótimo por aqui!",
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      likes: 1,
      dislikes: 0,
      hearts: 2,
      replies: [],
      userReactions: { liked: false, disliked: false, hearted: false },
      read: false
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
      replies: [],
      userReactions: { liked: false, disliked: false, hearted: false },
      read: true
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

  const handleReply = (messageId: string, replyText: string) => {
    setMessages(messages.map(message => {
      if (message.id === messageId) {
        const newReply: Reply = {
          id: `${messageId}-${message.replies.length + 1}`,
          userName: "Você",
          text: replyText,
          timestamp: new Date(),
        };
        
        return {
          ...message,
          replies: [...message.replies, newReply]
        };
      }
      return message;
    }));
  };

  const markAllAsRead = () => {
    setMessages(messages.map(message => ({
      ...message,
      read: true
    })));
  };

  const unreadCount = messages.filter(message => !message.read).length;

  const filteredMessages = filterUserMessages
    ? messages.filter(message => message.userName === "Você")
    : messages;

  return (
    <div className="flex flex-col h-full relative">
      <div className="absolute top-0 left-0 right-0 bottom-[60px] overflow-y-auto p-2 space-y-2 scrollbar-hide">
        {filteredMessages.map((message) => (
          <ChatMessage
            key={message.id}
            {...message}
            onReaction={handleReaction}
            onReply={handleReply}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <ChatInput
          value={newMessage}
          onChange={setNewMessage}
          onSend={handleSendMessage}
        />
      </div>
    </div>
  );
};