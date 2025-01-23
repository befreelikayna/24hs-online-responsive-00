import { useState, useEffect, useRef } from "react";
import { MessagesList } from "./message/MessagesList";
import { ChatInput } from "./ChatInput";
import { UserInfo } from "./UserInfo";

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
  onUnreadCountChange?: (count: number) => void;
}

export const LiveChat = ({ filterUserMessages = false, onUnreadCountChange }: LiveChatProps) => {
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
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    if (selectedMessageId) {
      // Handle reply to specific message
      handleReply(selectedMessageId, newMessage);
    } else {
      // Handle new general message
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

      setMessages(prev => [...prev, message]);
    }
    
    setNewMessage("");
    setTimeout(scrollToBottom, 100);
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

  const handleUserSelect = (userName: string) => {
    setSelectedUser(userName);
  };

  const markAllAsRead = () => {
    setMessages(messages.map(message => ({
      ...message,
      read: true
    })));
  };

  const unreadCount = messages.filter(message => !message.read && message.userName !== "Você").length;

  useEffect(() => {
    onUnreadCountChange?.(unreadCount);
  }, [unreadCount, onUnreadCountChange]);

  useEffect(() => {
    const chatContainer = document.querySelector('.scrollbar-hide');
    if (!chatContainer) return;

    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = chatContainer;
      if (scrollHeight - scrollTop <= clientHeight + 100) {
        markAllAsRead();
      }
    };

    chatContainer.addEventListener('scroll', handleScroll);
    return () => chatContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredMessages = filterUserMessages
    ? messages.filter(message => message.userName === "Você")
    : messages;

  return (
    <div className="flex flex-col h-full relative">
      {selectedUser ? (
        <UserInfo userName={selectedUser} onClose={() => setSelectedUser(null)} />
      ) : (
        <>
          <MessagesList
            messages={filteredMessages}
            selectedMessageId={selectedMessageId}
            onMessageSelect={setSelectedMessageId}
            onReaction={handleReaction}
            onReply={handleReply}
            onUserSelect={handleUserSelect}
          />
          <div ref={messagesEndRef} />
        </>
      )}
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