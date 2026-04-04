import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Reviews = () => {
  const testimonials = [
    { name: "Paul", role: "CEO", image: testimonial1, deAi: true, quote: "Zing Elate has been terrific \u2014 I'm turbocharged this week! What a joy! I'm resolving lots of stuff I usually put on the long finger." },
    { name: "Elaine", role: "PhD Student", image: testimonial2, deAi: false, quote: "I was able to do a really big piece of work \u2014 I am better able to do tasks without getting distracted with the help of Zing Elate." },
    { name: "Andrew", role: "IT Expert", image: testimonial3, deAi: true, quote: "Using Zing Elate with meditation and the soothing music for 45 minutes daily for a month transformed my anxiety \u2014 far more effective for me than antidepressants." },
  ];

  return (
    <section id="reviews" className="relative py-28 md:py-36" style={{ background: "linear-gradient(180deg, #F5F0EA, #F8F4EF)" }}>
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(224,120,32,0.4))" }} />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "#E07820" }}>Testimonials</span>
            <span className="w-10 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(224,120,32,0.4))" }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">Real Results. Real People.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/80 p-7 pb-6 rounded-2xl border border-white/60 hover:shadow-lg transition-all flex flex-col">
              <div className="flex gap-0.5 mb-5">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-orange-500 text-orange-500" />)}</div>
              <blockquote className="text-foreground/75 leading-relaxed text-sm font-light mb-6 flex-1">"{t.quote}"</blockquote>
              <div className="flex items-center gap-3.5 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" style={t.deAi ? { filter: "contrast(1.08) saturate(0.80) brightness(0.98) sepia(0.04)" } : {}} />
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs font-light">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
