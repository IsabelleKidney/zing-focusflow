import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Reviews = () => {
  const testimonials = [
    {
      name: "Paul",
      role: "CEO",
      image: "/src/assets/testimonial-1.jpg",
      rating: 5,
      quote: "FocusZing has been terrific — I'm turbocharged this week! What a joy! I'm resolving lots of stuff I usually put on the long finger."
    },
    {
      name: "Elena",
      role: "PhD Student",
      image: "/src/assets/testimonial-2.jpg",
      rating: 5,
      quote: "I was able to do a really big piece of work — I am better able to do tasks without getting distracted with the help of FocusZing."
    },
    {
      name: "Kevin",
      role: "IT Expert",
      image: "/src/assets/testimonial-3.jpg",
      rating: 5,
      quote: "Using FocusZing with meditation and soothing music daily for a month transformed my anxiety — far more effective for me than antidepressants."
    }
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Real Results. Real People.
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto font-light">
            Hear from professionals, students, and achievers using FocusZing daily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 md:p-10 rounded-2xl border border-border/50 hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-orange text-orange" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground/80 mb-8 leading-relaxed text-sm font-light flex-1">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center pt-5 border-t border-border/50">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
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
