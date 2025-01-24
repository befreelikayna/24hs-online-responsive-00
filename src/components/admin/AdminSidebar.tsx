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
    <nav className="p-4">
      <div className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group block"
          >
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-[#9b87f5]/5 hover:to-transparent transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/0 via-[#9b87f5]/5 to-[#9b87f5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-[#9b87f5]/10 p-2.5 rounded-lg group-hover:bg-[#9b87f5]/20 transition-all duration-300">
                <item.icon className="w-5 h-5 text-[#9b87f5] group-hover:scale-110 transition-all duration-300" />
              </div>
              
              <div className="flex-1">
                <p className="text-[#E5DEFF] font-medium group-hover:text-white transition-colors duration-300">
                  {item.label}
                </p>
                <p className="text-xs text-[#E5DEFF]/60 group-hover:text-[#E5DEFF]/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
              
              <ChevronRight className="w-4 h-4 text-[#9b87f5]/40 group-hover:text-[#9b87f5] group-hover:translate-x-1 transition-all duration-300" />
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
            className="fixed right-4 bottom-20 z-50 h-12 w-12 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] bg-gradient-to-br from-[#2C2F3E] via-[#252839] to-[#1A1F2C] border-r border-[#9b87f5]/20 p-0 shadow-2xl"
        >
          <div className="pt-8">
            <div className="px-6 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#9b87f5]/10 to-transparent">
                <div className="bg-[#9b87f5]/20 p-2 rounded-lg">
                  <Settings className="w-5 h-5 text-[#9b87f5]" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">Menu Admin</h2>
                  <p className="text-xs text-[#E5DEFF]/60">Painel de Controle</p>
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