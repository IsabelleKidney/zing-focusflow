import { Zap, Brain, Headphones, Heart, Moon, Smile } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "taVNS Technology",
      description: "Clinically proven transcutaneous auricular vagus nerve stimulation for natural wellness enhancement."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Integration",
      description: "Seamless audio experience with your favorite music, podcasts, or relaxation sounds while receiving therapy."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Stress Relief",
      description: "Naturally activate your body's relaxation response and reduce daily stress through gentle nerve stimulation."
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Better Sleep",
      description: "Improve sleep quality and fall asleep easier with calming vagus nerve activation before bedtime."
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Brighter Mood",
      description: "Support natural mood regulation and emotional wellbeing through targeted nervous system activation."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description: "Feel the calming effects within minutes. Experience deep relaxation and mental clarity throughout your day."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionary Wellness Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect fusion of neuroscience and audio engineering designed for modern wellness and stress relief.
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