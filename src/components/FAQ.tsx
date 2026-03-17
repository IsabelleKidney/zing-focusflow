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
      answer: "Clip the earpiece onto the small flap at the front of your ear canal (the tragus). Turn on the handheld device and gentle neurostimulation will start automatically. Use daily while working, meditating, or listening to music.",
    },
    {
      question: "Is it safe to use?",
      answer: "Yes, FocusZing uses CE-marked taVNS technology that's well-researched and non-invasive. Consult your doctor if you have a pacemaker, are pregnant, or have epilepsy.",
    },
    {
      question: "How quickly will I notice results?",
      answer: "Many users notice improved focus within minutes. For longer-term benefits, use consistently for 4–6 weeks.",
    },
    {
      question: "Can I use it while working?",
      answer: "Absolutely! FocusZing is designed for active use. Listen to focus music, take calls, or work at your desk while benefiting from stimulation.",
    },
  ];

  const rightColumn = [
    {
      question: "What's included in my order?",
      answer: "The earpiece, handheld controller, USB-C charging cable, and quick-start guide.",
    },
    {
      question: "How long does shipping take?",
      answer: "Ireland: 2–3 business days. UK & Europe: 5–7 business days. International: 7–14 business days.",
    },
    {
      question: "What's the return policy?",
      answer: "30-day money-back guarantee. Return in original packaging for a full refund—no questions asked.",
    },
    {
      question: "How long does the battery last?",
      answer: "Up to 8 hours continuous use. Full recharge in 1.5 hours via USB-C.",
    },
  ];

  return (
    <section id="faq" className="py-28 bg-secondary">
      <div className="container mx-auto px-8 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground font-light">
            Everything you need to know about FocusZing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Accordion type="single" collapsible className="space-y-3">
            {leftColumn.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`left-${index}`}
                className="bg-background border-0 rounded-xl px-5 shadow-none data-[state=open]:shadow-card transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4 text-foreground">
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
                className="bg-background border-0 rounded-xl px-5 shadow-none data-[state=open]:shadow-card transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4 text-foreground">
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
