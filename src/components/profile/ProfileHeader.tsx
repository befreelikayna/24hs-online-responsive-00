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
        <div className="w-full bg-[#2C2F3E]/30 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(155,135,245,0.1)] hover:border-[#9b87f5]/10">
          <div className="flex items-start gap-3">
            <div className="flex items-center gap-2 min-w-fit">
              <AlignJustify className="w-4 h-4 text-[#9b87f5]/70 transition-all duration-300 group-hover:text-[#9b87f5]" />
              <span className="text-xs uppercase tracking-wider text-[#9b87f5]/70 transition-all duration-300 group-hover:text-[#9b87f5]">Bio</span>
            </div>
            <div className="flex-1">
              <p 
                className="text-[13px] md:text-[14px] text-white/90 whitespace-pre-wrap break-words leading-relaxed tracking-wide"
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