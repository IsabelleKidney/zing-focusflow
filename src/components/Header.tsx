import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import focuzingLogo from "@/assets/focuzing-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Science", href: "#science" },
    { name: "Reviews", href: "#reviews" },
    { name: "Support", href: "#support" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-xl border-b border-gradient-primary/20 shadow-lg shadow-orange/5">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={focuzingLogo} 
              alt="FocuZing Logo" 
              className="w-12 h-12"
            />
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FocuZing
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-orange font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="font-medium text-sm hover:bg-orange/10">
              Subscribe
            </Button>
            <Button variant="default" className="font-bold bg-gradient-primary hover:bg-orange text-white px-8 py-2.5 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
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
                  className="text-foreground hover:text-orange transition-smooth font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="ghost" className="font-medium">
                  Subscribe
                </Button>
                <Button variant="default" className="font-bold bg-gradient-primary hover:bg-orange text-white rounded-full">
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