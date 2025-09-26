import zingLogo from "@/assets/zing-logo.png";

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
              src={zingLogo} 
              alt="Zing Logo" 
              className="w-8 h-8"
            />
            <div className="text-xl font-bold text-foreground">
              Zing
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
        
        <div className="border-t border-border/50 pt-6 mt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Zing. All rights reserved. | Relieve Stress. Elevate Life.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;