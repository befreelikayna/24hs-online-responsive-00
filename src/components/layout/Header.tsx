import { Bell, MessageSquare, User, LogOut, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

export const Header = ({ isLoggedIn = false, onLogout }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C] border-b border-[#9b87f5]/10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9b87f5] via-[#D6BCFA] to-[#9b87f5] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] p-1.5 rounded-lg group transition-all duration-300 hover:scale-105">
              <CirclePlay className="w-5 h-5 text-[#D6BCFA] transition-all duration-300 group-hover:text-white group-hover:rotate-[360deg]" />
            </div>
          </div>
          <span className="text-[#D6BCFA] font-bold text-lg">24hs.Online</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300 transform hover:scale-110"
              >
                <Bell className="h-5 w-5 stroke-[1.5] transition-transform duration-300 hover:rotate-12" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300 transform hover:scale-110"
              >
                <MessageSquare className="h-5 w-5 stroke-[1.5] transition-transform duration-300 hover:-translate-y-1" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300 transform hover:scale-110 relative group"
                  >
                    <User className="h-5 w-5 stroke-[1.5] transition-transform duration-300 group-hover:rotate-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-[#2C2F3E] border-[#9b87f5]/20 text-[#D6BCFA] animate-scale-in">
                  <DropdownMenuLabel className="font-bold">Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#9b87f5]/10" />
                  <Link to="/watching">
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
              className="text-[#D6BCFA] hover:bg-[#9b87f5]/20 transition-all duration-300 hover:scale-105"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};