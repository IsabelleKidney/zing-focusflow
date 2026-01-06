import focuszingLogo from "@/assets/focuszing-logo.png";
import zingoTrademark from "@/assets/zingo-trademark-branded.png";

const Footer = () => {
  const links = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Support", href: "#support" }
  ];

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img 
              src={focuszingLogo} 
              alt="FocusZing Logo" 
              className="w-8 h-8"
            />
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FocusZing
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6 mb-6 md:mb-0">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-border/50 pt-6 mt-6 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <img 
              src={zingoTrademark} 
              alt="Zingo Trademark" 
              className="h-6 w-auto"
            />
            <span className="text-xs text-muted-foreground">™</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 FocusZing. All rights reserved. | Unlock Your Potential. Achieve Success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;