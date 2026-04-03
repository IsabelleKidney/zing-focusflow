import { motion } from "framer-motion";
import founderPhoto from "@/assets/founder-isabelle.jpg";

const Founder = () => {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(20,12%,12%) 0%, hsl(24,10%,16%) 100%)" }}>
      <div className="max-w-[900px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 relative"
          >
            <img
              src={founderPhoto}
              alt="Isabelle Kidney, Founder"
              className="w-44 h-44 rounded-2xl object-cover object-top shadow-warm-lg"
            />
            <div className="absolute inset-[-4px] rounded-[20px] border-2 border-orange/15 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <span className="w-6 h-px bg-orange" />
              <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">Founder's Story</span>
            </div>
            <p className="text-white/75 text-base md:text-lg leading-relaxed font-light italic mb-4">
              "I use Zing Elate to elevate my mood, boost my energy and sharpen my focus. I have more energy than when I was 20. It is great for when I need to do assignments I don't want to do. Honestly, if I had to choose between the Euro Millions or Zing Elate, it would be Zing Elate every day."
            </p>
            <div className="font-semibold text-white text-sm">Isabelle Kidney</div>
            <div className="text-white/40 text-xs font-light">Founder, Zing Elate</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
