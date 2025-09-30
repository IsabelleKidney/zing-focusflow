import { Star } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Executive",
      image: "/src/assets/testimonial-1.jpg",
      rating: 5,
      quote: "FocusZing has completely transformed my productivity. I use it during strategic planning sessions and my focus is razor-sharp for hours."
    },
    {
      name: "Michael Rodriguez",
      role: "Software Developer", 
      image: "/src/assets/testimonial-2.jpg",
      rating: 5,
      quote: "The audio integration is genius - I can code with focus music while getting cognitive enhancement. My performance reviews have never been better."
    },
    {
      name: "Emma Thompson",
      role: "Graduate Student",
      image: "/src/assets/testimonial-3.jpg", 
      rating: 5,
      quote: "I was skeptical at first, but the focus improvement is incredible. Perfect for studying and achieving academic excellence."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Trusted by <span className="italic">peak performers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed font-light">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium text-card-foreground text-sm">{testimonial.name}</div>
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