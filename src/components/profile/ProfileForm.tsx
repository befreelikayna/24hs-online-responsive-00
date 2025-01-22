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
    <section className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10 backdrop-blur-lg">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#9b87f5]/10">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <User className="w-4 h-4 text-[#9b87f5]" />
          <span>Personalizar Perfil</span>
        </h2>
      </div>

      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="personal" className="border-[#9b87f5]/10">
              <AccordionTrigger className="text-sm hover:no-underline">
                Informações Pessoais
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs">Nome Completo</Label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-8 h-9 text-sm"
                      placeholder="Seu nome completo"
                    />
                    <User className="absolute left-2.5 top-2 h-4 w-4 text-[#9b87f5]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs">Email</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-8 h-9 text-sm"
                      placeholder="seu@email.com"
                    />
                    <AtSign className="absolute left-2.5 top-2 h-4 w-4 text-[#9b87f5]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username" className="text-xs">Nome de Usuário</Label>
                  <div className="relative">
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      value={formData.username}
                      onChange={handleChange}
                      className="pl-8 h-9 text-sm"
                      placeholder="@donossosistema"
                    />
                    <AtSign className="absolute left-2.5 top-2 h-4 w-4 text-[#9b87f5]" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="social" className="border-[#9b87f5]/10">
              <AccordionTrigger className="text-sm hover:no-underline">
                Redes Sociais
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="facebook" className="text-xs">Facebook</Label>
                  <div className="relative">
                    <Input
                      id="facebook"
                      name="facebook"
                      type="text"
                      value={formData.facebook}
                      onChange={handleChange}
                      className="pl-8 h-9 text-sm"
                      placeholder="Seu perfil do Facebook"
                    />
                    <Facebook className="absolute left-2.5 top-2 h-4 w-4 text-[#9b87f5]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram" className="text-xs">Instagram</Label>
                  <div className="relative">
                    <Input
                      id="instagram"
                      name="instagram"
                      type="text"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="pl-8 h-9 text-sm"
                      placeholder="Seu perfil do Instagram"
                    />
                    <Instagram className="absolute left-2.5 top-2 h-4 w-4 text-[#9b87f5]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discord" className="text-xs">Discord</Label>
                  <div className="relative">
                    <Input
                      id="discord"
                      name="discord"
                      type="text"
                      value={formData.discord}
                      onChange={handleChange}
                      className="pl-8 h-9 text-sm"
                      placeholder="Seu perfil do Discord"
                    />
                    <Link className="absolute left-2.5 top-2 h-4 w-4 text-[#9b87f5]" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button type="submit" className="w-full h-9 text-sm">
            <Save className="w-4 h-4 mr-2" />
            Salvar Alterações
          </Button>
        </form>
      </div>
    </section>
  );
};