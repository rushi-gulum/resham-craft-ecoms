"use client";

import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import Reveal from "@/components/Reveal";
import { SelectField } from "@/components/form-fields";
import { ShoppingBag, Eye, Sparkles, ArrowRight } from "@/components/icons";

const SORT_OPTIONS = [
  { value: "featured", label: "Curated & Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

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
    <main className="flex-1 pt-6 pb-16 md:pt-10 md:pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Compact Header Section */}
        <div className="text-center mb-6">
          <h1 className="reveal-up text-3xl md:text-5xl font-serif text-primary">
            The Masterpiece Collection
          </h1>
        </div>

        {/* Filter & Sort Controls */}
        <div
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="reveal-up flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-border/50"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all active:scale-95 ${
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
            <div className="w-52 font-normal tracking-normal">
              <SelectField
                label="Sort products"
                hideLabel
                className="h-10"
                value={sortBy}
                options={SORT_OPTIONS}
                onChange={(value) => setSortBy(value as typeof sortBy)}
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <Reveal key={`${selectedCategory}-${sortBy}-${product.id}`} delay={(index % 3) * 100}>
              <div
                className="group h-full flex flex-col bg-card border border-border/50 p-4 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-accent/40"
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
                  <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5 z-10 pointer-events-none">
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
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 ease-out z-10">
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
                      <span className="text-lg price-text text-primary font-semibold">
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
                      className="group/link text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors"
                    >
                      View Details <ArrowRight className="inline-block w-3.5 h-3.5 ml-1 -mt-0.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
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
