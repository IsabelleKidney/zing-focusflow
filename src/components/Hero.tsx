import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-earpiece-young.jpg";

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
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent md:from-black/55 md:via-black/30 md:to-transparent"></div>
      
      {/* Content - Left Aligned */}
      <div className="relative z-10 text-white px-6 md:px-16 lg:px-24 max-w-3xl pt-12 pb-20 md:pl-[calc(4rem+1cm)]">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold mb-44 leading-[1.1] tracking-tight">
          Power Your Productivity
          <br />
          <span className="text-orange">Elevate
          <br />
          Vitality</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-12 font-light leading-relaxed opacity-90">
          Laser Focus. Deep Calm. <br className="md:hidden" />Peak Performance.
        </p>
        
        <div className="flex items-center">
          <Button 
            variant="default" 
            className="bg-gradient-primary text-white rounded-full hover:opacity-90 hover:scale-105 px-10 py-8 text-xl font-bold tracking-tighter transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(251,146,60,0.5)]"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            <span className="scale-y-110 inline-block">FocusZing</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;