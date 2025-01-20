import { Bell, MessageSquare, User, Users, Video, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<'chat' | 'community' | 'lives' | 'music'>('chat');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#243949] to-[#517fa4] backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            24hs.Online
          </h1>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="w-full lg:w-2/3 space-y-6">
            {/* Video Section */}
            <section className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-gray-800 to-gray-900 p-1">
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
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Chat Card */}
              <button
                onClick={() => setActiveSection('chat')}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'chat'
                    ? 'bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg shadow-blue-500/50'
                    : 'bg-gradient-to-br from-gray-800 to-gray-700 hover:from-blue-600 hover:to-blue-400'
                }`}
              >
                <div className="p-4 flex items-center gap-3">
                  <MessageSquare className={`h-5 w-5 ${activeSection === 'chat' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`} />
                  <span className={`font-medium ${activeSection === 'chat' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    CHAT
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              {/* Community Card */}
              <button
                onClick={() => setActiveSection('community')}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'community'
                    ? 'bg-gradient-to-br from-purple-600 to-purple-400 shadow-lg shadow-purple-500/50'
                    : 'bg-gradient-to-br from-gray-800 to-gray-700 hover:from-purple-600 hover:to-purple-400'
                }`}
              >
                <div className="p-4 flex items-center gap-3">
                  <Users className={`h-5 w-5 ${activeSection === 'community' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`} />
                  <span className={`font-medium ${activeSection === 'community' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    COMUNIDADE
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              {/* Lives Card */}
              <button
                onClick={() => setActiveSection('lives')}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'lives'
                    ? 'bg-gradient-to-br from-red-600 to-red-400 shadow-lg shadow-red-500/50'
                    : 'bg-gradient-to-br from-gray-800 to-gray-700 hover:from-red-600 hover:to-red-400'
                }`}
              >
                <div className="p-4 flex items-center gap-3">
                  <Video className={`h-5 w-5 ${activeSection === 'lives' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`} />
                  <span className={`font-medium ${activeSection === 'lives' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    LIVES
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              {/* Music Card */}
              <button
                onClick={() => setActiveSection('music')}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'music'
                    ? 'bg-gradient-to-br from-green-600 to-green-400 shadow-lg shadow-green-500/50'
                    : 'bg-gradient-to-br from-gray-800 to-gray-700 hover:from-green-600 hover:to-green-400'
                }`}
              >
                <div className="p-4 flex items-center gap-3">
                  <Music className={`h-5 w-5 ${activeSection === 'music' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`} />
                  <span className={`font-medium ${activeSection === 'music' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    MÚSICA
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3">
            <section className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-white/10 backdrop-blur-lg p-6">
              <h2 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {activeSection === 'chat' && 'Chat ao Vivo'}
                {activeSection === 'community' && 'Comunidade'}
                {activeSection === 'lives' && 'Lives Disponíveis'}
                {activeSection === 'music' && 'Playlist'}
              </h2>
              <div className="h-[calc(100vh-20rem)] bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm border border-white/5">
                {activeSection === 'chat' && (
                  <p className="text-gray-400">Área do chat em desenvolvimento...</p>
                )}
                {activeSection === 'community' && (
                  <p className="text-gray-400">Área da comunidade em desenvolvimento...</p>
                )}
                {activeSection === 'lives' && (
                  <p className="text-gray-400">Área das lives em desenvolvimento...</p>
                )}
                {activeSection === 'music' && (
                  <p className="text-gray-400">Área da música em desenvolvimento...</p>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-white/10 mt-8">
        <div className="container mx-auto py-6 px-4 text-center">
          <p className="text-gray-400">&copy; 2024 24hs.Online. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;