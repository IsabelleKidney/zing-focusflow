import { Zap, Brain, Headphones, Target, Trophy, Sun } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Laser Focus",
      description: "Stay locked in on what matters most with enhanced concentration and serenity."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description: "Notice your attention improve within minutes of putting FocusZing on."
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Charge Your Vitality",
      description: "To generate amazing energy, emotional resilience, and elevated mood, use daily for 45 minutes with vocal meditation or 'ommm' humming - even while working!"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neurostimulation",
      description: "Precision-engineered microcurrent stimulates your vagus nerve—the cranial nerve of calm—for enhanced attentional performance."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Premium Audio Integration",
      description: "Listen to your favourite music, sound bath, podcast or focus tracks to boost your brain performance."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Own It",
      description: "Finish tasks that drive your ambition, and free up time for more of what really matters."
    }
  ];

  return (
    <section id="features" className="py-32 bg-background">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight">
            Where Neuroscience Meets Performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Experience peak productivity powered by neuroscience and immersive sound.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" style={{ perspective: "1000px" }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group transition-transform duration-300 ease-out hover:[transform:rotateX(-5deg)_rotateY(5deg)_translateZ(10px)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-orange">
                  <div className="w-10 h-10 rounded-full bg-gradient-subtle flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-normal text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light text-sm ml-[52px] max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-2">
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