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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={focuszingLogo} 
              alt="FocusZing Logo" 
              className="w-8 h-8"
            />
            <div className="text-lg font-semibold text-foreground">
              FocusZing
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/60 hover:text-foreground font-normal text-sm transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-normal text-sm text-foreground/60 hover:text-foreground hover:bg-transparent">
              Subscribe
            </Button>
            <Button variant="default" className="font-medium bg-gradient-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Order Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/40">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/60 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="ghost" className="font-normal text-foreground/60 hover:text-foreground">
                  Subscribe
                </Button>
                <Button variant="default" className="font-medium bg-gradient-primary text-white rounded-full hover:opacity-90">
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