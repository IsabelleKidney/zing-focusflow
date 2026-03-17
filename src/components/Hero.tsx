import { Button } from "@/components/ui/button";
import focuszingDevice from "@/assets/focuszing-device.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-background flex items-center pt-20">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-6">
              Wearable Neurostimulation
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-foreground leading-[1.05] tracking-tight mb-6">
              Fuel Your<br />
              <span className="text-orange">Focus</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8 max-w-md">
              Laser Focus, Deep Calm &amp; Turbocharged Vitality.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button
                asChild
                className="bg-orange hover:bg-orange-dark text-orange-foreground rounded-full px-10 py-4 text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <a href="/product/focuszing-device">Buy Now — from €199</a>
              </Button>
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-6 py-3.5 border border-border rounded-full hover:border-foreground/30"
              >
                Learn More
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="text-orange font-semibold">83%</span>{" "}
              of trial participants found it helpful or very helpful
            </p>
          </div>

          {/* Right — Product Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square bg-secondary rounded-3xl flex items-center justify-center p-12">
              <img
                src={focuszingDevice}
                alt="FocusZing device"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
