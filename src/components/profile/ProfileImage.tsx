import { useState, useRef } from "react";
import { User, Camera } from "lucide-react";
import { FollowersCount } from "./FollowersCount";
import { useToast } from "@/components/ui/use-toast";

export const ProfileImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "Erro ao carregar imagem",
          description: "A imagem deve ter menos de 5MB",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
        // Save to localStorage for persistence
        localStorage.setItem('profileImage', reader.result as string);
        
        toast({
          title: "Imagem atualizada!",
          description: "Sua foto de perfil foi alterada com sucesso.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Load image from localStorage on component mount
  useState(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setImageUrl(savedImage);
    }
  });

  return (
    <div className="w-full">
      <FollowersCount />
      <div className="relative group flex justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#D6BCFA] p-1">
          <div 
            className="w-full h-full rounded-full bg-[#1A1F2C] flex items-center justify-center relative overflow-hidden cursor-pointer"
            onClick={handleImageClick}
          >
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-12 h-12 text-[#9b87f5]" />
            )}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
          aria-label="Upload profile picture"
        />
      </div>
    </div>
  );
};