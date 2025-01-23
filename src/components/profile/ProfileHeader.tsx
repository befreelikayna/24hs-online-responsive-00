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
        <div className="w-full bg-[#2C2F3E] rounded-xl p-5 md:p-6">
          <div className="h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <AlignJustify className="w-4 h-4 text-[#9b87f5]/70" />
              <span className="text-xs uppercase tracking-wider text-[#9b87f5]/70">Bio</span>
            </div>
            <div className="flex-1">
              <p className="text-[11px] md:text-[12px] text-white/90 whitespace-pre-wrap break-words leading-relaxed tracking-wide line-clamp-7">
                {formData.bio || (
                  <span className="text-white/40 italic">
                    Nenhuma bio adicionada ainda...
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProfileSocialButtons socialLinks={socialLinks} />
    </div>
  );
};