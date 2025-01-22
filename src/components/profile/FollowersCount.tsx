import { Users } from "lucide-react";

export const FollowersCount = () => {
  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-[#2C2F3E]/95 to-[#1A1F2C]/95 px-4 py-2.5 rounded-lg border border-[#9b87f5]/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/20 mx-4 my-3 sm:mx-6">
      <Users className="w-5 h-5 text-[#9b87f5]" />
      <div className="flex flex-col">
        <span className="text-lg font-bold [text-shadow:_0_0_10px_rgb(155_135_245_/_30%)] text-[#9b87f5]">
          42
        </span>
        <span className="text-xs text-[#9b87f5]/70 -mt-0.5">
          Seguidores
        </span>
      </div>
    </div>
  );
};