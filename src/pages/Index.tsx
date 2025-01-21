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

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C] overflow-hidden">
      <Header />

      <main className="flex-1 w-full overflow-hidden">
        <div className="h-full flex flex-col lg:flex-row gap-4 p-4">
          <div className="w-full lg:w-2/3 flex flex-col gap-4 lg:overflow-y-auto">
            <StreamPlayer />
            <NavigationTabs 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
          </div>

          <div className="w-full lg:w-1/3 h-full">
            <ContentPanel 
              activeSection={activeSection} 
              isLoggedIn={isLoggedIn}
              onDemoLogin={handleDemoLogin}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;