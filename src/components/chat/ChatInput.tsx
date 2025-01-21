import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";

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
    <div className="sticky bottom-0 left-0 right-0 p-0.5">
      <div className="flex gap-2 items-end max-w-full mx-auto">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="min-h-[36px] max-h-[36px] bg-[#9b87f5]/10 border-0 focus:border-0 focus:ring-0 resize-none flex-1 rounded-lg text-sm py-1.5 px-3"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <Button
          onClick={handleSend}
          className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 h-[36px] px-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#9b87f5]/20 whitespace-nowrap"
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};