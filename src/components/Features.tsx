import { Target, Zap, Sun, Brain, Headphones, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" strokeWidth={1.2} />,
      title: "Laser Focus",
      description: "Stay locked in on what matters most with enhanced concentration and serenity.",
    },
    {
      icon: <Zap className="w-6 h-6" strokeWidth={1.2} />,
      title: "Instant Results",
      description: "Notice your attention improve within minutes of putting FocusZing on.",
    },
    {
      icon: <Sun className="w-6 h-6" strokeWidth={1.2} />,
      title: "Charge Your Vitality",
      description: "Generate amazing energy, emotional resilience, and elevated mood with daily use.",
    },
    {
      icon: <Brain className="w-6 h-6" strokeWidth={1.2} />,
      title: "Neurostimulation",
      description: "Precision-engineered microcurrent stimulates your vagus nerve for enhanced attentional performance.",
    },
    {
      icon: <Headphones className="w-6 h-6" strokeWidth={1.2} />,
      title: "Premium Audio",
      description: "Listen to music, sound baths, or podcasts while boosting your brain performance.",
    },
    {
      icon: <Trophy className="w-6 h-6" strokeWidth={1.2} />,
      title: "Own It",
      description: "Finish tasks that drive your ambition, and free up time for what really matters.",
    },
  ];

  return (
    <section id="features" className="py-28 bg-background">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-4">
            Benefits
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            Where Neuroscience<br className="hidden md:block" /> Meets Performance
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto font-light">
            Experience peak productivity powered by neuroscience and immersive sound.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-5 text-orange transition-colors group-hover:border-orange/40 group-hover:bg-orange/5">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
