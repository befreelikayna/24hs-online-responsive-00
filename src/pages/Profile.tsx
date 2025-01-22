import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { useIsMobile } from "@/hooks/use-mobile";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isMobile = useIsMobile();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      </div>

      <main className="flex-1 overflow-y-auto mt-[60px] mb-[48px] scrollbar-hide">
        <div className="w-full max-w-[1400px] mx-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <ProfileForm />
            </div>
            <div className="w-full">
              <ProfileStats />
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;