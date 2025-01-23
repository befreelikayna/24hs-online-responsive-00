import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import type { SocialLinksType } from "./ProfileForm";

interface SocialMediaSectionProps {
  socialLinks: SocialLinksType;
  onSocialLinksChange: (field: keyof SocialLinksType, value: string) => void;
  onSubmit: () => void;
}

export const SocialMediaSection = ({
  socialLinks,
  onSocialLinksChange,
  onSubmit
}: SocialMediaSectionProps) => {
  return (
    <div className="w-full space-y-3 mt-3">
      <div className="space-y-2">
        <Label htmlFor="facebook" className="text-[#9b87f5]">Facebook</Label>
        <Input
          id="facebook"
          value={socialLinks.facebook}
          onChange={(e) => onSocialLinksChange('facebook', e.target.value)}
          className="bg-[#2C2F3E] border-[#9b87f5]/10"
          placeholder="URL do Facebook"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="instagram" className="text-[#9b87f5]">Instagram</Label>
        <Input
          id="instagram"
          value={socialLinks.instagram}
          onChange={(e) => onSocialLinksChange('instagram', e.target.value)}
          className="bg-[#2C2F3E] border-[#9b87f5]/10"
          placeholder="@usuario"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="youtube" className="text-[#9b87f5]">YouTube</Label>
        <Input
          id="youtube"
          value={socialLinks.youtube}
          onChange={(e) => onSocialLinksChange('youtube', e.target.value)}
          className="bg-[#2C2F3E] border-[#9b87f5]/10"
          placeholder="URL do canal"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="twitter" className="text-[#9b87f5]">Twitter/X</Label>
        <Input
          id="twitter"
          value={socialLinks.twitter}
          onChange={(e) => onSocialLinksChange('twitter', e.target.value)}
          className="bg-[#2C2F3E] border-[#9b87f5]/10"
          placeholder="@usuario"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tiktok" className="text-[#9b87f5]">TikTok</Label>
        <Input
          id="tiktok"
          value={socialLinks.tiktok}
          onChange={(e) => onSocialLinksChange('tiktok', e.target.value)}
          className="bg-[#2C2F3E] border-[#9b87f5]/10"
          placeholder="@usuario"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="kawi" className="text-[#9b87f5]">Kwai</Label>
        <Input
          id="kawi"
          value={socialLinks.kawi}
          onChange={(e) => onSocialLinksChange('kawi', e.target.value)}
          className="bg-[#2C2F3E] border-[#9b87f5]/10"
          placeholder="@usuario"
        />
      </div>
      <Button 
        onClick={onSubmit}
        variant="outline"
        className="w-full bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10 text-[#9b87f5] hover:text-white transition-colors"
      >
        <Save className="w-4 h-4 mr-2" />
        Salvar Redes Sociais
      </Button>
    </div>
  );
};