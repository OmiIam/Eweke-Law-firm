
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light to-light/50 p-4">
      <div className="max-w-md w-full text-center bg-white rounded-lg shadow-card p-8 md:p-10 border border-bluegray/10">
        <div className="w-20 h-20 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={32} className="text-info" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-serif">404</h1>
        <p className="text-lg text-bluegray mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild variant="default" className="bg-info hover:bg-info/90 text-white">
          <Link to="/" className="inline-flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
