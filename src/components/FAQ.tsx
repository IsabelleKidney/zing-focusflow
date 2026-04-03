import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const leftColumn = [
    { question: "How do I use Zing Elate?", answer: "Clip the earpiece onto the small flap at the front of your ear canal (the tragus). Turn on the handheld device and gentle neurostimulation will start automatically. You can also play soothing soundbaths to intensify your relaxation and focus." },
    { question: "Is it safe to use?", answer: 'Yes, Zing Elate uses CE-marked taVNS technology that\'s well-researched and non-invasive. Consult your doctor if you have a pacemaker, are pregnant, or have epilepsy.', link: { text: "Read the clinical research →", href: "/Enhanced_Attention_Clinical_Studies.pdf" } },
    { question: "How quickly will I notice results?", answer: "Many users notice improved focus within minutes. You can also use the relaxation mode while you read or watch TV — this can help you unwind more quickly. For mood boosting and energy generation, integrate into a daily routine of 45 minutes meditation (after a while you can do this while doing other tasks like housework or emails!) — after 4–6 weeks, you should feel like a new person!", link: { text: "See how taVNS works →", href: "#how-it-works" } },
    { question: "Can I use it while working?", answer: "Absolutely! Zing Elate is designed for active use. Listen to focus music, take calls, or work at your desk while benefiting from stimulation." },
  ];

  const rightColumn = [
    { question: "What's included in my order?", answer: "The earpiece, USB-C charging cable, carrying case, quick-start guide, and access to our companion app with guided sessions." },
    { question: "How long does shipping take?", answer: "Ireland: 2–3 business days. UK & Europe: 5–7 business days. International: 7–14 business days. Express options available at checkout." },
    { question: "What's the return policy?", answer: "30-day money-back guarantee. Return in original packaging for a full refund — no questions asked." },
    { question: "How long does the battery last?", answer: "Up to 8 hours continuous use. Full recharge in 1.5 hours via USB-C." },
  ];

  const renderColumn = (items: typeof leftColumn, prefix: string) => (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((faq, index) => (
        <AccordionItem key={index} value={`${prefix}-${index}`}
          className="border border-white/10 rounded-xl px-5 bg-white/[0.04] data-[state=open]:border-orange/15 data-[state=open]:bg-white/[0.06] transition-all duration-300">
          <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4 text-white/80 hover:text-orange transition-colors">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-white/50 text-sm leading-relaxed pb-4 font-light">
            {faq.answer}
            {faq.link && (
              <a href={faq.link.href} className="block mt-2 text-orange underline decoration-orange/30 hover:decoration-orange text-sm" style={{ textUnderlineOffset: "3px" }}>
                {faq.link.text}
              </a>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <section id="faq" className="relative py-28 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(24,10%,16%) 0%, hsl(22,8%,19%) 100%)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, hsla(30,80%,50%,0.04) 0%, transparent 70%)" }} />
      <div className="container mx-auto px-6 md:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-orange/30" />
            <span className="text-orange text-xs font-semibold tracking-[0.22em] uppercase">FAQ</span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-orange/30" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Questions & Answers</h2>
          <p className="text-white/40 font-light text-sm">Everything you need to know about Zing Elate.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {renderColumn(leftColumn, "left")}
          {renderColumn(rightColumn, "right")}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
