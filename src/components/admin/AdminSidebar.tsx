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
      <div className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group block"
            title={item.tooltip}
          >
            <div className="flex items-center justify-center p-2 rounded-lg hover:bg-[#9b87f5]/20 transition-all duration-300">
              <div className="p-2 rounded-lg group-hover:bg-[#9b87f5]/30 transition-all duration-300">
                <item.icon className="w-5 h-5 text-[#D6BCFA] group-hover:scale-110 transition-all duration-300" />
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
            className="fixed right-4 bottom-20 z-50 h-12 w-12 rounded-full bg-[#9b87f5]/20 backdrop-blur-md border border-[#D6BCFA]/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Menu className="h-5 w-5 text-[#D6BCFA]" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[65px] bg-[#1a1f2c]/80 backdrop-blur-md border-r border-[#D6BCFA]/10 p-0 shadow-2xl"
        >
          <div className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded-lg bg-[#9b87f5]/20">
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
      className={`fixed left-0 top-[60px] bottom-[48px] bg-gradient-to-b from-[#2C2F3E] to-[#1A1F2C] border-r border-[#9b87f5]/10 transition-all duration-300 overflow-hidden ${
        isCollapsed ? 'w-[60px]' : 'w-[280px]'
      }`}
    >
      <MenuContent />
    </aside>
  );
};