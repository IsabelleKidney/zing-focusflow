import { Newspaper } from "lucide-react";

const PressLogos = () => {
  const pressLogos = [
    { name: "TechCrunch" },
    { name: "Wired" },
    { name: "Forbes Health" },
    { name: "Healthline" },
  ];

  return (
    <section className="py-10 bg-background border-y border-border/40">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <p className="text-center text-[10px] text-muted-foreground/60 mb-5 font-medium tracking-[0.25em] uppercase">
          As Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {pressLogos.map((logo, index) => (
            <span
              key={index}
              className="text-muted-foreground/30 text-lg font-bold tracking-tight hover:text-muted-foreground/50 transition-colors"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressLogos;
