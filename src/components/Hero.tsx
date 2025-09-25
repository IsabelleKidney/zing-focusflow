import { Button } from "@/components/ui/button";
import heroImage from "@/assets/focuszing-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 animate-pulse"></div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Unlock Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Focus</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            FocusZing combines advanced taVNS technology with premium audio to enhance your concentration and productivity like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="font-semibold">
              Order Now - $299
            </Button>
            <Button variant="premium" size="xl" className="font-semibold">
              Learn More
            </Button>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <img 
              src={heroImage} 
              alt="FocusZing taVNS device with wireless earpiece"
              className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary/10 rounded-lg"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;