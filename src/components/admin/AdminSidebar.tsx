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
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/0 via-[#9b87f5]/5 to-[#9b87f5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <item.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
              <span className={`whitespace-nowrap transition-all duration-300 ${
                isCollapsed && !isMobile ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              } group-hover:text-white`}>
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
            className="fixed right-4 bottom-20 z-50 h-12 w-12 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[280px] bg-gradient-to-br from-[#2C2F3E] via-[#252839] to-[#1A1F2C] border-r border-[#9b87f5]/20 p-0 shadow-2xl"
        >
          <div className="pt-12">
            <div className="px-6 mb-6">
              <h2 className="text-xl font-semibold text-white/90 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#9b87f5]" />
                Menu Admin
              </h2>
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
        isCollapsed ? 'w-[60px]' : 'w-[240px]'
      }`}
    >
      <MenuContent />
    </aside>
  );
};