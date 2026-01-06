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
          <a href="#how-it-works" className="underline decoration-white/50 hover:decoration-white transition-colors cursor-pointer">Wearable Neurostimulation</a> Device for<br />Laser Focus, Deep Calm & Turbocharged Vitality.
        </p>
        
        <div className="flex items-center gap-4 flex-wrap">
          <Button asChild variant="default" className="bg-gradient-to-r from-orange via-orange-light to-orange bg-[length:120%_100%] text-white rounded-full hover:opacity-90 px-8 py-3.5 text-base font-semibold tracking-normal transition-all duration-300 animate-gradient-wave">
            <a href="/product/focuszing-device">
              Get Yours
            </a>
          </Button>
          <a href="#products" className="text-lg font-semibold hover:underline decoration-orange/50 hover:decoration-orange transition-all cursor-pointer">Learn More about FocuZing · From <span className="text-orange">€1</span></a>
        </div>
        
        <div className="flex items-center gap-2 mt-4 text-sm opacity-80">
          <span className="text-orange font-semibold">83%</span>
          <span>of trial participants found it helpful or very helpful</span>
        </div>
      </div>
    </section>;
};
export default Hero;