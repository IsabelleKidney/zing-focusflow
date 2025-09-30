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
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-8 max-w-5xl mx-auto pt-20">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.1] tracking-tight">
          Your Ambition.
          <br />
          <span className="font-normal">Amplified.</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-12 font-light max-w-2xl mx-auto leading-relaxed opacity-90">
          Sharper focus, deeper calm, peak performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            className="bg-gradient-primary text-white rounded-full hover:opacity-90 px-10 py-6 text-base font-normal transition-all duration-300"
          >
            Get FocusZing Now
          </Button>
          <Button 
            variant="ghost" 
            className="text-white border-white/30 hover:bg-white/10 px-10 py-6 text-base font-light rounded-full transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;