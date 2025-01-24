import { Home, Users, Settings, BarChart2, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface UnifiedAdminSidebarProps {
  isCollapsed: boolean;
  onToggle?: () => void;
}

export const UnifiedAdminSidebar = ({ isCollapsed, onToggle }: UnifiedAdminSidebarProps) => {
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
        {menuItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className="group block"
            title={item.tooltip}
            style={{
              animation: `fadeSlideIn 0.3s ease-out forwards`,
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
              transform: 'translateX(-20px)',
            }}
          >
            <div className="flex items-center justify-center p-1.5 rounded-lg hover:bg-[#9b87f5]/20 transition-all duration-500 group-hover:translate-y-[-2px]">
              <div className="p-2 rounded-lg bg-[#9b87f5]/10 group-hover:bg-[#9b87f5]/30 transition-all duration-500 group-hover:rotate-[12deg] hover:shadow-lg hover:shadow-purple-500/20">
                <item.icon className="w-5 h-5 text-[#D6BCFA] transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );

  if (isMobile) {
    return (
      <Drawer direction="right">
        <DrawerContent className="w-[65px] h-fit max-h-[360px] mt-[60px] bg-gradient-to-b from-[#1a1f2c]/90 via-[#2C2F3E]/85 to-[#1a1f2c]/90 backdrop-blur-md border-r border-[#D6BCFA]/10 p-0 shadow-2xl rounded-br-3xl rounded-tr-3xl border-t border-t-[#D6BCFA]/10">
          <style>
            {`
              @keyframes fadeSlideIn {
                from {
                  opacity: 0;
                  transform: translateX(-20px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
            `}
          </style>
          <MenuContent />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <aside
      className={`fixed left-0 bottom-[68px] h-fit max-h-[360px] bg-gradient-to-b from-[#1a1f2c]/90 via-[#2C2F3E]/85 to-[#1a1f2c]/90 backdrop-blur-md border-r border-[#D6BCFA]/10 p-0 shadow-2xl rounded-br-3xl rounded-tr-3xl border-t border-t-[#D6BCFA]/10 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-0 opacity-0' : 'w-[65px] opacity-100'
      }`}
    >
      <MenuContent />
    </aside>
  );
};