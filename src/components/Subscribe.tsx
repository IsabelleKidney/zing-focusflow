import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

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
      <section id="subscribe" className="py-24 bg-secondary">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-md mx-auto">
            <CheckCircle className="w-12 h-12 text-orange mx-auto mb-4" />
            <h3 className="text-2xl font-light text-foreground mb-2">Thank You!</h3>
            <p className="text-sm text-muted-foreground font-light">
              You're subscribed! Watch for exclusive offers and updates.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="subscribe" className="py-24 bg-secondary">
      <div className="container mx-auto px-8 text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-4">
            Newsletter
          </p>
          <h3 className="text-3xl md:text-4xl font-light text-foreground mb-3 tracking-tight">
            Stay Ahead of the Game
          </h3>
          <p className="text-sm text-muted-foreground mb-8 font-light">
            Be the first to access FocusZing updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground/60 rounded-full px-5 h-11 text-sm"
              required
            />
            <Button
              type="submit"
              className="bg-orange hover:bg-orange-dark text-orange-foreground rounded-full px-8 h-11 text-sm font-semibold"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4 font-light">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
