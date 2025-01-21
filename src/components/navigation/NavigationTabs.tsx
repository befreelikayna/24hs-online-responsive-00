import { MessageSquare, Users, Video, Music } from "lucide-react";

interface NavigationTabsProps {
  activeSection: 'chat' | 'community' | 'lives' | 'music';
  setActiveSection: (section: 'chat' | 'community' | 'lives' | 'music') => void;
}

export const NavigationTabs = ({ activeSection, setActiveSection }: NavigationTabsProps) => {
  return (
    <section className="grid grid-cols-4 gap-2">
      <button
        onClick={() => setActiveSection('chat')}
        className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
          activeSection === 'chat'
            ? 'bg-[#9b87f5]/20 shadow-sm shadow-[#9b87f5]/10'
            : 'bg-[#2C2F3E]/50 hover:bg-[#9b87f5]/10'
        }`}
      >
        <div className="p-2.5 flex items-center justify-center gap-2">
          <MessageSquare className={`h-4 w-4 md:h-5 md:w-5 ${activeSection === 'chat' ? 'text-[#9b87f5]' : 'text-[#D6BCFA]/70'}`} />
          <span className={`hidden md:inline text-xs md:text-sm font-medium ${activeSection === 'chat' ? 'text-[#9b87f5]' : 'text-[#D6BCFA]/70'}`}>
            CHAT
          </span>
        </div>
      </button>

      <button
        onClick={() => setActiveSection('community')}
        className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
          activeSection === 'community'
            ? 'bg-[#9b87f5]/20 shadow-sm shadow-[#9b87f5]/10'
            : 'bg-[#2C2F3E]/50 hover:bg-[#9b87f5]/10'
        }`}
      >
        <div className="p-2.5 flex items-center justify-center gap-2">
          <Users className={`h-4 w-4 md:h-5 md:w-5 ${activeSection === 'community' ? 'text-[#9b87f5]' : 'text-[#D6BCFA]/70'}`} />
          <span className={`hidden md:inline text-xs md:text-sm font-medium ${activeSection === 'community' ? 'text-[#9b87f5]' : 'text-[#D6BCFA]/70'}`}>
            COMUNIDADE
          </span>
        </div>
      </button>

      <button
        onClick={() => setActiveSection('lives')}
        className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
          activeSection === 'lives'
            ? 'bg-[#9b87f5]/20 shadow-sm shadow-[#9b87f5]/10'
            : 'bg-[#2C2F3E]/50 hover:bg-[#9b87f5]/10'
        }`}
      >
        <div className="p-2.5 flex items-center justify-center gap-2">
          <Video className={`h-4 w-4 md:h-5 md:w-5 ${activeSection === 'lives' ? 'text-[#9b87f5]' : 'text-[#D6BCFA]/70'}`} />
          <span className={`hidden md:inline text-xs md:text-sm font-medium ${activeSection === 'lives' ? 'text-[#9b87f5]' : 'text-[#D6BCFA]/70'}`}>
            LIVES
          </span>
        </div>
      </button>

      <button
        onClick={() => setActiveSection('music')}
        className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
          activeSection === 'music'
            ? 'bg-[#9b87f5]/20 shadow-sm shadow-[#9b87f5]/10'
            : 'bg-[#2C2F3E]/50 hover:bg-[#9b87f5]/10'
        }`}
      >
        <div className="p-2.5 flex items-center justify-center gap-2">
          <Music className={`h-4 w-4 md:h-5 md:w-5 ${activeSection === 'music' ? 'text-[#9b87f5]' : 'text-[#D6BCFA]/70'}`} />
          <span className={`hidden md:inline text-xs md:text-sm font-medium ${activeSection === 'music' ? 'text-[#9b87f5]' : 'text-[#D6BCFA]/70'}`}>
            MÚSICA
          </span>
        </div>
      </button>
    </section>
  );
};