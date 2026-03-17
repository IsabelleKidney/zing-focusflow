import { Button } from "@/components/ui/button";
import { Menu, X, Shield, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import focuszingLogo from "@/assets/focuszing-logo-clean.png";
import ceMark from "@/assets/ce-mark.png";
import { CartDrawer } from "./CartDrawer";

const bannerItems = [
  { icon: "rotate", text: "30-Day Money-Back Guarantee" },
  { icon: "ce", text: "CE Certified" },
  { icon: "shield", text: "1-Year Warranty" },
  { icon: "link", text: "Wearable Neurostimulation", href: "#how-it-works" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "rotate": return <RotateCcw className="w-3 h-3 text-orange" />;
      case "ce": return <img src={ceMark} alt="CE" className="w-3.5 h-3.5 brightness-0 invert" />;
      case "shield": return <Shield className="w-3 h-3 text-orange" />;
      case "link": return null;
      default: return null;
    }
  };

  const marqueeItems = [...bannerItems, ...bannerItems, ...bannerItems, ...bannerItems];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Marquee Banner */}
      <div className="overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 py-1.5 whitespace-nowrap w-max">
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 text-[11px] text-white/70 font-light tracking-wide">
              {renderIcon(item.icon)}
              {item.href ? (
                <a href={item.href} className="underline decoration-white/30 hover:decoration-white/60 transition-colors">
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
              <span className="text-orange/30 ml-4">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`transition-all duration-500 ${scrolled ? "bg-foreground/90 backdrop-blur-xl shadow-premium" : ""}`}>
        <div className="container mx-auto px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center" />
            
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
