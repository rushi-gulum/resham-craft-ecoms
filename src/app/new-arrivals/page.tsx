"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";

export default function NewArrivalsPage() {
  const { addToCart } = useCart();
  const latestDrops = PRODUCTS.filter((p) => p.isNew);

  return (
    <main className="flex-1">
      {/* Banner */}
      <section className="py-20 md:py-28 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-bold block mb-4">
            Fresh from the Sacred Looms
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6 italic">
            The 2026 Spring Edit
          </h1>
          <p className="text-muted-foreground font-light leading-relaxed max-w-xl mx-auto text-base">
            Explore our most recent creations where contemporary silhouettes and modern pastel hues harmonize with centuries-old pit-loom heritage.
          </p>
        </div>
      </section>

      {/* Featured Drop Highlight Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative aspect-[4/5] bg-muted overflow-hidden shadow-2xl">
              <Image
                src="/images/modern_silk_saree_drape.png"
                alt="The Pastel Paradigm Saree Drape"
                fill
                priority
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-primary text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-md">
                Headline Edition
              </span>
            </div>

            <div className="space-y-6 md:pl-6">
              <span className="label-eyebrow block">
                Contemporary Heirloom
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                The Pastel Paradigm
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Conceived for the modern connoisseur who values subtlety as profoundly as heritage. Hand-dyed organic mulberry yarns meet delicate silver meenakari borders in this limited seasonal release.
              </p>
              <div className="pt-2 flex items-baseline gap-4">
                <span className="text-2xl font-serif text-primary font-bold">
                  ₹ 36,000
                </span>
                <span className="text-xs uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded font-semibold">
                  Only 3 Woven
                </span>
              </div>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/collections/crimson-bridal-special"
                  className="px-8 py-4 bg-primary text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary/95 transition-all flex items-center gap-2"
                >
                  Inspect Drape Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => addToCart(PRODUCTS[5])}
                  className="px-8 py-4 border border-primary text-primary text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-white transition-colors"
                >
                  + Add to Bag
                </button>
              </div>
            </div>
          </div>

          {/* New Arrivals Grid */}
          <div className="pt-12 border-t border-border/50">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="label-eyebrow block mb-1">
                  Season Premieres
                </span>
                <h3 className="text-3xl font-serif text-primary">All New Arrivals</h3>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                {latestDrops.length} Exclusive Creations
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {latestDrops.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card border border-border/50 p-4 transition-all hover:shadow-2xl flex flex-col"
                >
                  <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-5">
                    <Link href={`/collections/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="absolute bottom-4 left-4 right-4 py-3 bg-white/95 text-primary text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2 hover:bg-primary hover:text-white"
                    >
                      <ShoppingBag className="w-4 h-4" /> Add to Bag
                    </button>
                  </div>

                  <div className="flex flex-col flex-1">
                    <span className="label-tag text-accent mb-1">
                      {product.category}
                    </span>
                    <h4 className="font-serif text-lg text-primary mb-2 group-hover:text-accent font-semibold">
                      <Link href={`/collections/${product.id}`}>{product.name}</Link>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-auto pt-3 border-t border-border/40 flex justify-between items-center">
                      <span className="font-serif text-base font-bold text-primary">
                        ₹ {product.price.toLocaleString("en-IN")}
                      </span>
                      <Link
                        href={`/collections/${product.id}`}
                        className="text-xs uppercase tracking-wider font-bold text-accent hover:text-primary"
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
