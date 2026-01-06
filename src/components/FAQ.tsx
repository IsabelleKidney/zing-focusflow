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
      answer: "Many users feel improved focus within minutes. For sustained benefits like enhanced mood and resilience, use consistently for 2-3 weeks."
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
      answer: "UK: 2-3 days. Europe: 5-7 days. International: 7-14 days. Express options available at checkout."
    },
    {
      question: "What's the return policy?",
      answer: "30-day money-back guarantee. Return in original packaging for a full refund—no questions asked."
    },
    {
      question: "How long does the battery last?",
      answer: "Up to 8 hours continuous use. Full recharge in 1.5 hours via USB-C."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground font-light">
            Everything you need to know about FocusZing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Accordion type="single" collapsible className="space-y-3">
            {leftColumn.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`left-${index}`}
                className="bg-background border border-border/50 rounded-lg px-4 data-[state=open]:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-3">
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
                className="bg-background border border-border/50 rounded-lg px-4 data-[state=open]:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-3">
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
