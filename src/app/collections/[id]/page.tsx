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
  ChevronDown,
  Minus,
  Plus,
  ArrowRight
} from "@/components/icons";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";
import { FREE_SHIPPING_ABOVE } from "@/lib/utils";
import { SelectField, TextAreaField, TextField } from "@/components/form-fields";

const RATING_OPTIONS = [
  { value: "5", label: "5 Stars", hint: "Exquisite Royal Masterpiece" },
  { value: "4", label: "4 Stars", hint: "High Quality Silk" },
  { value: "3", label: "3 Stars", hint: "Met Expectations" },
];

const stagger = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

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
    title: "Pure royal grandeur that exceeded all expectations!",
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
  const [reviewErrors, setReviewErrors] = useState<{ name?: string; comment?: string }>({});
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
    const errors: typeof reviewErrors = {};
    if (!newReview.name.trim()) errors.name = "Please enter your name";
    if (!newReview.comment.trim()) errors.comment = "Please share a few words";
    setReviewErrors(errors);
    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      document.getElementById(`review-${firstInvalid}`)?.focus();
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
          <nav className="reveal-up flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-medium">
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
              <div style={stagger(100)} className="reveal-up relative h-[440px] sm:h-[500px] lg:h-[calc(100vh-210px)] max-h-[580px] w-full bg-stone-100 dark:bg-stone-900 overflow-hidden border border-border/50 group flex items-center justify-center">
                <Image
                  key={activeImage}
                  src={activeImage}
                  alt={product.name}
                  fill
                  priority
                  className="image-swap object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5 z-10 pointer-events-none">
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
                    key={String(isWishlisted)}
                    className={`pop-in w-4 h-4 ${
                      isWishlisted ? "fill-red-600 text-red-600" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Thumbnails Row */}
              {product.secondaryImages && product.secondaryImages.length > 0 && (
                <div style={stagger(220)} className="reveal-up flex gap-2.5 overflow-x-auto pb-1">
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
              <div style={stagger(150)} className="reveal-up flex items-center justify-between">
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
              <h1 style={stagger(220)} className="reveal-up text-2xl sm:text-3xl font-serif text-primary leading-tight font-semibold">
                {product.name}
              </h1>

              {/* Price & Taxes */}
              <div style={stagger(290)} className="reveal-up flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="text-2xl price-text text-primary font-semibold">
                  ₹ {product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹ {product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="whitespace-nowrap text-[11px] uppercase tracking-wider text-primary bg-accent/10 px-2.5 py-1 font-semibold border border-accent/40">
                  All Taxes Included
                </span>
              </div>

              {/* Quantity Selector & CTAs */}
              <div style={stagger(360)} className="reveal-up grid grid-cols-[auto_1fr] sm:grid-cols-3 gap-2.5">
                <div className="flex items-center border border-border h-12 bg-card">
                  <button
                    type="button"
                    onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                    aria-label="Decrease quantity"
                    className="w-10 sm:w-auto sm:flex-1 h-full inline-flex items-center justify-center hover:bg-muted text-primary transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span key={selectedQty} className="pop-in w-8 text-center text-sm font-semibold text-primary">{selectedQty}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedQty(selectedQty + 1)}
                    aria-label="Increase quantity"
                    className="w-10 sm:w-auto sm:flex-1 h-full inline-flex items-center justify-center hover:bg-muted text-primary transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="hero-sheen min-w-0 whitespace-nowrap px-4 h-12 inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 text-white text-xs uppercase tracking-[0.2em] font-bold border border-primary transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Bag
                </button>

                <button
                  type="button"
                  onClick={handleInstantBuy}
                  className="group col-span-2 sm:col-span-1 min-w-0 whitespace-nowrap px-4 h-12 inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-primary text-primary hover:text-white text-xs uppercase tracking-[0.2em] font-bold border border-accent hover:border-primary transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
                >
                  Buy Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Description */}
              <p style={stagger(430)} className="reveal-up text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {product.description}
              </p>

              {/* Key Handloom Specs (Compact 2x2 Grid) */}
              <div style={stagger(500)} className="reveal-up grid grid-cols-2 gap-2.5 py-3 border-y border-border/60 text-xs">
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

              {/* Trust Assurances (Compact) */}
              <div style={stagger(570)} className="reveal-up grid grid-cols-3 gap-2 pt-2 text-center text-[11px] border-t border-border/40">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-accent mb-0.5" />
                  <span className="font-semibold text-primary">Silk Mark</span>
                  <span className="text-[10px] text-muted-foreground">Certified Pure</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-4 h-4 text-accent mb-0.5" />
                  <span className="font-semibold text-primary">Insured Courier</span>
                  <span className="text-[10px] text-muted-foreground">24h Dispatch</span>
                </div>
                <div className="flex flex-col items-center">
                  <RotateCcw className="w-4 h-4 text-accent mb-0.5" />
                  <span className="font-semibold text-primary">7-Day Return</span>
                  <span className="text-[10px] text-muted-foreground">Doorstep Pickup</span>
                </div>
              </div>

              {/* Accordion Tabs */}
              <div style={stagger(640)} className="reveal-up pt-2 border-t border-border/50 text-xs">
                <div className="flex border-b border-border text-[11px] uppercase tracking-wider font-semibold">
                  <button
                    onClick={() => setActiveTab("details")}
                    data-active={activeTab === "details"}
                    className="tab-link pb-2 pr-4"
                  >
                    Craft
                  </button>
                  <button
                    onClick={() => setActiveTab("care")}
                    data-active={activeTab === "care"}
                    className="tab-link pb-2 px-4"
                  >
                    Care
                  </button>
                  <button
                    onClick={() => setActiveTab("shipping")}
                    data-active={activeTab === "shipping"}
                    className="tab-link pb-2 px-4"
                  >
                    Shipping
                  </button>
                </div>

                <div key={activeTab} className="tab-fade pt-2.5 text-xs text-muted-foreground leading-relaxed">
                  {activeTab === "details" && (
                    <p>
                      Individually hand-loomed with {product.zariType}. Slight natural variations in the zari weft testify to authentic handspun craftsmanship.
                    </p>
                  )}
                  {activeTab === "care" && <p>{product.careInstructions}</p>}
                  {activeTab === "shipping" && (
                    <p>
                      Insured express delivery across India, free on orders above ₹ {FREE_SHIPPING_ABOVE.toLocaleString("en-IN")}. Includes signature Resham Craft muslin preservation wrap.
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
          <Reveal>
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
          </Reveal>

          {/* Interactive Review Submission Form */}
          {showReviewForm && (
            <form
              noValidate
              onSubmit={handleReviewSubmit}
              className="my-8 p-6 md:p-8 bg-card border border-border/70 shadow-lg space-y-5 reveal-up"
            >
              <h3 className="text-xl font-serif text-primary font-bold">
                Share Your Experience with {product.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TextField
                  id="review-name"
                  label="Your Name *"
                  value={newReview.name}
                  error={reviewErrors.name}
                  onChange={(e) => {
                    setNewReview({ ...newReview, name: e.target.value });
                    setReviewErrors({ ...reviewErrors, name: undefined });
                  }}
                  placeholder="e.g. Radhika Sharma"
                />
                <TextField
                  label="City, State"
                  value={newReview.city}
                  onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
                  placeholder="e.g. Pune, Maharashtra"
                />
                <SelectField
                  label="Rating *"
                  icon={Star}
                  value={String(newReview.rating)}
                  options={RATING_OPTIONS}
                  onChange={(value) => setNewReview({ ...newReview, rating: Number(value) })}
                />
              </div>

              <TextField
                label="Review Headline"
                value={newReview.title}
                onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                placeholder="e.g. Breath-taking weave for my wedding!"
              />

              <TextAreaField
                id="review-comment"
                label="Your Detailed Review *"
                rows={3}
                value={newReview.comment}
                error={reviewErrors.comment}
                onChange={(e) => {
                  setNewReview({ ...newReview, comment: e.target.value });
                  setReviewErrors({ ...reviewErrors, comment: undefined });
                }}
                placeholder="Tell others about the silk drape, zari shine, packaging, and fit..."
              />

              <div className="flex flex-wrap gap-4">
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
          <Reveal>
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
                ].map((item, index) => (
                  <div key={item.star} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-12 text-[11px] font-medium">{item.star} stars</span>
                    <div className="flex-1 h-2 bg-muted rounded overflow-hidden">
                      <div
                        className="rating-bar h-full bg-amber-500 rounded"
                        style={{ width: item.pct, transitionDelay: `${300 + index * 90}ms` }}
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
          </Reveal>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((rev, index) => (
              <Reveal key={rev.id} delay={Math.min(index, 3) * 80}>
                <div
                  className="p-6 bg-card border border-border/50 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-accent/40"
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
                            <span className="inline-flex items-center gap-1 whitespace-nowrap text-[11px] text-primary bg-accent/10 px-2 py-0.5 font-semibold border border-accent/40">
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
              </Reveal>
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
            <Reveal>
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
                  View All {product.category} <ArrowRight className="inline-block w-3.5 h-3.5 ml-1 -mt-0.5" />
                </Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel, index) => (
                <Reveal key={rel.id} delay={index * 100}>
                  <Link
                    href={`/collections/${rel.id}`}
                    className="group h-full flex flex-col bg-card border border-border/50 p-3 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
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
                </Reveal>
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
