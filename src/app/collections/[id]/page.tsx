"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductById } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  Share2,
  Heart
} from "lucide-react";
import { toast } from "sonner";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedQty, setSelectedQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"details" | "care" | "shipping">("details");
  const { addToCart, setIsDrawerOpen } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < selectedQty; i++) {
      addToCart(product);
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Product link copied to clipboard");
    }
  };

  return (
    <main className="flex-1 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-10">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-primary transition-colors">
            Collections
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">{product.name}</span>
        </nav>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Images Section (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[3/4] w-full bg-muted overflow-hidden border border-border/50 group">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-primary text-accent text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 shadow-md">
                  New Arrival
                </span>
              )}
            </div>

            {/* Thumbnail Carousel */}
            {product.secondaryImages && product.secondaryImages.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.secondaryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-24 h-32 shrink-0 bg-muted overflow-hidden border-2 transition-all ${
                      activeImage === img ? "border-accent shadow-md scale-95" : "border-transparent opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Purchase Section (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">
                  {product.category} Heritage Drape
                </span>
                <button
                  onClick={handleShare}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  title="Share product"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif text-primary leading-tight mb-4">
                {product.name}
              </h1>

              {/* Price & Discounts */}
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-3xl font-serif text-primary font-bold">
                  ₹ {product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ₹ {product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-xs uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded font-semibold">
                  Taxes Included
                </span>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Saree Key Attributes */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/60 text-sm">
              <div>
                <span className="text-muted-foreground uppercase tracking-widest block text-xs mb-1 font-medium">
                  Weave & Fabric
                </span>
                <span className="font-semibold text-primary">{product.fabric}</span>
              </div>
              <div>
                <span className="text-muted-foreground uppercase tracking-widest block text-xs mb-1 font-medium">
                  Zari Specification
                </span>
                <span className="font-semibold text-primary">{product.zariType}</span>
              </div>
              <div>
                <span className="text-muted-foreground uppercase tracking-widest block text-xs mb-1 font-medium">
                  Provenance
                </span>
                <span className="font-semibold text-primary">{product.origin}</span>
              </div>
              <div>
                <span className="text-muted-foreground uppercase tracking-widest block text-xs mb-1 font-medium">
                  Blouse Piece
                </span>
                <span className="font-semibold text-primary">{product.blousePiece}</span>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                  Quantity
                </span>
                <div className="flex items-center border border-border">
                  <button
                    type="button"
                    onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                    className="px-3 py-1.5 hover:bg-muted text-sm font-medium"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-bold">{selectedQty}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedQty(selectedQty + 1)}
                    className="px-3 py-1.5 hover:bg-muted text-sm font-medium"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-4.5 bg-primary text-white text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/95 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Shopping Bag
                </button>
                <button
                  type="button"
                  onClick={() => {
                    toast.success("Saved to your Resham Craft Wishlist");
                  }}
                  className="p-4 border border-border hover:border-primary text-primary transition-colors"
                  title="Add to Wishlist"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  handleAddToCart();
                  setIsDrawerOpen(true);
                }}
                className="w-full py-4 border border-accent text-accent-foreground gold-gradient-bg text-white text-xs uppercase tracking-[0.25em] font-bold hover:opacity-95 transition-opacity"
              >
                Instant Buy Now
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50 text-center">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-5 h-5 text-accent mb-1.5" />
                <span className="text-xs font-semibold text-primary">100% Certified</span>
                <span className="text-[11px] text-muted-foreground mt-0.5">Silk Mark Authenticity</span>
              </div>
              <div className="flex flex-col items-center">
                <Truck className="w-5 h-5 text-accent mb-1.5" />
                <span className="text-xs font-semibold text-primary">Insured Delivery</span>
                <span className="text-[11px] text-muted-foreground mt-0.5">Dispatched in 24 Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <RotateCcw className="w-5 h-5 text-accent mb-1.5" />
                <span className="text-xs font-semibold text-primary">Easy Exchange</span>
                <span className="text-[11px] text-muted-foreground mt-0.5">7 Days Hassle-Free</span>
              </div>
            </div>

            {/* Detailed Tabs */}
            <div className="pt-6 border-t border-border">
              <div className="flex border-b border-border text-xs uppercase tracking-wider font-semibold">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`pb-3 pr-6 transition-colors ${
                    activeTab === "details" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"
                  }`}
                >
                  Craft Details
                </button>
                <button
                  onClick={() => setActiveTab("care")}
                  className={`pb-3 px-6 transition-colors ${
                    activeTab === "care" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"
                  }`}
                >
                  Care & Maintenance
                </button>
                <button
                  onClick={() => setActiveTab("shipping")}
                  className={`pb-3 px-6 transition-colors ${
                    activeTab === "shipping" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"
                  }`}
                >
                  Delivery
                </button>
              </div>

              <div className="pt-4 text-sm text-muted-foreground leading-relaxed">
                {activeTab === "details" && (
                  <p>
                    Every saree is individually woven on hand-operated pit looms by skilled weaver families. Slight variations in the weave and color are natural hallmarks of authentic handspun craftsmanship.
                  </p>
                )}
                {activeTab === "care" && <p>{product.careInstructions}</p>}
                {activeTab === "shipping" && (
                  <p>
                    Complimentary insured priority courier across India within 3–5 working days. International delivery available via DHL Express within 5–7 days.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back to collections link */}
        <div className="mt-20 pt-8 border-t border-border/40">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-accent font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Masterpiece Collection
          </Link>
        </div>
      </div>
    </main>
  );
}
