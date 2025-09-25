import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Science from "@/components/Science";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="science">
          <Science />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <CTA />
      </main>
    </div>
  );
};

export default Index;
