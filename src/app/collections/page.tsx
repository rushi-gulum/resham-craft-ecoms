"use client";

import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { ShoppingBag, Eye, Sparkles } from "lucide-react";

const CATEGORIES = ["All", "Banarasi", "Kanjeevaram", "Paithani", "Bridal"];

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(
    initialCat && CATEGORIES.includes(initialCat) ? initialCat : "All"
  );
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const { addToCart } = useCart();

  useEffect(() => {
    const currentCat = searchParams.get("category");
    if (currentCat && CATEGORIES.includes(currentCat)) {
      setSelectedCategory(currentCat);
    }
  }, [searchParams]);

  let filteredProducts =
    selectedCategory === "All"
      ? [...PRODUCTS]
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="flex-1 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="label-eyebrow block mb-3">
            Handwoven Masterpieces
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">
            The Masterpiece Collection
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Discover a curated anthology of the most revered silk drapes from across India, woven by generational artisans with pure gold and silver kalabattu zari.
          </p>
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-border/50">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted/50 text-foreground/80 hover:bg-muted hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider font-semibold text-muted-foreground">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent border border-border px-3 py-2 text-primary focus:outline-none focus:border-accent text-xs uppercase tracking-wider font-medium cursor-pointer"
            >
              <option value="featured">Curated & Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-card border border-border/50 p-4 transition-all duration-300 hover:shadow-2xl hover:border-accent/40"
            >
              {/* Image Container with Badges & Actions */}
              <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-5">
                <Link href={`/collections/${product.id}`} className="block w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                  {product.isNew && (
                    <span className="text-xs uppercase tracking-wider text-accent bg-primary px-2.5 py-1 font-bold shadow-sm">
                      New In
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="text-xs uppercase tracking-wider text-primary bg-accent px-2.5 py-1 font-bold shadow-sm">
                      Royal Favorite
                    </span>
                  )}
                </div>

                {/* Hover Quick Overlay Buttons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="flex-1 py-3 bg-primary text-white text-xs uppercase tracking-widest font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Bag
                  </button>
                  <Link
                    href={`/collections/${product.id}`}
                    className="p-3 bg-white text-primary hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg flex items-center justify-center"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="label-tag text-accent">
                    {product.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {product.origin.split(",")[0]}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-primary mb-2 group-hover:text-accent transition-colors">
                  <Link href={`/collections/${product.id}`}>{product.name}</Link>
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Price and CTA row */}
                <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-serif text-primary font-bold">
                      ₹ {product.price.toLocaleString("en-IN")}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through ml-2">
                        ₹ {product.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/collections/${product.id}`}
                    className="text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-muted-foreground font-serif text-lg">Loading curated weaves...</p>
        </div>
      }
    >
      <CollectionsContent />
    </Suspense>
  );
}
