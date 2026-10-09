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
  PhoneCall
} from "lucide-react";

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
    { title: "Order Confirmed", desc: "Received at Loom House", date: order?.date || "Today", done: true },
    { title: "Artisan Quality Seal", desc: "Silk Mark & pure zari inspection", date: "Within 24 Hours", done: true },
    { title: "Dispatched in Muslin Box", desc: "Priority Air Courier", date: "Expected Tomorrow", done: order?.trackingStatus === "Delivered" },
    { title: "Out for Delivery", desc: "Doorstep white-glove handover", date: "3–4 Days", done: order?.trackingStatus === "Delivered" }
  ];

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
            Your sacred handwoven drape is being prepared with delicate care by our master artisans in Varanasi.
          </p>
        </div>

        {/* Live Stepper Visualizer */}
        <div className="bg-card border border-border/60 p-6 md:p-10 mb-10 shadow-sm">
          <h2 className="text-xl font-serif text-primary border-b border-border/50 pb-4 mb-8">
            Live Dispatch Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((s, idx) => (
              <div key={idx} className="flex flex-col items-start relative">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      s.done ? "bg-primary text-accent" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s.done ? "✓" : idx + 1}
                  </div>
                  <span className="text-sm font-semibold text-primary font-serif">{s.title}</span>
                </div>
                <p className="text-xs text-muted-foreground pl-11 leading-relaxed">{s.desc}</p>
                <span className="text-xs text-accent uppercase tracking-wider font-semibold pl-11 mt-1">
                  {s.date}
                </span>
              </div>
            ))}
          </div>
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
                      <span className="font-serif text-base font-bold text-primary">
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
              <div className="flex justify-between text-lg font-serif font-bold text-primary pt-3 border-t border-border">
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
                Connect with Concierge →
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
