import { MessageSquare, Users, Video, Music, Filter, Scroll, Maximize2, Minimize2 } from "lucide-react";
import { AuthPanel } from "@/components/auth/AuthPanel";
import { LiveChat } from "@/components/chat/LiveChat";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ContentPanelProps {
  activeSection: 'chat' | 'community' | 'lives' | 'music';
  isLoggedIn?: boolean;
  onDemoLogin?: () => void;
}

export const ContentPanel = ({ activeSection, isLoggedIn = false, onDemoLogin }: ContentPanelProps) => {
  const [filterUserMessages, setFilterUserMessages] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToBottom = () => {
    const chatContainer = document.querySelector('.scrollbar-hide');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!isLoggedIn) {
    return <AuthPanel onDemoLogin={onDemoLogin} />;
  }

  const mobileStyles = isMobile ? {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    top: 'auto',
    // Ajustando a altura para considerar o vídeo (56.25vw) + altura dos botões (4rem) + padding
    height: 'calc(100vh - 56.25vw - 4rem - 2rem)',
    margin: 0,
    borderRadius: '1rem 1rem 0 0',
    zIndex: 50,
  } as const : {};

  return (
    <section 
      className={`bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10 backdrop-blur-lg h-full lg:sticky lg:top-4 md:mb-0 transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-50 m-0 rounded-none' : ''}`}
      style={!isFullscreen ? mobileStyles : {}}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#9b87f5]/10">
        <h2 className="text-xl font-bold text-white">
          {activeSection === 'chat' && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#9b87f5] hover:text-[#D6BCFA] transition-colors" />
              </div>
              <Filter 
                className={`w-5 h-5 cursor-pointer transition-colors hover:text-[#D6BCFA] ${filterUserMessages ? 'text-[#9b87f5]' : 'text-[#9b87f5]/60'}`}
                onClick={() => setFilterUserMessages(!filterUserMessages)}
              />
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
        {activeSection === 'chat' && (
          <div className="flex items-center gap-4">
            <div className="relative">
              <Scroll
                className="w-5 h-5 text-[#9b87f5] cursor-pointer hover:text-[#D6BCFA] transition-colors"
                onClick={scrollToBottom}
              />
              {unreadCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D946EF] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </div>
            {isFullscreen ? (
              <Minimize2
                className="w-5 h-5 text-[#9b87f5] cursor-pointer hover:text-[#D6BCFA] transition-colors"
                onClick={toggleFullscreen}
              />
            ) : (
              <Maximize2
                className="w-5 h-5 text-[#9b87f5] cursor-pointer hover:text-[#D6BCFA] transition-colors"
                onClick={toggleFullscreen}
              />
            )}
          </div>
        )}
      </div>
      <div className={`h-[calc(100%-4rem)] overflow-y-auto ${isFullscreen ? 'h-[calc(100vh-4rem)]' : ''}`}>
        {activeSection === 'chat' ? (
          <LiveChat 
            filterUserMessages={filterUserMessages} 
            onUnreadCountChange={setUnreadCount}
          />
        ) : (
          <div className="h-full flex items-center justify-center">
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
        )}
      </div>
    </section>
  );
};