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
      <section id="products" className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-orange" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Shop
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            The FocusZing System
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto font-light">
            Premium neurostimulation technology, thoughtfully designed.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full">
            {/* Left - Handheld */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="aspect-square bg-gradient-warm flex items-center justify-center p-10">
                <img
                  src={handheldDevice}
                  alt="Handheld Control Device"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-1">Handheld Controller</h3>
                <p className="text-sm text-muted-foreground font-light">
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
                className="bg-card rounded-2xl border-2 border-orange/20 overflow-hidden hover:shadow-card-hover transition-all duration-300 flex flex-col group relative"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-orange text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
                
                <div className="p-6 pt-14 flex-1 flex flex-col">
                  <Link to={`/product/${product.node.handle}`}>
                    <h3 className="text-xl font-bold text-foreground hover:text-orange transition-colors mb-2 text-center">
                      {product.node.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground font-light text-center leading-relaxed mb-6 flex-1">
                    {product.node.description}
                  </p>
                  
                  <div className="text-center mb-5">
                    <span className="text-xs text-muted-foreground font-light uppercase tracking-wider">From</span>
                    <p className="text-3xl font-bold text-foreground mt-1">€199</p>
                  </div>
                  
                  <Button 
                    className="w-full bg-orange hover:bg-orange-dark text-white rounded-full font-medium"
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
                className="bg-card rounded-2xl border-2 border-orange/20 overflow-hidden flex flex-col p-8 items-center justify-center text-center"
              >
                <span className="bg-orange text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                  Coming Soon
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">FocusZing Device</h3>
                <p className="text-sm text-muted-foreground font-light mb-4">The complete neurostimulation system</p>
                <p className="text-3xl font-bold text-foreground">€199</p>
              </motion.div>
            )}

            {/* Right - Earpiece */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="aspect-square bg-gradient-warm flex items-center justify-center p-10">
                <img
                  src={earpiece}
                  alt="Earpiece Device"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-1">Premium Earpiece</h3>
                <p className="text-sm text-muted-foreground font-light">
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
