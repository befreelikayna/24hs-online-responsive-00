interface MessageReplyInputProps {
  replyText: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export const MessageReplyInput = ({
  replyText,
  onChange,
  onSubmit
}: MessageReplyInputProps) => {
  return (
    <div className="mt-2 flex gap-2">
      <input
        type="text"
        value={replyText}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Digite sua resposta..."
        className="flex-1 bg-[#9b87f5]/5 border border-[#9b87f5]/20 rounded-lg text-sm h-9 px-3 text-white focus:outline-none focus:border-[#9b87f5]/40 transition-colors"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
      />
      <button
        onClick={onSubmit}
        className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 px-3 h-9 rounded-lg text-sm text-white whitespace-nowrap"
      >
        Responder
      </button>
    </div>
  );
};