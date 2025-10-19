import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Science from "@/components/Science";
import Reviews from "@/components/Reviews";
import Products from "@/components/Products";
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
        <Reviews />
        <Products />
        <Support />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
