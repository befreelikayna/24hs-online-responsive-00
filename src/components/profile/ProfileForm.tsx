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
    <section className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/5 backdrop-blur-lg">
      <div className="flex items-center justify-between p-3 sm:px-4 sm:py-3 border-b border-[#9b87f5]/5">
        <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <User className="w-4 h-4 text-[#9b87f5]" />
          <span>Personalizar Perfil</span>
        </h2>
      </div>

      <div className="p-3 sm:p-4">
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="personal" className="border-[#9b87f5]/5">
              <AccordionTrigger className="text-xs sm:text-sm hover:no-underline py-2 sm:py-3">
                Informações Pessoais
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-[10px] sm:text-xs">Nome Completo</Label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-7 sm:pl-8 h-8 sm:h-9 text-xs sm:text-sm bg-background/50 border-[#9b87f5]/20 focus-visible:ring-[#9b87f5]/30 focus-visible:border-[#9b87f5]/30"
                      placeholder="Seu nome completo"
                    />
                    <User className="absolute left-2 top-2 h-3 w-3 sm:h-4 sm:w-4 text-[#9b87f5]/70" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-[10px] sm:text-xs">Email</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-7 sm:pl-8 h-8 sm:h-9 text-xs sm:text-sm bg-background/50 border-[#9b87f5]/20 focus-visible:ring-[#9b87f5]/30 focus-visible:border-[#9b87f5]/30"
                      placeholder="seu@email.com"
                    />
                    <AtSign className="absolute left-2 top-2 h-3 w-3 sm:h-4 sm:w-4 text-[#9b87f5]/70" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="username" className="text-[10px] sm:text-xs">Nome de Usuário</Label>
                  <div className="relative">
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      value={formData.username}
                      onChange={handleChange}
                      className="pl-7 sm:pl-8 h-8 sm:h-9 text-xs sm:text-sm bg-background/50 border-[#9b87f5]/20 focus-visible:ring-[#9b87f5]/30 focus-visible:border-[#9b87f5]/30"
                      placeholder="@donossosistema"
                    />
                    <AtSign className="absolute left-2 top-2 h-3 w-3 sm:h-4 sm:w-4 text-[#9b87f5]/70" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="social" className="border-[#9b87f5]/5">
              <AccordionTrigger className="text-xs sm:text-sm hover:no-underline py-2 sm:py-3">
                Redes Sociais
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                <div className="space-y-1.5">
                  <Label htmlFor="facebook" className="text-[10px] sm:text-xs">Facebook</Label>
                  <div className="relative">
                    <Input
                      id="facebook"
                      name="facebook"
                      type="text"
                      value={formData.facebook}
                      onChange={handleChange}
                      className="pl-7 sm:pl-8 h-8 sm:h-9 text-xs sm:text-sm bg-background/50 border-[#9b87f5]/20 focus-visible:ring-[#9b87f5]/30 focus-visible:border-[#9b87f5]/30"
                      placeholder="Seu perfil do Facebook"
                    />
                    <Facebook className="absolute left-2 top-2 h-3 w-3 sm:h-4 sm:w-4 text-[#9b87f5]/70" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="instagram" className="text-[10px] sm:text-xs">Instagram</Label>
                  <div className="relative">
                    <Input
                      id="instagram"
                      name="instagram"
                      type="text"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="pl-7 sm:pl-8 h-8 sm:h-9 text-xs sm:text-sm bg-background/50 border-[#9b87f5]/20 focus-visible:ring-[#9b87f5]/30 focus-visible:border-[#9b87f5]/30"
                      placeholder="Seu perfil do Instagram"
                    />
                    <Instagram className="absolute left-2 top-2 h-3 w-3 sm:h-4 sm:w-4 text-[#9b87f5]/70" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="discord" className="text-[10px] sm:text-xs">Discord</Label>
                  <div className="relative">
                    <Input
                      id="discord"
                      name="discord"
                      type="text"
                      value={formData.discord}
                      onChange={handleChange}
                      className="pl-7 sm:pl-8 h-8 sm:h-9 text-xs sm:text-sm bg-background/50 border-[#9b87f5]/20 focus-visible:ring-[#9b87f5]/30 focus-visible:border-[#9b87f5]/30"
                      placeholder="Seu perfil do Discord"
                    />
                    <Link className="absolute left-2 top-2 h-3 w-3 sm:h-4 sm:w-4 text-[#9b87f5]/70" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button type="submit" className="w-full h-8 sm:h-9 text-xs sm:text-sm bg-[#9b87f5]/20 hover:bg-[#9b87f5]/30 border border-[#9b87f5]/20">
            <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Salvar Alterações
          </Button>
        </form>
      </div>
    </section>
  );
};