import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoSrc from "@/assets/zing-elate-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const h = () => { setScrolled(window.scrollY > 60); setShowCta(window.scrollY > window.innerHeight * 0.5); };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const toggle = () => { setIsOpen(!isOpen); document.body.style.overflow = !isOpen ? "hidden" : ""; };
  const navItems = [
    { name: "Features", href: "#features", num: "01" },
    { name: "How It Works", href: "#how-it-works", num: "02" },
    { name: "Products", href: "#products", num: "03" },
    { name: "Reviews", href: "#reviews", num: "04" },
    { name: "Support", href: "#support", num: "05" },
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center" style={{ background: "rgba(36,32,22,0.97)", backdropFilter: "blur(30px)" }}>
          <button className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-white/10 rounded-full" onClick={toggle}>
            <X className="w-5 h-5 text-white/70" />
          </button>
          <div className="text-center">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={toggle}
                className="block text-3xl md:text-5xl font-light text-white/50 hover:text-white py-3 transition-all hover:translate-x-2">
                <span className="text-xs text-white/15 tracking-widest mr-4 align-middle">{item.num}</span>{item.name}
              </a>
            ))}
            <div className="mt-10">
              <Button asChild className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full px-11 py-5 text-base font-medium">
                <a href="#products" onClick={toggle}>Order Now – €199</a>
              </Button>
            </div>
          </div>
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className={`transition-all duration-500 ${scrolled ? "shadow-lg" : ""}`}
          style={scrolled ? { background: "rgba(69,65,61,0.94)", backdropFilter: "blur(24px)" } : {}}>
          <div className="container mx-auto px-6 md:px-8 py-4">
            <div className="flex items-center justify-between">
              <a href="#">
                {logo ? <img src={logo} alt="Zing Elate" className="h-7 md:h-8 w-auto" />
                  : <span className="text-white font-bold text-lg">Zing Elate</span>}
              </a>
              <div className="flex items-center gap-3">
                {showCta && (
                  <a href="#products" className="hidden sm:inline-flex px-5 py-2 rounded-full text-white text-xs font-semibold"
                    style={{ background: "linear-gradient(135deg, #E07820, #E8962A)" }}>Shop Now</a>
                )}
                <button className="p-2 text-white/80 hover:text-white transition-colors rounded-full border border-white/12 bg-white/8 backdrop-blur-xl px-4 py-2"
                  onClick={toggle}><Menu className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
