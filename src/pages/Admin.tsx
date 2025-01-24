import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header isLoggedIn={isLoggedIn} />
      </div>

      <div className="flex flex-1 mt-[60px] mb-[48px] overflow-hidden">
        {/* Mobile Menu */}
        {isMobile && <UnifiedAdminSidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />}
        
        {/* Desktop Menu */}
        {!isMobile && <DesktopAdminSidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />}
        
        <main className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
          !isMobile ? (isSidebarCollapsed ? 'ml-[70px]' : 'ml-[240px]') : 'ml-0'
        }`}>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="messages" element={<Messages />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
};

export default Admin;