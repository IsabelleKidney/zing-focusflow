import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

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

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-white/90">
              You're subscribed! Watch for exclusive offers and updates.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Ahead of the Game
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Be the first to access FocusZing updates.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
              required
            />
            <Button 
              type="submit"
              variant="secondary"
              className="bg-white text-orange hover:bg-white/90 font-semibold px-8"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-white/70 text-sm mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;