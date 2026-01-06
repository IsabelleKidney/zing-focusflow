import { useState } from "react";
import { Activity, Users, Award, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceMark from "@/assets/ce-mark.png";

const Science = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { icon: <Activity className="w-8 h-8" />, value: "Faster Performance", label: "Increased Consistency*" },
    { icon: <Users className="w-8 h-8" />, value: <span className="text-5xl font-bold">20+</span>, label: "Clinical Studies", link: "/Enhanced_Attention_Clinical_Studies.pdf" },
    { icon: <Award className="w-8 h-8" />, value: <img src={ceMark} alt="CE Mark" className="h-14 mx-auto scale-125" />, label: "Certified Device" }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Experience the power of transcutaneous auricular Vagus Nerve Stimulation (taVNS) technology supported by decades of research showing positive effects on cognitive performance, mood and focus.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto italic">
            What does it feel like? A gentle, barely perceptible tingle on your ear — completely safe and surprisingly relaxing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-card rounded-xl shadow-card border border-border/50">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-gradient-primary rounded-full text-white/70">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2 min-h-[4.5rem] flex items-center justify-center">{stat.value}</div>
              {stat.link ? (
                <a 
                  href={stat.link}
                  download="FocusZing_Clinical_Studies.pdf"
                  className="text-muted-foreground font-medium hover:text-foreground transition-colors underline decoration-muted-foreground/30 hover:decoration-muted-foreground/50 cursor-pointer"
                >
                  {stat.label}
                </a>
              ) : (
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              )}
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
                  Transcutaneous Auricular Vagus Nerve Stimulation (taVNS) is a revolutionary, non-invasive technique that 
                  precisely stimulates the vagus nerve through the ear, activating neural pathways implicated in enhanced attentional performance and cognitive function.
                </p>
                <p>
                  Clinical research demonstrates that taVNS can improve attention span, working memory, processing speed, 
                  and executive function. The vagus nerve serves as a regulator of the brain's attention networks, making it 
                  essential for sustained focus and peak mental performance. Further, VNS by amplifying the vagus nerve's performance can boost activity in parts of the brain associated with mood enhancement and therapeutic effect.
                </p>
                <p>
                  FocusZing's advanced technology combines this proven neuroscience with premium audio integration, creating a 
                  comprehensive attentional enhancement system that integrates seamlessly into your routine.
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                *Based on the Chen et al. (2023) randomized study, 20 minutes of taVNS helped people respond faster and more consistently on an attention task — and their brain signals showed stronger attention-related responses. In other words: stimulation made the brain more 'ready to pay attention', and performance improved measurably. Published in General Psychiatry.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Science;