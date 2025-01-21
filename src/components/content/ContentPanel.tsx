import { MessageSquare, Users, Video, Music, ThumbsUp, ThumbsDown, Heart } from "lucide-react";
import { AuthPanel } from "@/components/auth/AuthPanel";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  userName: string;
  text: string;
  timestamp: Date;
  likes: number;
  dislikes: number;
  hearts: number;
  userReactions: {
    liked: boolean;
    disliked: boolean;
    hearted: boolean;
  };
}

interface ContentPanelProps {
  activeSection: 'chat' | 'community' | 'lives' | 'music';
  isLoggedIn?: boolean;
  onDemoLogin?: () => void;
}

export const ContentPanel = ({ activeSection, isLoggedIn = false, onDemoLogin }: ContentPanelProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      userName: "Alice",
      text: "Oi pessoal! Tudo bem?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      likes: 2,
      dislikes: 0,
      hearts: 1,
      userReactions: { liked: false, disliked: false, hearted: false }
    },
    {
      id: '2',
      userName: "Bob",
      text: "Opa! Tudo ótimo por aqui!",
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      likes: 1,
      dislikes: 0,
      hearts: 2,
      userReactions: { liked: false, disliked: false, hearted: false }
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  if (!isLoggedIn) {
    return <AuthPanel onDemoLogin={onDemoLogin} />;
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      userName: "Você",
      text: newMessage,
      timestamp: new Date(),
      likes: 0,
      dislikes: 0,
      hearts: 0,
      userReactions: { liked: false, disliked: false, hearted: false }
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleReaction = (messageId: string, reactionType: 'liked' | 'disliked' | 'hearted') => {
    setMessages(messages.map(message => {
      if (message.id === messageId) {
        const newMessage = { ...message };
        const currentState = newMessage.userReactions[reactionType];
        
        // Toggle the reaction
        newMessage.userReactions[reactionType] = !currentState;
        
        // Update the count
        if (reactionType === 'liked') {
          newMessage.likes += currentState ? -1 : 1;
        } else if (reactionType === 'disliked') {
          newMessage.dislikes += currentState ? -1 : 1;
        } else if (reactionType === 'hearted') {
          newMessage.hearts += currentState ? -1 : 1;
        }
        
        return newMessage;
      }
      return message;
    }));
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <section className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10 backdrop-blur-lg h-full lg:sticky lg:top-4">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#9b87f5]/10">
        <h2 className="text-xl font-bold text-white">
          {activeSection === 'chat' && (
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#9b87f5]" />
              <span>Chat ao Vivo</span>
            </div>
          )}
          {activeSection === 'community' && (
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#9b87f5]" />
              <span>Comunidade</span>
            </div>
          )}
          {activeSection === 'lives' && (
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-[#9b87f5]" />
              <span>Lives Disponíveis</span>
            </div>
          )}
          {activeSection === 'music' && (
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-[#9b87f5]" />
              <span>Playlist</span>
            </div>
          )}
        </h2>
      </div>
      <div className="h-[calc(100%-4rem)] overflow-y-auto">
        {activeSection === 'chat' ? (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className="bg-[#1A1F2C]/50 rounded-lg p-4 space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-[#9b87f5]">{message.userName}</span>
                  </div>
                  <p className="text-white/90">{message.text}</p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleReaction(message.id, 'liked')}
                        className={cn(
                          "flex items-center gap-1 text-sm transition-colors",
                          message.userReactions.liked ? "text-[#9b87f5]" : "text-gray-400 hover:text-[#9b87f5]"
                        )}
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>{message.likes}</span>
                      </button>
                      <button
                        onClick={() => handleReaction(message.id, 'disliked')}
                        className={cn(
                          "flex items-center gap-1 text-sm transition-colors",
                          message.userReactions.disliked ? "text-[#9b87f5]" : "text-gray-400 hover:text-[#9b87f5]"
                        )}
                      >
                        <ThumbsDown className="w-4 h-4" />
                        <span>{message.dislikes}</span>
                      </button>
                      <button
                        onClick={() => handleReaction(message.id, 'hearted')}
                        className={cn(
                          "flex items-center gap-1 text-sm transition-colors",
                          message.userReactions.hearted ? "text-[#9b87f5]" : "text-gray-400 hover:text-[#9b87f5]"
                        )}
                      >
                        <Heart className="w-4 h-4" />
                        <span>{message.hearts}</span>
                      </button>
                    </div>
                    <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-[#9b87f5]/10">
              <div className="flex gap-2 items-start">
                <Textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="min-h-[44px] bg-[#1A1F2C]/50 border-[#9b87f5]/20 focus:border-[#9b87f5]/50 resize-none flex-1"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 h-[44px]"
                >
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            {activeSection === 'community' && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <Users className="w-12 h-12 text-[#9b87f5]/30" />
                <p className="text-[#D6BCFA]/70 text-center">
                  Área da comunidade em desenvolvimento...<br/>
                  Em breve você poderá conectar com a comunidade!
                </p>
              </div>
            )}
            {activeSection === 'lives' && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <Video className="w-12 h-12 text-[#9b87f5]/30" />
                <p className="text-[#D6BCFA]/70 text-center">
                  Área das lives em desenvolvimento...<br/>
                  Em breve você poderá acessar mais conteúdo ao vivo!
                </p>
              </div>
            )}
            {activeSection === 'music' && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <Music className="w-12 h-12 text-[#9b87f5]/30" />
                <p className="text-[#D6BCFA]/70 text-center">
                  Área da música em desenvolvimento...<br/>
                  Em breve você poderá curtir suas músicas favoritas!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};