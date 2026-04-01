import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { CartDrawer } from "./CartDrawer";
import zingElateLogo from "@/assets/zing-elate-logo.png";

/** Processes the logo: removes white bg, turns dark pixels white, keeps orange */
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
        // White/near-white background → transparent
        if (r > 220 && g > 220 && b > 220) {
          d[i + 3] = 0;
          continue;
        }
        // Orange-ish pixels → keep as-is
        if (r > 150 && g < 150 && b < 100) continue;
        // Dark pixels (text) → make white
        if (r < 80 && g < 80 && b < 80) {
          d[i] = 255; d[i + 1] = 255; d[i + 2] = 255;
        }
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
  const processedLogo = useProcessedLogo(zingElateLogo);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Reviews", href: "#reviews" },
    { name: "Products", href: "#products" },
    { name: "Support", href: "#support" },
  ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Navigation */}
      <nav className={`transition-all duration-500 ${scrolled ? "bg-foreground/90 backdrop-blur-xl shadow-premium" : ""}`}>
        <div className="container mx-auto px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <img src={processedLogo ?? zingElateLogo} alt="Zing Elate" className="h-7 md:h-8 w-auto" />
            </a>
            
            <div className={`flex items-center gap-0 rounded-full px-3 py-2 transition-all duration-300 ${
              scrolled 
                ? "bg-white/10 border border-white/10" 
                : "bg-white/10 backdrop-blur-xl border border-white/15"
            }`}>
              <button
                className="p-2 text-white hover:text-white/80 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <CartDrawer />
            </div>
          </div>
          
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-6 md:right-8 top-full mt-2 py-6 px-8 bg-foreground/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-premium min-w-[220px]">
              <div className="flex flex-col space-y-5">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors text-sm tracking-wide text-right font-light"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Button asChild className="w-full font-medium text-sm bg-orange hover:bg-orange-dark text-white rounded-full transition-all px-6 py-5">
                    <a href="/product/focuszing-device">Order Now</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
