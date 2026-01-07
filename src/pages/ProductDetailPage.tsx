import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, Heart, Star, Truck, RotateCcw, Shield, ChevronLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
            <Link to="/shop">
              <Button variant="coral">Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-4">
          <Link
            to="/shop"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-coral transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Shop
          </Link>
        </div>

        {/* Product Detail */}
        <div className="container pb-12 md:pb-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.tags.includes("bestseller") && (
                    <Badge variant="bestseller">Bestseller</Badge>
                  )}
                  {product.tags.includes("new") && (
                    <Badge variant="new">New</Badge>
                  )}
                  {product.tags.includes("sale") && product.originalPrice && (
                    <Badge variant="sale">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {product.brand}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-coral text-coral"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-semibold">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                      <Badge variant="sale">
                        Save ${product.originalPrice - product.price}
                      </Badge>
                    </>
                  )}
                </div>

                <p className="text-muted-foreground mb-8">{product.description}</p>

                {/* Quantity & Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center border border-border rounded-xl">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="hero"
                    size="lg"
                    className="flex-1"
                    onClick={handleAddToCart}
                  >
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </Button>
                  <Button variant="outline" size="lg" className="shrink-0">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
                  <div className="text-center">
                    <Truck className="h-5 w-5 mx-auto mb-2 text-coral" />
                    <p className="text-xs text-muted-foreground">Free Shipping</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="h-5 w-5 mx-auto mb-2 text-coral" />
                    <p className="text-xs text-muted-foreground">30-Day Returns</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-5 w-5 mx-auto mb-2 text-coral" />
                    <p className="text-xs text-muted-foreground">Secure Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12 md:mt-16">
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 mb-6">
                <TabsTrigger
                  value="benefits"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-coral data-[state=active]:bg-transparent px-6 py-3"
                >
                  Benefits
                </TabsTrigger>
                <TabsTrigger
                  value="ingredients"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-coral data-[state=active]:bg-transparent px-6 py-3"
                >
                  Ingredients
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-coral data-[state=active]:bg-transparent px-6 py-3"
                >
                  Reviews ({product.reviewCount})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="benefits" className="mt-0">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30"
                    >
                      <div className="w-2 h-2 rounded-full bg-coral" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ingredients" className="mt-0">
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <Badge key={ingredient} variant="secondary" className="text-sm">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-0">
                <div className="text-center py-12 text-muted-foreground">
                  <p>Reviews coming soon!</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 md:mt-24">
              <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
