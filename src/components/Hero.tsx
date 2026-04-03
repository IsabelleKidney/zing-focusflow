import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-student-library.jpg";
import heroImage2 from "@/assets/hero-woman-social.jpg";
import heroImage3 from "@/assets/hero-leader-office.jpg";

const slides = [
  {
    image: heroImage1,
    position: "60% 15%",
    eyebrow: "Neuroscience-Powered Focus",
    headline: "Fuel Your Focus.\nPower Your Potential.",
    subline: "The world's most advanced wearable neurostimulation device for laser focus, deep calm, and sustained energy.",
  },
  {
    image: heroImage2,
    position: "center 20%",
    eyebrow: "Clinically Validated",
    headline: "Elevate Your Vitality.\nFind Your Flow.",
    subline: "The New Happily Ever After. Elevate your mood with a 45-minute daily Zing Elate practice.",
  },
  {
    image: heroImage3,
    position: "center 12%",
    eyebrow: "Designed for Leaders",
    headline: "For High Performance.\nSimply Press Play.",
    subline: "Join high performers who use Zing Elate to stay sharp, composed, and energised throughout every day.",
  },
];

const INTERVAL = 6000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

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

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY;
      if (s < window.innerHeight) {
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${-s * 0.35}px)`;
          contentRef.current.style.opacity = `${Math.max(0, 1 - s / (window.innerHeight * 0.6))}`;
        }
        if (bgRef.current) {
          bgRef.current.style.transform = `scale(1.04) translateY(${s * 0.12}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={i === current ? bgRef : undefined}
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: slide.position,
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
            transform: i === current ? "scale(1.04)" : "scale(1)",
            transition: "opacity 1.2s ease-in-out, transform 8s ease-out",
          }}
        />
      ))}

      <div className="absolute inset-0 z-[2]" style={{
        background: "linear-gradient(to top, hsla(22,18%,12%,0.90) 0%, hsla(25,16%,14%,0.55) 30%, hsla(30,20%,18%,0.22) 55%, hsla(35,30%,22%,0.06) 75%, transparent 100%)"
      }} />
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 80% 20%, hsla(35,100%,55%,0.07), transparent 70%)"
      }} />

      <div ref={contentRef} className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24" style={{ zIndex: 3 }}>
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-gradient-to-r from-orange to-orange-light" />
                <span className="text-orange-light text-xs font-semibold tracking-[0.22em] uppercase">
                  {slides[current].eyebrow}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-jakarta font-extrabold text-white mb-5 leading-[1.06] tracking-tight whitespace-pre-line">
                {slides[current].headline}
              </h1>
              <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl mb-9 font-light">
                {slides[current].subline}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <Button
              asChild
              className="bg-gradient-to-r from-orange to-amber-500 hover:from-orange-dark hover:to-orange text-white rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-400 shadow-lg hover:shadow-glow-strong"
            >
              <a href="/product/focuszing-device">Shop Now — From €199</a>
            </Button>
            <a href="#how-it-works" className="text-sm text-white/50 hover:text-white transition-all duration-300 border border-white/15 rounded-full px-7 py-3.5 hover:border-white/30 hover:bg-white/5">
              How It Works
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/40">
            <span className="flex items-center gap-1.5"><span className="text-orange-light font-semibold">83%</span> found it helpful</span>
            <span className="hidden sm:block w-px h-3 bg-white/15" />
            <span>20+ Clinical Studies</span>
            <span className="hidden sm:block w-px h-3 bg-white/15" />
            <span>CE Certified</span>
            <span className="hidden sm:block w-px h-3 bg-white/15" />
            <span>30-Day Guarantee</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 z-10 flex gap-2" style={{ zIndex: 4 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current ? "w-8 h-2 bg-gradient-to-r from-orange to-orange-light" : "w-2 h-2 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
