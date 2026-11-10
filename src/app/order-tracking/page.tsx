"use client";

import { use, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart, PlacedOrder } from "@/lib/cart-context";
import {
  CheckCircle2,
  Package,
  Truck,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Check
} from "@/components/icons";

// How many of the four steps each tracking status has completed
const COMPLETED_STEPS: Record<PlacedOrder["trackingStatus"], number> = {
  Confirmed: 1,
  "Artisan Loom Inspection": 2,
  Dispatched: 3,
  "In Transit": 3,
  Delivered: 4,
};

function OrderTrackingContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "RC-8291";
  const { orders, latestOrder } = useCart();

  // Find order in history or fall back to latest or demo default
  const order: PlacedOrder =
    (latestOrder && latestOrder.orderId === orderId ? latestOrder : null) ||
    orders.find((o) => o.orderId === orderId) ||
    orders[0];

  const steps = [
    { title: "Order Confirmed", desc: "Received at Loom House", estimate: order?.date || "Today" },
    { title: "Artisan Quality Seal", desc: "Silk Mark & pure zari inspection", estimate: "Within 24 Hours" },
    { title: "Dispatched in Muslin Box", desc: "Priority Air Courier", estimate: "Expected Tomorrow" },
    { title: "Out for Delivery", desc: "Doorstep white-glove handover", estimate: "3–4 Days" }
  ];
  const completed = COMPLETED_STEPS[order?.trackingStatus ?? "Confirmed"];
  const isDelivered = completed === steps.length;

  return (
    <main className="flex-1 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Celebration Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="label-eyebrow block mb-2">
            Order Status: {order?.paymentStatus || "Confirmed"}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-primary mb-3">
            Tracking Order #{order?.orderId || orderId}
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {isDelivered
              ? "Your sacred handwoven drape has been delivered. We hope it becomes a treasured heirloom."
              : "Your sacred handwoven drape is being prepared with delicate care by our master artisans in Varanasi."}
          </p>
        </div>

        {/* Order Progress Stepper */}
        <div className="bg-card border border-border/60 p-6 md:p-10 mb-10 shadow-sm">
          <h2 className="text-xl font-serif text-primary border-b border-border/50 pb-4 mb-8">
            Order Progress
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
            {steps.map((step, idx) => {
              const isDone = idx < completed;
              const isCurrent = idx === completed;
              const isLast = idx === steps.length - 1;
              return (
                <li
                  key={step.title}
                  aria-current={isCurrent ? "step" : undefined}
                  style={{ "--reveal-delay": `${idx * 150}ms` } as React.CSSProperties}
                  className={`reveal-up relative flex md:flex-col md:items-center gap-4 md:gap-3 md:text-center ${isLast ? "" : "pb-8 md:pb-0"}`}
                >
                  {/* Line to the next step: down on phones, across on larger screens */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute bg-border left-5 top-12 bottom-1 w-0.5 -ml-px md:left-[calc(50%+1.75rem)] md:right-[calc(-50%-1rem+1.75rem)] md:top-5 md:bottom-auto md:w-auto md:h-0.5 md:ml-0"
                    >
                      {idx < completed - 1 && (
                        <span
                          style={{ animationDelay: `${300 + idx * 250}ms` }}
                          className="step-fill block w-full h-full bg-primary"
                        />
                      )}
                    </span>
                  )}

                  <div
                    className={`relative shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      isDone
                        ? "bg-primary text-accent"
                        : isCurrent
                          ? "step-pulse bg-card border-2 border-accent text-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isDone ? <Check className="w-5 h-5" /> : idx + 1}
                  </div>

                  <div className="min-w-0 pt-0.5 md:pt-0">
                    <h3 className={`text-sm font-semibold font-serif leading-snug ${isDone || isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">{step.desc}</p>
                    <span
                      className={`block text-[11px] uppercase tracking-wider font-semibold mt-1.5 ${
                        isCurrent ? "text-accent" : "text-muted-foreground/80"
                      }`}
                    >
                      {isDone ? (idx === 0 ? step.estimate : "Completed") : isCurrent ? `In Progress • ${step.estimate}` : step.estimate}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Order Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Purchased Items (2 cols) */}
          <div className="lg:col-span-2 bg-card border border-border/60 p-6 md:p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-serif text-primary border-b border-border/50 pb-4">
              Ensemble Details
            </h2>

            <div className="space-y-6">
              {order?.items?.map((item, idx) => (
                <div key={idx} className="flex gap-4 border-b border-border/40 pb-5">
                  <div className="relative w-20 h-28 bg-muted overflow-hidden shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-accent font-bold">
                        {item.product.category}
                      </span>
                      <h3 className="font-serif text-base text-primary font-semibold mt-0.5">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                        {item.product.fabric}
                      </p>
                    </div>
                    <div className="flex justify-between items-end pt-2">
                      <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                      <span className="price-text text-base font-semibold text-primary">
                        ₹ {(item.product.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-2 text-sm font-normal">
              <div className="flex justify-between text-muted-foreground">
                <span>Payment Mode</span>
                <span className="uppercase font-semibold text-primary">
                  {order?.paymentMethod === "cod" ? "Cash on Delivery" : order?.paymentMethod?.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Payment Status</span>
                <span className="text-emerald-700 font-bold">{order?.paymentStatus}</span>
              </div>
              <div className="flex justify-between text-lg price-text font-semibold text-primary pt-3 border-t border-border">
                <span>Total Amount</span>
                <span>₹ {order?.total?.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          {/* Destination & Concierge (1 col) */}
          <div className="space-y-6">
            <div className="bg-card border border-border/60 p-6 space-y-4 shadow-sm text-sm">
              <div className="flex items-center gap-2 border-b border-border/50 pb-3">
                <MapPin className="w-4 h-4 text-accent" />
                <h3 className="font-serif text-base text-primary font-semibold">Delivery Address</h3>
              </div>
              <p className="font-semibold text-primary text-sm">{order?.shippingAddress?.fullName}</p>
              <p className="text-muted-foreground leading-relaxed text-xs">
                {order?.shippingAddress?.street}, {order?.shippingAddress?.city},{" "}
                {order?.shippingAddress?.state} - {order?.shippingAddress?.pincode}
              </p>
              <p className="text-muted-foreground text-xs">
                Phone: {order?.shippingAddress?.phone}
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/40 p-6 space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-accent" />
                <h3 className="font-serif text-base text-primary">Concierge Support</h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed">
                Have questions regarding your dispatch or need personalized blouse stitching advice?
              </p>
              <a
                href="mailto:support@reshamcraft.com"
                className="inline-block text-primary font-bold uppercase tracking-wider text-[11px] underline"
              >
                Connect with Concierge <ArrowRight className="inline-block w-3.5 h-3.5 ml-1 -mt-0.5" />
              </a>
            </div>

            <div className="pt-2 text-center">
              <Link
                href="/collections"
                className="inline-block w-full py-3.5 bg-primary text-white text-xs uppercase tracking-widest font-bold hover:bg-primary/95"
              >
                Continue Browsing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function OrderTrackingPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading tracking details...</div>}>
      <OrderTrackingContent />
    </Suspense>
  );
}
