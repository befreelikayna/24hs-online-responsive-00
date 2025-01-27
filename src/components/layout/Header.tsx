import { Bell, MessageSquare, User, LogOut, CirclePlay, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

export const Header = ({ isLoggedIn = false, onLogout }: HeaderProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Verificar se já está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstallable(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      toast({
        title: "Instalação",
        description: "Abra este site no Chrome para Android para instalar o app",
      });
      return;
    }

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        toast({
          title: "Sucesso!",
          description: "O app está sendo instalado. Procure pelo ícone na sua tela inicial.",
        });
        setIsInstallable(false);
      }
      setDeferredPrompt(null);
    } catch (err) {
      toast({
        title: "Erro na instalação",
        description: "Por favor, tente novamente usando o Chrome para Android",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="bg-gradient-to-r from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C] border-b border-[#9b87f5]/10 px-2 py-2 md:px-4 md:py-2.5">
      <div className="w-full px-4 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-2 md:gap-3">
          <div 
            className="relative group cursor-pointer"
            onClick={() => navigate('/admin')}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9b87f5] via-[#D6BCFA] to-[#9b87f5] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] p-1 md:p-1.5 rounded-lg group transition-all duration-300 hover:scale-105">
              <CirclePlay className="w-4 h-4 md:w-5 md:h-5 text-[#D6BCFA] transition-all duration-300 group-hover:text-white group-hover:rotate-[360deg]" />
            </div>
          </div>
          <span className="text-[#D6BCFA] font-bold text-base md:text-lg">24hs.Online</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          {isLoggedIn ? (
            <>
              {isInstallable && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 md:h-9 md:w-9 text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300 transform hover:scale-110 relative group"
                  onClick={handleInstallClick}
                >
                  <Download className="h-4 w-4 md:h-5 md:w-5 stroke-[1.5] transition-transform duration-300 hover:-translate-y-1" />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6BCFA] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#9b87f5]"></span>
                  </span>
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 md:h-9 md:w-9 text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300 transform hover:scale-110"
              >
                <Bell className="h-4 w-4 md:h-5 md:w-5 stroke-[1.5] transition-transform duration-300 hover:rotate-12" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 md:h-9 md:w-9 text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300 transform hover:scale-110"
              >
                <MessageSquare className="h-4 w-4 md:h-5 md:w-5 stroke-[1.5] transition-transform duration-300 hover:-translate-y-1" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 md:h-9 md:w-9 text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300 transform hover:scale-110 relative group"
                  >
                    <User className="h-4 w-4 md:h-5 md:w-5 stroke-[1.5] transition-transform duration-300 group-hover:rotate-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-[#2C2F3E] border-[#9b87f5]/20 text-[#D6BCFA] animate-scale-in">
                  <DropdownMenuLabel className="font-bold">Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#9b87f5]/10" />
                  <Link to="/">
                    <DropdownMenuItem className="hover:bg-[#9b87f5]/10 cursor-pointer transition-colors duration-200 group">
                      <CirclePlay className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                      <span>Continuar Assistindo</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/profile">
                    <DropdownMenuItem className="hover:bg-[#9b87f5]/10 cursor-pointer transition-colors duration-200 group">
                      <User className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                      <span>Perfil</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem 
                    onClick={onLogout} 
                    className="hover:bg-[#9b87f5]/10 cursor-pointer transition-colors duration-200 group text-red-400"
                  >
                    <LogOut className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-[#D6BCFA] hover:bg-[#9b87f5]/20 transition-all duration-300 hover:scale-105"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};