import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordRequired, setPasswordRequired] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      // First check if password protection is enabled
      try {
        const { data } = await supabase.functions.invoke('verify-site-password', {
          body: { password: '' }
        });
        
        // If we get "Site password not configured", password protection is disabled
        if (data?.error === 'Site password not configured') {
          setPasswordRequired(false);
          setIsAuthenticated(true);
          return;
        }
        
        // Password protection is enabled
        setPasswordRequired(true);
        const authenticated = sessionStorage.getItem('site_authenticated') === 'true';
        setIsAuthenticated(authenticated);
      } catch (err) {
        console.error('Auth check error:', err);
        // On error, assume no password protection
        setPasswordRequired(false);
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null || passwordRequired === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  if (passwordRequired && !isAuthenticated) {
    return <Navigate to="/site-login" replace />;
  }

  return <>{children}</>;
}
