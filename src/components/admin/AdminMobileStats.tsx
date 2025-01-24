import { Card } from "@/components/ui/card";
import { Users, MessageSquare, Heart, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const activityData = [
  { name: '00h', value: 30 },
  { name: '04h', value: 10 },
  { name: '08h', value: 50 },
  { name: '12h', value: 80 },
  { name: '16h', value: 90 },
  { name: '20h', value: 70 },
];

export const AdminMobileStats = () => {
  return (
    <div className="space-y-3 p-2">
      <div className="grid grid-cols-2 gap-2">
        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-2 rounded-lg shadow-lg border border-[#9b87f5]/10">
          <div className="flex items-center gap-2">
            <div className="bg-[#9b87f5]/10 p-1.5 rounded-lg">
              <Users className="w-4 h-4 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-xs text-[#E5DEFF]">Usuários</p>
              <p className="text-lg font-bold text-white">2,543</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-2 rounded-lg shadow-lg border border-[#9b87f5]/10">
          <div className="flex items-center gap-2">
            <div className="bg-[#9b87f5]/10 p-1.5 rounded-lg">
              <MessageSquare className="w-4 h-4 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-xs text-[#E5DEFF]">Msgs</p>
              <p className="text-lg font-bold text-white">14,234</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-2 rounded-lg shadow-lg border border-[#9b87f5]/10">
          <div className="flex items-center gap-2">
            <div className="bg-[#9b87f5]/10 p-1.5 rounded-lg">
              <Heart className="w-4 h-4 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-xs text-[#E5DEFF]">Reações</p>
              <p className="text-lg font-bold text-white">8,456</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-2 rounded-lg shadow-lg border border-[#9b87f5]/10">
          <div className="flex items-center gap-2">
            <div className="bg-[#9b87f5]/10 p-1.5 rounded-lg">
              <Activity className="w-4 h-4 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-xs text-[#E5DEFF]">Engajamento</p>
              <p className="text-lg font-bold text-white">67%</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-[#2C2F3E] to-[#1A1F2C] p-3 rounded-lg shadow-lg border border-[#9b87f5]/10">
        <h3 className="text-sm font-semibold text-[#9b87f5] mb-2">Atividade por Hora</h3>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#9b87f5/10" />
              <XAxis dataKey="name" stroke="#9b87f5" fontSize={10} />
              <YAxis stroke="#9b87f5" fontSize={10} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#2C2F3E',
                  border: '1px solid rgba(155, 135, 245, 0.1)',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#9b87f5"
                strokeWidth={2}
                dot={{ fill: '#9b87f5', strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};