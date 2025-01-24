import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UnifiedAdminSidebar } from "@/components/admin/UnifiedAdminSidebar";
import { DesktopAdminSidebar } from "@/components/admin/DesktopAdminSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";
import Messages from "./admin/Messages";
import Reports from "./admin/Reports";
import Settings from "./admin/Settings";

const Admin = () => {
  const [isLoggedIn] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [currentContent, setCurrentContent] = useState('dashboard');
  const isMobile = useIsMobile();

  // Previne o redirecionamento indesejado mantendo o estado do componente
  useEffect(() => {
    const cleanupFunction = () => {
      // Cleanup function para garantir que o componente não cause efeitos colaterais
      return () => {
        setCurrentContent('dashboard');
      };
    };
    return cleanupFunction();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const renderContent = () => {
    switch (currentContent) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'messages':
        return <Messages />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header isLoggedIn={isLoggedIn} />
      </div>

      <div className="flex flex-1 mt-[60px] mb-[48px] overflow-hidden">
        {isMobile && (
          <UnifiedAdminSidebar 
            isCollapsed={isSidebarCollapsed} 
            onToggle={toggleSidebar}
            onMenuSelect={setCurrentContent}
          />
        )}
        
        {!isMobile && (
          <DesktopAdminSidebar 
            isCollapsed={isSidebarCollapsed} 
            onToggle={toggleSidebar}
            onMenuSelect={setCurrentContent}
          />
        )}
        
        <main className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
          !isMobile ? (isSidebarCollapsed ? 'ml-[70px]' : 'ml-[240px]') : 'ml-0'
        }`}>
          {renderContent()}
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
};

export default Admin;