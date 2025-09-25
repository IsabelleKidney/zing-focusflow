import { Button } from "@/components/ui/button";
import heroImage from "@/assets/focuszing-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          FocusZing taVNS
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light">
          Enhance. Focus. Achieve.
        </p>
        
        <Button 
          variant="default" 
          size="lg" 
          className="bg-gradient-orange hover:bg-orange-dark text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          EXPLORE THE DEVICE
        </Button>
      </div>
    </section>
  );
};

export default Hero;