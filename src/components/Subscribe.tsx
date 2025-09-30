import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic here
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section id="subscribe" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {isSubscribed ? (
            <div className="text-center animate-fade-in">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-light text-foreground mb-4">
                You're in
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Welcome to the FocusZing community.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
                Stay <span className="italic">informed</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 font-light">
                Exclusive offers and insights delivered to your inbox.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-6 text-base bg-card border-border/50 font-light"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-gradient-primary hover:bg-orange text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Subscribe
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-6 font-light">
                Unsubscribe anytime.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;