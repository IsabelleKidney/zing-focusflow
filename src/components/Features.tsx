import { Zap, Brain, Headphones, Target, TrendingUp, Lightbulb } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Neurostimulation",
      description: "FDA-cleared taVNS technology for enhanced cognitive function."
    },
    {
      icon: Headphones,
      title: "Premium Audio",
      description: "High-fidelity sound for focus music and productivity content."
    },
    {
      icon: Target,
      title: "Sustained Focus",
      description: "Maintain concentration for extended work sessions."
    },
    {
      icon: TrendingUp,
      title: "Peak Performance",
      description: "Optimize cognitive output when it matters most."
    },
    {
      icon: Lightbulb,
      title: "Mental Clarity",
      description: "Enhanced creative thinking and problem-solving."
    },
    {
      icon: Zap,
      title: "Immediate Effect",
      description: "Feel the difference within minutes of use."
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Give your mind <span className="italic">a voice</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Advanced neurostimulation meets seamless audio. Built for peak performers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="bg-gradient-primary w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
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