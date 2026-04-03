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
      <section className="py-28" style={{
        background: "linear-gradient(180deg, hsl(20, 18%, 11%) 0%, hsl(22, 14%, 14%) 100%)"
      }}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-md mx-auto">
            <CheckCircle className="w-12 h-12 text-orange mx-auto mb-5" />
            <h3 className="text-2xl font-bold text-white mb-2">You're In.</h3>
            <p className="text-white/50 font-light text-sm">
              Watch your inbox for exclusive updates and early access.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="subscribe" className="relative py-28 md:py-32 overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(20, 18%, 11%) 0%, hsl(22, 14%, 14%) 100%)"
    }}>
      {/* Golden accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsla(35, 100%, 55%, 0.05) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-orange/30" />
            <span className="text-orange text-xs font-semibold tracking-[0.22em] uppercase">
              Stay Ahead
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-orange/30" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Be First to Know
          </h3>
          <p className="text-white/40 mb-9 font-light text-sm">
            Get exclusive updates, early access, and performance tips delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus:border-orange/40 rounded-full px-5 h-12"
              required
            />
            <Button 
              type="button"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-orange to-amber-500 hover:from-orange-dark hover:to-orange text-white font-medium px-7 rounded-full h-12 shadow-glow"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
          
          <p className="text-white/20 text-xs mt-5 font-light">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
