import { Users } from "lucide-react";

export const FollowersCount = () => {
  return (
    <div className="inline-flex items-center gap-1.5 bg-gradient-to-br from-[#2C2F3E]/80 to-[#1A1F2C]/80 px-2.5 py-1 rounded-lg border border-[#D6BCFA]/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#D6BCFA]/10 mb-3">
      <Users className="w-3.5 h-3.5 text-[#D6BCFA]" />
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-[#D6BCFA]">
          42
        </span>
        <span className="text-[9px] text-[#D6BCFA]/70 -mt-0.5">
          Seguidores
        </span>
      </div>
    </div>
  );
};