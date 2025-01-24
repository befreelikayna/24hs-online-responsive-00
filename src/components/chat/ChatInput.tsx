import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState, useEffect } from "react";
import { Send } from "lucide-react";

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
    // Focus back on the textarea after sending
    textareaRef.current?.focus();
  };

  return (
    <div className="bg-background/95 backdrop-blur-sm border-t border-[#9b87f5]/10">
      <div className="flex gap-2 items-end p-3">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={isDisabled ? "Aguarde para enviar novas mensagens..." : "Digite sua mensagem..."}
          className="scrollbar-hide min-h-[40px] max-h-[40px] bg-[#9b87f5]/5 border-0 focus-visible:bg-[#9b87f5]/10 focus-visible:ring-2 focus-visible:ring-[#9b87f5]/40 focus-visible:ring-offset-0 resize-none flex-1 rounded-md text-sm py-2 px-3"
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
              <span className="text-xl font-bold animate-pulse text-[#9b87f5]">
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