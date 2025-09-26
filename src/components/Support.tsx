import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Zing's taVNS technology work?",
      answer: "Zing uses gentle electrical pulses delivered through your ear to stimulate the vagus nerve, activating your body's natural relaxation response and promoting stress relief."
    },
    {
      question: "Is it safe to use daily?",
      answer: "Yes, Zing is FDA-cleared and designed for daily use. The gentle microcurrents are completely safe and non-invasive."
    },
    {
      question: "How long before I see results?",
      answer: "Many users feel immediate relaxation effects within minutes of use. For optimal stress relief and sleep benefits, we recommend consistent daily use."
    },
    {
      question: "Can I use it with my existing headphones?",
      answer: "Zing has built-in premium audio capabilities, but it's also compatible with most standard audio devices and streaming services."
    },
    {
      question: "What's included in the package?",
      answer: "Your Zing package includes the device, charging cable, multiple ear tip sizes, user manual, and access to our wellness app with guided sessions."
    }
  ];

  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "support@zing.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "1-800-ZING-NOW",
      action: "Call Now"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Available 24/7",
      action: "Start Chat"
    }
  ];

  return (
    <section id="support" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Support & FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the help you need to maximize your Zing wellness experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl border border-border/50">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-smooth rounded-xl"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-card-foreground">{faq.question}</span>
                    {openFaq === index ? 
                      <ChevronUp className="w-5 h-5 text-muted-foreground" /> : 
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    }
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactOptions.map((option, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-card transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="text-orange p-3 bg-gradient-primary rounded-lg">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground mb-2">{option.title}</h4>
                      <p className="text-muted-foreground mb-4">{option.description}</p>
                      <Button variant="outline" size="sm">
                        {option.action}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-subtle rounded-xl border border-border/50">
              <h4 className="font-semibold text-foreground mb-3">Need Immediate Help?</h4>
              <p className="text-muted-foreground mb-4">
                Access our comprehensive user guide and video tutorials for quick solutions.
              </p>
              <Button variant="default" className="bg-gradient-primary">
                Access Help Center
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;