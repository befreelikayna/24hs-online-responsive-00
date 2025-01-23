import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, Smile } from "lucide-react";
import { useState } from "react";
import EmojiPicker from 'emoji-picker-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ProfileInfoSectionProps {
  formData: {
    name: string;
    username: string;
    email: string;
    bio: string;
  };
  onFormDataChange: (field: string, value: string) => void;
  onSubmit: () => void;
}

export const ProfileInfoSection = ({
  formData,
  onFormDataChange,
  onSubmit
}: ProfileInfoSectionProps) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= 120) {
      onFormDataChange('bio', text);
    }
  };

  const onEmojiClick = (emojiObject: any) => {
    if (formData.bio.length < 120) {
      onFormDataChange('bio', formData.bio + emojiObject.emoji);
    }
  };

  return (
    <div className="w-full space-y-3 mt-3">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[#9b87f5]">Nome</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => onFormDataChange('name', e.target.value)}
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
            onFormDataChange('username', formattedValue);
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
        <div className="flex justify-between items-center">
          <Label htmlFor="bio" className="text-[#9b87f5]">Bio</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8 text-[#9b87f5] hover:text-white hover:bg-[#2C2F3E]"
              >
                <Smile className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 border-none">
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                width="100%"
                height={400}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="relative">
          <Textarea
            id="bio"
            value={formData.bio}
            onChange={handleBioChange}
            className="bg-[#2C2F3E] border-[#E5DEFF]/30 min-h-[120px] max-h-[180px] resize-y whitespace-pre-wrap scrollbar-hide"
            placeholder="Escreva sua bio aqui... (suporta markdown e quebra de linha)"
            maxLength={120}
            rows={7}
          />
          <span className="absolute bottom-2 right-2 text-xs text-[#9b87f5]">
            {formData.bio.length}/120
          </span>
        </div>
      </div>
      <Button 
        onClick={onSubmit}
        variant="outline"
        className="w-full bg-[#2C2F3E] hover:bg-[#252839] border-[#9b87f5]/10 text-[#9b87f5] hover:text-white transition-colors"
      >
        <Save className="w-4 h-4 mr-2" />
        Salvar Alterações
      </Button>
    </div>
  );
};