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

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="mt-2 space-y-1 pl-3 border-l-2 border-[#9b87f5]/10"
      onClick={handleClick}
      onScroll={(e) => e.stopPropagation()}
    >
      {replies.map((reply) => (
        <div 
          key={reply.id} 
          className="bg-[#7E69AB]/20 rounded-md p-1"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-1">
              <span 
                className="font-semibold text-[#9b87f5] text-sm cursor-pointer hover:text-[#D6BCFA] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onUserSelect?.(reply.userName);
                }}
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