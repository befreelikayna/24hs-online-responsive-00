import { Eye, Heart, MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  messageDetails?: {
    userName: string;
    text: string;
    timestamp: Date;
  };
}

export const MessageReactions = ({
  likes,
  dislikes,
  hearts,
  replies,
  userReactions,
  onReaction,
  messageDetails
}: MessageReactionsProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3 text-xs text-gray-400">
        <button
          className={cn(
            "flex items-center gap-1 hover:text-blue-400 transition-colors",
            userReactions.liked && "text-blue-400"
          )}
          onClick={() => onReaction('liked')}
        >
          <ThumbsUp size={14} />
          <span>{likes}</span>
        </button>

        <button
          className={cn(
            "flex items-center gap-1 hover:text-red-400 transition-colors",
            userReactions.disliked && "text-red-400"
          )}
          onClick={() => onReaction('disliked')}
        >
          <ThumbsDown size={14} />
          <span>{dislikes}</span>
        </button>

        <button
          className={cn(
            "flex items-center gap-1 hover:text-pink-400 transition-colors",
            userReactions.hearted && "text-pink-400"
          )}
          onClick={() => onReaction('hearted')}
        >
          <Heart size={14} />
          <span>{hearts}</span>
        </button>

        {messageDetails && (
          <button
            className="flex items-center gap-1 hover:text-purple-400 transition-colors"
            onClick={() => setShowDetails(!showDetails)}
          >
            <Eye size={14} />
          </button>
        )}

        <div className="flex items-center gap-1">
          <MessageCircle size={14} />
          <span>{replies}</span>
        </div>
      </div>

      {showDetails && messageDetails && (
        <div className="absolute bottom-full left-0 mb-2 bg-[#1A1F2C] rounded-lg p-2 shadow-lg min-w-[200px] z-20">
          <div className="text-sm space-y-1">
            <p className="text-[#9b87f5]">{messageDetails.userName}</p>
            <p className="text-white/90">{messageDetails.text}</p>
            <p className="text-gray-400 text-xs">{formatTime(messageDetails.timestamp)}</p>
          </div>
        </div>
      )}
    </div>
  );
};