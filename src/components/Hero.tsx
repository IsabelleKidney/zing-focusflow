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
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight tracking-tight">
          Sharper focus.
          <br />
          Deeper calm.
          <br />
          <span className="italic font-light">Peak performance.</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
          FDA-cleared taVNS technology meets premium audio. Experience next-level cognitive enhancement.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-primary hover:bg-orange text-white px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Discover FocusZing
          </Button>
          <p className="text-sm text-white/80">HSA/FSA eligible</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;