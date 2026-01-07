export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  tags: string[];
}

import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import productCleanser from "@/assets/product-cleanser.jpg";
import categoryMakeup from "@/assets/category-makeup.jpg";
import categorySkincare from "@/assets/category-skincare.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ultimate-morning-skincare-routine",
    title: "The Ultimate Morning Skincare Routine for Glowing Skin",
    excerpt: "Discover the perfect morning skincare routine that will leave your skin radiant and protected all day long.",
    content: `
Starting your day with a proper skincare routine is essential for maintaining healthy, glowing skin. Here's our expert guide to the perfect morning routine.

## Step 1: Gentle Cleansing
Start with a gentle cleanser to remove any overnight buildup without stripping your skin's natural oils. Look for pH-balanced formulas that won't disrupt your skin barrier.

## Step 2: Toning
A hydrating toner helps balance your skin's pH and preps it for the products that follow. Pat it gently into your skin rather than wiping.

## Step 3: Vitamin C Serum
This powerhouse ingredient brightens skin, fights free radicals, and helps reduce dark spots. Apply it before your moisturizer for maximum absorption.

## Step 4: Moisturizer
Lock in hydration with a moisturizer suited to your skin type. Even oily skin needs moisture!

## Step 5: Sunscreen
Never skip this step! SPF 30 or higher protects against aging and skin damage. Reapply every 2 hours if you're outdoors.
    `,
    category: "Skincare",
    image: categorySkincare,
    author: {
      name: "Dr. Sarah Chen",
      avatar: productCream,
    },
    publishedAt: "2024-01-15",
    readTime: 5,
    tags: ["skincare routine", "morning routine", "vitamin c", "sunscreen"],
  },
  {
    id: "2",
    slug: "vitamin-c-serum-benefits",
    title: "Why Vitamin C Serum Should Be Your Skincare MVP",
    excerpt: "Learn why dermatologists recommend vitamin C serum and how to incorporate it into your routine for best results.",
    content: `
Vitamin C has earned its place as a skincare superstar. Here's everything you need to know about this powerful ingredient.

## The Benefits of Vitamin C

**Brightening**: Vitamin C inhibits melanin production, helping to fade dark spots and even out skin tone.

**Antioxidant Protection**: It neutralizes free radicals from UV exposure and pollution that cause premature aging.

**Collagen Boost**: Vitamin C is essential for collagen synthesis, helping to maintain skin firmness.

**Reduces Inflammation**: Its anti-inflammatory properties can help calm redness and irritation.

## How to Use Vitamin C Serum

Apply in the morning after cleansing and before moisturizer. Start with a lower concentration (10-15%) if you're new to the ingredient.

## What to Look For

Choose serums with L-ascorbic acid for the most potent form, and look for air-tight, dark packaging to prevent oxidation.
    `,
    category: "Ingredients",
    image: productSerum,
    author: {
      name: "Emma Roberts",
      avatar: productCleanser,
    },
    publishedAt: "2024-01-10",
    readTime: 4,
    tags: ["vitamin c", "serum", "brightening", "anti-aging"],
  },
  {
    id: "3",
    slug: "choosing-right-moisturizer",
    title: "How to Choose the Right Moisturizer for Your Skin Type",
    excerpt: "Not all moisturizers are created equal. Find out which formula is perfect for your unique skin needs.",
    content: `
Finding the right moisturizer can transform your skincare routine. Here's how to match your moisturizer to your skin type.

## For Dry Skin
Look for rich, creamy formulas with ingredients like ceramides, hyaluronic acid, and shea butter. These create a protective barrier and lock in moisture.

## For Oily Skin
Opt for lightweight, oil-free gel moisturizers. Ingredients like niacinamide can help control sebum production while still providing hydration.

## For Combination Skin
A lightweight lotion that balances hydration without heaviness works best. Look for non-comedogenic formulas.

## For Sensitive Skin
Choose fragrance-free formulas with soothing ingredients like aloe vera, centella asiatica, and oat extract. Avoid harsh chemicals and artificial dyes.

## Key Ingredients to Look For

- **Hyaluronic Acid**: Holds 1000x its weight in water
- **Ceramides**: Strengthen the skin barrier
- **Peptides**: Support collagen production
- **Niacinamide**: Brightens and controls oil
    `,
    category: "Skincare",
    image: productCream,
    author: {
      name: "Dr. Sarah Chen",
      avatar: productCream,
    },
    publishedAt: "2024-01-05",
    readTime: 6,
    tags: ["moisturizer", "skin types", "hydration", "skincare tips"],
  },
  {
    id: "4",
    slug: "natural-makeup-look-tutorial",
    title: "Achieve the Perfect 'No-Makeup' Makeup Look",
    excerpt: "Master the art of natural beauty with this step-by-step guide to effortless, everyday makeup.",
    content: `
The 'no-makeup' makeup look is all about enhancing your natural features while looking effortlessly polished. Here's how to achieve it.

## Prep Your Canvas
Start with well-hydrated skin. Apply a hydrating primer for a smooth, glowing base.

## Keep Foundation Light
Use a tinted moisturizer or sheer foundation. Blend with your fingers or a damp sponge for a skin-like finish.

## Conceal Strategically
Only apply concealer where needed - under eyes and on blemishes. Blend well for seamless coverage.

## Add a Natural Flush
Cream blush in a peachy-pink shade melts into skin beautifully. Smile and apply to the apples of your cheeks.

## Define Your Features
Use a brow gel to groom brows and a light coat of mascara to define lashes without clumping.

## Finish with Lip Color
A tinted lip balm or sheer lip gloss in a nude-pink shade completes the natural look.
    `,
    category: "Makeup",
    image: categoryMakeup,
    author: {
      name: "Mia Thompson",
      avatar: productCleanser,
    },
    publishedAt: "2024-01-01",
    readTime: 5,
    tags: ["makeup tutorial", "natural makeup", "everyday look"],
  },
  {
    id: "5",
    slug: "double-cleansing-method",
    title: "The Double Cleansing Method: Your Gateway to Clear Skin",
    excerpt: "Why washing your face twice is the Korean beauty secret you need to know about.",
    content: `
Double cleansing has revolutionized skincare routines worldwide. Here's why this K-beauty technique works.

## What Is Double Cleansing?

It's a two-step cleansing method: first with an oil-based cleanser, then with a water-based cleanser.

## Why It Works

**Step 1 - Oil Cleanser**: Dissolves oil-based impurities like makeup, sunscreen, and sebum. Oil attracts oil, making this step incredibly effective.

**Step 2 - Water Cleanser**: Removes water-based impurities like sweat and dirt, giving you a truly clean canvas.

## Who Should Double Cleanse?

- Anyone who wears makeup or sunscreen
- Those with oily or acne-prone skin
- People living in polluted environments

## When to Double Cleanse

Do this at night to remove the day's buildup. In the morning, a single gentle cleanse is sufficient.

## Tips for Success

- Don't rush! Massage each cleanser for at least 60 seconds
- Use lukewarm water, never hot
- Pat dry with a clean towel
    `,
    category: "Skincare",
    image: productCleanser,
    author: {
      name: "Emma Roberts",
      avatar: productCleanser,
    },
    publishedAt: "2023-12-28",
    readTime: 4,
    tags: ["cleansing", "korean beauty", "skincare routine", "clear skin"],
  },
];

export const getBlogPostBySlug = (slug: string) => 
  blogPosts.find((post) => post.slug === slug);

export const getBlogPostsByCategory = (category: string) =>
  blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());

export const blogCategories = ["All", "Skincare", "Makeup", "Ingredients", "Wellness"];
