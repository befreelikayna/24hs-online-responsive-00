import { Users } from "lucide-react";

export const FollowersCount = () => {
  return (
    <div className="absolute -top-10 left-4 flex items-center gap-2 bg-gradient-to-br from-[#2C2F3E]/80 to-[#1A1F2C]/80 px-3 py-1.5 rounded-lg border border-[#D6BCFA]/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#D6BCFA]/10">
      <Users className="w-4 h-4 text-[#D6BCFA]" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-[#D6BCFA]">
          42
        </span>
        <span className="text-[10px] text-[#D6BCFA]/70 -mt-0.5">
          Seguidores
        </span>
      </div>
    </div>
  );
};