import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const leftColumn = [
    {
      question: "How do I use FocusZing?",
      answer: "Clip the earpiece onto the small flap at the front of your ear canal (the tragus). The earbud should sit in your ear canal, with the stimulation pad resting on the outside surface. Turn on the handheld device and gentle neurostimulation will start automatically. Use daily while working, meditating, doing yoga, or simply while listening to music or podcasts."
    },
    {
      question: "Is it safe to use?",
      answer: "Yes, FocusZing uses CE-marked taVNS technology that's well-researched and non-invasive. Consult your doctor if you have a pacemaker, are pregnant, or have epilepsy."
    },
    {
      question: "How quickly will I notice results?",
      answer: "Many users notice improved focus within minutes. For relaxation, you may feel a calming effect during — and after — your first session. For longer-term benefits like enhanced vitality and mood, use consistently for 4–6 weeks."
    },
    {
      question: "Can I use it while working?",
      answer: "Absolutely! FocusZing is designed for active use. Listen to focus music, take calls, or work at your desk while benefiting from stimulation."
    }
  ];

  const rightColumn = [
    {
      question: "What's included in my order?",
      answer: "The earpiece, USB-C charging cable, carrying case, quick-start guide, and access to our companion app with guided sessions."
    },
    {
      question: "How long does shipping take?",
      answer: "Ireland: 2–3 business days. UK & Europe: 5–7 business days. International: 7–14 business days. Express options available at checkout."
    },
    {
      question: "What's the return policy?",
      answer: "30-day money-back guarantee. Return in original packaging for a full refund — no questions asked."
    },
    {
      question: "How long does the battery last?",
      answer: "Up to 8 hours continuous use. Full recharge in 1.5 hours via USB-C."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <div className="text-center mb-14">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Questions & Answers
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Everything you need to know about FocusZing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <Accordion type="single" collapsible className="space-y-3">
            {leftColumn.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`left-${index}`}
                className="bg-card border border-border/40 rounded-xl px-5 data-[state=open]:shadow-card data-[state=open]:border-orange/15 transition-all duration-200"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4 hover:text-orange transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <Accordion type="single" collapsible className="space-y-3">
            {rightColumn.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`right-${index}`}
                className="bg-card border border-border/40 rounded-xl px-5 data-[state=open]:shadow-card data-[state=open]:border-orange/15 transition-all duration-200"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4 hover:text-orange transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
