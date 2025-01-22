import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { User, Link, Save, Facebook, Instagram, AtSign, Calendar, Mail, Camera, Users, PenSquare } from "lucide-react";

export const ProfileForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "John Doe",
    username: "@johndoe",
    email: "john@example.com",
    bio: "Frontend Developer",
    facebook: "",
    instagram: "",
    joinDate: "Janeiro 2024"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Perfil atualizado!",
      description: "Suas alterações foram salvas com sucesso.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-lg p-6 shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10">
        <div className="flex flex-col items-center relative">
          <div className="absolute -top-2 -right-2 z-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="profile-info" className="border-none">
                <AccordionTrigger asChild>
                  <div className="p-2 rounded-full bg-[#2C2F3E] hover:bg-[#252839] transition-colors cursor-pointer">
                    <PenSquare className="w-5 h-5 text-[#9b87f5] group-hover:text-[#D6BCFA]" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="absolute top-12 right-0 w-full min-w-[280px] bg-[#2C2F3E] rounded-lg p-4 border border-[#9b87f5]/10 shadow-lg space-y-4">
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#D6BCFA] p-1">
              <div className="w-full h-full rounded-full bg-[#1A1F2C] flex items-center justify-center relative overflow-hidden">
                <User className="w-12 h-12 text-[#9b87f5]" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div className="absolute -top-2 -right-2 flex items-center gap-1.5 bg-[#1A1F2C]/90 px-2 py-1 rounded-full border border-[#9b87f5]/20">
              <Users className="w-4 h-4 text-[#9b87f5] animate-pulse" />
              <span className="text-sm font-semibold [text-shadow:_0_0_10px_rgb(155_135_245_/_30%)] text-[#9b87f5]">
                42
              </span>
              <span className="text-xs text-[#9b87f5]/70">
                Seguidores
              </span>
            </div>
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold text-white">{formData.name}</h2>
            <p className="text-sm text-[#9b87f5]">{formData.username}</p>
          </div>

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
        </div>

        <div className="flex justify-end mt-6">
          <Button type="submit" className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white">
            <Save className="w-4 h-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>
      </div>
    </form>
  );
};