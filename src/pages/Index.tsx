import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import Science from "@/components/Science";
import WhatsInTheBox from "@/components/WhatsInTheBox";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CursorEffect />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Science />
        <WhatsInTheBox />
        <Products />
        <Reviews />
        <Founder />
        <FAQ />
        <Support />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
