import founderPhoto from "@/assets/founder-isabelle.jpg";

const Founder = () => (
  <section className="relative py-24 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #3D3935, #45413D)" }}>
    <div className="max-w-[900px] mx-auto px-6 md:px-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-shrink-0 relative">
          <img src={founderPhoto} alt="Isabelle Kidney, Founder" className="w-44 h-44 rounded-2xl object-cover object-top shadow-lg" />
          <div className="absolute inset-[-4px] rounded-[20px] pointer-events-none" style={{ border: "2px solid rgba(224,120,32,0.15)" }} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <span className="w-6 h-px" style={{ background: "#E07820" }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#E07820" }}>Founder's Story</span>
          </div>
          <p className="text-white/75 text-base md:text-lg leading-relaxed font-light italic mb-4">
            {"\u201C"}Zing Elate lifts my mood, boosts my energy, and sharpens my focus. I feel more energised now than I did in my twenties, and it is a lifesaver for powering through assignments I would rather avoid. Forget the Lotto; Zing Elate is the real prize.{"\u201D"}
          </p>
          <div className="font-semibold text-white text-sm">Isabelle Kidney</div>
          <div className="text-white/40 text-xs font-light">Founder, Zing Elate</div>
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
