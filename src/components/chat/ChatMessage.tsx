import { useState } from "react";
import { ThumbsUp, ThumbsDown, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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

  const handleReply = () => {
    if (replyText.trim()) {
      onReply(id, replyText);
      setReplyText("");
    }
  };

  const handleUserNameClick = () => {
    onUserSelect?.(userName);
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
        className="flex items-center justify-between cursor-pointer"
        onClick={handleMessageClick}
      >
        <div className="flex items-center gap-2">
          <span 
            className="font-semibold text-primary hover:underline cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleUserNameClick();
            }}
          >
            {userName}
          </span>
          <span className="text-sm overflow-wrap-anywhere">{text}</span>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
          {formatTime(timestamp)}
        </span>
      </div>

      {isSelected && (
        <div className="space-y-2 mt-2">
          <div className="flex gap-2 items-center">
            <div className="flex-1">
              <Textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Digite sua resposta..."
                className="min-h-[32px] max-h-[32px] bg-[#9b87f5]/5 border-0 focus-visible:ring-1 focus-visible:ring-[#9b87f5]/40 focus-visible:ring-offset-0 resize-none text-sm py-1 px-3"
              />
            </div>
            <Button
              onClick={handleReply}
              size="sm"
              className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 h-8 px-3 whitespace-nowrap"
            >
              Responder
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onReaction(id, 'liked')}
              className={`flex items-center gap-1 ${userReactions.liked ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <ThumbsUp className="h-4 w-4" />
              <span className="text-xs">{likes}</span>
            </button>
            <button
              onClick={() => onReaction(id, 'disliked')}
              className={`flex items-center gap-1 ${userReactions.disliked ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <ThumbsDown className="h-4 w-4" />
              <span className="text-xs">{dislikes}</span>
            </button>
            <button
              onClick={() => onReaction(id, 'hearted')}
              className={`flex items-center gap-1 ${userReactions.hearted ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Heart className="h-4 w-4" />
              <span className="text-xs">{hearts}</span>
            </button>
          </div>

          {replies.length > 0 && (
            <div className="space-y-2 pl-4 border-l-2 border-[#9b87f5]/20">
              {replies.map((reply) => (
                <div key={reply.id} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span 
                      className="font-semibold text-primary hover:underline cursor-pointer"
                      onClick={() => onUserSelect?.(reply.userName)}
                    >
                      {reply.userName}
                    </span>
                    <span className="text-sm overflow-wrap-anywhere">{reply.text}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formatTime(reply.timestamp)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};