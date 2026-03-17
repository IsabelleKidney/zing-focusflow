import { Shield, RotateCcw, Sparkles, Headphones, FlaskConical, Truck } from "lucide-react";

const trustItems = [
  { icon: <FlaskConical className="w-4 h-4" />, text: "Science-Backed" },
  { icon: <Shield className="w-4 h-4" />, text: "CE Certified" },
  { icon: <Sparkles className="w-4 h-4" />, text: "Premium Build" },
  { icon: <Headphones className="w-4 h-4" />, text: "Audio Integration" },
  { icon: <RotateCcw className="w-4 h-4" />, text: "30-Day Guarantee" },
  { icon: <Truck className="w-4 h-4" />, text: "Free EU Shipping" },
];

const TrustStrip = () => {
  return (
    <section className="py-5 bg-card border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground">
              <span className="text-orange">{item.icon}</span>
              <span className="text-xs font-medium tracking-wide uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
