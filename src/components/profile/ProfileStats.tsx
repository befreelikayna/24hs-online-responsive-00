import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MessageSquare, ThumbsUp, Heart, Users } from "lucide-react";

const data = [
  { name: 'Jan', messages: 40 },
  { name: 'Fev', messages: 65 },
  { name: 'Mar', messages: 45 },
  { name: 'Abr', messages: 80 },
  { name: 'Mai', messages: 55 },
  { name: 'Jun', messages: 70 },
];

export const ProfileStats = () => {
  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] border-[#9b87f5]/10">
        <CardHeader>
          <CardTitle className="text-[#9b87f5]">Atividade Mensal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#9b87f5/20" />
                <XAxis dataKey="name" stroke="#9b87f5" />
                <YAxis stroke="#9b87f5" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#2C2F3E',
                    border: '1px solid rgba(155, 135, 245, 0.1)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="messages" fill="#9b87f5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] border-[#9b87f5]/10">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="bg-[#9b87f5]/10 p-3 rounded-lg mb-3">
                <MessageSquare className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Total de Mensagens</p>
              <p className="text-2xl font-bold text-white">127</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] border-[#9b87f5]/10">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="bg-[#9b87f5]/10 p-3 rounded-lg mb-3">
                <ThumbsUp className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Curtidas Recebidas</p>
              <p className="text-2xl font-bold text-white">324</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] border-[#9b87f5]/10">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="bg-[#9b87f5]/10 p-3 rounded-lg mb-3">
                <Heart className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Reações</p>
              <p className="text-2xl font-bold text-white">45</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#221F26] to-[#1A1F2C] border-[#7E69AB]/20">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="bg-[#7E69AB]/20 p-3 rounded-lg mb-3">
                <Users className="w-6 h-6 text-[#E5DEFF]" />
              </div>
              <p className="text-sm text-[#E5DEFF] mb-1">Seguidores</p>
              <p className="text-2xl font-bold text-[#E5DEFF]">42</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};