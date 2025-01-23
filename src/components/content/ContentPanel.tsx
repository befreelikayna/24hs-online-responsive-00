import { MessageSquare, Users, Video, Music, Filter, Maximize2, Minimize2, Minus } from "lucide-react";
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
  const [isMinimized, setIsMinimized] = useState(false);
  const isMobile = useIsMobile();

  const handleChatToggle = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isLoggedIn) {
    return <AuthPanel onDemoLogin={onDemoLogin} />;
  }

  const mobileStyles = isMobile ? {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    top: isMinimized ? 'auto' : 'calc(56.25vw + 4rem + 56px)',
    height: isMinimized ? '3rem' : 'calc(100vh - 56.25vw - 4rem - 56px)',
    margin: 0,
    borderRadius: '1rem 1rem 0 0',
    zIndex: 50,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isMinimized ? 'translateY(calc(100% - 3rem))' : 'translateY(0)',
    willChange: 'transform, height, top',
  } as const : {};

  return (
    <section 
      className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10 backdrop-blur-lg h-full lg:sticky lg:top-4 md:mb-0 transition-all duration-300 ease-in-out"
      style={mobileStyles}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#9b87f5]/10">
        <h2 className="text-xl font-bold text-white">
          {activeSection === 'chat' && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {isMinimized ? (
                  <Minus
                    className="w-5 h-5 text-[#9b87f5] hover:text-[#D6BCFA] transition-colors cursor-pointer"
                    onClick={handleChatToggle}
                  />
                ) : (
                  <MessageSquare 
                    className="w-5 h-5 text-[#9b87f5] hover:text-[#D6BCFA] transition-colors cursor-pointer"
                    onClick={handleChatToggle}
                  />
                )}
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
      </div>
      {(!isMinimized || !isMobile) && (
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
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
      )}
    </section>
  );
};