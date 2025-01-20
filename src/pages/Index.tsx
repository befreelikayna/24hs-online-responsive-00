import { Bell, MessageSquare, User, Users, Video, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<'chat' | 'community' | 'lives' | 'music'>('chat');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#243949] to-[#517fa4] text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">24hs.Online</h1>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 transition-colors">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 transition-colors">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 transition-colors">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Video Section */}
            <section className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative w-full pt-[56.25%] bg-gray-100">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://iblups.com/embed/abretv" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            {/* Mini Cards Section */}
            <section className="rounded-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* Chat Card */}
                <button
                  onClick={() => setActiveSection('chat')}
                  className={`flex items-center p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeSection === 'chat'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span className="font-medium text-sm">CHAT</span>
                  </div>
                </button>

                {/* Community Card */}
                <button
                  onClick={() => setActiveSection('community')}
                  className={`flex items-center p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeSection === 'community'
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="font-medium text-sm">COMUNIDADE</span>
                  </div>
                </button>

                {/* Lives Card */}
                <button
                  onClick={() => setActiveSection('lives')}
                  className={`flex items-center p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeSection === 'lives'
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    <span className="font-medium text-sm">LIVES</span>
                  </div>
                </button>

                {/* Music Card */}
                <button
                  onClick={() => setActiveSection('music')}
                  className={`flex items-center p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeSection === 'music'
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    <span className="font-medium text-sm">MÚSICA</span>
                  </div>
                </button>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3">
            <section className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                {activeSection === 'chat' && 'Chat'}
                {activeSection === 'community' && 'Comunidade'}
                {activeSection === 'lives' && 'Lives'}
                {activeSection === 'music' && 'Música'}
              </h2>
              <div className="h-[calc(100%-2rem)] bg-gray-50 rounded-lg p-4">
                {activeSection === 'chat' && (
                  <p>Área do chat</p>
                )}
                {activeSection === 'community' && (
                  <p>Área da comunidade</p>
                )}
                {activeSection === 'lives' && (
                  <p>Área das lives</p>
                )}
                {activeSection === 'music' && (
                  <p>Área da música</p>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">&copy; 2024 24hs.Online. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;