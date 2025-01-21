import { Bell, MessageSquare, User, Users, Video, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<'chat' | 'community' | 'lives' | 'music'>('chat');

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C] overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] backdrop-blur-lg border-b border-white/10 w-full z-50 h-14 flex-shrink-0">
        <div className="container mx-auto flex justify-between items-center h-full px-4">
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D6BCFA] to-white animate-pulse hover:animate-none transition-all duration-300">
            24hs.Online
          </h1>
          <div className="flex gap-2 md:gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110 p-1.5"
            >
              <Bell className="h-5 w-5 stroke-[1.5]" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110 p-1.5"
            >
              <MessageSquare className="h-5 w-5 stroke-[1.5]" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110 p-1.5"
            >
              <User className="h-5 w-5 stroke-[1.5]" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full overflow-hidden">
        <div className="h-full flex flex-col lg:flex-row gap-4 p-4">
          {/* Left Column */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4 lg:overflow-y-auto">
            {/* Video Section */}
            <section className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(155,135,245,0.15)] bg-gradient-to-r from-[#2C2F3E] to-[#1A1F2C] p-1">
              <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://iblups.com/embed/abretv" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            {/* Mini Cards Section */}
            <section className="grid grid-cols-4 gap-2 md:gap-4">
              <button
                onClick={() => setActiveSection('chat')}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'chat'
                    ? 'bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] shadow-lg shadow-[#9b87f5]/30'
                    : 'bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] hover:from-[#9b87f5] hover:to-[#7E69AB]'
                }`}
              >
                <div className="p-2 md:p-4 flex items-center justify-center gap-2">
                  <MessageSquare className={`h-5 w-5 ${activeSection === 'chat' ? 'text-white' : 'text-[#D6BCFA] group-hover:text-white'}`} />
                  <span className={`hidden md:inline text-sm md:text-base font-medium ${activeSection === 'chat' ? 'text-white' : 'text-[#D6BCFA] group-hover:text-white'}`}>
                    CHAT
                  </span>
                </div>
              </button>

              <button
                onClick={() => setActiveSection('community')}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'community'
                    ? 'bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] shadow-lg shadow-[#9b87f5]/30'
                    : 'bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] hover:from-[#9b87f5] hover:to-[#7E69AB]'
                }`}
              >
                <div className="p-2 md:p-4 flex items-center justify-center gap-2">
                  <Users className={`h-5 w-5 ${activeSection === 'community' ? 'text-white' : 'text-[#D6BCFA] group-hover:text-white'}`} />
                  <span className={`hidden md:inline text-sm md:text-base font-medium ${activeSection === 'community' ? 'text-white' : 'text-[#D6BCFA] group-hover:text-white'}`}>
                    COMUNIDADE
                  </span>
                </div>
              </button>

              <button
                onClick={() => setActiveSection('lives')}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'lives'
                    ? 'bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] shadow-lg shadow-[#9b87f5]/30'
                    : 'bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] hover:from-[#9b87f5] hover:to-[#7E69AB]'
                }`}
              >
                <div className="p-2 md:p-4 flex items-center justify-center gap-2">
                  <Video className={`h-5 w-5 ${activeSection === 'lives' ? 'text-white' : 'text-[#D6BCFA] group-hover:text-white'}`} />
                  <span className={`hidden md:inline text-sm md:text-base font-medium ${activeSection === 'lives' ? 'text-white' : 'text-[#D6BCFA] group-hover:text-white'}`}>
                    LIVES
                  </span>
                </div>
              </button>

              <button
                onClick={() => setActiveSection('music')}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'music'
                    ? 'bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] shadow-lg shadow-[#9b87f5]/30'
                    : 'bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] hover:from-[#9b87f5] hover:to-[#7E69AB]'
                }`}
              >
                <div className="p-2 md:p-4 flex items-center justify-center gap-2">
                  <Music className={`h-5 w-5 ${activeSection === 'music' ? 'text-white' : 'text-[#D6BCFA] group-hover:text-white'}`} />
                  <span className={`hidden md:inline text-sm md:text-base font-medium ${activeSection === 'music' ? 'text-white' : 'text-[#D6BCFA] group-hover:text-white'}`}>
                    MÚSICA
                  </span>
                </div>
              </button>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 h-full">
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
              <div className="p-6 h-[calc(100%-4rem)] overflow-y-auto">
                <div className="bg-[#1A1F2C]/80 rounded-xl p-6 backdrop-blur-sm border border-[#9b87f5]/10 h-full">
                  {activeSection === 'chat' && (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
                      <MessageSquare className="w-12 h-12 text-[#9b87f5]/30" />
                      <p className="text-[#D6BCFA]/70 text-center">
                        Área do chat em desenvolvimento...<br/>
                        Em breve você poderá interagir com outros usuários!
                      </p>
                    </div>
                  )}
                  {activeSection === 'community' && (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
                      <Users className="w-12 h-12 text-[#9b87f5]/30" />
                      <p className="text-[#D6BCFA]/70 text-center">
                        Área da comunidade em desenvolvimento...<br/>
                        Em breve você poderá conectar com a comunidade!
                      </p>
                    </div>
                  )}
                  {activeSection === 'lives' && (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
                      <Video className="w-12 h-12 text-[#9b87f5]/30" />
                      <p className="text-[#D6BCFA]/70 text-center">
                        Área das lives em desenvolvimento...<br/>
                        Em breve você poderá acessar mais conteúdo ao vivo!
                      </p>
                    </div>
                  )}
                  {activeSection === 'music' && (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
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
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#1A1F2C] to-[#2C2F3E] border-t border-[#9b87f5]/10 flex-shrink-0">
        <div className="container mx-auto py-3 px-4 text-center">
          <p className="text-[#D6BCFA]/70 text-sm">&copy; 2024 24hs.Online. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
