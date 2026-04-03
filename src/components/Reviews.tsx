import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import testimonialPaul from "@/assets/testimonial-paul.jpg";
import testimonialElena from "@/assets/testimonial-elena.jpg";
import testimonialAndrew from "@/assets/testimonial-andrew.jpg";

const Reviews = () => {
  const testimonials = [
    {
      name: "Paul",
      role: "CEO",
      image: testimonialPaul,
      rating: 5,
      quote: "Zing Elate has been terrific — I'm turbocharged this week! What a joy! I'm resolving lots of stuff I usually put on the long finger."
    },
    {
      name: "Elaine",
      role: "PhD Student",
      image: testimonialElena,
      rating: 5,
      quote: "I was able to do a really big piece of work — I am better able to do tasks without getting distracted with the help of Zing Elate."
    },
    {
      name: "Andrew",
      role: "IT Expert",
      image: testimonialAndrew,
      rating: 5,
      quote: "Using Zing Elate with meditation and the soothing music for 45 minutes daily for a month transformed my anxiety — far more effective for me than antidepressants."
    }
  ];

  return (
    <section id="reviews" className="relative py-28 md:py-36 noise-texture" style={{
      background: "linear-gradient(180deg, hsl(36, 26%, 96%) 0%, hsl(38, 30%, 97%) 50%, hsl(36, 24%, 95%) 100%)"
    }}>
      <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-18 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-orange/40" />
            <span className="text-orange text-xs font-semibold tracking-[0.22em] uppercase">
              Testimonials
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-orange/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Real Results. Real People.
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto font-light">
            Hear from professionals, students, and achievers using Zing Elate daily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white/80 backdrop-blur-sm p-7 pb-6 rounded-2xl border border-white/60 hover:border-orange/12 hover:shadow-warm-lg transition-all duration-400 premium-card"
            >
              {/* Subtle quote mark accent */}
              <div className="absolute top-5 right-6 opacity-[0.06]">
                <Quote className="w-10 h-10 text-orange" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/75 leading-relaxed text-sm font-light mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-border/30">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-12 h-12 rounded-full object-cover shadow-sm testimonial-photo"
                    style={{
                      /* Reduce AI-generated look: subtle warmth, slight grain-like treatment */
                      filter: "contrast(1.06) saturate(0.88) brightness(1.02) sepia(0.05)",
                    }}
                  />
                  {/* Warm ring around photo */}
                  <div className="absolute inset-0 rounded-full border-2 border-orange/15" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-muted-foreground text-xs font-light">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
