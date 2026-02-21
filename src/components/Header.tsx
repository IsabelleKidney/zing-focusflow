import { Button } from "@/components/ui/button";
import { Menu, X, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";
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

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Reviews", href: "#reviews" },
    { name: "Products", href: "#products" },
    { name: "Support", href: "#support" },
    { name: "Subscribe", href: "#subscribe" }
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "rotate": return <RotateCcw className="w-3.5 h-3.5 text-orange" />;
      case "ce": return <img src={ceMark} alt="CE" className="w-4 h-4 brightness-0 invert" />;
      case "shield": return <Shield className="w-3.5 h-3.5 text-orange" />;
      case "link": return null;
      default: return null;
    }
  };

  // Duplicate items for seamless loop
  const marqueeItems = [...bannerItems, ...bannerItems, ...bannerItems, ...bannerItems];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scrolling Trust Banner */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-white/10 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 py-1.5 whitespace-nowrap w-max">
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-xs text-white/80">
              {renderIcon(item.icon)}
              {item.href ? (
                <a href={item.href} className="underline decoration-white/40 hover:decoration-white transition-colors">
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
              <span className="text-orange/40 ml-4">✦</span>
            </span>
          ))}
        </div>
      </div>
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo removed */}
          </div>
          
          <div className="flex items-center gap-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-3 py-2">
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
        
        {/* Hamburger Menu */}
        {isOpen && (
          <div className="absolute right-8 top-full mt-4 py-6 px-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-elegant min-w-[200px]">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors text-sm tracking-wide text-right"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Button variant="default" className="w-full font-medium text-sm bg-gradient-primary text-white rounded-full hover:opacity-90 transition-all px-6 py-5">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;