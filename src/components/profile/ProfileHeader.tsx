import { ProfileImage } from "./ProfileImage";
import { ProfileSocialButtons } from "./ProfileSocialButtons";
import { AlignJustify } from "lucide-react";
import type { SocialLinksType } from "./ProfileForm";

interface ProfileHeaderProps {
  formData: {
    name: string;
    username: string;
    bio: string;
  };
  socialLinks: SocialLinksType;
}

const formatMarkdown = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<em>$1</em>')
    .replace(/\^\^(.*?)\^\^/g, '<sup>$1</sup>')
    .replace(/~~(.*?)~~/g, '<del>$1</del>');
};

export const ProfileHeader = ({ formData, socialLinks }: ProfileHeaderProps) => {
  return (
    <div className="w-full space-y-6">
      {/* Profile Info */}
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-center">
          <ProfileImage />
        </div>
        <div className="text-center space-y-0.5 mt-2">
          <h2 className="text-xl font-bold text-white">{formData.name}</h2>
          <p className="text-sm text-[#9b87f5]">{formData.username}</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="w-full">
        <div className="w-full bg-gradient-to-br from-[#2C2F3E]/80 to-[#1A1F2C]/80 rounded-xl p-5 md:p-6 border border-[#D6BCFA]/20 backdrop-blur-sm hover:scale-[1.01] transition-all duration-300 shadow-lg hover:shadow-[#D6BCFA]/10">
          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-[#2C2F3E]/50 px-2.5 py-1 rounded-lg border border-[#D6BCFA]/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#D6BCFA]/10">
              <AlignJustify className="w-3.5 h-3.5 text-[#D6BCFA]" />
              <span className="text-[10px] uppercase tracking-wider text-[#D6BCFA]">Bio</span>
            </div>
            <div className="flex-1">
              <p 
                className="text-[13px] md:text-[14px] text-white/90 whitespace-pre-wrap break-words leading-relaxed tracking-wide line-clamp-7"
                dangerouslySetInnerHTML={{
                  __html: formData.bio ? formatMarkdown(formData.bio) : '<span class="text-white/40 italic">Nenhuma bio adicionada ainda...</span>'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <ProfileSocialButtons socialLinks={socialLinks} />
    </div>
  );
};