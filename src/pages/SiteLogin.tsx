import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import focuszingLogo from "@/assets/focuszing-logo-clean.png";

export default function SiteLogin() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('verify-site-password', {
        body: { password }
      });

      if (error) throw error;

      if (data.valid) {
        sessionStorage.setItem('site_authenticated', 'true');
        navigate('/');
      } else {
        toast({
          title: "Invalid Password",
          description: "Please check your password and try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Authentication error:', error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center">
            <img src={focuszingLogo} alt="FocusZing" className="h-16 w-auto" />
          </div>
          <CardTitle className="text-2xl">Site Access</CardTitle>
          <CardDescription>
            This site is currently in testing. Please enter the password to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter site password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full"
            />
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !password}
            >
              {isLoading ? "Verifying..." : "Enter Site"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
