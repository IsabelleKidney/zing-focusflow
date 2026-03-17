import zingoTrademark from "@/assets/zingo-trademark-transparent-f77c1e.png";
import { ColorKeyedLogo } from "@/components/ColorKeyedLogo";

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
          <div className="flex items-center mb-6 md:mb-0">
            <ColorKeyedLogo
              src={zingoTrademark}
              alt="Zingo"
              className="h-20 md:h-24 w-auto"
              tolerance={12}
            />
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
            © 2024 FocusZing. All rights reserved. | Unlock Your Potential. Achieve Success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;