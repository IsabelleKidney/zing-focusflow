import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import focuszingLogo from "@/assets/focuszing-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Science", href: "#science" },
    { name: "Reviews", href: "#reviews" },
    { name: "Support", href: "#support" }
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
            className="p-2 text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Hamburger Menu */}
        {isOpen && (
          <div className="mt-6 py-6 border-t border-border/30">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/60 hover:text-foreground transition-colors text-sm tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-4 pt-4">
                <Button variant="ghost" className="font-normal text-sm text-foreground/60 hover:text-foreground justify-start px-0">
                  Subscribe
                </Button>
                <Button variant="default" className="font-medium text-sm bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors">
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