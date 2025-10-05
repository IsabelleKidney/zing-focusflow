import { Star } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Paul",
      role: "CEO",
      image: "/src/assets/testimonial-1.jpg",
      rating: 5,
      quote: "I'm turbocharged this week! What a joy! I'm resolving lots of stuff I usually put on the long finger."
    },
    {
      name: "Elena",
      role: "PhD Student", 
      image: "/src/assets/testimonial-2.jpg",
      rating: 5,
      quote: "I was able to do a really big piece of work — I am better able to do tasks without getting distracted."
    },
    {
      name: "Kevin",
      role: "IT Expert",
      image: "/src/assets/testimonial-3.jpg", 
      rating: 5,
      quote: "Using Zing with meditation and soothing music daily for a month transformed my anxiety — far more effective for me than antidepressants."
    }
  ];

  return (
    <section id="reviews" className="py-32 bg-muted/30">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Join thousands who have unlocked their potential and achieved peak performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-10 rounded-2xl shadow-card hover:shadow-elegant transition-smooth border border-border/30"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                ))}
              </div>
              
              <blockquote className="text-foreground/80 mb-8 leading-relaxed font-light text-sm">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-normal text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-muted-foreground text-xs font-light">{testimonial.role}</div>
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