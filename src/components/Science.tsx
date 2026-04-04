import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceMarkOrange from "@/assets/ce-mark-orange.png";

const Science = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    { step: "01", title: "Clip & Connect", description: "The gentle clip sits comfortably on your ear delivering a mild microcurrent and soothing audio." },
    { step: "02", title: "Activate", description: "On the handheld controller, choose Focus, Relax or Boost and your preferred soundbath. Gentle, barely perceptible neurostimulation begins – completely safe and surprisingly relaxing." },
    { step: "03", title: "Perform", description: "Work, meditate, or listen to music while neuromodulation technology activates neural pathways for enhanced focus, calm, and vitality." },
  ];

  return (
    <section id="how-it-works" className="relative py-28 md:py-36 overflow-hidden" style={{ background: "linear-gradient(180deg, #45413D, #4D4944)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse, hsla(30,80%,50%,0.05), transparent 70%)" }} />
      <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(224,120,32,0.3))" }} />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "#E07820" }}>How It Works</span>
            <span className="w-10 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(224,120,32,0.3))" }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">Three Steps to Peak Performance</h2>
          <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto font-light">Experience the power of Vagus Nerve Stimulation – backed by decades of clinical research.</p>
        </div>

        {/* Anatomy SVG */}
        <svg viewBox="0 0 620 290" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[600px] mx-auto mb-16">
          <path d="M210 32 C185 35 158 50 142 80 C128 106 126 138 135 166 C142 186 155 198 168 206 L168 240 C168 243 171 245 174 245 L246 245 C249 245 252 243 252 240 L252 206 C265 198 278 186 285 166 C294 138 292 106 278 80 C262 50 240 35 210 32Z" fill="rgba(100,190,220,0.12)" stroke="rgba(100,190,220,0.38)" strokeWidth="1.5"/>
          {/* PFC bubble - centered at top of head */}
          <ellipse cx="210" cy="45" rx="22" ry="15" fill="rgba(224,120,32,0.05)" stroke="rgba(224,120,32,0.18)" strokeWidth="0.8"/>
          <text x="210" y="49" fill="rgba(255,255,255,0.50)" fontSize="8" fontWeight="400" textAnchor="middle">PFC</text>
          <path d="M210 153 C210 120 210 88 210 60" stroke="#E07820" strokeWidth="1" strokeDasharray="4 4" opacity="0.22"><animate attributeName="stroke-dashoffset" values="0;-16" dur="2.5s" repeatCount="indefinite"/></path>
          <circle r="2" fill="#E07820" opacity="0.35"><animateMotion dur="2.8s" repeatCount="indefinite" path="M210 153 C210 120 210 88 210 60"/></circle>
          {/* Left ear */}
          <path d="M126 128 C114 126 106 132 104 142 C102 152 106 162 112 168 C118 174 124 172 128 166 C132 160 134 150 132 140 C131 134 129 130 126 128Z" fill="rgba(100,190,220,0.08)" stroke="rgba(100,190,220,0.40)" strokeWidth="1.5"/>
          <path d="M122 142 C118 144 116 150 118 156 C120 160 124 162 127 158" fill="none" stroke="rgba(100,190,220,0.45)" strokeWidth="1.2"/>
          <circle cx="124" cy="150" r="5" fill="#E07820" opacity="0.9"/>
          <circle cx="124" cy="150" r="9" fill="none" stroke="#E07820" opacity="0.35" strokeWidth="1"><animate attributeName="r" values="9;15;9" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.35;0;0.35" dur="2s" repeatCount="indefinite"/></circle>
          {/* Right ear */}
          <path d="M294 128 C306 126 314 132 316 142 C318 152 314 162 308 168 C302 174 296 172 292 166 C288 160 286 150 288 140 C289 134 291 130 294 128Z" fill="rgba(100,190,220,0.08)" stroke="rgba(100,190,220,0.40)" strokeWidth="1.5"/>
          <path d="M298 142 C302 144 304 150 302 156 C300 160 296 162 293 158" fill="none" stroke="rgba(100,190,220,0.45)" strokeWidth="1.2"/>
          <circle cx="296" cy="150" r="5" fill="#E07820" opacity="0.9"/>
          <circle cx="296" cy="150" r="9" fill="none" stroke="#E07820" opacity="0.35" strokeWidth="1"><animate attributeName="r" values="9;15;9" dur="2s" repeatCount="indefinite" begin="0.5s"/><animate attributeName="opacity" values="0.35;0;0.35" dur="2s" repeatCount="indefinite" begin="0.5s"/></circle>
          {/* Brainstem */}
          <ellipse cx="210" cy="165" rx="16" ry="14" fill="rgba(224,120,32,0.15)" stroke="#E07820" strokeWidth="1.5" opacity="0.8"/>
          <ellipse cx="210" cy="165" rx="16" ry="14" fill="none" stroke="#E07820" strokeWidth="0.5" opacity="0.25"><animate attributeName="rx" values="16;22;16" dur="2.5s" repeatCount="indefinite"/><animate attributeName="ry" values="14;20;14" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite"/></ellipse>
          {/* Signal: left ear to brainstem */}
          <path d="M129 150 C148 150 168 153 193 160 L200 163" stroke="#E07820" strokeWidth="2" strokeDasharray="5 3" opacity="0.6"><animate attributeName="stroke-dashoffset" values="0;-16" dur="1.5s" repeatCount="indefinite"/></path>
          <circle r="3" fill="#E07820" opacity="0.9"><animateMotion dur="1.5s" repeatCount="indefinite" path="M129 150 C148 150 168 153 193 160 L200 163"/></circle>
          {/* Signal: right ear to brainstem */}
          <path d="M291 150 C272 150 252 153 227 160 L220 163" stroke="#E07820" strokeWidth="2" strokeDasharray="5 3" opacity="0.6"><animate attributeName="stroke-dashoffset" values="0;-16" dur="1.5s" repeatCount="indefinite" begin="0.5s"/></path>
          <circle r="3" fill="#E07820" opacity="0.9"><animateMotion dur="1.5s" repeatCount="indefinite" begin="0.5s" path="M291 150 C272 150 252 153 227 160 L220 163"/></circle>
          {/* AMY */}
          <ellipse cx="168" cy="122" rx="14" ry="10" fill="rgba(224,120,32,0.05)" stroke="rgba(224,120,32,0.18)" strokeWidth="0.8"/>
          <text x="168" y="126" fill="rgba(255,255,255,0.50)" fontSize="7" fontWeight="400" textAnchor="middle">AMY</text>
          <path d="M202 156 C195 145 182 132 174 128" stroke="#E07820" strokeWidth="1" strokeDasharray="4 4" opacity="0.22"><animate attributeName="stroke-dashoffset" values="0;-16" dur="2.5s" repeatCount="indefinite" begin="0.4s"/></path>
          <circle r="2" fill="#E07820" opacity="0.35"><animateMotion dur="2.8s" repeatCount="indefinite" begin="0.4s" path="M202 156 C195 145 182 132 174 128"/></circle>
          {/* VTA */}
          <ellipse cx="192" cy="92" rx="13" ry="9" fill="rgba(224,120,32,0.05)" stroke="rgba(224,120,32,0.18)" strokeWidth="0.8"/>
          <text x="192" y="96" fill="rgba(255,255,255,0.50)" fontSize="7" fontWeight="400" textAnchor="middle">VTA</text>
          <path d="M208 153 C204 135 200 115 195 101" stroke="#E07820" strokeWidth="1" strokeDasharray="4 4" opacity="0.22"><animate attributeName="stroke-dashoffset" values="0;-16" dur="2.5s" repeatCount="indefinite" begin="0.2s"/></path>
          <circle r="2" fill="#E07820" opacity="0.35"><animateMotion dur="2.8s" repeatCount="indefinite" begin="0.2s" path="M208 153 C204 135 200 115 195 101"/></circle>
          {/* LC */}
          <ellipse cx="248" cy="115" rx="13" ry="9" fill="rgba(224,120,32,0.05)" stroke="rgba(224,120,32,0.18)" strokeWidth="0.8"/>
          <text x="248" y="119" fill="rgba(255,255,255,0.50)" fontSize="7" fontWeight="400" textAnchor="middle">LC</text>
          <path d="M220 156 C228 145 238 130 245 122" stroke="#E07820" strokeWidth="1" strokeDasharray="4 4" opacity="0.22"><animate attributeName="stroke-dashoffset" values="0;-16" dur="2.5s" repeatCount="indefinite" begin="0.6s"/></path>
          <circle r="2" fill="#E07820" opacity="0.35"><animateMotion dur="2.8s" repeatCount="indefinite" begin="0.6s" path="M220 156 C228 145 238 130 245 122"/></circle>
          {/* Labels */}
          <text x="87" y="148" fill="rgba(255,255,255,0.55)" fontSize="10" fontWeight="400" textAnchor="end">Earpiece</text>
          <text x="210" y="200" fill="rgba(255,255,255,0.55)" fontSize="10" fontWeight="400" textAnchor="middle">Brainstem</text>
          {/* Outcome cards */}
          <g transform="translate(370, 35)"><rect x="0" y="0" width="225" height="46" rx="10" fill="rgba(224,120,32,0.10)" stroke="rgba(224,120,32,0.22)" strokeWidth="1"/><text x="38" y="18" fill="rgba(255,255,255,0.85)" fontSize="12" fontWeight="500">Enhanced Focus</text><text x="38" y="34" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="300">Sharper attention &amp; clarity</text></g>
          <g transform="translate(370, 93)"><rect x="0" y="0" width="225" height="46" rx="10" fill="rgba(224,120,32,0.10)" stroke="rgba(224,120,32,0.22)" strokeWidth="1"/><text x="38" y="18" fill="rgba(255,255,255,0.85)" fontSize="12" fontWeight="500">Deep Calm</text><text x="38" y="34" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="300">Reduced stress response</text></g>
          <g transform="translate(370, 151)"><rect x="0" y="0" width="225" height="46" rx="10" fill="rgba(224,120,32,0.10)" stroke="rgba(224,120,32,0.22)" strokeWidth="1"/><text x="38" y="18" fill="rgba(255,255,255,0.85)" fontSize="12" fontWeight="500">Elevated Mood</text><text x="38" y="34" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="300">Dopamine &amp; endorphin release</text></g>
          <g transform="translate(370, 209)"><rect x="0" y="0" width="225" height="46" rx="10" fill="rgba(224,120,32,0.10)" stroke="rgba(224,120,32,0.22)" strokeWidth="1"/><text x="38" y="18" fill="rgba(255,255,255,0.85)" fontSize="12" fontWeight="500">Enhanced Energy</text><text x="38" y="34" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="300">Increased alertness</text></g>
          <path d="M214 58 C265 52 320 50 370 55" stroke="rgba(224,120,32,0.08)" strokeWidth="0.8" strokeDasharray="4 4"/>
          <path d="M182 122 C270 118 330 116 370 115" stroke="rgba(224,120,32,0.08)" strokeWidth="0.8" strokeDasharray="4 4"/>
          <path d="M205 92 C270 102 330 140 370 172" stroke="rgba(224,120,32,0.08)" strokeWidth="0.8" strokeDasharray="4 4"/>
          <path d="M261 115 C300 145 340 195 370 228" stroke="rgba(224,120,32,0.08)" strokeWidth="0.8" strokeDasharray="4 4"/>
        </svg>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-24 relative">
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px" style={{ background: "linear-gradient(90deg, rgba(224,120,32,0.1), rgba(224,120,32,0.2), rgba(224,120,32,0.1))" }} />
          {steps.map((s, i) => (
            <div key={i} className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border mb-6" style={{ borderColor: "rgba(224,120,32,0.2)", background: "rgba(224,120,32,0.05)" }}>
                <span className="text-2xl font-bold" style={{ color: "#E07820" }}>{s.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed font-light max-w-xs mx-auto">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <div className="text-center p-8 rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}>
            <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: "#E07820" }}>83%</div>
            <div className="text-sm font-medium text-white/80">Found it helpful</div>
            <div className="text-xs text-white/40 mt-1.5 font-light">of trial participants</div>
          </div>
          <div className="text-center p-8 rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}>
            <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: "#E07820" }}>20+</div>
            <a href="/Enhanced_Attention_Clinical_Studies.pdf" download className="text-sm font-medium text-white/80 hover:underline">Clinical Studies</a>
            <div className="text-xs text-white/40 mt-1.5 font-light">peer-reviewed research</div>
          </div>
          <div className="text-center p-8 rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}>
            <div className="text-4xl md:text-5xl font-bold mb-3 flex items-center justify-center" style={{ color: "#E07820" }}>
              <img src={ceMarkOrange} alt="CE mark" className="h-[1.6em] w-auto" />
            </div>
            <div className="text-sm font-medium text-white/80">Certified Device</div>
            <div className="text-xs text-white/40 mt-1.5 font-light">European safety certified</div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="ghost" onClick={() => setIsExpanded(!isExpanded)} className="text-sm text-white/40 hover:text-white/70 font-medium gap-2">
            Learn More About taVNS {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
          {isExpanded && (
            <div className="max-w-3xl mx-auto mt-6 p-8 md:p-10 rounded-2xl text-left" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
              <h3 className="text-xl font-semibold text-white mb-5">What is taVNS?</h3>
              <div className="space-y-4 text-sm text-white/55 leading-relaxed font-light">
                <p>Transcutaneous Auricular Vagus Nerve Stimulation (taVNS) is a non-invasive technique that precisely stimulates the vagus nerve through the ear.</p>
                <p>Clinical research demonstrates that taVNS can improve attention span, working memory, processing speed, and executive function.</p>
                <p>Zing Elate's advanced technology combines this proven neuroscience with premium audio, creating a system that integrates seamlessly into your daily routine.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Science;
