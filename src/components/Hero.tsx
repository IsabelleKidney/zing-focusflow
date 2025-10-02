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
      <div className="relative z-10 text-white px-8 md:px-16 lg:px-24 max-w-3xl pt-12 pb-20" style={{ paddingLeft: 'calc(2rem + 1cm)' }}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold mb-56 leading-[1.1] tracking-tight">
          Fuel Your Focus
          <br />
          <span className="text-orange">Power Your Performance</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-16 font-normal leading-relaxed opacity-95">
          Laser Focus. Deep Calm. Peak Performance.
        </p>
        
        <div className="flex items-center">
          <Button 
            variant="default" 
            className="bg-gradient-primary text-white rounded-full hover:opacity-90 px-8 py-7 text-lg font-bold tracking-tight transition-all duration-300"
          >
            <span className="scale-y-110 inline-block">Get FocusZing Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;