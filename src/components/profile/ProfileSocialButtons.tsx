import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";

export const ProfileSocialButtons = () => {
  return (
    <div className="w-full max-w-sm grid grid-cols-2 gap-4 mt-4">
      <Button variant="outline" className="bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10">
        <Facebook className="w-4 h-4 mr-2" />
        Facebook
      </Button>
      <Button variant="outline" className="bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10">
        <Instagram className="w-4 h-4 mr-2" />
        Instagram
      </Button>
    </div>
  );
};