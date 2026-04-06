import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-student-library.jpg";
import heroImage2 from "@/assets/hero-woman-social.jpg";
import heroImage3 from "@/assets/hero-leader-office.jpg";

const slides = [
  { image: heroImage1, position: "60% 15%", eyebrow: "Neuroscience-Powered Focus", headline: "Fuel Your Focus\nPower Your Potential", subline: "The world\u2019s most advanced wearable neurostimulation device for laser focus, deep calm, and sustained energy." },
  { image: heroImage2, position: "center 20%", eyebrow: "Clinically Validated", headline: "Elevate Your Vitality\nFind Your Flow", subline: "The New Happily Ever After. Elevate your mood with a 45-minute daily Zing Elate practice." },
  { image: heroImage3, position: "55% 5%", size: "140%", eyebrow: "Designed for Leaders", headline: "For High Performance\nSimply Press Play", subline: "Join high performers who use Zing Elate to stay sharp, composed, and energised throughout every day." },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((i: number) => {
    if (i === current) return;
    setTextVisible(false);
    setTimeout(() => {
      setCurrent(i);
      setTimeout(() => setTextVisible(true), 100);
    }, 500);
  }, [current]);

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % 3), 6000);
    return () => clearInterval(t);
  }, [current, goTo]);

  useEffect(() => {
    const h = () => {
      const s = window.scrollY;
      if (s < window.innerHeight && contentRef.current) {
        contentRef.current.style.transform = `translateY(${-s * 0.35}px)`;
        contentRef.current.style.opacity = `${Math.max(0, 1 - s / (window.innerHeight * 0.6))}`;
      }
    };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {slides.map((s, i) => (
        <div key={i} className="absolute inset-0 bg-no-repeat" style={{
          backgroundImage: `url(${s.image})`, backgroundPosition: s.position,
          backgroundSize: s.size || "cover",
          opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0,
          transform: i === current ? "scale(1.04)" : "scale(1)",
          transition: "opacity 2s cubic-bezier(0.25, 0.1, 0.25, 1), transform 12s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }} />
      ))}
      <div className="absolute inset-0 z-[2]" style={{ background: "linear-gradient(to top, hsla(22,18%,14%,0.90) 0%, hsla(25,16%,16%,0.55) 30%, hsla(30,20%,20%,0.22) 55%, transparent 100%)" }} />
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 80% 20%, hsla(35,100%,55%,0.07), transparent 70%)" }} />
      <div ref={contentRef} className="relative w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24" style={{ zIndex: 3 }}>
        <div className="max-w-3xl">
          <div className={`transition-all duration-500 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px" style={{ background: "linear-gradient(to right, #E07820, #F0993A)" }} />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "#F0993A" }}>{slides[current].eyebrow}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold text-white mb-5 leading-[1.06] tracking-tight whitespace-pre-line">{slides[current].headline}</h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl mb-9 font-light">{slides[current].subline}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <Button asChild className="rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, #E07820, #E8962A)" }}>
              <a href="#products">Shop Now – €199</a>
            </Button>
            <a href="#how-it-works" className="text-sm text-white/50 hover:text-white transition-all border border-white/15 rounded-full px-7 py-3.5 hover:border-white/30">How It Works</a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/40">
            <span><span style={{ color: "#F0993A", fontWeight: 600 }}>83%</span> found it helpful</span>
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
          <button key={i} onClick={() => goTo(i)} className={`transition-all duration-500 rounded-full ${i === current ? "w-8 h-2" : "w-2 h-2 bg-white/25 hover:bg-white/40"}`}
            style={i === current ? { background: "linear-gradient(to right, #E07820, #F0993A)" } : {}} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
