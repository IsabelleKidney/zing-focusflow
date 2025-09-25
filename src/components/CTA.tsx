import { Button } from "@/components/ui/button";
import { CheckCircle, Truck, Shield, Headphones } from "lucide-react";

const CTA = () => {
  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "30-day money-back guarantee" },
    { icon: <Truck className="w-5 h-5" />, text: "Free worldwide shipping" },
    { icon: <Shield className="w-5 h-5" />, text: "2-year warranty included" },
    { icon: <Headphones className="w-5 h-5" />, text: "24/7 premium support" }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/40"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Focus?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the productivity revolution. Experience the power of taVNS technology and unlock your true potential.
          </p>
          
          <div className="mb-12">
            <div className="text-6xl font-bold text-primary-foreground mb-2">$299</div>
            <div className="text-primary-foreground/80 text-lg">One-time purchase • No subscriptions</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="font-semibold text-lg px-12">
              Order FocusZing Now
            </Button>
            <Button variant="premium" size="xl" className="font-semibold text-lg px-12">
              Schedule Demo Call
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center text-primary-foreground/90 gap-2">
                {feature.icon}
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;