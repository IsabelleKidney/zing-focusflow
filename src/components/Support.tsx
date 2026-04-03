import { Mail, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:support@zingenergy.ie';
  };

  return (
    <section id="support" className="relative py-28 md:py-32 section-divider" style={{
      background: "linear-gradient(180deg, hsl(38, 28%, 97%) 0%, hsl(36, 24%, 95%) 100%)"
    }}>
      <div className="container mx-auto px-6 md:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-orange/40" />
            <span className="text-orange text-xs font-semibold tracking-[0.22em] uppercase">
              Support
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-orange/40" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            We're Here to Help
          </h2>
          <p className="text-muted-foreground font-light text-sm max-w-md mx-auto">
            Maximize your Focus Zing experience with our dedicated support team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/60 hover:border-orange/12 hover:shadow-warm-lg transition-all duration-400 premium-card">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/10 to-orange/5 flex items-center justify-center text-orange mb-5">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Email Support</h4>
            <p className="text-sm text-muted-foreground font-light mb-5">
              support@zingenergy.ie
            </p>
            <Button 
              variant="outline"
              size="sm"
              onClick={handleEmailClick}
              className="rounded-full text-xs font-medium gap-1.5 border-border/60 hover:border-orange/30 hover:text-orange"
            >
              Send Email
              <ArrowRight className="w-3 h-3" />
            </Button>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/60 hover:border-orange/12 hover:shadow-warm-lg transition-all duration-400 premium-card">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/10 to-orange/5 flex items-center justify-center text-orange mb-5">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Performance Center</h4>
            <p className="text-sm text-muted-foreground font-light mb-5">
              Access guides, tutorials, and tips for peak performance.
            </p>
            <Button className="bg-gradient-to-r from-orange to-amber-500 hover:from-orange-dark hover:to-orange text-white rounded-full text-xs font-medium gap-1.5">
              Explore Resources
              <ArrowRight className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
