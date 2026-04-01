import { Star } from "lucide-react";
import { motion } from "framer-motion";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Reviews = () => {
  const testimonials = [
    {
      name: "Paul",
      role: "CEO",
      image: testimonial1,
      rating: 5,
      quote: "Zing Elate has been terrific — I'm turbocharged this week! What a joy! I'm resolving lots of stuff I usually put on the long finger."
    },
    {
      name: "Elaine",
      role: "PhD Student",
      image: testimonial2,
      rating: 5,
      quote: "I was able to do a really big piece of work — I am better able to do tasks without getting distracted with the help of Zing Elate."
    },
    {
      name: "Andrew",
      role: "IT Expert",
      image: testimonial3,
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
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Top row: stars left, photo right */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-0.5 pt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                  ))}
                </div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground/80 mb-6 leading-relaxed text-sm font-light flex-1">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author name & role centered below */}
              <div className="text-center">
                <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                <div className="text-muted-foreground text-xs font-light">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
