import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PenSquare, Share2, Save } from "lucide-react";
import { ProfileImage } from "./ProfileImage";
import { ProfileSocialButtons } from "./ProfileSocialButtons";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
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

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= 160) {
      setFormData({ ...formData, bio: text });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-lg p-6 shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10">
        <div className="flex flex-col items-center relative">
          <div className="flex items-start w-full mb-4">
            <div className="flex-1 flex justify-center">
              <ProfileImage />
            </div>
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold text-white">{formData.name}</h2>
            <p className="text-sm text-[#9b87f5]">{formData.username}</p>
          </div>

          <ProfileSocialButtons socialLinks={socialLinks} />

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => handleSectionClick('profile-info')}
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
              onClick={() => handleSectionClick('social-media')}
              className={`p-2 rounded-lg transition-colors ${
                activeSection === 'social-media' 
                  ? 'bg-[#252839] text-white' 
                  : 'text-[#9b87f5] hover:bg-[#252839] hover:text-white'
              }`}
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {activeSection === 'profile-info' && (
            <div className="w-full space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#9b87f5]">Nome</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-[#9b87f5]">@seuperfil</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => {
                    const value = e.target.value;
                    const formattedValue = value.startsWith('@') ? value : `@${value}`;
                    setFormData({ ...formData, username: formattedValue });
                  }}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#9b87f5]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  readOnly
                  className="bg-[#2C2F3E]/50 border-[#9b87f5]/10 cursor-not-allowed opacity-70"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-[#9b87f5]">Bio</Label>
                <div className="relative">
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={handleBioChange}
                    className="bg-[#2C2F3E] border-[#E5DEFF]/30 min-h-[120px] resize-y whitespace-pre-wrap scrollbar-hide"
                    placeholder="Escreva sua bio aqui... (suporta markdown e quebra de linha)"
                    maxLength={160}
                  />
                  <span className="absolute bottom-2 right-2 text-xs text-[#9b87f5]">
                    {formData.bio.length}/160
                  </span>
                </div>
              </div>
              <Button 
                type="submit" 
                variant="outline"
                className="w-full bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10 text-[#9b87f5] hover:text-white transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar Alterações
              </Button>
            </div>
          )}

          {activeSection === 'social-media' && (
            <div className="w-full space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="facebook" className="text-[#9b87f5]">Facebook</Label>
                <Input
                  id="facebook"
                  value={socialLinks.facebook}
                  onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="URL do Facebook"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram" className="text-[#9b87f5]">Instagram</Label>
                <Input
                  id="instagram"
                  value={socialLinks.instagram}
                  onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="@usuario"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="youtube" className="text-[#9b87f5]">YouTube</Label>
                <Input
                  id="youtube"
                  value={socialLinks.youtube}
                  onChange={(e) => setSocialLinks({ ...socialLinks, youtube: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="URL do canal"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter" className="text-[#9b87f5]">Twitter/X</Label>
                <Input
                  id="twitter"
                  value={socialLinks.twitter}
                  onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="@usuario"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tiktok" className="text-[#9b87f5]">TikTok</Label>
                <Input
                  id="tiktok"
                  value={socialLinks.tiktok}
                  onChange={(e) => setSocialLinks({ ...socialLinks, tiktok: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="@usuario"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kawi" className="text-[#9b87f5]">Kwai</Label>
                <Input
                  id="kawi"
                  value={socialLinks.kawi}
                  onChange={(e) => setSocialLinks({ ...socialLinks, kawi: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="@usuario"
                />
              </div>
              <Button 
                type="submit" 
                variant="outline"
                className="w-full bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10 text-[#9b87f5] hover:text-white transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar Redes Sociais
              </Button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};