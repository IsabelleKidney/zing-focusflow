import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      image: testimonial1,
      quote: "FocusZing has completely transformed my workday. I can maintain deep focus for hours without the afternoon crash. It's like having a superpower for productivity.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      role: "Computer Science Student, MIT",
      image: testimonial2,
      quote: "As a CS student, I need to focus for long coding sessions. FocusZing helps me stay in the zone and actually enjoy the process. My grades have improved significantly.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Startup Founder",
      image: testimonial3,
      quote: "Running a startup means constant context switching. FocusZing helps me regain my focus instantly and maintain clarity throughout the most demanding days.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by High Performers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals and students who've unlocked their peak performance with FocusZing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-smooth transform hover:-translate-y-2 border border-border/50"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              
              <blockquote className="text-card-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 shadow-card"
                />
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;