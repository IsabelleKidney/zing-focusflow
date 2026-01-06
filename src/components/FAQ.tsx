import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I use FocusZing?",
      answer: "Simply place the FocusZing earpiece in your ear like you would with regular earbuds. The device will automatically begin gentle neurostimulation. For optimal results, use for 45 minutes daily—you can listen to music, podcasts, or work while wearing it."
    },
    {
      question: "Is FocusZing safe to use?",
      answer: "Yes, FocusZing uses transcutaneous auricular vagus nerve stimulation (taVNS), a well-researched, non-invasive technology. The microcurrent is extremely gentle and CE-marked for safety. However, consult your doctor before use if you have a pacemaker, are pregnant, or have epilepsy."
    },
    {
      question: "How quickly will I notice results?",
      answer: "Many users report improved focus and calm within minutes of their first session. For sustained benefits like enhanced mood and emotional resilience, we recommend consistent daily use for at least 2-3 weeks."
    },
    {
      question: "Can I use FocusZing while working or exercising?",
      answer: "Absolutely! FocusZing is designed for everyday use. Listen to music, take calls, work at your desk, or even do light exercise. The premium audio integration means you don't have to choose between focus enhancement and your favourite content."
    },
    {
      question: "What's included in my order?",
      answer: "Each FocusZing package includes the neurostimulation earpiece, a USB-C charging cable, carrying case, quick-start guide, and access to our companion app with guided sessions and progress tracking."
    },
    {
      question: "How long does shipping take?",
      answer: "We ship worldwide from our UK warehouse. UK orders typically arrive within 2-3 business days. European orders take 5-7 business days, and international orders arrive within 7-14 business days. Express shipping options are available at checkout."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee. If FocusZing doesn't work for you, simply return it in its original packaging for a full refund. No questions asked—we're confident you'll love it."
    },
    {
      question: "How long does the battery last?",
      answer: "FocusZing provides up to 8 hours of continuous use on a single charge. A full recharge takes approximately 1.5 hours via USB-C. The device will indicate when battery is low."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-muted/30">
      <div className="container mx-auto px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Everything you need to know about FocusZing
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border/50 rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-normal hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
