import { X, User, Calendar, MessageSquare, Heart } from "lucide-react";

interface UserInfoProps {
  userName: string;
  onClose: () => void;
}

export const UserInfo = ({ userName, onClose }: UserInfoProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-[60px] overflow-y-auto p-4 bg-[#1A1F2C]/95 rounded-lg scrollbar-hide">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-[#9b87f5]">Informações do Usuário</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-[#9b87f5] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#D6BCFA] flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white">{userName}</h4>
            <p className="text-sm text-gray-400">Membro desde 2024</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#2C2F3E] p-3 rounded-lg text-center">
            <Calendar className="w-5 h-5 text-[#9b87f5] mx-auto mb-1" />
            <p className="text-xs text-gray-400">Entrou em</p>
            <p className="text-sm text-white font-medium">Janeiro 2024</p>
          </div>
          <div className="bg-[#2C2F3E] p-3 rounded-lg text-center">
            <MessageSquare className="w-5 h-5 text-[#9b87f5] mx-auto mb-1" />
            <p className="text-xs text-gray-400">Mensagens</p>
            <p className="text-sm text-white font-medium">127</p>
          </div>
          <div className="bg-[#2C2F3E] p-3 rounded-lg text-center">
            <Heart className="w-5 h-5 text-[#9b87f5] mx-auto mb-1" />
            <p className="text-xs text-gray-400">Reações</p>
            <p className="text-sm text-white font-medium">45</p>
          </div>
        </div>

        <div className="bg-[#2C2F3E] p-3 rounded-lg">
          <h5 className="text-sm text-[#9b87f5] font-medium mb-1">Sobre</h5>
          <p className="text-xs text-gray-400">
            Membro ativo da comunidade, sempre participando das discussões e compartilhando conhecimento.
          </p>
        </div>
      </div>
    </div>
  );
};