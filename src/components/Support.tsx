import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does FocusZing's taVNS technology enhance performance?",
      answer: "FocusZing uses precise electrical pulses delivered through your ear to stimulate the vagus nerve, activating neural pathways that enhance focus, attention, and cognitive performance for peak productivity."
    },
    {
      question: "Can I use it during work or study sessions?",
      answer: "Absolutely! FocusZing is designed for active use during productivity sessions. The premium audio integration lets you listen to focus music or podcasts while receiving cognitive enhancement."
    },
    {
      question: "How quickly will I see performance improvements?",
      answer: "Most users experience immediate focus enhancement within minutes. For sustained cognitive benefits and peak performance, we recommend consistent daily use during your most important tasks."
    },
    {
      question: "Is it compatible with my existing productivity setup?",
      answer: "Yes! FocusZing integrates seamlessly with your current workflow. Use it with your favorite productivity apps, focus music, or while working on any cognitive task that requires enhanced concentration."
    },
    {
      question: "What's the optimal way to use FocusZing for maximum results?",
      answer: "Use FocusZing during your most challenging work sessions - strategic planning, complex problem-solving, creative projects, or intensive study periods. Combine with productivity techniques for amplified results."
    }
  ];

  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "support@focuszing.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support", 
      description: "1-800-FOCUSZING",
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
    <section id="support" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Questions? <span className="italic">We're here</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-light text-foreground mb-8">Common Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-border/50">
                  <button
                    className="w-full py-5 text-left flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium text-card-foreground text-sm">{faq.question}</span>
                    {openFaq === index ? 
                      <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-4" /> : 
                      <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-4" />
                    }
                  </button>
                  {openFaq === index && (
                    <div className="pb-5 text-muted-foreground leading-relaxed text-sm font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-light text-foreground mb-8">Get in Touch</h3>
            <div className="space-y-4">
              {contactOptions.map((option, index) => (
                <div key={index} className="p-6 border-b border-border/50 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <div className="text-white p-2 bg-gradient-primary rounded-full">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-card-foreground mb-1 text-sm">{option.title}</h4>
                      <p className="text-muted-foreground text-sm font-light">{option.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;