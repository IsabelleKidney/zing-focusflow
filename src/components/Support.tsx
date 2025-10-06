import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, MessageCircle } from "lucide-react";
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
      answer: "Absolutely! FocusZing is designed for active use during productivity sessions. The premium audio integration lets you listen to focus music or podcasts while benefiting from vagus nerve stimulation."
    },
    {
      question: "How quickly will I see performance improvements?",
      answer: "Most users experience immediate focus enhancement within minutes. For sustained cognitive benefits and peak performance, we recommend that you use it when you are doing tasks that you don't particularly want to do or are finding that you are being distracted from what you should be doing."
    },
    {
      question: "Is it compatible with my existing productivity setup?",
      answer: "Yes! FocusZing integrates seamlessly with your current workflow. Use it with your favorite productivity apps, focus music, or while working on any cognitive task that requires enhanced concentration."
    },
    {
      question: "What's the optimal way to use FocusZing for maximum results?",
      answer: "Use FocusZing when you are finding it hard to focus optimally or during your most challenging work sessions - strategic planning, complex problem-solving, creative projects, or intensive study periods."
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
            Get the help you need to maximize your FocusZing performance enhancement experience.
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
            <h4 className="font-semibold text-foreground mb-3">Ready to Unlock Peak Performance?</h4>
            <p className="text-muted-foreground mb-4">
              Access our comprehensive performance guide and productivity tutorials for maximum results.
            </p>
            <Button variant="default" className="bg-gradient-primary">
              Access Performance Center
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;