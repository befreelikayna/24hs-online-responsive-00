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
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed right-4 bottom-16 z-50 h-10 w-10 rounded-full bg-[#9b87f5]/20 backdrop-blur-md border border-[#D6BCFA]/20 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 animate-[pulse_3s_ease-in-out_infinite] hover:animate-none"
          >
            <Menu className="h-5 w-5 text-[#D6BCFA] transition-transform duration-300 hover:rotate-180" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[65px] h-fit max-h-[360px] bg-gradient-to-b from-[#1a1f2c]/90 via-[#2C2F3E]/85 to-[#1a1f2c]/90 backdrop-blur-md border-r border-[#D6BCFA]/10 p-0 shadow-2xl rounded-br-3xl animate-slide-up"
        >
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
              
              @keyframes glowPulse {
                0% { box-shadow: 0 0 5px #9b87f5; }
                50% { box-shadow: 0 0 15px #9b87f5; }
                100% { box-shadow: 0 0 5px #9b87f5; }
              }
            `}
          </style>
          <div className="pt-4">
            <div className="flex justify-center mb-3">
              <div className="p-2 rounded-lg bg-[#9b87f5]/20 animate-[glowPulse_2s_ease-in-out_infinite]">
                <Settings className="w-5 h-5 text-[#D6BCFA] animate-spin-slow" />
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
      className={`fixed left-0 top-[60px] h-fit max-h-[360px] bg-gradient-to-b from-[#2C2F3E]/90 to-[#1A1F2C]/90 backdrop-blur-sm border-r border-[#9b87f5]/10 transition-all duration-300 ease-in-out w-[65px]`}
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