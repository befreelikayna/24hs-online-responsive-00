import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileSectionButtons } from "./ProfileSectionButtons";
import { ProfileInfoSection } from "./ProfileInfoSection";
import { SocialMediaSection } from "./SocialMediaSection";
import { UserInfoSection } from "./UserInfoSection";

export type SocialLinksType = {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  tiktok: string;
  kawi: string;
};

export const ProfileForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "John Doe",
    username: "@seuperfil",
    email: "john@example.com",
    bio: "Frontend Developer",
    joinDate: "Janeiro 2024"
  });

  const [socialLinks, setSocialLinks] = useState<SocialLinksType>({
    facebook: "",
    instagram: "@usuario",
    youtube: "https://youtube.com/channel",
    twitter: "@usuario",
    tiktok: "@usuario",
    kawi: ""
  });

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (activeSection === 'social-media') {
      localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
    } else {
      localStorage.setItem('profileData', JSON.stringify(formData));
    }
    
    toast({
      title: "Perfil atualizado!",
      description: "Suas alterações foram salvas com sucesso.",
    });
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleFormDataChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSocialLinksChange = (field: keyof SocialLinksType, value: string) => {
    setSocialLinks(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-lg p-4 shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10">
        <div className="flex flex-col items-center relative space-y-2">
          <ProfileHeader formData={formData} socialLinks={socialLinks} />
          
          <ProfileSectionButtons 
            activeSection={activeSection} 
            onSectionClick={handleSectionClick} 
          />

          {activeSection === 'profile-info' && (
            <ProfileInfoSection
              formData={formData}
              onFormDataChange={handleFormDataChange}
              onSubmit={handleSubmit}
            />
          )}

          {activeSection === 'social-media' && (
            <SocialMediaSection
              socialLinks={socialLinks}
              onSocialLinksChange={handleSocialLinksChange}
              onSubmit={handleSubmit}
            />
          )}

          {activeSection === 'user-info' && <UserInfoSection />}
        </div>
      </div>
    </form>
  );
};