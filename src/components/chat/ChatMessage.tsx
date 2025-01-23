import { cn } from "@/lib/utils";
import { useState } from "react";
import { MessageHeader } from "./message/MessageHeader";
import { MessageReplyInput } from "./message/MessageReplyInput";
import { MessageReactions } from "./message/MessageReactions";
import { MessageReplies } from "./message/MessageReplies";

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

interface ChatMessageProps {
  id: string;
  userName: string;
  text: string;
  timestamp: Date;
  likes: number;
  dislikes: number;
  hearts: number;
  replies: Reply[];
  userReactions: MessageReactions;
  onReaction: (messageId: string, reactionType: 'liked' | 'disliked' | 'hearted') => void;
  onReply: (messageId: string, replyText: string) => void;
  onUserSelect?: (userName: string) => void;
  isSelected: boolean;
  onSelect: (messageId: string | null) => void;
  hidden: boolean;
}

export const ChatMessage = ({
  id,
  userName,
  text,
  timestamp,
  likes,
  dislikes,
  hearts,
  replies,
  userReactions,
  onReaction,
  onReply,
  onUserSelect,
  isSelected,
  onSelect,
  hidden
}: ChatMessageProps) => {
  const [replyText, setReplyText] = useState("");

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onReply(id, replyText);
      setReplyText("");
    }
  };

  if (hidden) {
    return null;
  }

  return (
    <div className="bg-[#1A1F2C]/50 rounded-lg p-2 space-y-1">
      <MessageHeader
        userName={userName}
        text={text}
        timestamp={timestamp}
        onUserSelect={onUserSelect}
        onClick={() => onSelect(isSelected ? null : id)}
      />
      
      <div className={cn(
        "transition-all duration-200",
        isSelected ? "max-h-[300px] opacity-100 overflow-y-auto scrollbar-hide" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <MessageReplyInput
          replyText={replyText}
          onChange={setReplyText}
          onSubmit={handleReplySubmit}
        />

        <MessageReactions
          likes={likes}
          dislikes={dislikes}
          hearts={hearts}
          replies={replies.length}
          userReactions={userReactions}
          onReaction={(type) => onReaction(id, type)}
        />

        <MessageReplies
          replies={replies}
          onUserSelect={onUserSelect}
        />
      </div>
    </div>
  );
};