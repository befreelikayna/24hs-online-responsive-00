import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background min-h-screen z-50">
      <div className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">
        <span className="text-primary">24hs</span>
        <span className="text-accent">.Online</span>
      </div>
      
      <div className="animate-bounce-slow">
        <Play className="w-16 h-16 text-primary" />
      </div>
    </div>
  );
};

export default SplashScreen;