"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Truck, Sparkles, CheckCircle2 } from "@/components/icons";
import { toast } from "sonner";
import { calculateShipping, FREE_SHIPPING_ABOVE } from "@/lib/utils";
import { TextField } from "@/components/form-fields";

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    subtotal,
    isHydrated,
    couponCode: appliedCoupon,
    discount,
    applyCoupon,
    removeCoupon,
  } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const shipping = calculateShipping(subtotal);
  const total = Math.max(0, subtotal - discount + shipping);

  const handleCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (applyCoupon(couponCode)) {
      setCouponError("");
      setCouponCode("");
      toast.success(`${couponCode.trim().toUpperCase()} Applied!`, {
        description: "Your discount has been added to this order",
      });
    } else {
      setCouponError("Invalid code. Try ROYAL10 for 10% off");
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      toast.success("Order Placed Successfully!", {
        description: "Order confirmation sent to your registered email.",
      });
    }, 1500);
  };

  if (!isHydrated) {
    return <main className="flex-1 min-h-[60vh]" />;
  }

  if (orderComplete) {
    return (
      <main className="flex-1 py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-lg text-center bg-card border border-border p-10 shadow-xl">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-accent text-xs uppercase tracking-[0.3em] font-bold block mb-2">
            Order #RC-9982 Confirmed
          </span>
          <h1 className="text-3xl font-serif text-primary mb-4">
            Thank You for Celebrating Heritage
          </h1>
          <p className="text-muted-foreground font-light text-sm mb-8 leading-relaxed">
            Your master weavers have received your order details. Your bespoke saree will be packed in royal scented muslin wrap and dispatched with white-glove courier service.
          </p>
          <Link
            href="/collections"
            className="inline-block px-8 py-4 bg-primary text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary/95"
          >
            Explore More Masterpieces
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main items section */}
          <div className="flex-1">
            <div className="flex items-center justify-between border-b border-border/50 pb-6 mb-8">
              <h1 className="text-3xl md:text-4xl font-serif text-primary">
                Your Shopping Bag
              </h1>
              <span className="text-muted-foreground text-sm font-light">
                {cart.length} {cart.length === 1 ? "design" : "designs"}
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="py-20 text-center bg-card border border-border/40 p-12">
                <p className="text-muted-foreground text-lg mb-6 font-serif">
                  Your royal bag currently has no sarees.
                </p>
                <Link
                  href="/collections"
                  className="inline-block px-10 py-4 bg-primary text-white text-xs uppercase tracking-widest font-bold hover:bg-primary/90"
                >
                  Explore Masterpiece Collection
                </Link>
              </div>
            ) : (
              <div className="space-y-8">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex flex-col sm:flex-row gap-6 p-6 bg-card border border-border/50 transition-all hover:shadow-md"
                  >
                    <div className="relative w-full sm:w-32 h-44 bg-muted overflow-hidden shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="text-xs text-accent uppercase tracking-wider font-bold block mb-1">
                              {item.product.category}
                            </span>
                            <h3 className="text-xl font-serif text-primary">
                              <Link
                                href={`/collections/${item.product.id}`}
                                className="hover:text-accent transition-colors"
                              >
                                {item.product.name}
                              </Link>
                            </h3>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors p-2"
                            title="Remove saree"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1 mb-4">
                          {item.product.fabric}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border/40">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-border">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-4 text-sm font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-lg price-text text-primary font-semibold">
                            ₹ {(item.product.price * item.quantity).toLocaleString("en-IN")}
                          </p>
                          <span className="text-xs text-muted-foreground font-normal">
                            ₹ {item.product.price.toLocaleString("en-IN")} each
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 flex justify-between items-center">
              <Link
                href="/collections"
                className="inline-flex items-center text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors gap-2 font-bold"
              >
                <ArrowLeft className="h-4 w-4" /> Continue Exploring Sarees
              </Link>
            </div>
          </div>

          {/* Sidebar checkout and summary */}
          <div className="w-full lg:w-96">
            <div className="bg-card border border-border p-8 sticky top-28 space-y-6 shadow-sm">
              <h2 className="text-xl font-serif text-primary pb-4 border-b border-border">
                Order Summary
              </h2>

              {/* Coupon Form */}
              <form onSubmit={handleCoupon}>
                <TextField
                  label="Promo Code"
                  className="pr-20 uppercase tracking-wider placeholder:normal-case placeholder:tracking-normal"
                  value={couponCode}
                  error={couponError}
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                    setCouponError("");
                  }}
                  placeholder="Try ROYAL10"
                  trailing={
                    <button
                      type="submit"
                      className="h-10 px-4 bg-muted text-primary text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-colors"
                    >
                      Apply
                    </button>
                  }
                />
              </form>

              {/* Summary Items */}
              <div className="space-y-3 pt-4 border-t border-border text-sm font-normal">
                <div className="flex justify-between text-muted-foreground">
                  <span>Bag Subtotal</span>
                  <span className="text-foreground font-medium">₹ {subtotal.toLocaleString("en-IN")}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span className="flex items-center gap-2">
                      {appliedCoupon} (10%)
                      <button
                        type="button"
                        onClick={removeCoupon}
                        className="text-[11px] font-medium text-muted-foreground underline hover:text-primary transition-colors"
                      >
                        Remove
                      </button>
                    </span>
                    <span>- ₹ {discount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between text-muted-foreground">
                  <span>Insured Express Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-emerald-700 font-semibold">Complimentary Free</span>
                    ) : (
                      <span className="text-foreground font-medium">₹ {shipping.toLocaleString("en-IN")}</span>
                    )}
                  </span>
                </div>
                <div className="pt-4 border-t border-border flex justify-between text-xl price-text text-primary font-semibold">
                  <span>Total Due</span>
                  <span>₹ {total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <Link
                href="/checkout"
                className="w-full bg-primary text-white py-4 text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Proceed to Checkout <Sparkles className="w-4 h-4 text-accent" />
              </Link>

              <div className="space-y-3 pt-4 border-t border-border text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>100% Secure Encrypted Transaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-accent shrink-0" />
                  <span>Free shipping on orders above ₹ {FREE_SHIPPING_ABOVE.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
