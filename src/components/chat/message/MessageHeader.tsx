import { cn } from "@/lib/utils";

interface MessageHeaderProps {
  userName: string;
  text: string;
  timestamp: Date;
  onUserSelect?: (userName: string) => void;
  onClick: () => void;
}

export const MessageHeader = ({
  userName,
  text,
  timestamp,
  onUserSelect,
  onClick
}: MessageHeaderProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div 
      className="flex items-center gap-2 cursor-pointer hover:bg-[#2C2F3E]/30 rounded-lg p-1 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 min-w-fit">
        <span 
          className="font-semibold text-[#9b87f5] cursor-pointer hover:text-[#D6BCFA] transition-colors leading-tight"
          onClick={(e) => {
            e.stopPropagation();
            onUserSelect?.(userName);
          }}
        >
          {userName}:
        </span>
      </div>
      <p className="text-white/90 text-sm flex-1 leading-tight">{text}</p>
      <span className="text-xs text-gray-400 whitespace-nowrap leading-tight">
        {formatTime(timestamp)}
      </span>
    </div>
  );
};