import { Shield, RotateCcw, Sparkles, Headphones, FlaskConical } from "lucide-react";

const trustItems = [
  { icon: <FlaskConical className="w-4 h-4" />, text: "Science-Backed" },
  { icon: <Shield className="w-4 h-4" />, text: "CE Certified" },
  { icon: <Sparkles className="w-4 h-4" />, text: "Premium Build" },
  { icon: <Headphones className="w-4 h-4" />, text: "Audio Integration" },
  { icon: <RotateCcw className="w-4 h-4" />, text: "30-Day Guarantee" },
];

const TrustStrip = () => {
  return (
    <section className="py-5 border-b border-border/40" style={{
      background: "linear-gradient(90deg, hsl(34, 24%, 95%) 0%, hsl(38, 30%, 97%) 50%, hsl(34, 24%, 95%) 100%)"
    }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-muted-foreground">
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
