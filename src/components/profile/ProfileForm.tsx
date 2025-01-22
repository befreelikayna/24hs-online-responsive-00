import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
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
    // This will be connected to Supabase later
    console.log("Form submitted:", formData);
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram atualizadas com sucesso!",
    });
  };

  return (
    <section className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10 backdrop-blur-lg">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#9b87f5]/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <User className="w-5 h-5 text-[#9b87f5]" />
          <span>Personalizar Perfil</span>
        </h2>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10"
                  placeholder="Seu nome completo"
                />
                <User className="absolute left-3 top-2.5 h-5 w-5 text-[#9b87f5]" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                  placeholder="seu@email.com"
                />
                <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-[#9b87f5]" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Nome de Usuário</Label>
              <div className="relative">
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className="pl-10"
                  placeholder="@donossosistema"
                />
                <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-[#9b87f5]" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#9b87f5]/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#1A1F2C] px-2 text-muted-foreground">
                Redes Sociais
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook</Label>
              <div className="relative">
                <Input
                  id="facebook"
                  name="facebook"
                  type="text"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="pl-10"
                  placeholder="Seu perfil do Facebook"
                />
                <Facebook className="absolute left-3 top-2.5 h-5 w-5 text-[#9b87f5]" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram</Label>
              <div className="relative">
                <Input
                  id="instagram"
                  name="instagram"
                  type="text"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="pl-10"
                  placeholder="Seu perfil do Instagram"
                />
                <Instagram className="absolute left-3 top-2.5 h-5 w-5 text-[#9b87f5]" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="discord">Discord</Label>
              <div className="relative">
                <Input
                  id="discord"
                  name="discord"
                  type="text"
                  value={formData.discord}
                  onChange={handleChange}
                  className="pl-10"
                  placeholder="Seu perfil do Discord"
                />
                <Link className="absolute left-3 top-2.5 h-5 w-5 text-[#9b87f5]" />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">
            <Save className="w-4 h-4 mr-2" />
            Salvar Alterações
          </Button>
        </form>
      </div>
    </section>
  );
};