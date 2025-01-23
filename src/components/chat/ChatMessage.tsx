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
    }
  };

  const handleUserNameClick = (clickedUserName: string) => {
    if (onUserSelect) {
      onUserSelect(clickedUserName);
    }
  };

  const handleMessageClick = () => {
    onSelect(isSelected ? null : id);
  };

  if (hidden) {
    return null;
  }

  return (
    <div className="bg-[#1A1F2C]/50 rounded-lg p-2 space-y-1">
      <div 
        className="flex items-center gap-2 cursor-pointer hover:bg-[#2C2F3E]/30 rounded-lg p-1 transition-colors"
        onClick={handleMessageClick}
      >
        <div className="flex items-center gap-2 min-w-fit">
          <span 
            className="font-semibold text-[#9b87f5] cursor-pointer hover:text-[#D6BCFA] transition-colors leading-[2px]"
            onClick={(e) => {
              e.stopPropagation();
              handleUserNameClick(userName);
            }}
          >
            {userName}:
          </span>
        </div>
        <p className="text-white/90 text-sm flex-1 leading-[2px]">{text}</p>
        <span className="text-xs text-gray-400 whitespace-nowrap leading-[2px]">{formatTime(timestamp)}</span>
      </div>
      
      <div className={cn(
        "transition-all duration-200 overflow-hidden",
        isSelected ? "h-auto opacity-100" : "h-0 opacity-0"
      )}>
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Digite sua resposta..."
            className="flex-1 bg-[#9b87f5]/5 border border-[#9b87f5]/20 rounded-lg text-sm h-9 px-3 text-white focus:outline-none focus:border-[#9b87f5]/40 transition-colors"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleReplySubmit();
              }
            }}
          />
          <button
            onClick={handleReplySubmit}
            className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 px-3 h-9 rounded-lg text-sm text-white whitespace-nowrap"
          >
            Responder
          </button>
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
            <MessageCircle className="w-4 h-4 text-gray-400" />
          </div>
          <span className="text-xs text-gray-400">
            {replies.length} comentários
          </span>
        </div>

        {replies.length > 0 && (
          <div className="mt-2 space-y-1 pl-3 border-l-2 border-[#9b87f5]/10">
            {replies.map((reply) => (
              <div key={reply.id} className="bg-[#7E69AB]/20 rounded-md p-1">
                <div className="flex items-center gap-2 justify-between">
                  <div className="flex items-center gap-1">
                    <span 
                      className="font-semibold text-[#9b87f5] text-sm cursor-pointer hover:text-[#D6BCFA] transition-colors leading-[2px]"
                      onClick={() => handleUserNameClick(reply.userName)}
                    >
                      {reply.userName}:
                    </span>
                    <p className="text-white/90 text-sm leading-[2px]">{reply.text}</p>
                  </div>
                  <span className="text-xs text-gray-400 leading-[2px]">{formatTime(reply.timestamp)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};