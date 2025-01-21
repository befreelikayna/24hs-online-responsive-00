import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export const ChatInput = ({ value, onChange, onSend }: ChatInputProps) => {
  return (
    <div className="p-4 border-t border-[#9b87f5]/10">
      <div className="flex gap-2 items-start">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="min-h-[44px] bg-[#1A1F2C]/50 border-[#9b87f5]/20 focus:border-[#9b87f5]/50 resize-none flex-1"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
        />
        <Button
          onClick={onSend}
          className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 h-[44px]"
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};