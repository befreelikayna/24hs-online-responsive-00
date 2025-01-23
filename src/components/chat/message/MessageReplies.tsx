import React from 'react';

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

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleUserSelect = (e: React.MouseEvent, userName: string) => {
    e.preventDefault();
    e.stopPropagation();
    onUserSelect?.(userName);
  };

  return (
    <div 
      className="mt-2 space-y-1 pl-3 border-l-2 border-[#9b87f5]/10 overflow-y-auto max-h-[200px] touch-pan-y scrollbar-hide"
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
      onTouchMove={handleInteraction}
      onTouchEnd={handleInteraction}
      onScroll={handleScroll}
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