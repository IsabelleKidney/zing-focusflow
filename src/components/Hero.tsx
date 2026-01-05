import { Button } from "@/components/ui/button";
import FloatingShapes from "./FloatingShapes";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      {/* Floating 3D Shapes */}
      <FloatingShapes />
      
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
        
        <Button asChild variant="default" className="bg-gradient-to-r from-orange via-orange-light to-orange bg-[length:120%_100%] text-white rounded-full hover:opacity-90 px-8 py-3.5 text-base font-semibold tracking-normal transition-all duration-300 animate-gradient-wave">
          <a href="#products">
            Buy Focuzing Now
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;