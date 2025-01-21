import { Bell, MessageSquare, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface HeaderProps {
  onLogout?: () => void;
}

export const Header = ({ onLogout }: HeaderProps) => {
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
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110 p-1.5"
              >
                <User className="h-5 w-5 stroke-[1.5]" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#1A1F2C] text-white border-[#9b87f5]/20">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-[#D6BCFA]">Perfil</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-white/5 text-white"
                  onClick={() => {
                    // Implement view profile functionality
                    console.log("View profile clicked");
                  }}
                >
                  <User className="mr-2 h-5 w-5" />
                  Ver Perfil
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-white/5 text-white"
                  onClick={onLogout}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Sair
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};