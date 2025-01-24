import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

export const InstallProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isInstalling, setIsInstalling] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setIsInstalling(true);
      simulateProgress();
    };

    const handleAppInstalled = () => {
      setProgress(100);
      setIsInstalling(false);
      toast({
        title: "Instalação Concluída! 🎉",
        description: "O app foi instalado com sucesso! Você já pode começar a usar.",
      });
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [toast]);

  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 500);
  };

  if (!isInstalling) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1A1F2C] p-6 rounded-lg shadow-xl w-[90%] max-w-md border border-[#9b87f5]/20">
        <h3 className="text-[#D6BCFA] text-lg font-semibold mb-4">Instalando 24hs.Online</h3>
        <Progress value={progress} className="h-2 mb-2" />
        <p className="text-[#D6BCFA]/70 text-sm">{progress}% concluído</p>
      </div>
    </div>
  );
};