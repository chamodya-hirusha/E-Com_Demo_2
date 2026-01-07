export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  ingredients: string[];
  benefits: string[];
  image: string;
  images: string[];
  tags: ("bestseller" | "new" | "sale")[];
  inStock: boolean;
}

import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import productCleanser from "@/assets/product-cleanser.jpg";
import productLipgloss from "@/assets/product-lipgloss.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Vitamin C Brightening Serum",
    brand: "Glow Essentials",
    category: "skincare",
    price: 48,
    originalPrice: 58,
    rating: 4.8,
    reviewCount: 2340,
    description: "A potent vitamin C serum that brightens and evens skin tone while reducing the appearance of dark spots. Formulated with 15% pure vitamin C and hyaluronic acid for maximum hydration and radiance.",
    shortDescription: "Brightening serum with 15% vitamin C",
    ingredients: ["Vitamin C (15%)", "Hyaluronic Acid", "Vitamin E", "Ferulic Acid", "Aloe Vera"],
    benefits: ["Brightens skin tone", "Reduces dark spots", "Boosts collagen", "Antioxidant protection"],
    image: productSerum,
    images: [productSerum],
    tags: ["bestseller", "sale"],
    inStock: true,
  },
  {
    id: "2",
    name: "Hydra Boost Moisturizer",
    brand: "Pure Radiance",
    category: "skincare",
    price: 52,
    rating: 4.9,
    reviewCount: 1856,
    description: "An ultra-hydrating moisturizer that delivers 72-hour moisture with ceramides and peptides. Perfect for all skin types, this lightweight cream absorbs quickly without leaving a greasy residue.",
    shortDescription: "72-hour hydration with ceramides",
    ingredients: ["Ceramides", "Peptides", "Squalane", "Niacinamide", "Green Tea Extract"],
    benefits: ["Deep hydration", "Strengthens skin barrier", "Plumps fine lines", "Non-greasy finish"],
    image: productCream,
    images: [productCream],
    tags: ["bestseller"],
    inStock: true,
  },
  {
    id: "3",
    name: "Gentle Rose Cleanser",
    brand: "Bloom Beauty",
    category: "skincare",
    price: 32,
    rating: 4.7,
    reviewCount: 1124,
    description: "A gentle, pH-balanced foaming cleanser infused with rose water and chamomile. Effectively removes makeup and impurities while maintaining the skin's natural moisture barrier.",
    shortDescription: "Gentle pH-balanced foam cleanser",
    ingredients: ["Rose Water", "Chamomile Extract", "Glycerin", "Coconut-derived Surfactants"],
    benefits: ["Gentle cleansing", "Removes makeup", "Soothes skin", "Maintains pH balance"],
    image: productCleanser,
    images: [productCleanser],
    tags: ["new"],
    inStock: true,
  },
  {
    id: "4",
    name: "Coral Kiss Lip Gloss",
    brand: "Luxe Lips",
    category: "makeup",
    price: 24,
    rating: 4.6,
    reviewCount: 892,
    description: "A high-shine, non-sticky lip gloss in a gorgeous coral shade. Enriched with vitamin E and jojoba oil to keep lips soft and hydrated all day long.",
    shortDescription: "High-shine coral lip gloss",
    ingredients: ["Vitamin E", "Jojoba Oil", "Shea Butter", "Natural Pigments"],
    benefits: ["High shine", "Non-sticky", "Hydrating", "Long-lasting color"],
    image: productLipgloss,
    images: [productLipgloss],
    tags: ["new"],
    inStock: true,
  },
  {
    id: "5",
    name: "Nourishing Hair Mask",
    brand: "Silk & Shine",
    category: "haircare",
    price: 38,
    rating: 4.8,
    reviewCount: 567,
    description: "An intensive hair mask that deeply nourishes and repairs damaged hair. Infused with argan oil and keratin for silky, manageable locks.",
    shortDescription: "Deep nourishing hair treatment",
    ingredients: ["Argan Oil", "Keratin", "Coconut Oil", "Biotin", "Vitamin B5"],
    benefits: ["Repairs damage", "Adds shine", "Reduces frizz", "Strengthens hair"],
    image: productCream,
    images: [productCream],
    tags: ["bestseller"],
    inStock: true,
  },
  {
    id: "6",
    name: "Floral Bliss Eau de Parfum",
    brand: "Essence Luxe",
    category: "fragrances",
    price: 95,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 423,
    description: "A captivating floral fragrance with notes of jasmine, peony, and sandalwood. This elegant parfum lasts all day and leaves a lasting impression.",
    shortDescription: "Elegant floral eau de parfum",
    ingredients: ["Jasmine", "Peony", "Sandalwood", "Bergamot", "White Musk"],
    benefits: ["Long-lasting", "Elegant scent", "Travel-friendly", "Refillable bottle"],
    image: productSerum,
    images: [productSerum],
    tags: ["sale"],
    inStock: true,
  },
];

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getProductsByCategory = (category: string) => 
  products.filter(p => p.category.toLowerCase() === category.toLowerCase());

export const getBestsellers = () => products.filter(p => p.tags.includes("bestseller"));

export const getNewArrivals = () => products.filter(p => p.tags.includes("new"));

export const getSaleProducts = () => products.filter(p => p.tags.includes("sale"));

export const categories = [
  { id: "skincare", name: "Skincare", description: "Nourish your skin with our curated collection" },
  { id: "makeup", name: "Makeup", description: "Express yourself with vibrant colors" },
  { id: "haircare", name: "Haircare", description: "Achieve your best hair days" },
  { id: "fragrances", name: "Fragrances", description: "Find your signature scent" },
];
