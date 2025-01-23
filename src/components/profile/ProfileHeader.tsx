import { ProfileImage } from "./ProfileImage";
import type { SocialLinksType } from "./ProfileForm";

interface ProfileHeaderProps {
  formData: {
    name: string;
    username: string;
    bio: string;
  };
  socialLinks: SocialLinksType;
}

export const ProfileHeader = ({ formData }: ProfileHeaderProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="flex flex-col items-center md:items-start space-y-2">
        <div className="flex items-start justify-center md:justify-start w-full">
          <ProfileImage />
        </div>
        <div className="text-center md:text-left space-y-0.5">
          <h2 className="text-xl font-bold text-white">{formData.name}</h2>
          <p className="text-sm text-[#9b87f5]">{formData.username}</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <p className="text-sm text-[#9b87f5]/80 whitespace-pre-wrap break-words">
          {formData.bio || "Nenhuma bio definida"}
        </p>
      </div>
    </div>
  );
};