import { useState } from "react";
import { Activity, Users, Award, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceMark from "@/assets/ce-mark.png";

const Science = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="how-it-works" className="py-28 bg-secondary">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-4">
            The Science
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
            Experience the power of transcutaneous auricular Vagus Nerve Stimulation (taVNS) technology.
          </p>
        </div>

        {/* Trust badges */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mx-auto mb-4">
              <Activity className="w-5 h-5 text-orange" strokeWidth={1.2} />
            </div>
            <p className="text-sm font-medium text-foreground mb-1">Faster Performance</p>
            <p className="text-xs text-muted-foreground font-light">Increased Consistency*</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mx-auto mb-4">
              <Users className="w-5 h-5 text-orange" strokeWidth={1.2} />
            </div>
            <a
              href="/Enhanced_Attention_Clinical_Studies.pdf"
              download="FocusZing_Clinical_Studies.pdf"
              className="block"
            >
              <p className="text-3xl font-bold text-foreground mb-1">20+</p>
              <p className="text-xs text-muted-foreground font-light underline decoration-border hover:decoration-foreground/40 transition-colors">Clinical Studies</p>
            </a>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mx-auto mb-4">
              <Award className="w-5 h-5 text-orange" strokeWidth={1.2} />
            </div>
            <img src={ceMark} alt="CE Mark" className="h-10 mx-auto mb-1" />
            <p className="text-xs text-muted-foreground font-light">Certified Device</p>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-full px-8 py-3 text-sm font-medium border-border hover:border-foreground/30"
          >
            Learn More About taVNS
            {isExpanded ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
          </Button>

          {isExpanded && (
            <div className="max-w-3xl mx-auto mt-10 text-left space-y-4 text-sm text-muted-foreground leading-relaxed animate-accordion-down">
              <p>
                Transcutaneous Auricular Vagus Nerve Stimulation (taVNS) is a non-invasive technique that
                stimulates the vagus nerve through the ear, activating neural pathways for enhanced attentional performance.
              </p>
              <p>
                Clinical research demonstrates taVNS can improve attention span, working memory, processing speed,
                and executive function. The vagus nerve regulates the brain's attention networks, making it essential for sustained focus.
              </p>
              <p className="text-xs italic text-muted-foreground/70">
                *Based on Chen et al. (2023) — taVNS helped people respond faster and more consistently on attention tasks. Published in General Psychiatry.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Science;
