"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Package, Heart, MapPin, LogOut, ChevronRight, Sparkles, ExternalLink, Trash2 } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"orders" | "wishlist" | "addresses" | "account">("orders");
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState([PRODUCTS[2], PRODUCTS[4]]);

  const removeWishlist = (id: string) => {
    setWishlist(wishlist.filter((p) => p.id !== id));
    toast.info("Removed from wishlist");
  };

  return (
    <main className="flex-1 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-72">
            <div className="mb-10 p-6 bg-card border border-border/50 text-center lg:text-left">
              <div className="h-20 w-20 bg-primary/10 flex items-center justify-center rounded-full mb-4 mx-auto lg:mx-0">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-2xl font-serif text-primary mb-1">Ananya Sharma</h1>
              <span className="text-xs text-accent font-bold uppercase tracking-wider bg-accent/10 px-2 py-0.5 inline-block mb-1">
                Royal Connoisseur
              </span>
              <p className="text-muted-foreground text-xs tracking-wide mt-1">
                Client since Oct 2024
              </p>
            </div>

            <nav className="space-y-1">
              <button
                type="button"
                onClick={() => setActiveTab("orders")}
                className={`w-full flex items-center gap-4 px-5 py-4 text-xs uppercase tracking-widest font-bold transition-all ${
                  activeTab === "orders"
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <Package className="h-4 w-4" /> Order History (2)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("wishlist")}
                className={`w-full flex items-center gap-4 px-5 py-4 text-xs uppercase tracking-widest font-bold transition-all ${
                  activeTab === "wishlist"
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <Heart className="h-4 w-4" /> Wishlist ({wishlist.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("addresses")}
                className={`w-full flex items-center gap-4 px-5 py-4 text-xs uppercase tracking-widest font-bold transition-all ${
                  activeTab === "addresses"
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <MapPin className="h-4 w-4" /> Saved Addresses
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("account")}
                className={`w-full flex items-center gap-4 px-5 py-4 text-xs uppercase tracking-widest font-bold transition-all ${
                  activeTab === "account"
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <User className="h-4 w-4" /> Account Details
              </button>
              <button
                type="button"
                onClick={() => toast.success("Signed out successfully")}
                className="w-full flex items-center gap-4 px-5 py-4 text-xs uppercase tracking-widest font-bold transition-all text-muted-foreground hover:bg-muted hover:text-primary"
              >
                <LogOut className="h-4 w-4" /> Sign Out
              </button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <section className="space-y-6">
                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                  <h2 className="text-2xl font-serif text-primary">Your Heirloom Orders</h2>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    2 Delivered
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Order 1 */}
                  <div className="bg-card border border-border/50 p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-6 items-center w-full md:w-auto">
                      <div className="w-16 h-20 bg-muted relative shrink-0 overflow-hidden">
                        <Image
                          src="/images/green_kanjeevaram_saree_product.png"
                          alt="Emerald Gold Kanjeevaram"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-accent font-bold uppercase tracking-wider">
                            #RC-8291
                          </span>
                          <span className="text-xs uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                            Delivered
                          </span>
                        </div>
                        <h3 className="text-lg font-serif text-primary font-semibold">
                          Emerald Gold Kanjeevaram
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Ordered on 12 Jan 2026 • Silk Mark #SM-40192
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-auto gap-4 pt-4 md:pt-0 border-t md:border-none border-border/40">
                      <div className="text-left md:text-right">
                        <p className="text-base font-serif font-bold text-primary">₹ 32,500</p>
                        <span className="text-xs text-muted-foreground">Prepaid (UPI)</span>
                      </div>
                      <Link
                        href="/order-tracking?orderId=RC-8291"
                        className="px-3.5 py-1.5 bg-primary text-white text-xs uppercase tracking-wider font-semibold hover:bg-primary/90"
                      >
                        Track Order
                      </Link>
                      <button
                        onClick={() => toast.info("Invoice downloaded (Demo PDF)")}
                        className="px-3 py-1.5 border border-border text-xs uppercase tracking-wider font-semibold text-primary hover:bg-muted"
                      >
                        Invoice
                      </button>
                    </div>
                  </div>

                  {/* Order 2 */}
                  <div className="bg-card border border-border/50 p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-6 items-center w-full md:w-auto">
                      <div className="w-16 h-20 bg-muted relative shrink-0 overflow-hidden">
                        <Image
                          src="/images/violet_banarasi_saree_product.png"
                          alt="Midnight Violet Banarasi"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-accent font-bold uppercase tracking-wider">
                            #RC-7102
                          </span>
                          <span className="text-xs uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                            Delivered
                          </span>
                        </div>
                        <h3 className="text-lg font-serif text-primary font-semibold">
                          Midnight Violet Banarasi
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Ordered on 05 Dec 2025 • Silk Mark #SM-38910
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-auto gap-8 pt-4 md:pt-0 border-t md:border-none border-border/40">
                      <div className="text-left md:text-right">
                        <p className="text-base font-serif font-bold text-primary">₹ 18,500</p>
                        <span className="text-xs text-muted-foreground">Prepaid (Card)</span>
                      </div>
                      <button
                        onClick={() => toast.info("Invoice downloaded (Demo PDF)")}
                        className="px-4 py-2 border border-border text-xs uppercase tracking-wider font-semibold text-primary hover:bg-muted"
                      >
                        Invoice
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <section className="space-y-6">
                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                  <h2 className="text-2xl font-serif text-primary">Saved Heirlooms</h2>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    {wishlist.length} Designs
                  </span>
                </div>

                {wishlist.length === 0 ? (
                  <p className="text-muted-foreground text-sm py-12 text-center">
                    Your wishlist is empty.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {wishlist.map((product) => (
                      <div key={product.id} className="bg-card border border-border/50 p-4 flex gap-4">
                        <div className="relative w-24 h-32 bg-muted shrink-0 overflow-hidden">
                          <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-xs uppercase tracking-wider text-accent font-bold">
                              {product.category}
                            </span>
                            <h4 className="font-serif text-base text-primary font-semibold line-clamp-1 mt-0.5">
                              {product.name}
                            </h4>
                            <p className="text-sm font-serif font-bold text-primary mt-1">
                              ₹ {product.price.toLocaleString("en-IN")}
                            </p>
                          </div>
                          <div className="flex gap-2 pt-2">
                            <button
                              onClick={() => {
                                addToCart(product);
                                removeWishlist(product.id);
                              }}
                              className="px-3 py-1.5 bg-primary text-white text-xs uppercase tracking-wider font-bold hover:bg-primary/90"
                            >
                              Move to Bag
                            </button>
                            <button
                              onClick={() => removeWishlist(product.id)}
                              className="p-1.5 text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <section className="space-y-6">
                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                  <h2 className="text-2xl font-serif text-primary">Saved Shipping Addresses</h2>
                </div>
                <div className="p-6 bg-card border border-border/50 max-w-md space-y-2">
                  <span className="text-xs uppercase tracking-wider text-accent font-bold">
                    Default Delivery Address
                  </span>
                  <h3 className="font-serif text-lg text-primary font-semibold">Ananya Sharma</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Penthouse 4B, Silver Oak Heights, MG Road, Bangalore, Karnataka - 560001
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Mobile: +91 98450 12345
                  </p>
                </div>
              </section>
            )}

            {/* Account Details Tab */}
            {activeTab === "account" && (
              <section className="space-y-6">
                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                  <h2 className="text-2xl font-serif text-primary">Client Profile Credentials</h2>
                </div>
                <div className="bg-card border border-border/50 p-6 max-w-lg space-y-4 text-xs">
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider font-medium mb-1">
                      Client Name
                    </span>
                    <span className="font-semibold text-primary text-sm">Ananya Sharma</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider font-medium mb-1">
                      Registered Email
                    </span>
                    <span className="font-semibold text-primary text-sm">ananya.sharma@example.com</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider font-medium mb-1">
                      Membership Tier
                    </span>
                    <span className="font-semibold text-accent text-sm">Royal Circle Gold Patron</span>
                  </div>
                </div>
              </section>
            )}

            {/* Personal Concierge Stylist Card */}
            <div className="mt-16 bg-accent/10 border border-accent/30 p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <span className="label-eyebrow block mb-1">
                    Bespoke Privilege
                  </span>
                  <h3 className="text-xl font-serif text-primary font-semibold">
                    Private Heritage Drape Concierge
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Direct access to master weavers for customized bridal wedding motifs.
                  </p>
                </div>
                <Link
                  href="/bridal"
                  className="px-6 py-3 bg-primary text-white text-xs uppercase tracking-widest font-bold hover:bg-primary/95 shrink-0"
                >
                  Book Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
