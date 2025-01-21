import { Bell, MessageSquare, User, LogOut } from "lucide-react";
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
    <header className="bg-[#1A1F2C] border-b border-[#9b87f5]/10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/placeholder.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-bold">LiveApp</span>
        </div>

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
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout}>
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
              className="text-white hover:bg-white/10"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};