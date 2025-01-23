import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, Smile } from "lucide-react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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

const formatMarkdown = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<em>$1</em>')
    .replace(/\^\^(.*?)\^\^/g, '<sup>$1</sup>')
    .replace(/~~(.*?)~~/g, '<del>$1</del>');
};

export const ProfileInfoSection = ({
  formData,
  onFormDataChange,
  onSubmit
}: ProfileInfoSectionProps) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const lines = text.split('\n');
    
    if (lines.length <= 7) {
      if (text.length <= 120) {
        onFormDataChange('bio', text);
      }
    } else if (e.nativeEvent.inputType === 'insertLineBreak') {
      e.preventDefault();
    }
  };

  const onEmojiSelect = (emoji: any) => {
    const lines = formData.bio.split('\n');
    if (lines.length <= 7 && formData.bio.length < 120) {
      onFormDataChange('bio', formData.bio + emoji.native);
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
        <Label htmlFor="bio" className="text-[#9b87f5]">Bio</Label>
        <div className="relative">
          <div className="relative">
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={handleBioChange}
              className="bg-[#2C2F3E] border-[#E5DEFF]/30 min-h-[120px] max-h-[180px] resize-y whitespace-pre-wrap scrollbar-hide pr-10"
              placeholder="Escreva sua bio aqui... (suporta markdown e quebra de linha)"
              maxLength={120}
              rows={7}
            />
            <div 
              className="absolute inset-0 pointer-events-none bg-[#2C2F3E] border border-[#E5DEFF]/30 rounded-md px-3 py-2 overflow-auto scrollbar-hide"
              dangerouslySetInnerHTML={{
                __html: formatMarkdown(formData.bio || '<span class="text-white/40">Escreva sua bio aqui... (suporta markdown e quebra de linha)</span>')
              }}
              style={{
                zIndex: -1,
                opacity: formData.bio ? 0.4 : 0.2
              }}
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 text-[#9b87f5] hover:text-white hover:bg-[#2C2F3E]/50 rounded-full"
              >
                <Smile className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 border-none bg-transparent shadow-2xl w-[280px] sm:w-[320px] max-w-[95vw]">
              <div className="bg-[#2C2F3E] rounded-lg overflow-hidden border-4 border-[#9b87f5]/20">
                <Picker
                  data={data}
                  onEmojiSelect={onEmojiSelect}
                  theme="dark"
                  skinTonePosition="none"
                  navPosition="none"
                  previewPosition="none"
                  searchPosition="none"
                  maxFrequentRows={2}
                  perLine={7}
                />
              </div>
            </DialogContent>
          </Dialog>
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