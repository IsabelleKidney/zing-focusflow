import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:support@zingenergy.ie';
  };

  return (
    <section id="support" className="py-24 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="text-center mb-14">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            We're Here to Help
          </h2>
          <p className="text-muted-foreground font-light text-sm max-w-md mx-auto">
            Maximize your FocusZing experience with our dedicated support team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-card-hover transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-5">
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
              className="rounded-full text-xs font-medium gap-1.5"
            >
              Send Email
              <ArrowRight className="w-3 h-3" />
            </Button>
          </div>
          
          <div className="p-8 bg-card rounded-2xl border border-border/50 hover:shadow-card-hover transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-5">
              <ArrowRight className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Performance Center</h4>
            <p className="text-sm text-muted-foreground font-light mb-5">
              Access guides, tutorials, and tips for peak performance.
            </p>
            <Button className="bg-orange hover:bg-orange-dark text-white rounded-full text-xs font-medium gap-1.5">
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
