import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-earpiece.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Image - Right Side */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Gradient Overlay - Lighter, stronger on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:from-black/70 md:via-black/40 md:to-transparent"></div>
      
      {/* Content - Left Aligned */}
      <div className="relative z-10 text-white px-8 md:px-16 lg:px-24 max-w-3xl pt-12 pb-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-32 leading-[1.1] tracking-tight">
          Your Ambition
          <br />
          <span className="font-semibold text-orange">Amplified</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-16 font-light leading-relaxed opacity-90">
          Laser Focus. Deep Calm. Peak Performance.
        </p>
        
        <div className="flex items-center">
          <Button 
            variant="default" 
            className="bg-gradient-primary text-white rounded-full hover:opacity-90 px-10 py-6 text-base font-semibold transition-all duration-300"
          >
            Get FocusZing Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;