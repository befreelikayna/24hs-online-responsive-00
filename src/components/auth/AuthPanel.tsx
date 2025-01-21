import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserPlus, Key, Mail } from "lucide-react";

interface AuthPanelProps {
  onLogin?: () => void;
  onSignup?: () => void;
}

export const AuthPanel = ({ onLogin, onSignup }: AuthPanelProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to Supabase later
    console.log("Form submitted:", { email, password, name });
    if (isLogin) {
      onLogin?.();
    } else {
      onSignup?.();
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10 backdrop-blur-lg h-full lg:sticky lg:top-4">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#9b87f5]/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          {isLogin ? (
            <>
              <LogIn className="w-5 h-5 text-[#9b87f5]" />
              <span>Login</span>
            </>
          ) : (
            <>
              <UserPlus className="w-5 h-5 text-[#9b87f5]" />
              <span>Cadastro</span>
            </>
          )}
        </h2>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <div className="relative">
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  placeholder="Seu nome completo"
                />
                <UserPlus className="absolute left-3 top-2.5 h-5 w-5 text-[#9b87f5]" />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                placeholder="seu@email.com"
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-[#9b87f5]" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                placeholder="••••••••"
              />
              <Key className="absolute left-3 top-2.5 h-5 w-5 text-[#9b87f5]" />
            </div>
          </div>

          <Button type="submit" className="w-full">
            {isLogin ? "Entrar" : "Cadastrar"}
          </Button>

          <p className="text-center text-sm text-[#D6BCFA]/70">
            {isLogin ? "Ainda não tem uma conta?" : "Já tem uma conta?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#9b87f5] hover:underline"
            >
              {isLogin ? "Cadastre-se" : "Faça login"}
            </button>
          </p>
        </form>
      </div>
    </section>
  );
};