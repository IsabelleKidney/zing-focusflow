import { Star } from "lucide-react";
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
      quote: "Using Zing Elate with meditation and soothing music daily for a month transformed my anxiety — far more effective for me than antidepressants."
    }
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Real Results. Real People.
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto font-light">
            Hear from professionals, students, and achievers using Zing Elate daily.
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
              className="bg-card p-7 pb-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              {/* Stars top-left */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                ))}
              </div>

              {/* Quote + photo row */}
              <div className="flex gap-4 items-start mb-4">
                <blockquote className="text-foreground/80 leading-relaxed text-sm font-light flex-1">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col items-center shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-20 h-20 rounded-full object-cover border-2 border-border/30 shadow-sm"
                  />
                  <div className="text-center mt-2">
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs font-light">{testimonial.role}</div>
                  </div>
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
