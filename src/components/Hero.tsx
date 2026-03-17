import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage1 from "@/assets/hero-student-library.jpg";
import heroImage2 from "@/assets/hero-woman-social.jpg";
import heroImage3 from "@/assets/hero-leader-office.jpg";
import focuszingDevice from "@/assets/focuszing-device.png";

const slides = [
  {
    image: heroImage1,
    eyebrow: "Neuroscience-Powered Focus",
    headline: "Train Your Brain.\nOwn Your Day.",
    subline: "The world's most advanced wearable neurostimulation device for laser focus, deep calm, and sustained energy.",
  },
  {
    image: heroImage2,
    eyebrow: "Clinically Validated",
    headline: "Feel the Calm.\nFind the Flow.",
    subline: "Vagus nerve stimulation that helps you think clearer, feel calmer, and perform at your peak — effortlessly.",
  },
  {
    image: heroImage3,
    eyebrow: "Designed for Leaders",
    headline: "Fuel Your Focus.\nPower Your Potential.",
    subline: "Join high performers who use FocusZing to stay sharp, composed, and energised throughout every day.",
  },
];

const INTERVAL = 6000;

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
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: "center center",
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
            transform: i === current ? "scale(1.04)" : "scale(1)",
            transition: "opacity 1.2s ease-in-out, transform 8s ease-out",
          }}
        />
      ))}

      {/* Cinematic overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.08) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24" style={{ zIndex: 3 }}>
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Eyebrow */}
              <span className="inline-block text-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                {slides[current].eyebrow}
              </span>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-jakarta font-extrabold text-white mb-5 leading-[1.08] tracking-tight whitespace-pre-line">
                {slides[current].headline}
              </h1>

              {/* Subline */}
              <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl mb-8 font-light">
                {slides[current].subline}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <Button
              asChild
              className="bg-orange hover:bg-orange-dark text-white rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-glow"
            >
              <a href="/product/focuszing-device">
                Shop Now — From €199
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <a
              href="#how-it-works"
              className="text-sm text-white/60 hover:text-white transition-colors border border-white/20 rounded-full px-6 py-3 hover:border-white/40"
            >
              How It Works
            </a>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/50">
            <span className="flex items-center gap-1.5">
              <span className="text-orange font-semibold">83%</span> found it helpful
            </span>
            <span className="hidden sm:block w-px h-3 bg-white/20" />
            <span>20+ Clinical Studies</span>
            <span className="hidden sm:block w-px h-3 bg-white/20" />
            <span>CE Certified</span>
            <span className="hidden sm:block w-px h-3 bg-white/20" />
            <span>30-Day Guarantee</span>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-[2px] rounded-full transition-all duration-700 ${
                i === current ? "w-12 bg-orange" : "w-5 bg-white/25 hover:bg-white/40"
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
