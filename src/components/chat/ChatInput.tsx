import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export const ChatInput = ({ value, onChange, onSend }: ChatInputProps) => {
  return (
    <div className="p-3 border-t border-[#9b87f5]/10 bg-[#1A1F2C]/50">
      <div className="flex gap-2 items-end max-w-[98%] mx-auto">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="min-h-[40px] max-h-[120px] bg-[#1A1F2C]/80 border-[#9b87f5]/20 focus:border-[#9b87f5]/50 resize-none flex-1 rounded-lg text-sm py-2"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
        />
        <Button
          onClick={onSend}
          className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 h-[40px] px-6 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#9b87f5]/20"
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};