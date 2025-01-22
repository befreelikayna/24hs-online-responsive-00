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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C]">
      <Header onLogout={handleLogout} isLoggedIn={isLoggedIn} />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3 space-y-6 order-2 lg:order-1">
            <div className="overflow-y-auto scrollbar-hide">
              <ProfileStats />
            </div>
          </div>

          <div className="w-full lg:w-1/3 order-1 lg:order-2 lg:sticky lg:top-6 lg:h-[calc(100vh-8rem)]">
            <div className="overflow-y-auto scrollbar-hide h-full">
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