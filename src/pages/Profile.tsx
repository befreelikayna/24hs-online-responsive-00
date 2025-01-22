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
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C]">
      <Header onLogout={handleLogout} isLoggedIn={isLoggedIn} />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 py-6 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          <div className="w-full lg:w-2/3 h-full overflow-hidden">
            <div className={`h-full ${isMobile ? 'overflow-y-auto pb-6' : 'overflow-y-auto'} scrollbar-hide pr-2`}>
              <ProfileStats />
            </div>
          </div>

          <div className="w-full lg:w-1/3 h-full overflow-hidden">
            <div className={`h-full ${isMobile ? 'overflow-y-auto pb-6' : 'overflow-y-auto'} scrollbar-hide pr-2`}>
              <ProfileForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;