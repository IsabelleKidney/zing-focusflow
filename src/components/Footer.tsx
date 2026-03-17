import focuszingLogo from "@/assets/focuszing-logo-clean.png";

const Footer = () => {
  const links = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Support", href: "#support" },
  ];

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <img src={focuszingLogo} alt="FocusZing" className="h-7 w-auto mb-6 md:mb-0" />
          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-border/40 pt-6 text-center">
          <p className="text-xs text-muted-foreground font-light">
            © 2024 FocusZing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
