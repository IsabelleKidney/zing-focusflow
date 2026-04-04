import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Science from "@/components/Science";
import Products from "@/components/Products";
import WhatsInTheBox from "@/components/WhatsInTheBox";
import Reviews from "@/components/Reviews";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Science />
        <Products />
        <WhatsInTheBox />
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
