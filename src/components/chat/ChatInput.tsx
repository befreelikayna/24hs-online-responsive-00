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
    <div className="sticky bottom-0 left-0 right-0 bg-background border-t border-[#9b87f5]/10 rounded-b-xl z-10">
      <div className="flex gap-2 items-end p-3">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="scrollbar-hide min-h-[40px] max-h-[40px] bg-[#9b87f5]/5 border-0 focus-visible:bg-[#9b87f5]/10 focus-visible:ring-2 focus-visible:ring-[#9b87f5]/40 focus-visible:ring-offset-0 resize-none flex-1 rounded-md text-sm py-2 px-3"
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
          className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 h-10 w-10 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#9b87f5]/20 p-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};