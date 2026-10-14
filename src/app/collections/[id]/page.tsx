"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductById, Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  Share2,
  Heart,
  Star,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  ChevronDown
} from "lucide-react";
import { toast } from "sonner";

interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  helpfulCount: number;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Priyanka Sharma",
    city: "Mumbai, Maharashtra",
    rating: 5,
    date: "04 October 2026",
    title: "Pure royal grandeur — exceeded all expectations!",
    comment:
      "The silk weight and real gold zari finish are breath-taking in person. I wore this for my brother's wedding reception and received endless compliments. The drape holds structure flawlessly.",
    verified: true,
    helpfulCount: 14,
  },
  {
    id: "rev-2",
    name: "Ananya Deshmukh",
    city: "Pune, Maharashtra",
    rating: 5,
    date: "28 September 2026",
    title: "Authentic Silk Mark certified mastercraft",
    comment:
      "Arrived in an exquisite archival cotton muslin preservation box with the physical Silk Mark authenticity card. The pallu tapestry detail is truly museum-grade.",
    verified: true,
    helpfulCount: 9,
  },
  {
    id: "rev-3",
    name: "Meera Sundaram",
    city: "Chennai, Tamil Nadu",
    rating: 5,
    date: "19 September 2026",
    title: "Temple heirloom feel with unhurried finish",
    comment:
      "You can immediately sense the months of pit-loom dedication in every inch. The zari does not scratch the skin, and the color tone has an imperial lustre under festive lighting.",
    verified: true,
    helpfulCount: 7,
  },
  {
    id: "rev-4",
    name: "Radhika Kulkarni",
    city: "Bengaluru, Karnataka",
    rating: 5,
    date: "08 September 2026",
    title: "Prompt insured delivery & stellar concierge",
    comment:
      "Dispatched within 24 hours with live tracking updates. The blouse piece fabric is generous with heavy ornate borders. Highly recommended for bridal trousseaus.",
    verified: true,
    helpfulCount: 5,
  },
];

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
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart, setIsDrawerOpen } = useCart();

  // Reviews state
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    city: "",
    rating: 5,
    title: "",
    comment: "",
  });

  const handleAddToCart = () => {
    for (let i = 0; i < selectedQty; i++) {
      addToCart(product);
    }
  };

  const handleInstantBuy = () => {
    handleAddToCart();
    setIsDrawerOpen(true);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Product link copied to clipboard");
    }
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(
      !isWishlisted
        ? "Saved to your Resham Craft Wishlist"
        : "Removed from Wishlist"
    );
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      toast.error("Please enter your name and review details");
      return;
    }

    const createdReview: Review = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      city: newReview.city || "Verified Buyer",
      rating: newReview.rating,
      date: "Just now",
      title: newReview.title || "Exceptional Handwoven Drape",
      comment: newReview.comment,
      verified: true,
      helpfulCount: 0,
    };

    setReviews([createdReview, ...reviews]);
    setShowReviewForm(false);
    setNewReview({ name: "", city: "", rating: 5, title: "", comment: "" });
    toast.success("Thank you! Your verified client review has been published.");
  };

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <main className="flex-1 bg-background">
      {/* ─────────────────────────────────────────────────────────────
          1-SCREEN VIEWPORT STAGE: Product fits completely on screen
          ───────────────────────────────────────────────────────────── */}
      <section className="pt-2 md:pt-4 pb-6 border-b border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Compact Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/collections?category=${product.category}`}
              className="hover:text-primary transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-primary font-bold truncate max-w-[260px] sm:max-w-none">
              {product.name}
            </span>
          </nav>

          {/* 1-Screen Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left: Gallery Stage (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              {/* Main Stage Image - Fitted directly to viewport height */}
              <div className="relative h-[440px] sm:h-[500px] lg:h-[calc(100vh-210px)] max-h-[580px] w-full bg-stone-100 dark:bg-stone-900 overflow-hidden border border-border/50 group flex items-center justify-center">
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                  {product.isNew && (
                    <span className="bg-primary text-accent text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-md">
                      New Arrival
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-md">
                      Royal Favorite
                    </span>
                  )}
                </div>

                {/* Quick Wishlist button */}
                <button
                  type="button"
                  onClick={toggleWishlist}
                  className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 dark:bg-stone-800/90 text-primary shadow-md hover:scale-110 transition-transform z-10"
                  aria-label="Save to Wishlist"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWishlisted ? "fill-red-600 text-red-600" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Thumbnails Row */}
              {product.secondaryImages && product.secondaryImages.length > 0 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {product.secondaryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`relative w-16 h-20 shrink-0 bg-stone-100 dark:bg-stone-900 overflow-hidden border-2 transition-all ${
                        activeImage === img
                          ? "border-primary shadow-md scale-95"
                          : "border-transparent opacity-75 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Key Info & Purchase CTAs (6 cols) */}
            <div className="lg:col-span-6 flex flex-col space-y-3.5 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto lg:pr-2">
              {/* Category, Rating, Share */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
                    {product.category}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-xs">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-muted-foreground font-semibold text-[11px]">
                      4.9 ({reviews.length})
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleShare}
                  className="p-1.5 text-muted-foreground hover:text-primary transition-colors rounded hover:bg-muted"
                  title="Share saree"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl font-serif text-primary leading-tight font-semibold">
                {product.name}
              </h1>

              {/* Price & Taxes */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-serif text-primary font-bold">
                  ₹ {product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹ {product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-[10px] uppercase tracking-wider text-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded font-bold border border-emerald-200 dark:border-emerald-800">
                  All Taxes Included
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {product.description}
              </p>

              {/* Key Handloom Specs (Compact 2x2 Grid) */}
              <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-border/60 text-xs">
                <div className="bg-muted/30 p-2 border border-border/40">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-semibold">
                    Weave & Fabric
                  </span>
                  <span className="font-semibold text-primary truncate block">
                    {product.fabric}
                  </span>
                </div>
                <div className="bg-muted/30 p-2 border border-border/40">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-semibold">
                    Zari Specification
                  </span>
                  <span className="font-semibold text-primary truncate block">
                    {product.zariType}
                  </span>
                </div>
                <div className="bg-muted/30 p-2 border border-border/40">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-semibold">
                    Provenance Loom
                  </span>
                  <span className="font-semibold text-primary truncate block">
                    {product.origin}
                  </span>
                </div>
                <div className="bg-muted/30 p-2 border border-border/40">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-semibold">
                    Blouse Piece
                  </span>
                  <span className="font-semibold text-primary truncate block">
                    {product.blousePiece.split("(")[0]}
                  </span>
                </div>
              </div>

              {/* Quantity Selector & CTAs */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-border h-11 bg-card">
                    <button
                      type="button"
                      onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                      className="px-3 h-full hover:bg-muted text-sm font-bold text-primary"
                    >
                      -
                    </button>
                    <span className="px-4 text-xs font-bold text-primary">{selectedQty}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedQty(selectedQty + 1)}
                      className="px-3 h-full hover:bg-muted text-sm font-bold text-primary"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 h-11 bg-primary text-white text-xs uppercase tracking-[0.18em] font-bold hover:bg-primary/95 transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Shopping Bag
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleInstantBuy}
                  className="w-full h-11 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-stone-950 font-black text-xs uppercase tracking-[0.2em] hover:from-amber-300 hover:to-amber-400 transition-all shadow-md flex items-center justify-center gap-1.5 border border-amber-300"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Instant Buy Now
                </button>
              </div>

              {/* Trust Assurances (Compact) */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] border-t border-border/40">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-accent mb-0.5" />
                  <span className="font-semibold text-primary">Silk Mark</span>
                  <span className="text-[10px] text-muted-foreground">Certified Pure</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-4 h-4 text-accent mb-0.5" />
                  <span className="font-semibold text-primary">Free Courier</span>
                  <span className="text-[10px] text-muted-foreground">24h Dispatch</span>
                </div>
                <div className="flex flex-col items-center">
                  <RotateCcw className="w-4 h-4 text-accent mb-0.5" />
                  <span className="font-semibold text-primary">7-Day Return</span>
                  <span className="text-[10px] text-muted-foreground">Doorstep Pickup</span>
                </div>
              </div>

              {/* Accordion Tabs */}
              <div className="pt-2 border-t border-border/50 text-xs">
                <div className="flex border-b border-border text-[11px] uppercase tracking-wider font-semibold">
                  <button
                    onClick={() => setActiveTab("details")}
                    className={`pb-2 pr-4 transition-colors ${
                      activeTab === "details"
                        ? "border-b-2 border-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    Craft
                  </button>
                  <button
                    onClick={() => setActiveTab("care")}
                    className={`pb-2 px-4 transition-colors ${
                      activeTab === "care"
                        ? "border-b-2 border-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    Care
                  </button>
                  <button
                    onClick={() => setActiveTab("shipping")}
                    className={`pb-2 px-4 transition-colors ${
                      activeTab === "shipping"
                        ? "border-b-2 border-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    Shipping
                  </button>
                </div>

                <div className="pt-2.5 text-xs text-muted-foreground leading-relaxed">
                  {activeTab === "details" && (
                    <p>
                      Individually hand-loomed with {product.zariType}. Slight natural variations in the zari weft testify to authentic handspun craftsmanship.
                    </p>
                  )}
                  {activeTab === "care" && <p>{product.careInstructions}</p>}
                  {activeTab === "shipping" && (
                    <p>
                      Complimentary insured express delivery across India. Includes signature Resham Craft muslin preservation wrap.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CUSTOMER REVIEWS SECTION (Below the 1-Screen Fold)
          ───────────────────────────────────────────────────────────── */}
      <section id="reviews" className="py-16 md:py-20 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Reviews Header Banner */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-border/50 gap-6">
            <div>
              <span className="label-eyebrow block mb-1">
                Verified Client Experiences
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary">
                Customer Reviews & Ratings
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-base font-bold text-primary">4.9 out of 5</span>
                <span className="text-xs text-muted-foreground">
                  (Based on {reviews.length} authentic purchases)
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-6 py-3 bg-primary text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary/95 transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {showReviewForm ? "Close Review Form" : "Write a Review"}
            </button>
          </div>

          {/* Interactive Review Submission Form */}
          {showReviewForm && (
            <form
              onSubmit={handleReviewSubmit}
              className="my-8 p-6 md:p-8 bg-card border border-border/70 shadow-lg space-y-5 animate-in fade-in"
            >
              <h3 className="text-xl font-serif text-primary font-bold">
                Share Your Experience with {product.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full px-3.5 py-2.5 text-sm border border-border bg-background text-primary outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                    City, State
                  </label>
                  <input
                    type="text"
                    value={newReview.city}
                    onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
                    placeholder="e.g. Pune, Maharashtra"
                    className="w-full px-3.5 py-2.5 text-sm border border-border bg-background text-primary outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                    Rating *
                  </label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 text-sm border border-border bg-background text-primary outline-none focus:border-accent cursor-pointer"
                  >
                    <option value={5}>5 Stars - Exquisite Royal Masterpiece</option>
                    <option value={4}>4 Stars - High Quality Silk</option>
                    <option value={3}>3 Stars - Met Expectations</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                  Review Headline
                </label>
                <input
                  type="text"
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  placeholder="e.g. Breath-taking weave for my wedding!"
                  className="w-full px-3.5 py-2.5 text-sm border border-border bg-background text-primary outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                  Your Detailed Review *
                </label>
                <textarea
                  required
                  rows={3}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Tell others about the silk drape, zari shine, packaging, and fit..."
                  className="w-full px-3.5 py-2.5 text-sm border border-border bg-background text-primary outline-none focus:border-accent"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary/95 transition-all shadow-md"
                >
                  Publish Verified Review
                </button>
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-6 py-3 border border-border text-xs uppercase tracking-[0.2em] font-semibold hover:bg-muted"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Rating Breakdown Bar & Quick Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 p-6 bg-card border border-border/50">
            {/* Column 1: Star Breakdown */}
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-border/50 pb-4 md:pb-0 md:pr-6">
              <span className="text-xs uppercase tracking-wider font-bold text-primary block mb-2">
                Rating Breakdown
              </span>
              {[
                { star: 5, pct: "92%" },
                { star: 4, pct: "8%" },
                { star: 3, pct: "0%" },
                { star: 2, pct: "0%" },
                { star: 1, pct: "0%" },
              ].map((item) => (
                <div key={item.star} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-12 text-[11px] font-medium">{item.star} stars</span>
                  <div className="flex-1 h-2 bg-muted rounded overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded"
                      style={{ width: item.pct }}
                    />
                  </div>
                  <span className="w-8 text-right text-[11px] font-medium">{item.pct}</span>
                </div>
              ))}
            </div>

            {/* Column 2: Highlights */}
            <div className="space-y-3 border-b md:border-b-0 md:border-r border-border/50 pb-4 md:pb-0 md:pr-6 text-xs">
              <span className="text-xs uppercase tracking-wider font-bold text-primary block">
                Artisan Quality Hallmarks
              </span>
              <div className="flex items-center gap-2 text-primary font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Verified Buyer satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Genuine Silk Mark Authenticity card included</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tested 24K dipped / Roopa Kalabattu zari</span>
              </div>
            </div>

            {/* Column 3: Trust Note */}
            <div className="flex flex-col justify-center text-xs text-muted-foreground leading-relaxed">
              <span className="text-xs uppercase tracking-wider font-bold text-primary block mb-1">
                Authenticity Guarantee
              </span>
              <p>
                Every Resham Craft drape is individually signed off by our master weaving guild before dispatch in archival cotton muslin.
              </p>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-card border border-border/50 shadow-sm transition-all hover:border-accent/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary text-white font-serif font-bold text-sm flex items-center justify-center">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-primary">{rev.name}</span>
                        {rev.verified && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Buyer
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-muted-foreground">{rev.city}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{rev.date}</span>
                  </div>
                </div>

                <h4 className="text-base font-serif font-semibold text-primary mb-2">
                  {rev.title}
                </h4>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border/30">
                  <span className="text-[11px]">Was this review helpful?</span>
                  <button
                    onClick={() => toast.success("Thank you for your feedback")}
                    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors font-medium"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    Helpful ({rev.helpfulCount})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          COMPLEMENTARY HEIRLOOMS (Related Products from Category)
          ───────────────────────────────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="label-eyebrow block mb-1">
                  Handpicked Alternatives
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-primary">
                  More from the {product.category} Collection
                </h3>
              </div>
              <Link
                href={`/collections?category=${product.category}`}
                className="text-xs uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors"
              >
                View All {product.category} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/collections/${rel.id}`}
                  className="group flex flex-col bg-card border border-border/50 p-3 transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-3">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-accent font-bold mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-sm font-semibold text-primary mb-1 line-clamp-1 group-hover:text-accent transition-colors">
                    {rel.name}
                  </h4>
                  <span className="text-xs font-bold text-primary mt-auto">
                    ₹ {rel.price.toLocaleString("en-IN")}
                  </span>
                </Link>
              ))}
            </div>

            {/* Back to master collection button */}
            <div className="mt-12 text-center">
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-accent font-bold pb-1 border-b border-primary/40 hover:border-accent"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to All Collections
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
