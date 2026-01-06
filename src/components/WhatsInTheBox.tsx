import { Package, Zap, BookOpen, Cable } from "lucide-react";
import handheldDevice from "@/assets/handheld-device.png";
import earpiece from "@/assets/earpiece.png";

const WhatsInTheBox = () => {
  const boxContents = [
    {
      icon: <img src={handheldDevice} alt="Controller" className="w-12 h-12 object-contain" />,
      title: "Handheld Controller",
      description: "Intuitive control with multiple stimulation modes"
    },
    {
      icon: <img src={earpiece} alt="Earpiece" className="w-12 h-12 object-contain" />,
      title: "Premium Earpiece",
      description: "Comfortable ear clip with audio integration"
    },
    {
      icon: <Cable className="w-12 h-12 text-orange" />,
      title: "USB-C Charging Cable",
      description: "Fast charging for all-day use"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-orange" />,
      title: "Quick Start Guide",
      description: "Easy setup instructions & tips"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-8 max-w-5xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="w-6 h-6 text-orange" />
            <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-tight">
              What's in the Box
            </h2>
          </div>
          <p className="text-muted-foreground font-light">
            Everything you need to start your focus journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {boxContents.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-background border border-border/30 hover:shadow-card transition-shadow"
            >
              <div className="mb-3 p-2 rounded-full bg-muted/50">
                {item.icon}
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsInTheBox;
