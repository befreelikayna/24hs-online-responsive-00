import { Bell, MessageSquare, User, LogOut, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <div className="bg-gradient-to-br from-[#9b87f5] to-[#1EAEDB] p-2 rounded-lg">
            <img src="/placeholder.svg" alt="Logo" className="w-6 h-6" />
          </div>
          <span className="text-white font-bold text-lg">LiveApp</span>
        </div>

        {/* Middle Section */}
        <div className="hidden md:flex items-center max-w-md w-full mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Pesquisar conteúdo..."
              className="w-full bg-[#2C2F3E]/50 border border-[#9b87f5]/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#9b87f5]/50 transition-all"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
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
                <DropdownMenuContent className="w-56 bg-[#2C2F3E] border-[#9b87f5]/20 text-white">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#9b87f5]/10" />
                  <DropdownMenuItem className="hover:bg-[#9b87f5]/10 cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout} className="hover:bg-[#9b87f5]/10 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-[#9b87f5]/20 transition-colors"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};