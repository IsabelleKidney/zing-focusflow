import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import zingLogo from "@/assets/zing-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Science", href: "#science" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Support", href: "#support" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={zingLogo} 
              alt="FocusZing Logo" 
              className="w-8 h-8"
            />
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Zing
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium">
              Login
            </Button>
            <Button variant="hero" className="font-semibold bg-gradient-orange hover:bg-orange-dark hover:scale-105 transition-all duration-300">
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
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="font-medium">
                  Login
                </Button>
                <Button variant="hero" className="font-semibold bg-gradient-orange hover:bg-orange-dark hover:scale-105 transition-all duration-300">
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