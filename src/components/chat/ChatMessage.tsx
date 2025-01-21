import { ThumbsUp, ThumbsDown, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageReactions {
  liked: boolean;
  disliked: boolean;
  hearted: boolean;
}

interface ChatMessageProps {
  id: string;
  userName: string;
  text: string;
  timestamp: Date;
  likes: number;
  dislikes: number;
  hearts: number;
  userReactions: MessageReactions;
  onReaction: (messageId: string, reactionType: 'liked' | 'disliked' | 'hearted') => void;
}

export const ChatMessage = ({
  id,
  userName,
  text,
  timestamp,
  likes,
  dislikes,
  hearts,
  userReactions,
  onReaction
}: ChatMessageProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="bg-[#1A1F2C]/50 rounded-lg p-2 space-y-1">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-[#9b87f5]">{userName}</span>
        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => onReaction(id, 'liked')}
            className={cn(
              "flex items-center gap-1 transition-colors",
              userReactions.liked ? "text-[#9b87f5]" : "text-gray-400 hover:text-[#9b87f5]"
            )}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{likes}</span>
          </button>
          <button
            onClick={() => onReaction(id, 'disliked')}
            className={cn(
              "flex items-center gap-1 transition-colors",
              userReactions.disliked ? "text-[#9b87f5]" : "text-gray-400 hover:text-[#9b87f5]"
            )}
          >
            <ThumbsDown className="w-3.5 h-3.5" />
            <span>{dislikes}</span>
          </button>
          <button
            onClick={() => onReaction(id, 'hearted')}
            className={cn(
              "flex items-center gap-1 transition-colors",
              userReactions.hearted ? "text-[#9b87f5]" : "text-gray-400 hover:text-[#9b87f5]"
            )}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>{hearts}</span>
          </button>
          <span className="text-xs text-gray-400 ml-1">{formatTime(timestamp)}</span>
        </div>
      </div>
      <p className="text-white/90 text-sm leading-tight">{text}</p>
    </div>
  );
};