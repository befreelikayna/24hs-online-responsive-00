import { PenSquare, Share2, User } from "lucide-react";

interface ProfileSectionButtonsProps {
  activeSection: string | null;
  onSectionClick: (section: string) => void;
}

export const ProfileSectionButtons = ({ 
  activeSection, 
  onSectionClick 
}: ProfileSectionButtonsProps) => {
  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <button
        type="button"
        onClick={() => onSectionClick('profile-info')}
        className={`p-2 rounded-lg transition-colors ${
          activeSection === 'profile-info' 
            ? 'bg-[#252839] text-white' 
            : 'text-[#9b87f5] hover:bg-[#252839] hover:text-white'
        }`}
      >
        <PenSquare className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={() => onSectionClick('social-media')}
        className={`p-2 rounded-lg transition-colors ${
          activeSection === 'social-media' 
            ? 'bg-[#252839] text-white' 
            : 'text-[#9b87f5] hover:bg-[#252839] hover:text-white'
        }`}
      >
        <Share2 className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={() => onSectionClick('user-info')}
        className={`p-2 rounded-lg transition-colors ${
          activeSection === 'user-info' 
            ? 'bg-[#252839] text-white' 
            : 'text-[#9b87f5] hover:bg-[#252839] hover:text-white'
        }`}
      >
        <User className="w-5 h-5" />
      </button>
    </div>
  );
};