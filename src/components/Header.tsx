import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { CartDrawer } from "./CartDrawer";
import zingElateLogo from "@/assets/zing-elate-logo.png";

function useProcessedLogo(src: string) {
  const [processed, setProcessed] = useState<string | null>(null);
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2], a = d[i + 3];
        if (a < 10) continue;
        if (r > 220 && g > 220 && b > 220) { d[i + 3] = 0; continue; }
        if (r > 150 && g < 150 && b < 100) { d[i] = 224; d[i+1] = 120; d[i+2] = 32; continue; }
        if (r < 80 && g < 80 && b < 80) { d[i] = 255; d[i+1] = 255; d[i+2] = 255; }
      }
      ctx.putImageData(imageData, 0, 0);
      setProcessed(canvas.toDataURL("image/png"));
    };
    img.src = src;
  }, [src]);
  return processed;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const processedLogo = useProcessedLogo(zingElateLogo);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowCta(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const navItems = [
    { name: "Features", href: "#features", num: "01" },
    { name: "How It Works", href: "#how-it-works", num: "02" },
    { name: "Products", href: "#products", num: "03" },
    { name: "Reviews", href: "#reviews", num: "04" },
    { name: "Support", href: "#support", num: "05" },
  ];

  return (
    <>
      {/* Full-screen nav overlay */}
      <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
        <button
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:border-orange transition-colors"
          onClick={toggleNav}
        >
          <X className="w-5 h-5 text-white/70" />
        </button>
        <div className="text-center">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={toggleNav}>
              <span className="text-xs font-normal text-white/15 tracking-widest mr-4 align-middle">{item.num}</span>
              {item.name}
            </a>
          ))}
          <div className="mt-10" style={{ transform: isOpen ? "translateY(0)" : "translateY(20px)", opacity: isOpen ? 1 : 0, transition: "all .4s .5s" }}>
            <Button asChild className="bg-gradient-to-r from-orange to-amber-500 text-white rounded-full px-11 py-5 text-base font-medium">
              <a href="/product/focuszing-device" onClick={toggleNav}>Order Now — €199</a>
            </Button>
          </div>
        </div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className={`transition-all duration-500 ${scrolled ? "bg-[rgba(50,46,40,0.94)] backdrop-blur-xl shadow-premium" : ""}`}>
          <div className="container mx-auto px-6 md:px-8 py-4">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center">
                <img src={processedLogo ?? zingElateLogo} alt="Zing Elate" className="h-7 md:h-8 w-auto" />
              </a>
              <div className="flex items-center gap-3">
                {showCta && (
                  <a href="#products" className="hidden sm:inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-orange to-amber-500 text-white text-xs font-semibold transition-all">
                    Shop Now
                  </a>
                )}
                <div className={`flex items-center gap-0 rounded-full px-3 py-2 transition-all duration-400 ${scrolled ? "bg-white/8 border border-white/8" : "bg-white/8 backdrop-blur-xl border border-white/12"}`}>
                  <button className="p-2 text-white/80 hover:text-white transition-colors" onClick={toggleNav}>
                    <Menu className="w-5 h-5" />
                  </button>
                  <CartDrawer />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
