import { Linkedin, Instagram } from "lucide-react";
import ceMark from "@/assets/ce-mark.png";

const Footer = () => (
  <footer className="py-16 md:py-20" style={{ background: "linear-gradient(180deg, #3D3935, #332F2B)" }}>
    <div className="container mx-auto px-6 md:px-8 max-w-6xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
        <div className="col-span-2 md:col-span-1">
          <div className="text-white font-bold text-lg mb-4">Zing Elate</div>
          <p className="text-white/35 text-xs font-light leading-relaxed max-w-[200px] mb-4">Neuroscience-powered wearable for focus, calm, and vitality.</p>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center border border-white/12 bg-white/[0.04] hover:border-white/25 transition-colors">
              <Linkedin className="w-3.5 h-3.5 text-white/50" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center border border-white/12 bg-white/[0.04] hover:border-white/25 transition-colors">
              <Instagram className="w-3.5 h-3.5 text-white/50" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center border border-white/12 bg-white/[0.04] hover:border-white/25 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-5">Product</h4>
          <nav className="flex flex-col space-y-3.5">
            <a href="#features" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Features</a>
            <a href="#how-it-works" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">How It Works</a>
            <a href="#reviews" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Reviews</a>
          </nav>
        </div>
        <div>
          <h4 className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-5">Company</h4>
          <nav className="flex flex-col space-y-3.5">
            <a href="#" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Privacy Policy</a>
            <a href="#" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Terms</a>
            <a href="#support" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-5">Connect</h4>
          <nav className="flex flex-col space-y-3.5">
            <a href="mailto:support@zingenergy.ie" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Email Us</a>
            <a href="#support" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">Support</a>
            <a href="#faq" className="text-white/35 hover:text-orange-500 transition-colors text-sm font-light">FAQ</a>
          </nav>
        </div>
      </div>

      {/* Trust Row */}
      <div className="flex flex-wrap items-center justify-center gap-6 py-6 mb-10 max-w-6xl mx-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2 text-white/30 text-xs">
          <img src={ceMark} alt="CE" className="h-4 opacity-50" />
          CE Certified
        </div>
        <span className="w-px h-4" style={{ background: "rgba(255,255,255,0.1)" }} />
        <div className="flex items-center gap-2 text-white/30 text-xs">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          30-Day Guarantee
        </div>
        <span className="w-px h-4" style={{ background: "rgba(255,255,255,0.1)" }} />
        <div className="flex items-center gap-2 text-white/30 text-xs">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          Made in Ireland
        </div>
      </div>

      <p className="text-white/20 text-xs font-light text-center">{"\u00A9"} 2025 Zing Elate. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
