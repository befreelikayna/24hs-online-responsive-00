import { cn } from "@/lib/utils";
import { MessageHeader } from "./message/MessageHeader";
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
  onUserSelect,
  isSelected,
  onSelect,
  hidden
}: ChatMessageProps) => {
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
        isSelected ? "opacity-100 flex flex-col" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="sticky top-0 bg-[#1A1F2C]/50 z-10 py-2">
          <MessageReactions
            likes={likes}
            dislikes={dislikes}
            hearts={hearts}
            replies={replies.length}
            userReactions={userReactions}
            onReaction={(type) => onReaction(id, type)}
          />
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <MessageReplies
            replies={replies}
            onUserSelect={onUserSelect}
          />
        </div>
      </div>
    </div>
  );
};