import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import type { SocialLinksType } from "./ProfileForm";

interface ProfileSocialButtonsProps {
  socialLinks: SocialLinksType;
}

export const ProfileSocialButtons = ({ socialLinks }: ProfileSocialButtonsProps) => {
  const renderSocialButtons = () => {
    const buttons = [];

    if (socialLinks.facebook) {
      buttons.push(
        <Button 
          key="facebook"
          variant="outline" 
          size="icon"
          className="bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10"
        >
          <Facebook className="w-4 h-4 text-[#9b87f5]" />
        </Button>
      );
    }

    if (socialLinks.instagram) {
      buttons.push(
        <Button 
          key="instagram"
          variant="outline" 
          size="icon"
          className="bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10"
        >
          <Instagram className="w-4 h-4 text-[#9b87f5]" />
        </Button>
      );
    }

    if (socialLinks.youtube) {
      buttons.push(
        <Button 
          key="youtube"
          variant="outline" 
          size="icon"
          className="bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10"
        >
          <Youtube className="w-4 h-4 text-[#9b87f5]" />
        </Button>
      );
    }

    if (socialLinks.twitter) {
      buttons.push(
        <Button 
          key="twitter"
          variant="outline" 
          size="icon"
          className="bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10"
        >
          <Twitter className="w-4 h-4 text-[#9b87f5]" />
        </Button>
      );
    }

    if (socialLinks.tiktok) {
      buttons.push(
        <Button 
          key="tiktok"
          variant="outline" 
          size="icon"
          className="bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10"
        >
          <span className="w-4 h-4 text-[#9b87f5] text-xs font-bold">TT</span>
        </Button>
      );
    }

    if (socialLinks.kawi) {
      buttons.push(
        <Button 
          key="kwai"
          variant="outline" 
          size="icon"
          className="bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10"
        >
          <span className="w-4 h-4 text-[#9b87f5] text-xs font-bold">K</span>
        </Button>
      );
    }

    return buttons;
  };

  return (
    <div className="w-full max-w-sm flex justify-center gap-1.5 mt-3">
      {renderSocialButtons()}
    </div>
  );
};