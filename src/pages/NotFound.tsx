import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-surface border border-border/50">
            <AlertTriangle className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-hero text-foreground">404</h1>
          <div className="space-y-2">
            <p className="text-h3 text-muted">Page not found</p>
            <p className="text-body text-muted max-w-md">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>
        
        <Button
          onClick={() => window.location.href = '/'}
          className="bg-primary text-primary-foreground hover:bg-primary/90 glow-hover"
        >
          <Home className="mr-2 h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
