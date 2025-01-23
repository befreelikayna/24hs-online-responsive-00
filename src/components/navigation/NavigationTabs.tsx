import { MessageSquare, Minus, Users, Video, Music } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavigationTabsProps {
  activeSection: 'chat' | 'community' | 'lives' | 'music';
  setActiveSection: (section: 'chat' | 'community' | 'lives' | 'music') => void;
  isLoggedIn: boolean;
}

export const NavigationTabs = ({ activeSection, setActiveSection, isLoggedIn }: NavigationTabsProps) => {
  const [isChatCollapsed, setIsChatCollapsed] = useState(false);

  const handleChatClick = () => {
    setIsChatCollapsed(!isChatCollapsed);
    if (activeSection !== 'chat') {
      setActiveSection('chat');
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#2C2F3E] rounded-xl">
      <Tabs value={activeSection} className="w-full">
        <TabsList className="w-full justify-start bg-transparent gap-2">
          <TabsTrigger
            value="chat"
            onClick={handleChatClick}
            className="data-[state=active]:bg-[#9b87f5]/20 data-[state=active]:text-[#9b87f5] hover:text-[#9b87f5] transition-colors"
          >
            {isChatCollapsed ? <Minus className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
            <span className="ml-2">Chat</span>
          </TabsTrigger>
          
          {isLoggedIn && (
            <>
              <TabsTrigger
                value="community"
                onClick={() => setActiveSection('community')}
                className="data-[state=active]:bg-[#9b87f5]/20 data-[state=active]:text-[#9b87f5] hover:text-[#9b87f5] transition-colors"
              >
                <Users className="w-4 h-4" />
                <span className="ml-2">Comunidade</span>
              </TabsTrigger>
              <TabsTrigger
                value="lives"
                onClick={() => setActiveSection('lives')}
                className="data-[state=active]:bg-[#9b87f5]/20 data-[state=active]:text-[#9b87f5] hover:text-[#9b87f5] transition-colors"
              >
                <Video className="w-4 h-4" />
                <span className="ml-2">Lives</span>
              </TabsTrigger>
              <TabsTrigger
                value="music"
                onClick={() => setActiveSection('music')}
                className="data-[state=active]:bg-[#9b87f5]/20 data-[state=active]:text-[#9b87f5] hover:text-[#9b87f5] transition-colors"
              >
                <Music className="w-4 h-4" />
                <span className="ml-2">Música</span>
              </TabsTrigger>
            </>
          )}
        </TabsList>
      </Tabs>
    </div>
  );
};