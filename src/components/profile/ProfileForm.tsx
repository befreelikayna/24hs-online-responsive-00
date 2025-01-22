import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PenSquare, Share2, Save } from "lucide-react";
import { ProfileImage } from "./ProfileImage";
import { FollowersCount } from "./FollowersCount";
import { ProfileSocialButtons } from "./ProfileSocialButtons";

export const ProfileForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "John Doe",
    username: "@johndoe",
    email: "john@example.com",
    bio: "Frontend Developer",
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: "",
    tiktok: "",
    kawi: "",
    joinDate: "Janeiro 2024"
  });

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Perfil atualizado!",
      description: "Suas alterações foram salvas com sucesso.",
    });
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-lg p-6 shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10">
        <div className="flex flex-col items-center relative">
          <div className="flex items-start w-full mb-4">
            <div className="flex-1 flex justify-center">
              <div className="relative flex flex-col items-center">
                <ProfileImage />
                <div className="w-full mt-4">
                  <FollowersCount />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold text-white">{formData.name}</h2>
            <p className="text-sm text-[#9b87f5]">{formData.username}</p>
          </div>

          <ProfileSocialButtons />

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
                <Label htmlFor="username" className="text-[#9b87f5]">Username</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#9b87f5]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-[#9b87f5]">Bio</Label>
                <Input
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                />
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
                  value={formData.facebook}
                  onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="URL do Facebook"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram" className="text-[#9b87f5]">Instagram</Label>
                <Input
                  id="instagram"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="@usuario"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="youtube" className="text-[#9b87f5]">YouTube</Label>
                <Input
                  id="youtube"
                  value={formData.youtube}
                  onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="URL do canal"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter" className="text-[#9b87f5]">Twitter/X</Label>
                <Input
                  id="twitter"
                  value={formData.twitter}
                  onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="@usuario"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tiktok" className="text-[#9b87f5]">TikTok</Label>
                <Input
                  id="tiktok"
                  value={formData.tiktok}
                  onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                  className="bg-[#2C2F3E] border-[#9b87f5]/10"
                  placeholder="@usuario"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kawi" className="text-[#9b87f5]">Kwai</Label>
                <Input
                  id="kawi"
                  value={formData.kawi}
                  onChange={(e) => setFormData({ ...formData, kawi: e.target.value })}
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
