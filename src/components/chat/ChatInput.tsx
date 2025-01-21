import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export const ChatInput = ({ value, onChange, onSend }: ChatInputProps) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 p-1.5 border-t border-[#9b87f5]/10 bg-[#1A1F2C]/95 backdrop-blur-sm">
      <div className="flex gap-2 items-end max-w-full mx-auto">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="min-h-[36px] max-h-[36px] bg-[#9b87f5]/5 border-[#9b87f5]/20 focus:border-[#9b87f5]/50 resize-none flex-1 rounded-lg text-sm py-1.5 px-3"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
        />
        <Button
          onClick={onSend}
          className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 h-[36px] px-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#9b87f5]/20 whitespace-nowrap"
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};