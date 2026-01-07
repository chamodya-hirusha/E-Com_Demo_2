import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import categorySkincare from "@/assets/category-skincare.jpg";
import categoryHaircare from "@/assets/category-haircare.jpg";
import categoryMakeup from "@/assets/category-makeup.jpg";
import categoryFragrances from "@/assets/category-fragrances.jpg";

const categories = [
  {
    id: "skincare",
    name: "Skincare",
    description: "Nourish & hydrate",
    image: categorySkincare,
  },
  {
    id: "haircare",
    name: "Haircare",
    description: "Shine & strength",
    image: categoryHaircare,
  },
  {
    id: "makeup",
    name: "Makeup",
    description: "Color & glow",
    image: categoryMakeup,
  },
  {
    id: "fragrances",
    name: "Fragrances",
    description: "Signature scents",
    image: categoryFragrances,
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore our curated collections designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-background">
                <h3 className="font-serif text-lg md:text-xl font-medium mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-background/70 mb-3">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium group-hover:gap-2 transition-all">
                  Explore
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
