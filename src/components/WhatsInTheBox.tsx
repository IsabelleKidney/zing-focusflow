import { Package, Cable, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import handheldDevice from "@/assets/handheld-device.png";
import earpiece from "@/assets/earpiece.png";

const WhatsInTheBox = () => {
  const boxContents = [
    {
      icon: <img src={handheldDevice} alt="Controller" className="w-16 h-16 object-contain" />,
      title: "Handheld Controller",
      description: "Intuitive control with multiple stimulation modes"
    },
    {
      icon: <img src={earpiece} alt="Earpiece" className="w-16 h-16 object-contain" />,
      title: "Premium Earpiece",
      description: "Comfortable ear clip with integrated audio"
    },
    {
      icon: <Cable className="w-10 h-10 text-orange" />,
      title: "USB-C Cable",
      description: "Fast charging for all-day use"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-orange" />,
      title: "Quick Start Guide",
      description: "Easy setup instructions & tips"
    }
  ];

  return (
    <section className="py-24 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <div className="text-center mb-14">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Inside the Box
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
            Everything You Need
          </h2>
          <p className="text-muted-foreground font-light text-sm max-w-md mx-auto">
            A complete system, beautifully packaged and ready to use.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {boxContents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-orange/15 hover:shadow-card transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-xl bg-secondary">
                {item.icon}
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsInTheBox;
