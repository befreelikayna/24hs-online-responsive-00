import { Home, Users, Settings, BarChart2, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AdminSidebarProps {
  isCollapsed: boolean;
}

export const AdminSidebar = ({ isCollapsed }: AdminSidebarProps) => {
  const isMobile = useIsMobile();
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Usuários', path: '/admin/users' },
    { icon: MessageSquare, label: 'Mensagens', path: '/admin/messages' },
    { icon: BarChart2, label: 'Relatórios', path: '/admin/reports' },
    { icon: Settings, label: 'Configurações', path: '/admin/settings' },
  ];

  const MenuContent = () => (
    <nav className="p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-colors group"
            >
              <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed && !isMobile ? 'opacity-0' : 'opacity-100'}`}>
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-3 z-50 h-8 w-8 text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[240px] bg-gradient-to-b from-[#2C2F3E] to-[#1A1F2C] border-r border-[#9b87f5]/10 p-0"
        >
          <div className="pt-12">
            <MenuContent />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside
      className={`fixed left-0 top-[60px] bottom-[48px] bg-gradient-to-b from-[#2C2F3E] to-[#1A1F2C] border-r border-[#9b87f5]/10 transition-all duration-300 overflow-hidden ${
        isCollapsed ? 'w-[60px]' : 'w-[240px]'
      }`}
    >
      <MenuContent />
    </aside>
  );
};