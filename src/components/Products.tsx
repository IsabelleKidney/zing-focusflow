import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2, ArrowRight } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import handheldDevice from "@/assets/handheld-device.png";
import earpiece from "@/assets/earpiece.png";

const Products = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 10 });
        setProducts(data.data.products.edges);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0].node;
    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <section id="products" className="py-28 md:py-36" style={{
        background: "linear-gradient(180deg, hsl(22, 8%, 19%) 0%, hsl(24, 10%, 16%) 100%)"
      }}>
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-orange" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="relative py-28 md:py-36 overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(22, 8%, 19%) 0%, hsl(24, 10%, 16%) 100%)"
    }}>
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsla(28, 80%, 50%, 0.05) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-18">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-orange/30" />
            <span className="text-orange text-xs font-semibold tracking-[0.22em] uppercase">
              Shop
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-orange/30" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            The Zing Elate System
          </h2>
          <p className="text-base text-white/45 max-w-lg mx-auto font-light">
            Premium neurostimulation technology, thoughtfully designed for peak performance.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl w-full">
            {/* Left - Handheld */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/8 overflow-hidden hover:border-orange/15 transition-all duration-400 group bg-white/[0.03]"
            >
              <div className="aspect-square flex items-center justify-center p-10" style={{
                background: "linear-gradient(180deg, hsla(35, 20%, 50%, 0.06) 0%, transparent 100%)"
              }}>
                <img
                  src={handheldDevice}
                  alt="Handheld Control Device"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white mb-1">Handheld Controller</h3>
                <p className="text-sm text-white/40 font-light">
                  Intuitive control with multiple stimulation modes
                </p>
              </div>
            </motion.div>

            {/* Center - Main Product */}
            {products.length > 0 ? products.map((product) => (
              <motion.div
                key={product.node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border-2 border-orange/25 overflow-hidden transition-all duration-400 flex flex-col group relative bg-white/[0.04] hover:border-orange/40"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-orange to-amber-500 text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
                
                <div className="p-6 pt-14 flex-1 flex flex-col">
                  <Link to={`/product/${product.node.handle}`}>
                    <h3 className="text-xl font-bold text-white hover:text-orange transition-colors mb-2 text-center">
                      {product.node.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-white/40 font-light text-center leading-relaxed mb-6 flex-1">
                    {product.node.description}
                  </p>
                  
                  <div className="text-center mb-5">
                    <span className="text-xs text-white/30 font-light uppercase tracking-wider">From</span>
                    <p className="text-3xl font-bold text-white mt-1">€199</p>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-orange to-amber-500 hover:from-orange-dark hover:to-orange text-white rounded-full font-medium shadow-glow"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.node.variants.edges[0].node.availableForSale}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.node.variants.edges[0].node.availableForSale ? 'Add to Cart' : 'Launching Soon'}
                  </Button>
                </div>
              </motion.div>
            )) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border-2 border-orange/25 overflow-hidden flex flex-col p-8 items-center justify-center text-center bg-white/[0.04]"
              >
                <span className="bg-gradient-to-r from-orange to-amber-500 text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                  Coming Soon
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Zing Elate Device</h3>
                <p className="text-sm text-white/40 font-light mb-4">The complete neurostimulation system</p>
                <p className="text-3xl font-bold text-white">€199</p>
              </motion.div>
            )}

            {/* Right - Earpiece */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-white/8 overflow-hidden hover:border-orange/15 transition-all duration-400 group bg-white/[0.03]"
            >
              <div className="aspect-square flex items-center justify-center p-10" style={{
                background: "linear-gradient(180deg, hsla(35, 20%, 50%, 0.06) 0%, transparent 100%)"
              }}>
                <img
                  src={earpiece}
                  alt="Earpiece Device"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white mb-1">Premium Earpiece</h3>
                <p className="text-sm text-white/40 font-light">
                  Comfortable in-ear design for extended use
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
