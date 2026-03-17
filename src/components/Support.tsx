import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:support@zingenergy.ie';
  };

  return (
    <section id="support" className="py-20 bg-background">
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground font-light">
            We're here to help you maximize your FocusZing experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-orange p-3 bg-gradient-subtle rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-card-foreground mb-2">Email Support</h4>
                <p className="text-muted-foreground text-sm mb-4">support@zingenergy.ie</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleEmailClick}
                >
                  Send Email
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gradient-subtle rounded-xl border border-border/50">
            <h4 className="font-medium text-foreground mb-3">Ready to Unlock Peak Performance?</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Access our comprehensive performance guide and productivity tutorials.
            </p>
            <Button variant="default" className="bg-gradient-primary">
              Access Performance Center
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
