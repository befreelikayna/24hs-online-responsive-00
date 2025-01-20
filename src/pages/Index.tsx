import { Bell, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#243949] to-[#517fa4] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">24hs.Online</h1>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
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
            <section className="bg-white rounded-lg shadow-md p-4">
              <div className="relative w-full pt-[56.25%]">
                <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Área do Vídeo</span>
                </div>
              </div>
            </section>

            {/* Buttons Section */}
            <section className="bg-white rounded-lg shadow-md p-4">
              <div className="grid grid-cols-3 gap-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Botão 1</Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Botão 2</Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Botão 3</Button>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3">
            <section className="bg-white rounded-lg shadow-md p-4 h-full">
              <h2 className="text-xl font-semibold mb-4">Coluna Direita</h2>
              <div className="h-[calc(100%-2rem)]">
                {/* Conteúdo da coluna direita aqui */}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 24hs.Online. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;