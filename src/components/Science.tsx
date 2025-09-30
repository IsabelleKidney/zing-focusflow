import { useState } from "react";
import { Activity, Users, Award, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Science = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { value: "94%", label: "Focus Improvement" },
    { value: "50+", label: "Clinical Studies" },
    { value: "FDA", label: "Cleared Technology" }
  ];

  return (
    <section id="science" className="py-24 bg-muted">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Clinically <span className="italic">validated</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            FDA-cleared neurostimulation technology. Trusted by professionals worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-light text-foreground mb-2 bg-gradient-primary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-light text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-8 px-8 py-3 text-base font-light"
          >
            Learn about taVNS
            {isExpanded ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
          </Button>

          {isExpanded && (
            <div className="max-w-3xl mx-auto bg-background p-10 rounded-lg animate-accordion-down">
              <h3 className="text-2xl font-light text-foreground mb-6">
                What is taVNS?
              </h3>
              <div className="text-left space-y-4 text-muted-foreground leading-relaxed font-light text-sm">
                <p>
                  Transcutaneous Auricular Vagus Nerve Stimulation is a non-invasive technique that 
                  stimulates the vagus nerve through the ear, activating neural pathways for enhanced cognitive function.
                </p>
                <p>
                  Clinical research shows taVNS improves attention span, working memory, and processing speed. 
                  The vagus nerve regulates the brain's attention networks, essential for sustained focus and performance.
                </p>
                <p>
                  FocusZing combines this neuroscience with premium audio integration for seamless cognitive enhancement.
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