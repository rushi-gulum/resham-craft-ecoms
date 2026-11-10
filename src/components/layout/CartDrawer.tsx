"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { calculateShipping, cn } from "@/lib/utils";
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle2 } from "@/components/icons";

// Matches the .drawer-row collapse in globals.css
const REMOVE_ANIMATION_MS = 300;

export default function CartDrawer() {
  const { isDrawerOpen, setIsDrawerOpen, cart, updateQuantity, removeFromCart, subtotal, lastAddedItem, setLastAddedItem, couponCode, discount } = useCart();
  const [removingIds, setRemovingIds] = useState<string[]>([]);

  useEffect(() => {
    if (!isDrawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDrawerOpen, setIsDrawerOpen]);

  // Let the row collapse before it leaves the cart
  const removeWithAnimation = (productId: string) => {
    if (removingIds.includes(productId)) return;
    setRemovingIds((ids) => [...ids, productId]);
    setTimeout(() => {
      removeFromCart(productId);
      setRemovingIds((ids) => ids.filter((id) => id !== productId));
    }, REMOVE_ANIMATION_MS);
  };

  const shipping = calculateShipping(subtotal);
  const total = Math.max(0, subtotal - discount + shipping);

  return (
    <div
      inert={!isDrawerOpen}
      data-open={isDrawerOpen}
      className={cn(
        "fixed inset-0 z-50 flex justify-end overflow-hidden transition-[visibility] duration-0",
        isDrawerOpen ? "visible" : "invisible delay-[400ms]"
      )}
    >
      {/* Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          isDrawerOpen ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Drawer content */}
      <div
        className={cn(
          "relative w-full max-w-md bg-background h-full shadow-2xl flex flex-col z-10 border-l border-border transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-primary">Your Shopping Bag</h2>
            <p key={cart.length} className="tick-in text-xs text-muted-foreground uppercase tracking-widest mt-1">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 text-muted-foreground hover:text-primary transition duration-300 ease-out hover:rotate-90 rounded-md"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6">
          {cart.length === 0 ? (
            <div className="tick-in text-center py-16">
              <p className="text-muted-foreground text-sm mb-4">Your bag is empty.</p>
              <Link
                href="/collections"
                onClick={() => setIsDrawerOpen(false)}
                className="inline-block px-6 py-3 bg-primary text-white text-xs uppercase tracking-widest font-bold transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Sarees
              </Link>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={item.product.id}
                data-leaving={removingIds.includes(item.product.id)}
                className="drawer-row"
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    style={{ "--drawer-index": Math.min(index, 5) } as React.CSSProperties}
                    className="drawer-item flex gap-4 border-b border-border/40 pb-5 mb-6"
                  >
                    <div className="relative w-20 h-28 bg-muted shrink-0 overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-accent font-bold mb-0.5">
                            {item.product.category}
                          </p>
                          <h4 className="font-serif text-sm text-primary font-semibold line-clamp-1">
                            {item.product.name}
                          </h4>
                        </div>
                        <button
                          onClick={() => removeWithAnimation(item.product.id)}
                          className="text-muted-foreground hover:text-destructive p-1 transition duration-200 hover:scale-110 active:scale-95"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-auto flex justify-between items-center pt-2">
                        <div className="flex items-center border border-border/60">
                          <button
                            onClick={() =>
                              item.quantity === 1
                                ? removeWithAnimation(item.product.id)
                                : updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="px-2 py-1 text-xs hover:bg-muted transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span key={item.quantity} className="pop-in px-2.5 text-xs font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-1 text-xs hover:bg-muted transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p key={item.quantity} className="tick-in price-text text-sm text-primary font-semibold">
                          ₹ {(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-muted/20 border-t border-border space-y-4">
            {/* Pop up message above the subtotal section */}
            {lastAddedItem && (
              <div className="tick-in p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 rounded-xl flex items-center justify-between gap-3 text-emerald-900 dark:text-emerald-100 shadow-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div className="min-w-0">
                    <p className="font-semibold text-xs truncate">
                      Added {lastAddedItem.name} to bag
                    </p>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                      ₹ {lastAddedItem.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setLastAddedItem(null)}
                  className="text-emerald-600 hover:text-emerald-800 p-1 shrink-0"
                  aria-label="Dismiss notification"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-muted-foreground text-xs">
                <span>Subtotal</span>
                <span key={subtotal} className="tick-in">₹ {subtotal.toLocaleString("en-IN")}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold text-xs">
                  <span>{couponCode} (10%)</span>
                  <span key={discount} className="tick-in">- ₹ {discount.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex justify-between text-muted-foreground text-xs">
                <span>Estimated Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹ ${shipping.toLocaleString("en-IN")}`}</span>
              </div>
              <div className="flex justify-between price-text text-base text-primary font-semibold pt-2 border-t border-border">
                <span>Total</span>
                <span key={total} className="tick-in">₹ {total.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/cart"
                onClick={() => setIsDrawerOpen(false)}
                className="py-3 border border-primary text-primary text-center text-xs uppercase tracking-widest font-bold hover:bg-muted transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
              >
                View Bag
              </Link>
              <Link
                href="/checkout"
                onClick={() => setIsDrawerOpen(false)}
                className="group hero-sheen py-3 bg-primary text-white text-center text-xs uppercase tracking-widest font-bold hover:bg-primary/90 transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1.5"
              >
                Checkout <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
