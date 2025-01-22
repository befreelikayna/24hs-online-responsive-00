import { User, Camera } from "lucide-react";

export const ProfileImage = () => {
  return (
    <div className="relative group">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#D6BCFA] p-1">
        <div className="w-full h-full rounded-full bg-[#1A1F2C] flex items-center justify-center relative overflow-hidden">
          <User className="w-12 h-12 text-[#9b87f5]" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <Camera className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};