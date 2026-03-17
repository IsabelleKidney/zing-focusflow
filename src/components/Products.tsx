import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import handheldDevice from "@/assets/handheld-device.png";
import earpiece from "@/assets/earpiece.png";

const Products = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 10 });
        setProducts(data.data.products.edges);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0].node;
    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", {
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <section id="products" className="py-28 bg-secondary">
        <div className="container mx-auto px-8 flex justify-center py-20">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-28 bg-secondary">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-4">
            Shop
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            FocusZing Shop
          </h2>
          <p className="text-sm text-muted-foreground font-light">
            Experience the future of focus and productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Handheld */}
          <div className="bg-background rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-full aspect-square flex items-center justify-center p-6 mb-4">
              <img src={handheldDevice} alt="Handheld Controller" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Handheld Control</h3>
            <p className="text-xs text-muted-foreground font-light">Intuitive control with multiple modes</p>
          </div>

          {/* Shopify products */}
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.node.id} className="bg-background rounded-2xl p-8 flex flex-col items-center text-center transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <Link to={`/product/${product.node.handle}`} className="mb-4">
                  <h3 className="text-sm font-semibold text-foreground hover:text-orange transition-colors">
                    {product.node.title}
                  </h3>
                </Link>
                <p className="text-xs text-muted-foreground font-light mb-4 line-clamp-2">
                  {product.node.description}
                </p>
                <p className="text-2xl font-bold text-foreground mb-4">NOT FOR SALE YET</p>
                <Button
                  className="w-full bg-orange hover:bg-orange-dark text-orange-foreground rounded-full text-sm font-semibold"
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.node.variants.edges[0].node.availableForSale}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.node.variants.edges[0].node.availableForSale ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            ))
          ) : (
            <div className="bg-background rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <p className="text-sm text-muted-foreground font-light">Coming soon</p>
            </div>
          )}

          {/* Earpiece */}
          <div className="bg-background rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-full aspect-square flex items-center justify-center p-6 mb-4">
              <img src={earpiece} alt="Premium Earpiece" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Premium Earpiece</h3>
            <p className="text-xs text-muted-foreground font-light">Comfortable in-ear design for extended use</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
