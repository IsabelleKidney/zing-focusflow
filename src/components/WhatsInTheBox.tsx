import { Cable, BookOpen } from "lucide-react";
import handheldDevice from "@/assets/handheld-device.png";
import earpiece from "@/assets/earpiece.png";

const WhatsInTheBox = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-4">
            Included
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            What's in the Box
          </h2>
          <p className="text-sm text-muted-foreground font-light">
            Everything you need to start your focus journey
          </p>
        </div>

        {/* Product images row */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-secondary rounded-2xl p-10 flex flex-col items-center">
            <img src={handheldDevice} alt="Handheld Controller" className="w-40 h-40 object-contain mb-6" />
            <h3 className="text-sm font-semibold text-foreground mb-1">Handheld Controller</h3>
            <p className="text-xs text-muted-foreground font-light text-center max-w-xs">
              Intuitive control with multiple stimulation modes
            </p>
          </div>
          <div className="bg-secondary rounded-2xl p-10 flex flex-col items-center">
            <img src={earpiece} alt="Premium Earpiece" className="w-40 h-40 object-contain mb-6" />
            <h3 className="text-sm font-semibold text-foreground mb-1">Premium Earpiece</h3>
            <p className="text-xs text-muted-foreground font-light text-center max-w-xs">
              Comfortable ear clip with audio integration
            </p>
          </div>
        </div>

        {/* Accessories */}
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          <div className="flex items-center gap-3 py-3">
            <Cable className="w-5 h-5 text-orange" strokeWidth={1.2} />
            <span className="text-sm text-foreground font-light">USB-C Charging Cable</span>
          </div>
          <div className="flex items-center gap-3 py-3">
            <BookOpen className="w-5 h-5 text-orange" strokeWidth={1.2} />
            <span className="text-sm text-foreground font-light">Quick Start Guide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInTheBox;
