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
      <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.15)] border border-[#9b87f5]/10 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-[#9b87f5] flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Atividade Mensal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#9b87f5/10" />
                <XAxis 
                  dataKey="name" 
                  stroke="#9b87f5" 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#9b87f5" 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#2C2F3E',
                    border: '1px solid rgba(155, 135, 245, 0.1)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    padding: '12px'
                  }}
                  cursor={{ fill: 'rgba(155, 135, 245, 0.1)' }}
                />
                <Bar 
                  dataKey="messages" 
                  fill="url(#colorGradient)" 
                  radius={[6, 6, 0, 0]} 
                >
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9b87f5" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#7E69AB" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.1)] border border-[#9b87f5]/10 backdrop-blur-lg hover:shadow-[0_0_40px_rgba(155,135,245,0.2)] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="bg-[#9b87f5]/10 p-3 rounded-xl mb-3 backdrop-blur-xl">
                <MessageSquare className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <p className="text-sm text-[#E5DEFF] mb-1">Total de Mensagens</p>
              <p className="text-2xl font-bold text-white">127</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.1)] border border-[#9b87f5]/10 backdrop-blur-lg hover:shadow-[0_0_40px_rgba(155,135,245,0.2)] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="bg-[#9b87f5]/10 p-3 rounded-xl mb-3 backdrop-blur-xl">
                <ThumbsUp className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <p className="text-sm text-[#E5DEFF] mb-1">Curtidas Recebidas</p>
              <p className="text-2xl font-bold text-white">324</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.1)] border border-[#9b87f5]/10 backdrop-blur-lg hover:shadow-[0_0_40px_rgba(155,135,245,0.2)] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="bg-[#9b87f5]/10 p-3 rounded-xl mb-3 backdrop-blur-xl">
                <Heart className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <p className="text-sm text-[#E5DEFF] mb-1">Reações</p>
              <p className="text-2xl font-bold text-white">45</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.1)] border border-[#9b87f5]/10 backdrop-blur-lg hover:shadow-[0_0_40px_rgba(155,135,245,0.2)] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="bg-[#9b87f5]/10 p-3 rounded-xl mb-3 backdrop-blur-xl">
                <Users className="w-6 h-6 text-[#E5DEFF]" />
              </div>
              <p className="text-sm text-[#E5DEFF] mb-1">Seguidores</p>
              <p className="text-2xl font-bold text-white">42</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};