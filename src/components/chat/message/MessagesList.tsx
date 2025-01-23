import { ChatMessage } from "../ChatMessage";

interface Message {
  id: string;
  userName: string;
  text: string;
  timestamp: Date;
  likes: number;
  dislikes: number;
  hearts: number;
  replies: Array<{
    id: string;
    userName: string;
    text: string;
    timestamp: Date;
  }>;
  userReactions: {
    liked: boolean;
    disliked: boolean;
    hearted: boolean;
  };
  read: boolean;
}

interface MessagesListProps {
  messages: Message[];
  selectedMessageId: string | null;
  onMessageSelect: (messageId: string | null) => void;
  onReaction: (messageId: string, reactionType: 'liked' | 'disliked' | 'hearted') => void;
  onReply: (messageId: string, replyText: string) => void;
  onUserSelect?: (userName: string) => void;
}

export const MessagesList = ({
  messages,
  selectedMessageId,
  onMessageSelect,
  onReaction,
  onReply,
  onUserSelect
}: MessagesListProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-[60px] overflow-y-auto p-2 space-y-2 scrollbar-hide">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          {...message}
          onReaction={onReaction}
          onReply={onReply}
          onUserSelect={onUserSelect}
          isSelected={selectedMessageId === message.id}
          onSelect={onMessageSelect}
          hidden={selectedMessageId !== null && selectedMessageId !== message.id}
        />
      ))}
    </div>
  );
};