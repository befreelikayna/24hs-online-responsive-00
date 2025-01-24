import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, MessageSquare, Heart, Activity } from "lucide-react";

const monthlyData = [
  { name: 'Jan', users: 400, messages: 240 },
  { name: 'Fev', users: 300, messages: 139 },
  { name: 'Mar', users: 200, messages: 980 },
  { name: 'Abr', users: 278, messages: 390 },
  { name: 'Mai', users: 189, messages: 480 },
  { name: 'Jun', users: 239, messages: 380 },
];

const activityData = [
  { name: '00h', value: 30 },
  { name: '04h', value: 10 },
  { name: '08h', value: 50 },
  { name: '12h', value: 80 },
  { name: '16h', value: 90 },
  { name: '20h', value: 70 },
];

export const AdminStats = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-4 rounded-lg shadow-lg border border-[#9b87f5]/10">
          <div className="flex items-center gap-4">
            <div className="bg-[#9b87f5]/10 p-3 rounded-lg">
              <Users className="w-6 h-6 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-sm text-[#E5DEFF]">Total de Usuários</p>
              <p className="text-2xl font-bold text-white">2,543</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-4 rounded-lg shadow-lg border border-[#9b87f5]/10">
          <div className="flex items-center gap-4">
            <div className="bg-[#9b87f5]/10 p-3 rounded-lg">
              <MessageSquare className="w-6 h-6 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-sm text-[#E5DEFF]">Mensagens</p>
              <p className="text-2xl font-bold text-white">14,234</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-4 rounded-lg shadow-lg border border-[#9b87f5]/10">
          <div className="flex items-center gap-4">
            <div className="bg-[#9b87f5]/10 p-3 rounded-lg">
              <Heart className="w-6 h-6 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-sm text-[#E5DEFF]">Reações</p>
              <p className="text-2xl font-bold text-white">8,456</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-4 rounded-lg shadow-lg border border-[#9b87f5]/10">
          <div className="flex items-center gap-4">
            <div className="bg-[#9b87f5]/10 p-3 rounded-lg">
              <Activity className="w-6 h-6 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-sm text-[#E5DEFF]">Taxa de Engajamento</p>
              <p className="text-2xl font-bold text-white">67%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] p-4 rounded-lg shadow-lg border border-[#9b87f5]/10">
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-4">Crescimento Mensal</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#9b87f5/10" />
                <XAxis dataKey="name" stroke="#9b87f5" />
                <YAxis stroke="#9b87f5" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#2C2F3E',
                    border: '1px solid rgba(155, 135, 245, 0.1)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="users" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="messages" fill="#D6BCFA" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] p-4 rounded-lg shadow-lg border border-[#9b87f5]/10">
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-4">Atividade por Hora</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#9b87f5/10" />
                <XAxis dataKey="name" stroke="#9b87f5" />
                <YAxis stroke="#9b87f5" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#2C2F3E',
                    border: '1px solid rgba(155, 135, 245, 0.1)',
                    borderRadius: '8px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#9b87f5"
                  strokeWidth={2}
                  dot={{ fill: '#9b87f5', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};