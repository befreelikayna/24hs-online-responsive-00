import { Home, Users, Settings, BarChart2, MessageSquare, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface DesktopAdminSidebarProps {
  isCollapsed: boolean;
  onToggle?: () => void;
}

export const DesktopAdminSidebar = ({ isCollapsed, onToggle }: DesktopAdminSidebarProps) => {
  const menuItems = [
    { icon: Home, path: '/admin', label: 'Dashboard' },
    { icon: Users, path: '/admin/users', label: 'Usuários' },
    { icon: MessageSquare, path: '/admin/messages', label: 'Mensagens' },
    { icon: BarChart2, path: '/admin/reports', label: 'Relatórios' },
    { icon: Settings, path: '/admin/settings', label: 'Configurações' },
  ];

  return (
    <aside
      className={`hidden md:flex flex-col justify-between fixed left-0 bottom-[68px] bg-gradient-to-b from-[#1a1f2c]/90 via-[#2C2F3E]/85 to-[#1a1f2c]/90 backdrop-blur-md border-r border-[#D6BCFA]/10 shadow-2xl rounded-br-3xl rounded-tr-3xl border-t border-t-[#D6BCFA]/10 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-[70px]' : 'w-[240px]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <nav className="py-4 px-2 md:px-3">
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`group flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} gap-3 p-2.5 rounded-lg hover:bg-[#9b87f5]/20 transition-all duration-300`}
                  style={{
                    animation: `fadeSlideIn 0.3s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className={`flex items-center justify-center ${isCollapsed ? 'min-w-[32px]' : 'min-w-[32px]'}`}>
                    <item.icon className="w-5 h-5 text-[#D6BCFA] transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                  </div>
                  {!isCollapsed && (
                    <span className="text-[#D6BCFA] text-sm group-hover:text-white transition-all duration-300 whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={`w-full h-8 text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300 ${
            isCollapsed ? 'justify-center' : 'justify-start px-2'
          }`}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

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
    </aside>
  );
};