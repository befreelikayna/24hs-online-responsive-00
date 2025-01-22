import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProfileForm } from "@/components/profile/ProfileForm";

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
          <div className="w-full max-w-3xl mx-auto">
            <ProfileForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;