import { ProfileImage } from "./ProfileImage";
import { ProfileSocialButtons } from "./ProfileSocialButtons";
import type { SocialLinksType } from "./ProfileForm";

interface ProfileHeaderProps {
  formData: {
    name: string;
    username: string;
  };
  socialLinks: SocialLinksType;
}

export const ProfileHeader = ({ formData, socialLinks }: ProfileHeaderProps) => {
  return (
    <>
      <div className="flex items-start w-full mb-4">
        <div className="flex-1 flex justify-center">
          <ProfileImage />
        </div>
      </div>

      <div className="text-center space-y-0.5 mt-2">
        <h2 className="text-xl font-bold text-white">{formData.name}</h2>
        <p className="text-sm text-[#9b87f5]">{formData.username}</p>
      </div>

      <ProfileSocialButtons socialLinks={socialLinks} />
    </>
  );
};