import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-woman-earpiece-young.jpg";
import heroImage2 from "@/assets/hero-woman-testimonial.jpg";
import heroImage3 from "@/assets/hero-male-workzone.jpg";
import ceMark from "@/assets/ce-mark.png";
import { Shield, RotateCcw } from "lucide-react";

const slides = [
  { image: heroImage1 },
  { image: heroImage2 },
  { image: heroImage3 },
];

const INTERVAL = 5000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: "center center",
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent md:from-black/55 md:via-black/30 md:to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 max-w-3xl pt-32 md:pt-40 pb-20" style={{ zIndex: 3 }}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold mb-6 leading-[1.05] tracking-tight">
          <span className="text-orange">Fuel Your Focus</span>
          <br />
          Power Your Potential
        </h1>

        <p className="text-base md:text-lg mb-8 leading-relaxed opacity-90 font-montserrat font-light tracking-tight">
          <a href="#how-it-works" className="underline decoration-white/50 hover:decoration-white transition-colors cursor-pointer">Wearable Neurostimulation</a> Device for<br />Laser Focus, Deep Calm & Turbocharged Vitality.
        </p>

        <div className="flex flex-col gap-3">
          <Button asChild variant="default" className="bg-gradient-to-r from-orange via-orange-light to-orange bg-[length:120%_100%] text-white rounded-full hover:opacity-90 px-8 py-3.5 text-base font-semibold tracking-normal transition-all duration-300 animate-gradient-wave w-fit">
            <a href="/product/focuszing-device">
              Buy Yours from €199
            </a>
          </Button>
          <a href="#products" className="text-base font-normal hover:underline decoration-orange/50 hover:decoration-orange transition-all cursor-pointer w-fit">Learn More about Focuzing</a>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center gap-6 mt-6 flex-wrap">
          <div className="flex items-center gap-2 text-sm opacity-90">
            <RotateCcw className="w-4 h-4 text-orange" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-90">
            <img src={ceMark} alt="CE Certified" className="w-5 h-5 brightness-0 invert" />
            <span>CE Certified</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-90">
            <Shield className="w-4 h-4 text-orange" />
            <span>1-Year Warranty</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 text-sm opacity-80">
          <span className="text-orange font-semibold">83%</span>
          <span>of trial participants found it helpful or very helpful</span>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-orange" : "w-3 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
