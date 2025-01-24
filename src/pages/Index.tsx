import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StreamPlayer } from "@/components/stream/StreamPlayer";
import { NavigationTabs } from "@/components/navigation/NavigationTabs";
import { ContentPanel } from "@/components/content/ContentPanel";

const Index = () => {
  const [activeSection, setActiveSection] = useState<'chat' | 'community' | 'lives' | 'music'>('chat');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleDemoLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      </div>

      <main className="flex-1 overflow-y-auto mt-[60px] mb-[48px] scrollbar-hide">
        <div className="h-full flex flex-col lg:flex-row gap-4 p-4">
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            <StreamPlayer />
            <NavigationTabs 
              activeSection={activeSection} 
              setActiveSection={setActiveSection}
              isLoggedIn={isLoggedIn}
            />
          </div>

          <div className="w-full lg:w-1/3">
            <ContentPanel 
              activeSection={activeSection} 
              isLoggedIn={isLoggedIn}
              onDemoLogin={handleDemoLogin}
            />
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
};

export default Index;