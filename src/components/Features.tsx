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
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionary Focus Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect fusion of neuroscience and audio engineering designed for peak performance and success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-smooth transform hover:-translate-y-2 border border-border/50"
            >
              <div className="text-orange mb-4 flex justify-center">
                <div className="p-4 bg-gradient-primary rounded-full shadow-lg transform hover:scale-110 transition-smooth">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
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