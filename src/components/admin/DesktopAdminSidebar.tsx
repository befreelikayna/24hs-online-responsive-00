import { Home, Users, Settings, BarChart2, MessageSquare, PanelLeftClose, PanelLeft } from "lucide-react";

interface DesktopAdminSidebarProps {
  isCollapsed: boolean;
  onToggle?: () => void;
  onMenuSelect?: (menu: string) => void;
}

export const DesktopAdminSidebar = ({ isCollapsed, onToggle, onMenuSelect }: DesktopAdminSidebarProps) => {
  const menuItems = [
    { icon: Home, id: 'dashboard', label: 'Dashboard' },
    { icon: Users, id: 'users', label: 'Usuários' },
    { icon: MessageSquare, id: 'messages', label: 'Mensagens' },
    { icon: BarChart2, id: 'reports', label: 'Relatórios' },
    { icon: Settings, id: 'settings', label: 'Configurações' },
  ];

  return (
    <aside
      className={`hidden md:block fixed left-0 bottom-[68px] bg-gradient-to-b from-[#1a1f2c]/90 via-[#2C2F3E]/85 to-[#1a1f2c]/90 backdrop-blur-md border-r border-[#D6BCFA]/10 shadow-2xl rounded-br-3xl rounded-tr-3xl border-t border-t-[#D6BCFA]/10 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-[70px]' : 'w-[240px]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <nav className="py-4 px-2 md:px-3">
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => onMenuSelect?.(item.id)}
                  className={`group flex items-center w-full ${isCollapsed ? 'justify-center' : 'justify-start'} gap-3 p-2.5 rounded-lg hover:bg-[#9b87f5]/20 transition-all duration-500 hover:scale-105`}
                  style={{
                    animation: `fadeSlideIn 0.3s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className={`flex items-center justify-center ${isCollapsed ? 'min-w-[32px]' : 'min-w-[32px]'}`}>
                    <item.icon className="w-5 h-5 text-[#D6BCFA] transition-all duration-500 group-hover:scale-110 group-hover:text-white group-hover:rotate-180" />
                  </div>
                  {!isCollapsed && (
                    <span className="text-[#D6BCFA] text-sm group-hover:text-white transition-all duration-300 whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </button>
              </li>
            ))}
            
            <li>
              <button
                onClick={onToggle}
                className={`group flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} w-full gap-3 p-2.5 rounded-lg hover:bg-[#9b87f5]/20 transition-all duration-500 hover:scale-105`}
                style={{
                  animation: `fadeSlideIn 0.3s ease-out forwards`,
                  animationDelay: `${menuItems.length * 0.1}s`,
                }}
              >
                <div className={`flex items-center justify-center ${isCollapsed ? 'min-w-[32px]' : 'min-w-[32px]'}`}>
                  {isCollapsed ? (
                    <PanelLeft className="w-5 h-5 text-[#D6BCFA] transition-all duration-500 group-hover:scale-110 group-hover:text-white group-hover:rotate-180" />
                  ) : (
                    <PanelLeftClose className="w-5 h-5 text-[#D6BCFA] transition-all duration-500 group-hover:scale-110 group-hover:text-white group-hover:rotate-180" />
                  )}
                </div>
                {!isCollapsed && (
                  <span className="text-[#D6BCFA] text-sm group-hover:text-white transition-all duration-300 whitespace-nowrap">
                    Recolher Menu
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
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