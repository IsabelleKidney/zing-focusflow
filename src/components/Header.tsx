import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import focuszingLogo from "@/assets/focuszing-logo-no-bg.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Science", href: "#science" },
    { name: "Reviews", href: "#reviews" },
    { name: "Support", href: "#support" },
    { name: "Subscribe", href: "#subscribe" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={focuszingLogo} 
              alt="FocusZing Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
          
          <button
            className="p-2 text-white hover:text-white/80 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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