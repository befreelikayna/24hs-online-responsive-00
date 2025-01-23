import { ThumbsUp, ThumbsDown, Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageReactionsProps {
  likes: number;
  dislikes: number;
  hearts: number;
  replies: number;
  userReactions: {
    liked: boolean;
    disliked: boolean;
    hearted: boolean;
  };
  onReaction: (type: 'liked' | 'disliked' | 'hearted') => void;
}

export const MessageReactions = ({
  likes,
  dislikes,
  hearts,
  replies,
  userReactions,
  onReaction
}: MessageReactionsProps) => {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-4">
        <button
          onClick={() => onReaction('liked')}
          className={cn(
            "flex items-center gap-1 transition-colors",
            userReactions.liked ? "text-[#9b87f5]" : "text-gray-400 hover:text-[#9b87f5]"
          )}
        >
          <ThumbsUp 
            className="w-4 h-4" 
            fill={userReactions.liked ? "currentColor" : "none"}
          />
          <span className="text-xs">{likes}</span>
        </button>
        <button
          onClick={() => onReaction('disliked')}
          className={cn(
            "flex items-center gap-1 transition-colors",
            userReactions.disliked ? "text-[#9b87f5]" : "text-gray-400 hover:text-[#9b87f5]"
          )}
        >
          <ThumbsDown 
            className="w-4 h-4" 
            fill={userReactions.disliked ? "currentColor" : "none"}
          />
          <span className="text-xs">{dislikes}</span>
        </button>
        <button
          onClick={() => onReaction('hearted')}
          className={cn(
            "flex items-center gap-1 transition-colors",
            userReactions.hearted ? "text-[#9b87f5]" : "text-gray-400 hover:text-[#9b87f5]"
          )}
        >
          <Heart 
            className="w-4 h-4" 
            fill={userReactions.hearted ? "currentColor" : "none"}
          />
          <span className="text-xs">{hearts}</span>
        </button>
        <MessageCircle className="w-4 h-4 text-gray-400" />
      </div>
      <span className="text-xs text-gray-400">
        {replies} comentários
      </span>
    </div>
  );
};