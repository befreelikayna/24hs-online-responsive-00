import { Bell, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
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

            {/* Chat Card Section (replacing buttons) */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-blue-500 rounded-full">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">CHAT</h3>
                  <p className="text-sm text-gray-600">Converse com outros usuários</p>
                </div>
                <Button 
                  variant="ghost" 
                  className="hover:bg-blue-200 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3">
            <section className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Coluna Direita</h2>
              <div className="h-[calc(100%-2rem)] bg-gray-50 rounded-lg p-4">
                {/* Conteúdo da coluna direita aqui */}
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