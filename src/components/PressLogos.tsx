const PressLogos = () => {
  const pressLogos = [
    { name: "TechCrunch" },
    { name: "Wired" },
    { name: "Forbes Health" },
    { name: "Healthline" },
  ];

  return (
    <section className="py-12 border-y border-border/30" style={{
      background: "linear-gradient(180deg, hsl(38, 22%, 97%) 0%, hsl(36, 26%, 96%) 100%)"
    }}>
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <p className="text-center text-[10px] text-muted-foreground/50 mb-6 font-medium tracking-[0.25em] uppercase">
          As Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {pressLogos.map((logo, index) => (
            <span
              key={index}
              className="text-muted-foreground/25 text-lg font-bold tracking-tight hover:text-orange/40 transition-colors duration-300"
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
