import { Zap, Brain, Headphones, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "taVNS Technology",
      description: "Clinically proven transcutaneous auricular vagus nerve stimulation to enhance cognitive performance and focus."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Premium Audio",
      description: "High-fidelity audio integration that works seamlessly with your favorite productivity music and sounds."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Microcurrent Therapy",
      description: "Gentle, precisely calibrated microcurrents that safely stimulate your vagus nerve for optimal brain performance."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Instant Focus",
      description: "Feel the difference within minutes. Achieve deeper concentration and sustained mental clarity throughout your day."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionary Focus Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect fusion of neuroscience and audio engineering designed for the modern professional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-smooth transform hover:-translate-y-2 border border-border/50"
            >
              <div className="text-primary mb-4 flex justify-center">
                {feature.icon}
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