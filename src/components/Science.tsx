import { useState } from "react";
import { Activity, Users, Award, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Science = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { icon: <Activity className="w-8 h-8" />, value: "85%", label: "Stress Reduction" },
    { icon: <Users className="w-8 h-8" />, value: "50+", label: "Clinical Studies" },
    { icon: <Award className="w-8 h-8" />, value: "FDA", label: "Cleared Technology" }
  ];

  return (
    <section id="science" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Science-Backed Wellness
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our taVNS technology is supported by decades of research and proven clinical results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-card rounded-xl shadow-card border border-border/50">
              <div className="text-orange mb-4 flex justify-center">
                <div className="p-4 bg-gradient-primary rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-8 px-8 py-3 text-lg"
          >
            Learn More About taVNS
            {isExpanded ? <ChevronUp className="ml-2 w-5 h-5" /> : <ChevronDown className="ml-2 w-5 h-5" />}
          </Button>

          {isExpanded && (
            <div className="max-w-4xl mx-auto bg-gradient-subtle p-8 rounded-xl border border-border/50 animate-accordion-down">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                What is taVNS?
              </h3>
              <div className="text-left space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Transcutaneous Auricular Vagus Nerve Stimulation (taVNS) is a non-invasive therapy that gently stimulates 
                  the vagus nerve through the ear. This innovative approach activates your body's natural relaxation response.
                </p>
                <p>
                  Clinical research demonstrates that taVNS can significantly reduce stress hormones, improve mood regulation, 
                  enhance sleep quality, and support overall wellbeing. The vagus nerve is your body's longest cranial nerve, 
                  connecting your brain to major organs and playing a crucial role in your parasympathetic nervous system.
                </p>
                <p>
                  Zing's advanced technology combines this proven therapy with premium audio integration, creating a 
                  comprehensive wellness experience that fits seamlessly into your daily routine.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Science;