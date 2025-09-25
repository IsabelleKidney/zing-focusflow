import { useState } from "react";
import { ChevronDown, ChevronUp, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Science = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "15+", label: "Clinical Studies" },
    { icon: <Users className="w-6 h-6" />, value: "10,000+", label: "Users Worldwide" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "87%", label: "Focus Improvement" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Science Behind taVNS
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Backed by extensive research and trusted by professionals worldwide.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-primary mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-8 transition-smooth"
          >
            Learn About taVNS Technology
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 ml-2" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-2" />
            )}
          </Button>

          {isExpanded && (
            <div className="bg-card p-8 rounded-lg shadow-card border border-border/50 text-left max-w-3xl mx-auto animate-in slide-in-from-top-2 duration-300">
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                Transcutaneous Auricular Vagus Nerve Stimulation (taVNS)
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The vagus nerve is the longest cranial nerve in your body, connecting your brain to numerous organs and playing a crucial role in cognitive function, mood regulation, and stress response.
                </p>
                
                <p>
                  taVNS technology delivers gentle electrical stimulation to specific points on the ear that correspond to vagus nerve pathways. This non-invasive approach has been shown to:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enhance attention and concentration</li>
                  <li>Improve working memory performance</li>
                  <li>Reduce mental fatigue and brain fog</li>
                  <li>Increase neuroplasticity and learning capacity</li>
                  <li>Promote calm alertness without jitters</li>
                </ul>
                
                <p>
                  FocusZing's proprietary algorithm delivers precisely calibrated microcurrents that optimize vagus nerve activation for peak cognitive performance, while our integrated audio system enhances the experience with binaural beats and focus-enhancing soundscapes.
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