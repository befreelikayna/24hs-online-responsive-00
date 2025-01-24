import { Home, Users, Settings, BarChart2, MessageSquare, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface AdminSidebarProps {
  isCollapsed: boolean;
}

export const AdminSidebar = ({ isCollapsed }: AdminSidebarProps) => {
  const isMobile = useIsMobile();
  const menuItems = [
    { icon: Home, path: '/admin', tooltip: 'Dashboard' },
    { icon: Users, path: '/admin/users', tooltip: 'Usuários' },
    { icon: MessageSquare, path: '/admin/messages', tooltip: 'Mensagens' },
    { icon: BarChart2, path: '/admin/reports', tooltip: 'Relatórios' },
    { icon: Settings, path: '/admin/settings', tooltip: 'Configurações' },
  ];

  const MenuContent = () => (
    <nav className="p-2">
      <div className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group block"
            title={item.tooltip}
          >
            <div className="flex items-center justify-center p-1.5 rounded-lg hover:bg-[#9b87f5]/20 transition-all duration-300 group-hover:translate-y-[-2px]">
              <div className="p-2 rounded-lg bg-[#9b87f5]/10 group-hover:bg-[#9b87f5]/30 transition-all duration-300 group-hover:rotate-[8deg]">
                <item.icon className="w-5 h-5 text-[#D6BCFA] transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed right-4 bottom-16 z-50 h-10 w-10 rounded-full bg-[#9b87f5]/20 backdrop-blur-md border border-[#D6BCFA]/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-slow"
          >
            <Menu className="h-5 w-5 text-[#D6BCFA]" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[65px] h-[80%] bg-[#1a1f2c]/80 backdrop-blur-md border-r border-[#D6BCFA]/10 p-0 shadow-2xl rounded-br-2xl animate-slide-up"
        >
          <div className="pt-4">
            <div className="flex justify-center mb-3">
              <div className="p-2 rounded-lg bg-[#9b87f5]/20 animate-pulse">
                <Settings className="w-5 h-5 text-[#D6BCFA]" />
              </div>
            </div>
            <MenuContent />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside
      className={`fixed left-0 top-[60px] bottom-[48px] bg-gradient-to-b from-[#2C2F3E]/90 to-[#1A1F2C]/90 backdrop-blur-sm border-r border-[#9b87f5]/10 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-[65px]' : 'w-[240px]'
      }`}
    >
      <div className="p-2 flex justify-center">
        <div className="p-2 rounded-lg bg-[#9b87f5]/20 transition-all duration-300 hover:bg-[#9b87f5]/30">
          <Settings className="w-5 h-5 text-[#D6BCFA] transition-transform duration-300 hover:rotate-90" />
        </div>
      </div>
      <MenuContent />
    </aside>
  );
};