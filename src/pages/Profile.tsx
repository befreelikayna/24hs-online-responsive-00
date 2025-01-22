import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { ProfileStats } from "@/components/profile/ProfileStats";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#1A1F2C] via-[#2C2F3E] to-[#1A1F2C] overflow-hidden">
      <Header onLogout={handleLogout} isLoggedIn={isLoggedIn} />

      <main className="flex-1 w-full overflow-hidden">
        <div className="h-full flex flex-col lg:flex-row gap-4 p-4">
          <div className="w-full lg:w-2/3 flex flex-col gap-4 lg:overflow-y-auto scrollbar-hide">
            <ProfileStats />
          </div>

          <div className="w-full lg:w-1/3 h-full overflow-y-auto scrollbar-hide">
            <ProfileForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;