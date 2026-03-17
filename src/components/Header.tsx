import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import focuszingLogo from "@/assets/focuszing-logo-clean.png";
import { CartDrawer } from "./CartDrawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Reviews", href: "#reviews" },
    { name: "Products", href: "#products" },
    { name: "FAQ", href: "#faq" },
    { name: "Support", href: "#support" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <nav className="container mx-auto px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src={focuszingLogo} alt="FocusZing" className="h-8 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden md:inline-flex bg-orange hover:bg-orange-dark text-orange-foreground rounded-full px-6 py-2 text-sm font-semibold"
            >
              <a href="/product/focuszing-device">Order Now</a>
            </Button>
            <CartDrawer />
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/40">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                asChild
                className="bg-orange hover:bg-orange-dark text-orange-foreground rounded-full mt-2 text-sm font-semibold"
              >
                <a href="/product/focuszing-device">Order Now</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
