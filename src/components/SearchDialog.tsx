import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/data/products";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof products>([]);
  const [categoryResults, setCategoryResults] = useState<typeof categories>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setCategoryResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();

    // Search products by name, brand, or category
    const productMatches = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.brand.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery) ||
        product.shortDescription.toLowerCase().includes(lowerQuery)
    );

    // Search categories
    const categoryMatches = categories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(lowerQuery) ||
        cat.description.toLowerCase().includes(lowerQuery)
    );

    setResults(productMatches.slice(0, 6));
    setCategoryResults(categoryMatches);
  }, [query]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    onOpenChange(false);
    setQuery("");
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/shop?category=${categoryId}`);
    onOpenChange(false);
    setQuery("");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      onOpenChange(false);
      setQuery("");
    }
  };

  const popularSearches = ["Vitamin C", "Moisturizer", "Serum", "Lip Gloss"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 gap-0 overflow-hidden">
        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="relative border-b border-border">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search products, brands, categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-12 h-14 border-0 rounded-none text-base focus-visible:ring-0"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </form>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {/* No query - show popular searches */}
          {!query.trim() && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 rounded-full bg-secondary hover:bg-primary/50 text-sm transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <h3 className="text-sm font-medium text-muted-foreground mt-6 mb-3">
                Browse Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-primary/30 text-left transition-colors group"
                  >
                    <span className="font-medium">{cat.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-coral transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Query results */}
          {query.trim() && (
            <div className="space-y-6">
              {/* Category Results */}
              {categoryResults.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categoryResults.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/50 hover:bg-primary text-sm transition-colors"
                      >
                        {cat.name}
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Results */}
              {results.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Products
                  </h3>
                  <div className="space-y-2">
                    {results.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 text-left transition-colors group"
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-secondary shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                            {product.brand}
                          </p>
                          <h4 className="font-medium group-hover:text-coral transition-colors truncate">
                            {product.name}
                          </h4>
                          <p className="text-sm text-muted-foreground truncate">
                            {product.shortDescription}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-semibold">${product.price}</span>
                          {product.tags.length > 0 && (
                            <div className="mt-1">
                              {product.tags.includes("sale") && (
                                <Badge variant="sale" className="text-[10px]">Sale</Badge>
                              )}
                              {product.tags.includes("new") && (
                                <Badge variant="new" className="text-[10px]">New</Badge>
                              )}
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* No results */}
              {results.length === 0 && categoryResults.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    No results found for "{query}"
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Try a different search term
                  </p>
                </div>
              )}

              {/* View all results */}
              {results.length > 0 && (
                <button
                  onClick={handleSearchSubmit}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-coral/10 hover:bg-coral/20 text-coral font-medium transition-colors"
                >
                  View all results for "{query}"
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
