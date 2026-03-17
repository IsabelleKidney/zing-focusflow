import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-student-library.jpg";
import heroImage2 from "@/assets/hero-woman-social.jpg";
import heroImage3 from "@/assets/hero-leader-office.jpg";

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
    setTimeout(() => setIsTransitioning(false), 1200);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <section className="h-screen relative flex items-end overflow-hidden">
      {/* Background Images with Ken Burns effect */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-[1.2s] ease-in-out"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: "center center",
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
            transform: i === current ? "scale(1.05)" : "scale(1)",
            transition: "opacity 1.2s ease-in-out, transform 6s ease-out",
          }}
        />
      ))}

      {/* Cinematic dark gradient overlay - Healf style */}
      <div 
        className="absolute inset-0 z-[2]" 
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Content - positioned at bottom like Healf */}
      <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 max-w-3xl pb-16 md:pb-20" style={{ zIndex: 3 }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold mb-5 leading-[1.08] tracking-tight">
          <span className="text-orange">Fuel Your Focus</span>
          <br />
          Power Your Potential
        </h1>

        <p className="text-base md:text-lg mb-7 leading-relaxed opacity-85 font-montserrat tracking-tight max-w-lg">
          <span className="font-medium">Laser Focus, Deep Calm & Turbocharged Vitality.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button asChild variant="default" className="bg-gradient-to-r from-orange via-orange-light to-orange bg-[length:120%_100%] text-white rounded-full hover:opacity-90 px-8 py-3.5 text-base font-semibold tracking-normal transition-all duration-300 animate-gradient-wave">
            <a href="/product/focuszing-device">
              Buy Yours from €199
            </a>
          </Button>
          <a href="#products" className="text-sm font-normal text-white/70 hover:text-white transition-colors cursor-pointer border border-white/20 rounded-full px-6 py-3 hover:border-white/40">Learn More</a>
        </div>

        <div className="flex items-center gap-2 mt-5 text-sm opacity-70">
          <span className="text-orange font-semibold">83%</span>
          <span>of trial participants found it helpful or very helpful</span>
        </div>

        {/* Slide Indicators - minimal line style */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-[2px] rounded-full transition-all duration-700 ${
                i === current ? "w-10 bg-orange" : "w-4 bg-white/30 hover:bg-white/50"
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
