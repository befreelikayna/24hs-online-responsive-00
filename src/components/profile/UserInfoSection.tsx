import { User, Calendar, MessageSquare, Heart, Facebook, Instagram, ThumbsUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const UserInfoSection = () => {
  const [followersCount, setFollowersCount] = useState(42);

  return (
    <div className="w-full space-y-2 mt-2">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#D6BCFA] flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-semibold text-white">John Doe</h4>
            <p className="text-sm text-gray-400">Member since 2024</p>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="bg-[#9b87f5]/10 hover:bg-[#9b87f5]/20 text-[#9b87f5]"
          >
            <Facebook className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="bg-[#9b87f5]/10 hover:bg-[#9b87f5]/20 text-[#9b87f5]"
          >
            <Instagram className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="bg-[#9b87f5]/10 hover:bg-[#9b87f5]/20 text-[#9b87f5]"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12A6 6 0 1 0 9 0a6 6 0 0 0 0 12z" />
              <path d="M12.5 4.5v15M15 7v9" />
            </svg>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="bg-[#9b87f5]/10 hover:bg-[#9b87f5]/20 text-[#9b87f5]"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 bg-[#2C2F3E] p-3 rounded-lg">
          <Calendar className="w-5 h-5 text-[#7E69AB]" />
          <p className="text-xs text-gray-400">Joined in</p>
          <p className="text-sm text-white font-medium">Janeiro 2024</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-4 rounded-xl shadow-lg border border-[#9b87f5]/10 transition-transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="bg-[#9b87f5]/10 p-2 rounded-lg mb-2">
                <MessageSquare className="w-5 h-5 text-[#9b87f5]" />
              </div>
              <p className="text-xs text-gray-400 mb-1">Messages</p>
              <p className="text-sm text-white font-semibold">127</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-4 rounded-xl shadow-lg border border-[#9b87f5]/10 transition-transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="bg-[#9b87f5]/10 p-2 rounded-lg mb-2">
                <ThumbsUp className="w-5 h-5 text-[#9b87f5]" />
              </div>
              <p className="text-xs text-gray-400 mb-1">Likes</p>
              <p className="text-sm text-white font-semibold">324</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#2C2F3E] to-[#252839] p-4 rounded-xl shadow-lg border border-[#9b87f5]/10 transition-transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="bg-[#9b87f5]/10 p-2 rounded-lg mb-2">
                <Heart className="w-5 h-5 text-[#9b87f5]" />
              </div>
              <p className="text-xs text-gray-400 mb-1">Reactions</p>
              <p className="text-sm text-white font-semibold">45</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#221F26] to-[#1A1F2C] p-4 rounded-xl shadow-lg border border-[#7E69AB]/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(126,105,171,0.3)] relative overflow-hidden">
            <div className="flex flex-col items-center relative z-10">
              <div className="bg-[#7E69AB]/20 p-2 rounded-lg mb-2 backdrop-blur-sm">
                <Users className="w-5 h-5 text-[#E5DEFF]" />
              </div>
              <p className="text-xs text-[#E5DEFF] mb-1 font-medium">Followers</p>
              <p className="text-sm text-[#E5DEFF] font-bold">{followersCount}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7E69AB]/10 to-transparent animate-shimmer"></div>
          </div>
        </div>

        <div className="bg-[#2C2F3E] p-3 rounded-lg">
          <h5 className="text-sm text-[#7E69AB] font-medium mb-1">About</h5>
          <p className="text-xs text-gray-400">
            Active community member, always participating in discussions and sharing knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};