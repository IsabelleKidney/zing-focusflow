import { useState } from "react";
import { Activity, Users, Award, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ceMark from "@/assets/ce-mark.png";

const Science = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    {
      step: "01",
      title: "Clip & Connect",
      description: "Attach the premium earpiece to your ear. The gentle clip sits comfortably on your tragus while the earbud delivers audio."
    },
    {
      step: "02",
      title: "Activate",
      description: "Turn on the handheld controller. Gentle, barely perceptible neurostimulation begins — completely safe and surprisingly relaxing."
    },
    {
      step: "03",
      title: "Perform",
      description: "Work, meditate, or listen to music while taVNS technology activates neural pathways for enhanced focus, calm, and vitality."
    }
  ];

  const stats = [
    { value: "83%", label: "Found it helpful", sublabel: "of trial participants" },
    { value: "20+", label: "Clinical Studies", sublabel: "peer-reviewed research", link: "/Enhanced_Attention_Clinical_Studies.pdf" },
    { value: "CE", label: "Certified Device", sublabel: "European standard", icon: <img src={ceMark} alt="CE Mark" className="h-8 mx-auto" /> },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight text-balance">
            Three Steps to Peak Performance
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            Experience the power of Vagus Nerve Stimulation — backed by decades of clinical research.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-orange/15 mb-4 font-jakarta">{step.step}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-card rounded-2xl border border-border/50"
            >
              {stat.icon ? (
                <div className="mb-3">{stat.icon}</div>
              ) : (
                <div className="text-4xl md:text-5xl font-bold text-orange mb-3">{stat.value}</div>
              )}
              {stat.link ? (
                <a
                  href={stat.link}
                  download="FocusZing_Clinical_Studies.pdf"
                  className="text-sm font-medium text-foreground hover:text-orange transition-colors underline decoration-border hover:decoration-orange"
                >
                  {stat.label}
                </a>
              ) : (
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
              )}
              <div className="text-xs text-muted-foreground mt-1 font-light">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Detail */}
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-muted-foreground hover:text-foreground font-medium gap-2"
          >
            Learn More About taVNS
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="max-w-3xl mx-auto mt-6 bg-card p-8 md:p-10 rounded-2xl border border-border/50 text-left"
            >
              <h3 className="text-xl font-semibold text-foreground mb-5">
                What is taVNS?
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-light">
                <p>
                  Transcutaneous Auricular Vagus Nerve Stimulation (taVNS) is a non-invasive technique that
                  precisely stimulates the vagus nerve through the ear, activating neural pathways implicated in enhanced attentional performance and cognitive function.
                </p>
                <p>
                  Clinical research demonstrates that taVNS can improve attention span, working memory, processing speed,
                  and executive function. The vagus nerve serves as a regulator of the brain's attention networks, making it
                  essential for sustained focus and peak mental performance.
                </p>
                <p>
                  FocusZing's advanced technology combines this proven neuroscience with premium audio integration, creating a
                  comprehensive enhancement system that integrates seamlessly into your daily routine.
                </p>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-6 italic leading-relaxed">
                *Based on Chen et al. (2023) — 20 minutes of taVNS helped participants respond faster and more consistently, with brain signals showing stronger attention-related responses. Published in General Psychiatry.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Science;
