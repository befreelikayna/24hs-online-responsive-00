import { MessageSquare, Users, Video, Music } from "lucide-react";
import { AuthPanel } from "@/components/auth/AuthPanel";

interface ContentPanelProps {
  activeSection: 'chat' | 'community' | 'lives' | 'music';
  isLoggedIn?: boolean;
}

export const ContentPanel = ({ activeSection, isLoggedIn = false }: ContentPanelProps) => {
  if (!isLoggedIn) {
    return <AuthPanel />;
  }

  return (
    <section className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10 backdrop-blur-lg h-full lg:sticky lg:top-4">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#9b87f5]/10">
        <h2 className="text-xl font-bold text-white">
          {activeSection === 'chat' && (
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#9b87f5]" />
              <span>Chat ao Vivo</span>
            </div>
          )}
          {activeSection === 'community' && (
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#9b87f5]" />
              <span>Comunidade</span>
            </div>
          )}
          {activeSection === 'lives' && (
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-[#9b87f5]" />
              <span>Lives Disponíveis</span>
            </div>
          )}
          {activeSection === 'music' && (
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-[#9b87f5]" />
              <span>Playlist</span>
            </div>
          )}
        </h2>
      </div>
      <div className="h-[calc(100%-4rem)] overflow-y-auto">
        <div className="h-full flex items-center justify-center">
          {activeSection === 'chat' && (
            <div className="flex flex-col items-center justify-center space-y-4">
              <MessageSquare className="w-12 h-12 text-[#9b87f5]/30" />
              <p className="text-[#D6BCFA]/70 text-center">
                Área do chat em desenvolvimento...<br/>
                Em breve você poderá interagir com outros usuários!
              </p>
            </div>
          )}
          {activeSection === 'community' && (
            <div className="flex flex-col items-center justify-center space-y-4">
              <Users className="w-12 h-12 text-[#9b87f5]/30" />
              <p className="text-[#D6BCFA]/70 text-center">
                Área da comunidade em desenvolvimento...<br/>
                Em breve você poderá conectar com a comunidade!
              </p>
            </div>
          )}
          {activeSection === 'lives' && (
            <div className="flex flex-col items-center justify-center space-y-4">
              <Video className="w-12 h-12 text-[#9b87f5]/30" />
              <p className="text-[#D6BCFA]/70 text-center">
                Área das lives em desenvolvimento...<br/>
                Em breve você poderá acessar mais conteúdo ao vivo!
              </p>
            </div>
          )}
          {activeSection === 'music' && (
            <div className="flex flex-col items-center justify-center space-y-4">
              <Music className="w-12 h-12 text-[#9b87f5]/30" />
              <p className="text-[#D6BCFA]/70 text-center">
                Área da música em desenvolvimento...<br/>
                Em breve você poderá curtir suas músicas favoritas!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};