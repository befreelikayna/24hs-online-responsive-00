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
        <div className="flex items-center justify-center px-4">
          <div className="w-full bg-[#2C2F3E] rounded-lg p-4 border border-[#9b87f5]/10">
            <p className="text-sm text-white/90 whitespace-pre-wrap break-words">
              {formData.bio || "Nenhuma bio adicionada ainda..."}
            </p>
          </div>
        </div>
      </div>

      <ProfileSocialButtons socialLinks={socialLinks} />
    </div>
  );
};