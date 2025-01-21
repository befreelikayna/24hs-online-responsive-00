import { Bell, MessageSquare, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onLogout?: () => void;
  isLoggedIn?: boolean;
}

export const Header = ({ onLogout, isLoggedIn = false }: HeaderProps) => {
  const { toast } = useToast();

  const handleAuthRequired = () => {
    if (!isLoggedIn) {
      toast({
        title: "Acesso Restrito",
        description: "Você precisa estar logado para acessar esta função",
        className: "bg-[#1A1F2C] text-white border-[#9b87f5]/20 animate-fade-in",
      });
      return true;
    }
    return false;
  };

  return (
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
            onClick={() => {
              if (!handleAuthRequired()) {
                // Implementar funcionalidade de notificações
                console.log("Notifications clicked");
              }
            }}
          >
            <Bell className="h-5 w-5 stroke-[1.5]" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110 p-1.5"
            onClick={() => {
              if (!handleAuthRequired()) {
                // Implementar funcionalidade de mensagens
                console.log("Messages clicked");
              }
            }}
          >
            <MessageSquare className="h-5 w-5 stroke-[1.5]" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110 p-1.5"
              >
                <User className="h-5 w-5 stroke-[1.5]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-[#1A1F2C] text-white border-[#9b87f5]/20">
              <DropdownMenuItem 
                className="flex items-center gap-2 hover:bg-white/5 cursor-pointer"
                onClick={() => {
                  if (!handleAuthRequired()) {
                    // Implementar funcionalidade de ver perfil
                    console.log("View profile clicked");
                  }
                }}
              >
                <User className="h-4 w-4" />
                Ver Perfil
              </DropdownMenuItem>
              {isLoggedIn && (
                <DropdownMenuItem 
                  className="flex items-center gap-2 hover:bg-white/5 cursor-pointer"
                  onClick={onLogout}
                >
                  <LogOut className="h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};