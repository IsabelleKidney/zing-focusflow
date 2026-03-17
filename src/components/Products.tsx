import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
      <section id="products" className="py-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="products" className="py-12 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight pb-2">
              Focuzing Shop
            </h2>
            <p className="text-lg text-muted-foreground">
              Our products are coming soon. Check back later!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-12 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight pb-2">
            Focuzing Shop
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the future of focus and productivity
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
            {/* Left card - Handheld Device */}
            <Card className="overflow-hidden">
              <div className="flex justify-center pt-4 pb-4">
                <div className="w-full aspect-square overflow-hidden bg-secondary/20 rounded-lg flex items-center justify-center p-6">
                  <img
                    src={handheldDevice}
                    alt="Handheld Control Device"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <CardHeader className="py-4">
                <CardTitle className="text-center">Handheld Control</CardTitle>
                <CardDescription className="line-clamp-2 text-center">
                  Intuitive control device with multiple modes
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Middle card - Shopify Product */}
            {products.map((product) => (
            <Card key={product.node.id} className="overflow-hidden hover:shadow-elegant transition-shadow flex flex-col">
              <CardHeader className="pt-4 pb-2 flex-shrink-0">
                <Link to={`/product/${product.node.handle}`}>
                  <CardTitle className="hover:text-primary transition-colors text-center">
                    {product.node.title}
                  </CardTitle>
                </Link>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col py-2">
                <CardDescription className="text-base leading-relaxed line-clamp-2 text-center">
                  {product.node.description}
                </CardDescription>
              </CardContent>
              
              <CardContent className="py-2 flex-shrink-0">
                <p className="text-3xl font-bold text-center mb-2">
                  NOT FOR SALE YET
                </p>
              </CardContent>
              
              <CardFooter className="flex-shrink-0 pt-2 pb-4">
                <Button 
                  className="w-full"
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.node.variants.edges[0].node.availableForSale}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.node.variants.edges[0].node.availableForSale ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardFooter>
            </Card>
            ))}

            {/* Right card - Earpiece */}
            <Card className="overflow-hidden">
              <div className="flex justify-center pt-4 pb-4">
                <div className="w-full aspect-square overflow-hidden bg-secondary/20 rounded-lg flex items-center justify-center p-6">
                  <img
                    src={earpiece}
                    alt="Earpiece Device"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <CardHeader className="py-4">
                <CardTitle className="text-center">Premium Earpiece</CardTitle>
                <CardDescription className="line-clamp-2 text-center">
                  Comfortable in-ear design for extended use
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
