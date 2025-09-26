import { Star } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Executive",
      image: "/src/assets/testimonial-1.jpg",
      rating: 5,
      quote: "Zing has completely transformed my stress levels. I use it during my morning routine and feel so much more balanced throughout the day."
    },
    {
      name: "Michael Rodriguez",
      role: "Software Developer", 
      image: "/src/assets/testimonial-2.jpg",
      rating: 5,
      quote: "The audio integration is genius - I can listen to focus music while getting the wellness benefits. My sleep quality has improved dramatically."
    },
    {
      name: "Emma Thompson",
      role: "Graduate Student",
      image: "/src/assets/testimonial-3.jpg", 
      rating: 5,
      quote: "I was skeptical at first, but the stress relief is real. Perfect for managing exam anxiety and staying calm under pressure."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands who have transformed their wellness with Zing's innovative taVNS technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-smooth border border-border/50"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
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