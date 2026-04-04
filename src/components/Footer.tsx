const Footer = () => (
  <footer className="py-16 md:py-20" style={{ background: "linear-gradient(180deg, #3D3935, #332F2B)" }}>
    <div className="container mx-auto px-6 md:px-8 max-w-6xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
        <div className="col-span-2 md:col-span-1">
          <div className="text-white font-bold text-lg mb-4">Zing Elate</div>
          <p className="text-white/35 text-xs font-light leading-relaxed max-w-[200px]">Neuroscience-powered wearable technology for focus, calm, and vitality.</p>
        </div>
        <div>
          <h4 className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-5">Product</h4>
          <nav className="flex flex-col space-y-3.5">
            <a href="#features" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Features</a>
            <a href="#how-it-works" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">How It Works</a>
            <a href="#reviews" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Reviews</a>
            <a href="#products" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Shop</a>
          </nav>
        </div>
        <div>
          <h4 className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-5">Company</h4>
          <nav className="flex flex-col space-y-3.5">
            <a href="#" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Privacy Policy</a>
            <a href="#" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Terms of Service</a>
            <a href="#support" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-5">Connect</h4>
          <nav className="flex flex-col space-y-3.5">
            <a href="mailto:support@zingenergy.ie" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Email Us</a>
            <a href="#support" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Support</a>
          </nav>
        </div>
      </div>
      <div className="h-px mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(224,120,32,0.15), transparent)" }} />
      <p className="text-white/20 text-xs font-light text-center">{"\u00A9"} 2025 Zing Elate. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
