import { Brain, Headphones, Target, Trophy, Heart, Sparkles } from "lucide-react";

const Features = () => {
  const mainModes = [
    { icon: <Target className="w-8 h-8" />, title: "Instant Laser Focus Mode", description: "Notice your attention improve within minutes of putting Zing Elate on. Stay locked in on what matters most with enhanced concentration and serenity." },
    { icon: <Heart className="w-8 h-8" />, title: "Deeper Relaxation Mode", description: "Sink into deep relaxation while reading, watching your favourite programme, or simply taking a moment to rest." },
    { icon: <Sparkles className="w-8 h-8" />, title: "Charge Your Vitality Mode", description: "Generate amazing energy, emotional resilience, and elevated mood with daily 45-minute sessions – even while working!" },
  ];

  const subFeatures = [
    { icon: <Brain className="w-5 h-5" style={{ color: "#E07820" }} />, title: "Neurostimulation", description: "Precision microcurrent stimulates your vagus nerve – the cranial nerve of calm." },
    { icon: <Headphones className="w-5 h-5" style={{ color: "#E07820" }} />, title: "Premium Audio", description: "Listen to music, soundbaths, or focus tracks to amplify brain performance." },
    { icon: <Trophy className="w-5 h-5" style={{ color: "#E07820" }} />, title: "Own Your Day", description: "Finish tasks that drive your ambition, free up time for what matters." },
  ];

  return (
    <section id="features" className="py-28 md:py-36 relative" style={{ background: "linear-gradient(180deg, #FAF7F3, #F7F3EE 50%, #F3EDE6)" }}>
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(224,120,32,0.4))" }} />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "#E07820" }}>Why Zing Elate</span>
            <span className="w-10 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(224,120,32,0.4))" }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">Three Powerful Modes</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-light">Where neuroscience meets performance. Choose your mode and transform your day.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {mainModes.map((f, i) => (
            <div key={i} className="group p-7 md:p-8 rounded-2xl bg-white/80 border border-white/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "rgba(255,255,255,0.6)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, rgba(224,120,32,0.12), rgba(224,120,32,0.05))", color: "#E07820" }}>
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{f.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {subFeatures.map((f, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white/50 border border-white/40">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(224,120,32,0.08)" }}>
                {f.icon}
              </div>
              <div>
                <h4 className="text-[13px] font-semibold text-foreground mb-1">{f.title}</h4>
                <p className="text-xs text-muted-foreground font-light">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
