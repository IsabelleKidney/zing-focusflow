import { Zap, Brain, Headphones, Target, Trophy, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Laser Focus",
      description: "Stay locked in on what matters most with enhanced concentration and serenity."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "Notice your attention improve within minutes of putting FocusZing on."
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Charge Your Vitality",
      description: "Generate amazing energy, emotional resilience, and elevated mood with daily 45-minute sessions — even while working."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neurostimulation",
      description: "Precision-engineered microcurrent stimulates your vagus nerve — the cranial nerve of calm — for enhanced performance."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Premium Audio",
      description: "Listen to music, soundbaths, podcasts, or focus tracks to amplify your brain performance."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Own Your Day",
      description: "Finish tasks that drive your ambition, and free up time for more of what really matters."
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Why FocusZing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight text-balance">
            Where Neuroscience Meets Performance
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            Six powerful ways FocusZing transforms your daily performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-orange/20 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-5 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
