import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <section id="support" className="py-28 bg-background">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-4">
            Help
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-sm text-muted-foreground font-light">
            We're here to help you maximize your FocusZing experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-5">
              <Mail className="w-4 h-4 text-orange" strokeWidth={1.2} />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Email Support</h4>
            <p className="text-xs text-muted-foreground mb-4 font-light">support@zingenergy.ie</p>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-xs font-medium border-border hover:border-foreground/30"
              onClick={() => window.location.href = 'mailto:support@zingenergy.ie'}
            >
              Send Email <ArrowRight className="ml-1 w-3 h-3" />
            </Button>
          </div>

          <div className="p-8 rounded-2xl bg-secondary">
            <h4 className="text-sm font-semibold text-foreground mb-2">Peak Performance Guide</h4>
            <p className="text-xs text-muted-foreground mb-4 font-light">
              Access our comprehensive performance guide and productivity tutorials.
            </p>
            <Button className="bg-orange hover:bg-orange-dark text-orange-foreground rounded-full text-xs font-semibold px-6">
              Access Guide <ArrowRight className="ml-1 w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
