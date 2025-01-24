import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState, useEffect } from "react";
import { Send } from "lucide-react";
import { isAndroid } from "react-device-detect";
import { useIsMobile } from "@/hooks/use-mobile";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isReply?: boolean;
}

export const ChatInput = ({ value, onChange, onSend, isReply = false }: ChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [countdown, setCountdown] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const startCountdown = () => {
    const duration = isReply ? 10 : 30;
    setCountdown(duration);
    setIsDisabled(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setIsDisabled(false);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown]);

  const handleSend = () => {
    if (isDisabled) return;
    
    onSend();
    startCountdown();
    textareaRef.current?.focus();
  };

  const getInputStyles = () => {
    const baseStyles = "scrollbar-hide min-h-[40px] max-h-[40px] bg-[#9b87f5]/5 border-0 focus-visible:bg-[#9b87f5]/10 focus-visible:ring-2 focus-visible:ring-[#9b87f5]/40 focus-visible:ring-offset-0 resize-none flex-1 rounded-md text-sm py-2 px-3 h-[40px]";
    
    if (isMobile && isAndroid) {
      return `${baseStyles} android-input-adjust`;
    }
    
    return baseStyles;
  };

  return (
    <div className="p-3 h-[72px] flex-shrink-0">
      <div className="flex gap-2 items-end h-full">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={isDisabled ? "Aguarde para enviar novas mensagens..." : "Digite sua mensagem..."}
          className={getInputStyles()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          disabled={isDisabled}
        />
        <Button
          onClick={handleSend}
          size="icon"
          className={`relative h-10 w-10 rounded-full p-0 transition-all duration-300 ${
            countdown > 0
              ? 'bg-[#9b87f5]/20 hover:bg-[#9b87f5]/30 before:absolute before:inset-0 before:rounded-full before:border before:border-[#9b87f5] before:animate-pulse before:shadow-[0_0_15px_rgba(155,135,245,0.5)] before:shadow-[#9b87f5]/50'
              : 'bg-[#9b87f5] hover:bg-[#9b87f5]/90 hover:shadow-lg hover:shadow-[#9b87f5]/20'
          }`}
          disabled={isDisabled}
        >
          {countdown > 0 ? (
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-xl font-bold tracking-wider animate-pulse text-[#9b87f5] font-mono">
                {countdown}
              </span>
            </div>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};