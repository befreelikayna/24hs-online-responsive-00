import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { User, Link, Save, Facebook, Instagram, AtSign } from "lucide-react";

export const ProfileForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "@donossosistema",
    facebook: "",
    instagram: "",
    discord: "",
    tiktok: "",
    kwai: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram atualizadas com sucesso!",
    });
  };

  return (
    <section className="bg-gradient-to-br from-[#2C2F3E]/90 to-[#1A1F2C]/90 rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/5 backdrop-blur-lg transition-all duration-300">
      <div className="flex items-center justify-between p-3 sm:px-4 sm:py-3 border-b border-[#9b87f5]/5">
        <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <User className="w-4 h-4 text-[#9b87f5]" />
          <span>Personalizar Perfil</span>
        </h2>
      </div>

      <div className="p-3 sm:p-4">
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="personal" className="border-[#9b87f5]/5 group">
              <AccordionTrigger className="text-xs sm:text-sm hover:no-underline py-2 sm:py-3 px-4 rounded-lg bg-[#2C2F3E]/30 hover:bg-[#2C2F3E]/50 transition-all duration-300 group-hover:text-[#9b87f5]">
                Informações Pessoais
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-4 px-2 animate-accordion-down">
                <div className="space-y-1.5 transform transition-all duration-300 hover:translate-x-1">
                  <Label htmlFor="name" className="text-[10px] sm:text-xs text-[#9b87f5]">Nome Completo</Label>
                  <div className="relative group">
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-7 sm:pl-8 h-8 sm:h-9 text-xs sm:text-sm bg-background/30 border-[#9b87f5]/10 focus-visible:ring-[#9b87f5]/20 focus-visible:border-[#9b87f5]/20 transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                    <User className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-[#9b87f5]/30 group-hover:text-[#9b87f5]/50 transition-colors duration-300" />
                  </div>
                </div>

                <div className="space-y-1.5 transform transition-all duration-300 hover:translate-x-1">
                  <Label htmlFor="email" className="text-[10px] sm:text-xs text-[#9b87f5]">Email</Label>
                  <div className="relative group">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-7 sm:pl-8 h-8 sm:h-9 text-xs sm:text-sm bg-background/30 border-[#9b87f5]/10 focus-visible:ring-[#9b87f5]/20 focus-visible:border-[#9b87f5]/20 transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                    <AtSign className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-[#9b87f5]/30 group-hover:text-[#9b87f5]/50 transition-colors duration-300" />
                  </div>
                </div>

                <div className="space-y-1.5 transform transition-all duration-300 hover:translate-x-1">
                  <Label htmlFor="username" className="text-[10px] sm:text-xs text-[#9b87f5]">Nome de Usuário</Label>
                  <div className="relative group">
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      value={formData.username}
                      onChange={handleChange}
                      className="pl-7 sm:pl-8 h-8 sm:h-9 text-xs sm:text-sm bg-background/30 border-[#9b87f5]/10 focus-visible:ring-[#9b87f5]/20 focus-visible:border-[#9b87f5]/20 transition-all duration-300"
                      placeholder="@donossosistema"
                    />
                    <AtSign className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-[#9b87f5]/30 group-hover:text-[#9b87f5]/50 transition-colors duration-300" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="social" className="border-[#9b87f5]/5 group">
              <AccordionTrigger className="text-xs sm:text-sm hover:no-underline py-2 sm:py-3 px-4 rounded-lg bg-[#2C2F3E]/30 hover:bg-[#2C2F3E]/50 transition-all duration-300 group-hover:text-[#9b87f5]">
                Redes Sociais
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-4 px-2 animate-accordion-down">
                {[
                  { name: "facebook", icon: Facebook, label: "Facebook", placeholder: "Seu perfil do Facebook" },
                  { name: "instagram", icon: Instagram, label: "Instagram", placeholder: "Seu perfil do Instagram" },
                  { name: "tiktok", icon: () => (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3 sm:h-4 sm:w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 12A6 6 0 1 0 9 0a6 6 0 0 0 0 12z" />
                      <path d="M12.5 4.5v15M15 7v9" />
                    </svg>
                  ), label: "TikTok", placeholder: "Seu perfil do TikTok" },
                  { name: "kwai", icon: () => (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3 sm:h-4 sm:w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  ), label: "Kwai", placeholder: "Seu perfil do Kwai" },
                  { name: "discord", icon: Link, label: "Discord", placeholder: "Seu perfil do Discord" }
                ].map((social) => (
                  <div key={social.name} className="space-y-1.5 transform transition-all duration-300 hover:translate-x-1">
                    <Label htmlFor={social.name} className="text-[10px] sm:text-xs text-[#9b87f5]">{social.label}</Label>
                    <div className="relative group">
                      <Input
                        id={social.name}
                        name={social.name}
                        type="text"
                        value={formData[social.name as keyof typeof formData]}
                        onChange={handleChange}
                        className="pl-7 sm:pl-8 h-8 sm:h-9 text-xs sm:text-sm bg-background/30 border-[#9b87f5]/10 focus-visible:ring-[#9b87f5]/20 focus-visible:border-[#9b87f5]/20 transition-all duration-300"
                        placeholder={social.placeholder}
                      />
                      {typeof social.icon === 'function' ? (
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[#9b87f5]/30 group-hover:text-[#9b87f5]/50 transition-colors duration-300">
                          <social.icon />
                        </div>
                      ) : (
                        <social.icon className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-[#9b87f5]/30 group-hover:text-[#9b87f5]/50 transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button 
            type="submit" 
            className="w-full h-8 sm:h-9 text-xs sm:text-sm bg-[#9b87f5]/20 hover:bg-[#9b87f5]/30 border border-[#9b87f5]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Salvar Alterações
          </Button>
        </form>
      </div>
    </section>
  );
};