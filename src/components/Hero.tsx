import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-earpiece-young.jpg";
const Hero = () => {
  return <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Image - Right Side */}
      <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundPosition: 'center center'
    }} />
      
      {/* Gradient Overlay - Lighter, stronger on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent md:from-black/55 md:via-black/30 md:to-transparent"></div>
      
      {/* Content - Left Aligned */}
      <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 max-w-3xl pt-32 md:pt-40 pb-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold mb-6 leading-[1.05] tracking-tight">
          <span className="text-orange">Fuel Your Focus</span>
          <br />
          Power Your Potential
        </h1>
        
        <p className="text-base md:text-lg mb-8 leading-relaxed opacity-90 font-normal">
          Laser Focus. Deep Calm. Peak Performance.
        </p>
        
        <Button asChild variant="default" className="bg-gradient-primary text-white rounded-full hover:opacity-90 px-8 py-3.5 text-base font-semibold tracking-normal transition-all duration-300 animate-[subtle-pulse_3s_ease-in-out_infinite] hover:animate-none">
          <a href="#products">
            Buy Focuzing Now
          </a>
        </Button>
      </div>
    </section>;
};
export default Hero;