import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Loader2 } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Link } from "react-router-dom";

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
      <section id="products" className="py-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight pb-2">
              Shop FocusZing
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
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight pb-2">
            Shop FocusZing
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the future of focus and productivity
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
            <Card key={product.node.id} className="overflow-hidden hover:shadow-elegant transition-shadow">
              <Link to={`/product/${product.node.handle}`}>
                {product.node.images.edges.length > 0 && (
                  <div className="aspect-square overflow-hidden bg-secondary/20">
                    <img
                      src={product.node.images.edges[0].node.url}
                      alt={product.node.images.edges[0].node.altText || product.node.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </Link>
              
              <CardHeader>
                <Link to={`/product/${product.node.handle}`}>
                  <CardTitle className="hover:text-primary transition-colors">
                    {product.node.title}
                  </CardTitle>
                </Link>
                <CardDescription className="line-clamp-2">
                  {product.node.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-2xl font-bold">
                  {product.node.priceRange.minVariantPrice.currencyCode} ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                </p>
              </CardContent>
              
              <CardFooter>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
