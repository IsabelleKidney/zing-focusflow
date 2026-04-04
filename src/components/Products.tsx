import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Zap, Heart, Target } from "lucide-react";

const Products = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <section id="products" className="relative py-28 md:py-36 overflow-hidden" style={{ background: "linear-gradient(180deg, #45413D, #4D4944)" }}>
      <div className="container mx-auto px-6 md:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(224,120,32,0.3))" }} />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "#E07820" }}>Shop</span>
            <span className="w-10 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(224,120,32,0.3))" }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">The Zing Elate System</h2>
          <p className="text-base text-white/45 max-w-lg mx-auto font-light">Premium neurostimulation technology with three powerful modes.</p>
        </div>

        {/* Three Modes */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="text-center p-6 rounded-2xl" style={{ border: "1px solid rgba(224,120,32,0.15)", background: "rgba(224,120,32,0.04)" }}>
            <Target className="w-8 h-8 mx-auto mb-3" style={{ color: "#E07820" }} />
            <h4 className="text-white font-semibold mb-1">Focus Mode</h4>
            <p className="text-white/40 text-xs font-light">Laser-sharp concentration within minutes</p>
          </div>
          <div className="text-center p-6 rounded-2xl" style={{ border: "1px solid rgba(224,120,32,0.15)", background: "rgba(224,120,32,0.04)" }}>
            <Heart className="w-8 h-8 mx-auto mb-3" style={{ color: "#E07820" }} />
            <h4 className="text-white font-semibold mb-1">Relaxation Mode</h4>
            <p className="text-white/40 text-xs font-light">Deep calm while reading or watching TV</p>
          </div>
          <div className="text-center p-6 rounded-2xl" style={{ border: "1px solid rgba(224,120,32,0.15)", background: "rgba(224,120,32,0.04)" }}>
            <Zap className="w-8 h-8 mx-auto mb-3" style={{ color: "#E07820" }} />
            <h4 className="text-white font-semibold mb-1">Vitality Mode</h4>
            <p className="text-white/40 text-xs font-light">Energy and mood boost with daily practice</p>
          </div>
        </div>

        {/* Main Product Card */}
        <div className="max-w-md mx-auto rounded-2xl overflow-hidden" style={{ border: "2px solid rgba(224,120,32,0.25)", background: "rgba(255,255,255,0.04)" }}>
          <div className="absolute top-4 left-4 z-10">
            <span className="text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #E07820, #E8962A)" }}>Coming Soon</span>
          </div>
          <div className="p-8 pt-14 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Zing Elate Device</h3>
            <p className="text-sm text-white/40 font-light mb-6 leading-relaxed">The complete neurostimulation system for laser focus, deep calm, and sustained energy.</p>
            <div className="mb-5">
              <span className="text-xs text-white/30 uppercase tracking-wider font-light">From</span>
              <p className="text-3xl font-bold text-white mt-1">{"\u20AC"}199</p>
            </div>
            <Button className="w-full rounded-full font-medium text-white" style={{ background: "linear-gradient(135deg, #E07820, #E8962A)" }}>
              Launching Soon
            </Button>

            {/* Collapsible features */}
            <button onClick={() => setShowFeatures(!showFeatures)} className="mt-4 text-xs text-white/40 hover:text-white/60 transition-colors flex items-center gap-1 mx-auto">
              {showFeatures ? "Hide" : "View"} Features {showFeatures ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            {showFeatures && (
              <div className="mt-4 text-left text-xs text-white/40 font-light space-y-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p>{"\u2022"} Advanced taVNS technology for enhanced focus and productivity</p>
                <p>{"\u2022"} Premium audio integration for immersive sound experience</p>
                <p>{"\u2022"} Wireless Bluetooth connectivity</p>
                <p>{"\u2022"} Up to 12 hours of battery life</p>
                <p>{"\u2022"} Ergonomic, discreet design</p>
                <p>{"\u2022"} CE marked and clinically tested</p>
                <p>{"\u2022"} Includes charging case and USB-C cable</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
