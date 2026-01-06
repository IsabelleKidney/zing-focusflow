import { Newspaper } from "lucide-react";

const PressLogos = () => {
  // Placeholder press mentions - replace with actual logos when available
  const pressLogos = [
    { name: "TechCrunch", placeholder: true },
    { name: "Wired", placeholder: true },
    { name: "Forbes Health", placeholder: true },
    { name: "Healthline", placeholder: true },
  ];

  return (
    <section className="py-12 bg-muted/20 border-y border-border/30">
      <div className="container mx-auto px-8 max-w-7xl">
        <p className="text-center text-sm text-muted-foreground mb-6 font-light tracking-wide uppercase">
          As Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {pressLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <Newspaper className="w-5 h-5" />
              <span className="text-lg font-semibold tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground/50 mt-4 font-light">
          Press logos coming soon
        </p>
      </div>
    </section>
  );
};

export default PressLogos;
