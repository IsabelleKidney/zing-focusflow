import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowRight } from "lucide-react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-md mx-auto">
            <CheckCircle className="w-12 h-12 text-orange mx-auto mb-5" />
            <h3 className="text-2xl font-bold text-white mb-2">You're In.</h3>
            <p className="text-white/60 font-light text-sm">
              Watch your inbox for exclusive updates and early access.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="subscribe" className="py-24 md:py-28 bg-foreground">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <div className="max-w-lg mx-auto">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Stay Ahead
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Be First to Know
          </h3>
          <p className="text-white/50 mb-8 font-light text-sm">
            Get exclusive updates, early access, and performance tips delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/8 border-white/10 text-white placeholder:text-white/30 focus:border-orange/50 rounded-full px-5 h-12"
              required
            />
            <Button 
              type="submit"
              className="bg-orange hover:bg-orange-dark text-white font-medium px-7 rounded-full h-12"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </form>
          
          <p className="text-white/25 text-xs mt-5 font-light">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
