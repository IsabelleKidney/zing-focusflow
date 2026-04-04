import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (email) { setDone(true); setEmail(""); } };

  if (done) return (
    <section className="py-28" style={{ background: "linear-gradient(180deg, #45413D, #4D4944)" }}>
      <div className="container mx-auto px-6 text-center"><CheckCircle className="w-12 h-12 mx-auto mb-5" style={{ color: "#E07820" }} /><h3 className="text-2xl font-bold text-white mb-2">You're In.</h3><p className="text-white/50 font-light text-sm">Watch your inbox for exclusive updates.</p></div>
    </section>
  );

  return (
    <section className="relative py-28 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #45413D, #4D4944)" }}>
      <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="max-w-lg mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] uppercase mb-4 block" style={{ color: "#E07820" }}>Stay Ahead</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Be First to Know</h3>
          <p className="text-white/40 mb-9 font-light text-sm">Get exclusive updates, early access, and performance tips.</p>
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 rounded-full px-5 h-12" required />
            <Button type="submit" className="rounded-full h-12 px-7 text-white font-medium" style={{ background: "linear-gradient(135deg, #E07820, #E8962A)" }}>Subscribe</Button>
          </form>
          <p className="text-white/20 text-xs mt-5 font-light">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
