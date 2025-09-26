import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-earpiece.jpg";

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
      
      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Relieve Stress.
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Elevate Life.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
          Experience revolutionary taVNS technology with premium audio integration. 
          <span className="font-medium text-yellow"> Stress relief, better sleep, brighter mood.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="default" 
            size="xl" 
            className="bg-gradient-primary hover:bg-orange text-white px-12 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Order Now
          </Button>
          <Button 
            variant="secondary" 
            size="xl" 
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Subscribe for Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;