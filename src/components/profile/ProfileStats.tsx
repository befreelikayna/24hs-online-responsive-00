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
    <div className="space-y-3">
      <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] rounded-lg shadow-[0_0_20px_rgba(155,135,245,0.1)] border border-[#9b87f5]/10 backdrop-blur-lg">
        <CardHeader className="p-4">
          <CardTitle className="text-[#9b87f5] text-lg flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Atividade Mensal
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#9b87f5/10" />
                <XAxis 
                  dataKey="name" 
                  stroke="#9b87f5" 
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9b87f5" 
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#2C2F3E',
                    border: '1px solid rgba(155, 135, 245, 0.1)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    padding: '8px'
                  }}
                  cursor={{ fill: 'rgba(155, 135, 245, 0.1)' }}
                />
                <Bar 
                  dataKey="messages" 
                  fill="url(#colorGradient)" 
                  radius={[4, 4, 0, 0]} 
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

      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] rounded-lg shadow-[0_0_15px_rgba(155,135,245,0.08)] border border-[#9b87f5]/10 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#9b87f5]/10 p-2 rounded-lg backdrop-blur-xl">
                <MessageSquare className="w-4 h-4 text-[#9b87f5]" />
              </div>
              <div>
                <p className="text-xs text-[#E5DEFF] mb-0.5">Total de Mensagens</p>
                <p className="text-xl font-bold text-white">127</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] rounded-lg shadow-[0_0_15px_rgba(155,135,245,0.08)] border border-[#9b87f5]/10 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#9b87f5]/10 p-2 rounded-lg backdrop-blur-xl">
                <ThumbsUp className="w-4 h-4 text-[#9b87f5]" />
              </div>
              <div>
                <p className="text-xs text-[#E5DEFF] mb-0.5">Curtidas Recebidas</p>
                <p className="text-xl font-bold text-white">324</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] rounded-lg shadow-[0_0_15px_rgba(155,135,245,0.08)] border border-[#9b87f5]/10 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#9b87f5]/10 p-2 rounded-lg backdrop-blur-xl">
                <Heart className="w-4 h-4 text-[#9b87f5]" />
              </div>
              <div>
                <p className="text-xs text-[#E5DEFF] mb-0.5">Reações</p>
                <p className="text-xl font-bold text-white">45</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] rounded-lg shadow-[0_0_15px_rgba(155,135,245,0.08)] border border-[#9b87f5]/10 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#9b87f5]/10 p-2 rounded-lg backdrop-blur-xl">
                <Users className="w-4 h-4 text-[#E5DEFF]" />
              </div>
              <div>
                <p className="text-xs text-[#E5DEFF] mb-0.5">Seguidores</p>
                <p className="text-xl font-bold text-white">42</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};