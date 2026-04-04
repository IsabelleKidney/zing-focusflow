import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => (
  <section id="support" className="relative py-28 md:py-32" style={{ background: "linear-gradient(180deg, #F8F4EF, #F5F0EA)" }}>
    <div className="container mx-auto px-6 md:px-8 max-w-4xl text-center">
      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="w-10 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(224,120,32,0.4))" }} />
        <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "#E07820" }}>Support</span>
        <span className="w-10 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(224,120,32,0.4))" }} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">We're Here to Help</h2>
      <p className="text-muted-foreground font-light text-sm max-w-md mx-auto mb-10">Maximize your Zing Elate experience with our dedicated support team.</p>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white/80 p-8 rounded-2xl border border-white/60 hover:shadow-lg transition-all">
          <Mail className="w-5 h-5 mb-5" style={{ color: "#E07820" }} />
          <h4 className="font-semibold text-foreground mb-2">Email Support</h4>
          <p className="text-sm text-muted-foreground font-light mb-5">support@zingenergy.ie</p>
          <Button variant="outline" size="sm" className="rounded-full text-xs" onClick={() => window.location.href = "mailto:support@zingenergy.ie"}>Send Email</Button>
        </div>
        <div className="bg-white/80 p-8 rounded-2xl border border-white/60 hover:shadow-lg transition-all">
          <Mail className="w-5 h-5 mb-5" style={{ color: "#E07820" }} />
          <h4 className="font-semibold text-foreground mb-2">Performance Center</h4>
          <p className="text-sm text-muted-foreground font-light mb-5">Access guides, tutorials, and tips for peak performance.</p>
          <Button size="sm" className="rounded-full text-xs text-white" style={{ background: "linear-gradient(135deg, #E07820, #E8962A)" }}>Explore Resources</Button>
        </div>
      </div>
    </div>
  </section>
);

export default Support;
