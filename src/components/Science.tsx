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
    <section id="how-it-works" className="relative py-28 md:py-36 overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(20, 18%, 11%) 0%, hsl(22, 14%, 14%) 50%, hsl(24, 12%, 16%) 100%)"
    }}>
      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsla(30, 80%, 50%, 0.06) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-18 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-orange/30" />
            <span className="text-orange text-xs font-semibold tracking-[0.22em] uppercase">
              How It Works
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-orange/30" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight text-balance">
            Three Steps to Peak Performance
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto font-light leading-relaxed">
            Experience the power of Vagus Nerve Stimulation — backed by decades of clinical research.
          </p>
        </div>

        {/* Steps — connected by a subtle line */}
        <div className="relative grid md:grid-cols-3 gap-10 md:gap-12 mb-24">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-orange/10 via-orange/20 to-orange/10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center relative"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-orange/20 bg-orange/5 mb-6">
                <span className="text-2xl font-bold text-orange">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed font-light max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-orange/15 transition-all duration-300"
            >
              {stat.icon ? (
                <div className="mb-3">{stat.icon}</div>
              ) : (
                <div className="text-4xl md:text-5xl font-bold text-orange mb-3">{stat.value}</div>
              )}
              {stat.link ? (
                <a
                  href={stat.link}
                  download="Focus Zing_Clinical_Studies.pdf"
                  className="text-sm font-medium text-white/80 hover:text-orange transition-colors underline decoration-white/20 hover:decoration-orange"
                >
                  {stat.label}
                </a>
              ) : (
                <div className="text-sm font-medium text-white/80">{stat.label}</div>
              )}
              <div className="text-xs text-white/35 mt-1.5 font-light">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Detail */}
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-white/40 hover:text-white/70 font-medium gap-2 hover:bg-white/5"
          >
            Learn More About taVNS
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="max-w-3xl mx-auto mt-6 p-8 md:p-10 rounded-2xl border border-white/8 bg-white/[0.03] text-left"
            >
              <h3 className="text-xl font-semibold text-white mb-5">
                What is taVNS?
              </h3>
              <div className="space-y-4 text-sm text-white/55 leading-relaxed font-light">
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
                  Focus Zing's advanced technology combines this proven neuroscience with premium audio integration, creating a
                  comprehensive enhancement system that integrates seamlessly into your daily routine.
                </p>
              </div>
              <p className="text-xs text-white/30 mt-6 italic leading-relaxed">
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
