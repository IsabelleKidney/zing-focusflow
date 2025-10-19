import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, Loader2 } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!handle) return;
      
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        const fetchedProduct = data.data.productByHandle;
        setProduct(fetchedProduct);
        
        if (fetchedProduct?.variants.edges.length > 0) {
          const firstVariant = fetchedProduct.variants.edges[0].node;
          setSelectedVariant(firstVariant);
          
          const initialOptions: Record<string, string> = {};
          firstVariant.selectedOptions.forEach((option: any) => {
            initialOptions[option.name] = option.value;
          });
          setSelectedOptions(initialOptions);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  const handleOptionChange = (optionName: string, value: string) => {
    const newOptions = { ...selectedOptions, [optionName]: value };
    setSelectedOptions(newOptions);

    const matchingVariant = product.variants.edges.find((edge: any) => {
      return edge.node.selectedOptions.every((option: any) => 
        newOptions[option.name] === option.value
      );
    });

    if (matchingVariant) {
      setSelectedVariant(matchingVariant.node);
    }
  };

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.title} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-8 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8">
          <Link to="/#products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {product.images.edges.length > 0 && (
                <div className="aspect-square overflow-hidden rounded-lg bg-secondary/20">
                  <img
                    src={product.images.edges[0].node.url}
                    alt={product.images.edges[0].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                <p className="text-3xl font-bold text-primary">
                  {selectedVariant.price.currencyCode} ${parseFloat(selectedVariant.price.amount).toFixed(2)}
                </p>
              </div>

              {product.description && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              )}

              {product.options.map((option: any) => (
                <div key={option.name}>
                  <h3 className="text-lg font-semibold mb-3">{option.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value: string) => (
                      <Badge
                        key={value}
                        variant={selectedOptions[option.name] === value ? "default" : "outline"}
                        className="cursor-pointer px-4 py-2"
                        onClick={() => handleOptionChange(option.name, value)}
                      >
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}

              <div className="space-y-3">
                <Button 
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                  disabled={!selectedVariant.availableForSale}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {selectedVariant.availableForSale ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                
                {!selectedVariant.availableForSale && (
                  <p className="text-sm text-muted-foreground text-center">
                    This variant is currently unavailable
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
