import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products, categories } from "@/data/products";

const priceRanges = [
  { label: "Under $25", min: 0, max: 25 },
  { label: "$25 - $50", min: 25, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);

  const categoryParam = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerQuery) ||
          p.brand.toLowerCase().includes(lowerQuery) ||
          p.category.toLowerCase().includes(lowerQuery) ||
          p.shortDescription.toLowerCase().includes(lowerQuery)
      );
    }

    // Filter by category
    if (categoryParam) {
      result = result.filter(
        (p) => p.category.toLowerCase() === categoryParam.toLowerCase()
      );
    }

    // Filter by price
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result = result.filter((p) => p.tags.includes("new")).concat(
          result.filter((p) => !p.tags.includes("new"))
        );
        break;
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [categoryParam, searchQuery, selectedPriceRange, sortBy]);

  const clearFilters = () => {
    setSearchParams({});
    setSelectedPriceRange(null);
  };

  const hasActiveFilters = categoryParam || searchQuery || selectedPriceRange !== null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-gradient-soft py-12 md:py-16">
          <div className="container text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              {searchQuery
                ? `Search: "${searchQuery}"`
                : categoryParam
                ? categories.find((c) => c.id === categoryParam)?.name || "Shop"
                : "All Products"}
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {searchQuery
                ? `Showing results for "${searchQuery}"`
                : categoryParam
                ? categories.find((c) => c.id === categoryParam)?.description
                : "Explore our complete collection of premium beauty products"}
            </p>
          </div>
        </div>

        <div className="container py-8 md:py-12">
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3 flex-wrap">
              {/* Category Pills */}
              <Button
                variant={!categoryParam ? "coral" : "outline"}
                size="sm"
                onClick={() => setSearchParams({})}
              >
                All
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={categoryParam === cat.id ? "coral" : "outline"}
                  size="sm"
                  onClick={() => setSearchParams({ category: cat.id })}
                >
                  {cat.name}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Button */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setIsFilterOpen(true)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>

              {/* Sort Dropdown */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] rounded-xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden md:block w-64 shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-4">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range, index) => (
                      <button
                        key={range.label}
                        onClick={() =>
                          setSelectedPriceRange(
                            selectedPriceRange === index ? null : index
                          )
                        }
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedPriceRange === index
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={clearFilters}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {categoryParam && (
                    <Badge variant="secondary" className="gap-1">
                      {categories.find((c) => c.id === categoryParam)?.name}
                      <button onClick={() => setSearchParams({})}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedPriceRange !== null && (
                    <Badge variant="secondary" className="gap-1">
                      {priceRanges[selectedPriceRange].label}
                      <button onClick={() => setSelectedPriceRange(null)}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                </div>
              )}

              {/* Results Count */}
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filteredProducts.length} products
              </p>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">
                    No products found matching your criteria.
                  </p>
                  <Button variant="coral" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Mobile Filter Sheet */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-background p-6 animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-lg">Filters</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFilterOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h4 className="font-medium mb-4">Price Range</h4>
              <div className="space-y-2">
                {priceRanges.map((range, index) => (
                  <button
                    key={range.label}
                    onClick={() => {
                      setSelectedPriceRange(
                        selectedPriceRange === index ? null : index
                      );
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedPriceRange === index
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={clearFilters}
              >
                Clear All
              </Button>
              <Button
                variant="coral"
                className="flex-1"
                onClick={() => setIsFilterOpen(false)}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
