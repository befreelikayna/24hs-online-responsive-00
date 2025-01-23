import { ProfileImage } from "./ProfileImage";
import { ProfileSocialButtons } from "./ProfileSocialButtons";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Profile Info */}
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-center">
            <ProfileImage />
          </div>
          <div className="text-center space-y-0.5 mt-2">
            <h2 className="text-xl font-bold text-white">{formData.name}</h2>
            <p className="text-sm text-[#9b87f5]">{formData.username}</p>
          </div>
        </div>

        {/* Right Column - Bio */}
        <div className="flex items-center justify-center px-4 md:px-6">
          <div className="w-full min-h-[160px] md:min-h-[200px] bg-gradient-to-br from-[#2C2F3E]/80 to-[#1A1F2C] rounded-xl p-6 border border-[#9b87f5]/20 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#9b87f5]/30">
            <div className="h-full flex items-center justify-center">
              <p className="text-base md:text-lg text-white/90 whitespace-pre-wrap break-words leading-relaxed">
                {formData.bio || (
                  <span className="text-white/50 italic">
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