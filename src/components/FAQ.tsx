import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "How do I use Zing Elate?", a: "Clip the earpiece onto the small flap at the front of your ear canal (the tragus). Turn on the handheld device and gentle neurostimulation will start automatically. You can also play soothing soundbaths to intensify your relaxation and focus." },
    { q: "Is it safe to use?", a: "Yes, Zing Elate uses CE-marked taVNS technology that\u2019s well-researched and non-invasive. Consult your doctor if you have a pacemaker, are pregnant, or have epilepsy.", link: { text: "Read the clinical research \u2192", href: "/Enhanced_Attention_Clinical_Studies.pdf" } },
    { q: "How quickly will I notice results?", a: "Many users notice improved focus within minutes. You can also use the relaxation mode while you read or watch TV \u2014 this can help you unwind more quickly. For mood boosting and energy generation, integrate into a daily routine of 45 minutes meditation (after a while you can do this while doing other tasks like housework or emails!) \u2014 after 4\u20136 weeks, you should feel like a new person!", link: { text: "See how taVNS works \u2192", href: "#how-it-works" } },
    { q: "Can I use it while working?", a: "Absolutely! Zing Elate is designed for active use. Listen to focus music, take calls, or work at your desk while benefiting from stimulation." },
    { q: "What\u2019s included in my order?", a: "The earpiece, USB-C charging cable, carrying case, quick-start guide, and access to our companion app with guided sessions." },
    { q: "How long does shipping take?", a: "Ireland: 2\u20133 business days. UK & Europe: 5\u20137 business days. International: 7\u201314 business days." },
    { q: "What\u2019s the return policy?", a: "30-day money-back guarantee. Return in original packaging for a full refund \u2014 no questions asked." },
    { q: "How long does the battery last?", a: "Up to 8 hours continuous use. Full recharge in 1.5 hours via USB-C." },
  ];

  return (
    <section id="faq" className="relative py-28 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #45413D, #4D4944)" }}>
      <div className="container mx-auto px-6 md:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(224,120,32,0.3))" }} />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "#E07820" }}>FAQ</span>
            <span className="w-10 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(224,120,32,0.3))" }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Questions & Answers</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl px-5 transition-all" style={{ border: open === i ? "1px solid rgba(224,120,32,0.15)" : "1px solid rgba(255,255,255,0.1)", background: open === i ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)" }}>
              <button className="w-full text-left flex items-center justify-between py-4 text-sm font-medium text-white/80 hover:text-orange-500 transition-colors" onClick={() => setOpen(open === i ? null : i)}>
                {f.q} <ChevronDown className={`w-4 h-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="text-white/50 text-sm leading-relaxed pb-4 font-light">
                  {f.a}
                  {f.link && <a href={f.link.href} className="block mt-2 text-sm underline" style={{ color: "#E07820", textUnderlineOffset: "3px" }}>{f.link.text}</a>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
