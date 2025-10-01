import { Zap, Brain, Headphones, Target, TrendingUp, Lightbulb } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "taVNS Technology",
      description: "Clinically proven transcutaneous auricular vagus nerve stimulation for enhanced cognitive performance and focus."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Premium Audio Integration",
      description: "High-fidelity audio experience with your favorite productivity music, focus soundscapes, or business podcasts."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Laser Focus",
      description: "Achieve unprecedented levels of concentration and mental clarity for peak performance in any task."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Enhanced Productivity",
      description: "Maximize your output and efficiency with sustained attention spans and elevated cognitive function."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Breakthrough",
      description: "Unlock your creative potential and innovative thinking for problem-solving and strategic planning."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description: "Feel the focus enhancement within minutes. Experience immediate cognitive boost and sustained performance."
    }
  ];

  return (
    <section id="features" className="py-32 bg-background">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight">
            Revolutionary Focus Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Experience the perfect fusion of neuroscience and audio engineering designed for peak performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="text-orange mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-subtle flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-normal text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light text-sm">
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