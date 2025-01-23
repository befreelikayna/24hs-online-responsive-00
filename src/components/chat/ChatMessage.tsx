import { cn } from "@/lib/utils";
import { MessageHeader } from "./message/MessageHeader";
import { MessageReactions } from "./message/MessageReactions";
import { MessageReplies } from "./message/MessageReplies";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  if (hidden) {
    return null;
  }

  return (
    <div className={cn(
      "bg-[#1A1F2C]/50 rounded-lg p-2 space-y-1",
      isMobile && isSelected && "fixed inset-0 z-50 m-0 overflow-hidden bg-[#1A1F2C] pb-[60px]"
    )}>
      <MessageHeader
        userName={userName}
        text={text}
        timestamp={timestamp}
        onUserSelect={onUserSelect}
        onClick={() => onSelect(isSelected ? null : id)}
      />
      
      <div className={cn(
        "transition-all duration-300",
        isSelected 
          ? "opacity-100" 
          : "max-h-0 opacity-0 overflow-hidden",
        isMobile && isSelected && "h-[calc(100vh-180px)] flex flex-col"
      )}>
        <div className={cn(
          "flex flex-col",
          isMobile && isSelected ? "h-full" : "h-full"
        )}>
          <div className="space-y-2">
            <MessageReactions
              likes={likes}
              dislikes={dislikes}
              hearts={hearts}
              replies={replies.length}
              userReactions={userReactions}
              onReaction={(type) => onReaction(id, type)}
            />
          </div>

          <div className={cn(
            "flex-1 overflow-y-auto scrollbar-hide",
            isMobile 
              ? "max-h-[calc(100vh-260px)]" 
              : "max-h-[calc(100vh-400px)]"
          )}>
            <MessageReplies
              replies={replies}
              onUserSelect={onUserSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};