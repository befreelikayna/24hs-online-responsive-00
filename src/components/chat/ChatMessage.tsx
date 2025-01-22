import { ThumbsUp, ThumbsDown, Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  onReply
}: ChatMessageProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [showReplies, setShowReplies] = useState(false);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onReply(id, replyText);
      setReplyText("");
      setIsReplying(false);
    }
  };

  return (
    <div className="bg-[#1A1F2C]/50 rounded-lg p-2 space-y-1">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 min-w-fit">
          <span className="font-semibold text-[#9b87f5]">{userName}:</span>
        </div>
        <p className="text-white/90 text-sm flex-1">{text}</p>
        <span className="text-xs text-gray-400 whitespace-nowrap">{formatTime(timestamp)}</span>
      </div>
      
      <div className="flex items-center justify-between py-1.5">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onReaction(id, 'liked')}
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
            onClick={() => onReaction(id, 'disliked')}
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
            onClick={() => onReaction(id, 'hearted')}
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
          <button
            onClick={() => setIsReplying(!isReplying)}
            className="flex items-center gap-1 text-gray-400 hover:text-[#9b87f5] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={() => setShowReplies(!showReplies)}
          className="text-xs text-gray-400 hover:text-[#9b87f5] transition-colors"
        >
          {replies.length} respostas
        </button>
      </div>
      
      {isReplying && (
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Digite sua resposta..."
            className="flex-1 bg-[#9b87f5]/5 border-0 rounded-lg text-sm py-1.5 px-3 text-white"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleReplySubmit();
              }
            }}
          />
          <button
            onClick={handleReplySubmit}
            className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 px-3 py-1 rounded-lg text-sm text-white"
          >
            Responder
          </button>
        </div>
      )}

      {replies.length > 0 && showReplies && (
        <div className="mt-2 space-y-1 pl-3 border-l-2 border-[#9b87f5]/10">
          {replies.map((reply) => (
            <div key={reply.id} className="bg-[#7E69AB]/20 rounded-md p-1">
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-[#9b87f5] text-sm">{reply.userName}:</span>
                  <p className="text-white/90 text-sm">{reply.text}</p>
                </div>
                <span className="text-xs text-gray-400">{formatTime(reply.timestamp)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};