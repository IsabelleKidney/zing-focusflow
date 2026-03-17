import { Star } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Paul",
      role: "CEO",
      image: "/src/assets/testimonial-1.jpg",
      rating: 5,
      quote: "FocusZing has been terrific — I'm turbocharged this week! What a joy! I'm resolving lots of stuff I usually put on the long finger.",
    },
    {
      name: "Elena",
      role: "PhD Student",
      image: "/src/assets/testimonial-2.jpg",
      rating: 5,
      quote: "I was able to do a really big piece of work — I am better able to do tasks without getting distracted with the help of FocusZing.",
    },
    {
      name: "Kevin",
      role: "IT Expert",
      image: "/src/assets/testimonial-3.jpg",
      rating: 5,
      quote: "Using FocusZing with meditation and soothing music daily for a month transformed my anxiety — far more effective for me than antidepressants.",
    },
  ];

  return (
    <section id="reviews" className="py-28 bg-background">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            Success Stories
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto font-light">
            Join thousands who have unlocked their potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              {/* Gold stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(43,96%,56%)] text-[hsl(43,96%,56%)]" />
                ))}
              </div>

              <blockquote className="text-foreground/75 mb-8 leading-relaxed font-light text-sm text-left">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-light">{t.role}</p>
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
