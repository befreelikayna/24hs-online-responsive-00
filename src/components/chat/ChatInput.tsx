import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export const ChatInput = ({ value, onChange, onSend }: ChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    onSend();
    // Focus back on the textarea after sending
    textareaRef.current?.focus();
  };

  return (
    <div className="bg-background/95 backdrop-blur-sm border-t border-[#00b4d8]/10">
      <div className="flex gap-2 items-end p-3">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="scrollbar-hide min-h-[40px] max-h-[40px] bg-[#00b4d8]/5 border-0 focus-visible:bg-[#00b4d8]/10 focus-visible:ring-2 focus-visible:ring-[#00b4d8]/40 focus-visible:ring-offset-0 resize-none flex-1 rounded-md text-sm py-2 px-3"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <Button
          onClick={handleSend}
          size="icon"
          className="bg-[#00b4d8] hover:bg-[#00b4d8]/90 h-10 w-10 rounded-full hover:shadow-lg hover:shadow-[#00b4d8]/20 p-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};