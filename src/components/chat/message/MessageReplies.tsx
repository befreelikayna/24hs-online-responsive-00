import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollSync } from '../hooks/useScrollSync';

interface Reply {
  id: string;
  userName: string;
  text: string;
  timestamp: Date;
}

interface MessageRepliesProps {
  replies: Reply[];
  onUserSelect?: (userName: string) => void;
}

export const MessageReplies = ({ replies, onUserSelect }: MessageRepliesProps) => {
  const isMobile = useIsMobile();
  const { scrollRef, handleScroll } = useScrollSync([replies]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (replies.length === 0) return null;

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleUserSelect = (e: React.MouseEvent, userName: string) => {
    e.preventDefault();
    e.stopPropagation();
    onUserSelect?.(userName);
  };

  const containerStyle = isMobile 
    ? "mt-2 space-y-1 pl-3 border-l-2 border-[#9b87f5]/10 overflow-y-auto touch-pan-y scrollbar-hide h-[calc(100vh-400px)]"
    : "mt-2 space-y-1 pl-3 border-l-2 border-[#9b87f5]/10 overflow-y-auto touch-pan-y scrollbar-hide h-full";

  return (
    <div 
      ref={scrollRef}
      className={containerStyle}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
      onTouchMove={handleInteraction}
      onTouchEnd={handleInteraction}
      onScroll={() => handleScroll()}
    >
      {replies.map((reply) => (
        <div 
          key={reply.id} 
          className="bg-[#7E69AB]/20 rounded-md p-1"
          onClick={handleInteraction}
          onTouchStart={handleInteraction}
          onTouchMove={handleInteraction}
          onTouchEnd={handleInteraction}
        >
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-1">
              <span 
                className="font-semibold text-[#9b87f5] text-sm cursor-pointer hover:text-[#D6BCFA] transition-colors"
                onClick={(e) => handleUserSelect(e, reply.userName)}
              >
                {reply.userName}:
              </span>
              <p className="text-white/90 text-sm">{reply.text}</p>
            </div>
            <span className="text-xs text-gray-400">{formatTime(reply.timestamp)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};