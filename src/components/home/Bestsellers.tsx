"use client";

import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { ShoppingBag } from "lucide-react";

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="label-eyebrow block mb-3">
              Client Favorites
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Bestsellers
            </h2>
          </div>
          <Link
            href="/collections"
            className="text-xs uppercase tracking-[0.2em] font-bold text-accent hover:text-primary transition-colors border-b border-accent pb-1"
          >
            View All Pieces →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-4 right-4 py-3 bg-white/95 backdrop-blur text-primary text-xs uppercase tracking-widest font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2 hover:bg-primary hover:text-white"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Bag
                </button>
              </div>

              <div className="flex flex-col flex-1">
                <span className="label-tag text-accent mb-1.5">
                  {product.category}
                </span>
                <h3 className="text-lg font-serif text-primary mb-1 leading-snug group-hover:text-accent transition-colors">
                  <Link href="/collections">{product.name}</Link>
                </h3>
                <p className="text-sm font-medium text-foreground/80 mt-auto pt-2">
                  ₹ {product.price.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
