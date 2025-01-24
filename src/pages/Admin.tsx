import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UnifiedAdminSidebar } from "@/components/admin/UnifiedAdminSidebar";
import { AdminStats } from "@/components/admin/AdminStats";
import { AdminMobileStats } from "@/components/admin/AdminMobileStats";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Admin = () => {
  const [isLoggedIn] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="ml-4 h-8 w-8 text-[#D6BCFA] hover:bg-[#9b87f5]/10 transition-all duration-300"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <div className="flex-1">
            <Header isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 mt-[60px] mb-[48px] overflow-hidden">
        <UnifiedAdminSidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
        <main className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
          !isMobile ? (isSidebarCollapsed ? 'ml-0' : 'ml-[65px]') : 'ml-0'
        }`}>
          <div className="w-full max-w-[1400px] mx-auto">
            {isMobile ? <AdminMobileStats /> : <AdminStats />}
          </div>
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
};

export default Admin;