import { AdminStats } from "@/components/admin/AdminStats";
import { AdminMobileStats } from "@/components/admin/AdminMobileStats";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      {isMobile ? <AdminMobileStats /> : <AdminStats />}
    </div>
  );
};

export default Dashboard;