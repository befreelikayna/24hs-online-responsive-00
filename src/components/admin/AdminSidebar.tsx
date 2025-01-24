import { Home, Users, Settings, BarChart2, MessageSquare, Menu, ChevronRight } from "lucide-react";
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
    { icon: Home, label: 'Dashboard', path: '/admin', description: 'Visão geral do sistema' },
    { icon: Users, label: 'Usuários', path: '/admin/users', description: 'Gerenciar usuários' },
    { icon: MessageSquare, label: 'Mensagens', path: '/admin/messages', description: 'Central de mensagens' },
    { icon: BarChart2, label: 'Relatórios', path: '/admin/reports', description: 'Análise de dados' },
    { icon: Settings, label: 'Configurações', path: '/admin/settings', description: 'Ajustes do sistema' },
  ];

  const MenuContent = () => (
    <nav className="p-2">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group block"
          >
            <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#9b87f5]/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/0 via-[#9b87f5]/5 to-[#9b87f5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-[#9b87f5]/5 p-2 rounded-lg group-hover:bg-[#9b87f5]/10 transition-all duration-300">
                <item.icon className="w-4 h-4 text-[#D6BCFA] group-hover:scale-110 transition-all duration-300" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#D6BCFA] truncate group-hover:text-white transition-colors duration-300">
                  {item.label}
                </p>
                <p className="text-[10px] text-[#D6BCFA]/60 truncate group-hover:text-[#D6BCFA]/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
              
              <ChevronRight className="w-3 h-3 text-[#D6BCFA]/40 group-hover:text-[#D6BCFA] group-hover:translate-x-0.5 transition-all duration-300" />
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
            className="fixed right-4 bottom-20 z-50 h-12 w-12 rounded-full bg-[#9b87f5]/10 backdrop-blur-sm border border-[#D6BCFA]/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Menu className="h-5 w-5 text-[#D6BCFA]" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[240px] bg-transparent border-r border-[#D6BCFA]/10 p-0 shadow-2xl"
        >
          <div className="pt-6">
            <div className="px-4 mb-4">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#9b87f5]/5">
                <div className="bg-[#9b87f5]/10 p-1.5 rounded-lg">
                  <Settings className="w-4 h-4 text-[#D6BCFA]" />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-[#D6BCFA]">Menu Admin</h2>
                  <p className="text-[10px] text-[#D6BCFA]/60">Painel de Controle</p>
                </div>
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