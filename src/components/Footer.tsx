import zingoTrademark from "@/assets/zingo-trademark-transparent-f77c1e.png";
import { ColorKeyedLogo } from "@/components/ColorKeyedLogo";

const Footer = () => {
  const links = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact", href: "#support" },
  ];

  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Reviews", href: "#reviews" },
    { name: "Shop", href: "#products" },
  ];

  return (
    <footer className="bg-foreground py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <ColorKeyedLogo
              src={zingoTrademark}
              alt="FocusZing"
              className="h-14 w-auto mb-4 brightness-200"
              tolerance={12}
            />
            <p className="text-white/40 text-xs font-light leading-relaxed max-w-[200px]">
              Neuroscience-powered wearable technology for focus, calm, and vitality.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold tracking-[0.15em] uppercase mb-4">Product</h4>
            <nav className="flex flex-col space-y-3">
              {productLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/40 hover:text-white/70 transition-colors text-sm font-light"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold tracking-[0.15em] uppercase mb-4">Company</h4>
            <nav className="flex flex-col space-y-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/40 hover:text-white/70 transition-colors text-sm font-light"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold tracking-[0.15em] uppercase mb-4">Connect</h4>
            <nav className="flex flex-col space-y-3">
              <a href="mailto:support@zingenergy.ie" className="text-white/40 hover:text-white/70 transition-colors text-sm font-light">
                Email Us
              </a>
              <a href="#support" className="text-white/40 hover:text-white/70 transition-colors text-sm font-light">
                Support
              </a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/25 text-xs font-light text-center">
            © 2024 FocusZing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
