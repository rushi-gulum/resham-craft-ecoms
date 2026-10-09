"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, PlacedOrder } from "@/lib/cart-context";
import {
  CreditCard,
  Banknote,
  Smartphone,
  ShieldCheck,
  Lock,
  ArrowRight,
  Truck,
  CheckCircle2,
  Building
} from "lucide-react";
import { toast } from "sonner";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal, placeOrder, user } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<"cod" | "upi" | "card" | "netbanking">("cod");
  const [isProcessing, setIsProcessing] = useState(false);

  // Address form fields
  const [address, setAddress] = useState({
    fullName: user.name || "Ananya Sharma",
    phone: user.phone || "+91 98450 12345",
    email: user.email || "demo@reshamcraft.com",
    street: user.address || "Penthouse 4B, Silver Oak Heights, MG Road",
    city: user.city || "Bangalore",
    state: "Karnataka",
    pincode: user.pincode || "560001"
  });

  // Card details
  const [cardData, setCardData] = useState({
    number: "•••• •••• •••• 4242",
    name: "Ananya Sharma",
    expiry: "08/29",
    cvv: "•••"
  });

  // UPI details
  const [upiId, setUpiId] = useState("ananya@okhdfcbank");

  const shipping = subtotal > 25000 ? 0 : 500;
  const total = subtotal + shipping;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your shopping bag is empty");
      router.push("/collections");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedId = `RC-${Math.floor(1000 + Math.random() * 9000)}`;

      const newOrder: PlacedOrder = {
        orderId: generatedId,
        date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
        items: [...cart],
        subtotal,
        discount: 0,
        shipping,
        total,
        paymentMethod,
        paymentStatus: paymentMethod === "cod" ? "Pending on Delivery" : "Paid Online",
        shippingAddress: {
          fullName: address.fullName,
          phone: address.phone,
          street: address.street,
          city: address.city,
          state: address.state,
          pincode: address.pincode
        },
        trackingStatus: "Confirmed"
      };

      placeOrder(newOrder);
      toast.success("Order Placed Successfully!", {
        description: `Order ${generatedId} confirmed`
      });
      router.push(`/order-tracking?orderId=${generatedId}`);
    }, 1200);
  };

  if (cart.length === 0) {
    return (
      <main className="flex-1 py-24 text-center">
        <div className="container mx-auto px-4 max-w-md bg-card border border-border p-10">
          <h1 className="text-2xl font-serif text-primary mb-3">Your Bag is Empty</h1>
          <p className="text-xs text-muted-foreground mb-6">Select a handwoven saree before proceeding to checkout.</p>
          <Link
            href="/collections"
            className="px-6 py-3 bg-primary text-white text-xs uppercase tracking-widest font-bold"
          >
            Explore Sarees
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 py-12 md:py-20 bg-muted/10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb Header */}
        <div className="mb-10 text-center">
          <span className="label-eyebrow block mb-2">
            Luxury Checkout Experience
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-primary">
            Shipping & Payment
          </h1>
        </div>

        <form onSubmit={handleCompleteOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Delivery Address & Payment Method (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Shipping Address */}
            <div className="bg-card border border-border/60 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4 mb-6">
                <div className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold font-serif">
                  1
                </div>
                <h2 className="text-xl font-serif text-primary">Shipping Destination</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-primary uppercase tracking-wider text-xs font-semibold mb-1.5">
                    Full Recipient Name
                  </label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full px-3 py-2.5 bg-background border border-border focus:border-accent outline-none text-sm text-primary"
                  />
                </div>
                <div>
                  <label className="block text-primary uppercase tracking-wider text-xs font-semibold mb-1.5">
                    Contact Phone (for delivery SMS)
                  </label>
                  <input
                    type="tel"
                    required
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    className="w-full px-3 py-2.5 bg-background border border-border focus:border-accent outline-none text-sm text-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-primary uppercase tracking-wider text-xs font-semibold mb-1.5">
                    Street Address / Penthouse / Estate
                  </label>
                  <input
                    type="text"
                    required
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                    className="w-full px-3 py-2.5 bg-background border border-border focus:border-accent outline-none text-sm text-primary"
                  />
                </div>

                <div>
                  <label className="block text-primary uppercase tracking-wider text-xs font-semibold mb-1.5">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full px-3 py-2.5 bg-background border border-border focus:border-accent outline-none text-sm text-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-primary uppercase tracking-wider text-xs font-semibold mb-1.5">
                      State
                    </label>
                    <input
                      type="text"
                      required
                      value={address.state}
                      onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      className="w-full px-3 py-2.5 bg-background border border-border focus:border-accent outline-none text-sm text-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-primary uppercase tracking-wider text-xs font-semibold mb-1.5">
                      Postal Pincode
                    </label>
                    <input
                      type="text"
                      required
                      value={address.pincode}
                      onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                      className="w-full px-3 py-2.5 bg-background border border-border focus:border-accent outline-none text-sm text-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Payment Selector (COD Default + Cards, UPI, Netbanking) */}
            <div className="bg-card border border-border/60 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4 mb-6">
                <div className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold font-serif">
                  2
                </div>
                <div>
                  <h2 className="text-xl font-serif text-primary">Select Payment Method</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Cash on Delivery is set by default. UPI & Cards available for online clearance.
                  </p>
                </div>
              </div>

              {/* Payment Method Cards */}
              <div className="space-y-3 mb-6">
                {/* 1. Cash on Delivery (Default) */}
                <label
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex items-start gap-4 p-4 border cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "border-accent bg-accent/5 ring-1 ring-accent"
                      : "border-border hover:bg-muted/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="mt-1 accent-accent"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Banknote className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-primary text-sm">
                          Cash on Delivery (COD) - Default
                        </span>
                      </div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded uppercase">
                        Recommended
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-light mt-1">
                      Pay via cash or UPI QR directly to the courier upon delivery at your doorstep.
                    </p>
                  </div>
                </label>

                {/* 2. Instant UPI (GPay, PhonePe, Paytm) */}
                <label
                  onClick={() => setPaymentMethod("upi")}
                  className={`flex items-start gap-4 p-4 border cursor-pointer transition-all ${
                    paymentMethod === "upi"
                      ? "border-accent bg-accent/5 ring-1 ring-accent"
                      : "border-border hover:bg-muted/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                    className="mt-1 accent-accent"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-primary text-sm">
                          Instant UPI (GPay / PhonePe / Paytm / BHIM)
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground font-light mt-1">
                      Instant verification with zero transaction charges.
                    </p>

                    {paymentMethod === "upi" && (
                      <div className="mt-4 pt-3 border-t border-border/50">
                        <label className="block text-xs uppercase tracking-wider text-primary font-semibold mb-1.5">
                          Enter UPI VPA ID
                        </label>
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="yourname@okhdfcbank"
                          className="w-full max-w-sm px-3 py-2 text-sm bg-background border border-border focus:border-accent outline-none text-primary"
                        />
                      </div>
                    )}
                  </div>
                </label>

                {/* 3. Credit / Debit Cards */}
                <label
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-start gap-4 p-4 border cursor-pointer transition-all ${
                    paymentMethod === "card"
                      ? "border-accent bg-accent/5 ring-1 ring-accent"
                      : "border-border hover:bg-muted/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mt-1 accent-accent"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-primary text-sm">
                          Credit & Debit Cards (Visa, Mastercard, Amex, RuPay)
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground font-normal mt-1">
                      256-Bit SSL Encrypted Card Gateway.
                    </p>

                    {paymentMethod === "card" && (
                      <div className="mt-4 pt-3 border-t border-border/50 grid grid-cols-2 gap-3 text-xs">
                        <div className="col-span-2">
                          <label className="block text-xs uppercase tracking-wider text-primary font-semibold mb-1.5">
                            Card Number
                          </label>
                          <input
                            type="text"
                            value={cardData.number}
                            onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                            className="w-full px-3 py-2 bg-background border border-border focus:border-accent outline-none text-sm text-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-primary font-semibold mb-1.5">
                            Expiry (MM/YY)
                          </label>
                          <input
                            type="text"
                            value={cardData.expiry}
                            onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                            className="w-full px-3 py-2 bg-background border border-border focus:border-accent outline-none text-sm text-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-primary font-semibold mb-1.5">
                            CVV
                          </label>
                          <input
                            type="password"
                            maxLength={4}
                            value={cardData.cvv}
                            onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                            className="w-full px-3 py-2 bg-background border border-border focus:border-accent outline-none text-sm text-primary"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </label>

                {/* 4. Netbanking */}
                <label
                  onClick={() => setPaymentMethod("netbanking")}
                  className={`flex items-start gap-4 p-4 border cursor-pointer transition-all ${
                    paymentMethod === "netbanking"
                      ? "border-accent bg-accent/5 ring-1 ring-accent"
                      : "border-border hover:bg-muted/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "netbanking"}
                    onChange={() => setPaymentMethod("netbanking")}
                    className="mt-1 accent-accent"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-primary text-sm">
                        Net Banking (HDFC, ICICI, SBI, Axis & 45+ banks)
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-normal mt-1">
                      Direct secure login via your bank&apos;s net banking portal.
                    </p>
                  </div>
                </label>
              </div>

              <div className="p-3 bg-muted/30 border border-border/40 text-xs text-muted-foreground flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent shrink-0" />
                <span>
                  Demo Mode: All payment gateways simulate complete verification with immediate order tracking.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Review & Final Authorization (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border/60 p-6 md:p-8 sticky top-28 shadow-sm">
              <h2 className="text-xl font-serif text-primary border-b border-border/50 pb-4 mb-6">
                Bag Review ({cart.length})
              </h2>

              {/* Items List Mini */}
              <div className="space-y-4 max-h-72 overflow-y-auto pr-1 mb-6 border-b border-border/50 pb-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-3 items-center">
                    <div className="relative w-14 h-18 bg-muted shrink-0 overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-serif text-primary font-semibold truncate">
                        {item.product.name}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        Qty: {item.quantity} × ₹ {item.product.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <span className="text-sm font-serif font-bold text-primary shrink-0">
                      ₹ {(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Financial Breakdown */}
              <div className="space-y-3 text-sm mb-6 font-normal">
                <div className="flex justify-between text-muted-foreground">
                  <span>Bag Subtotal</span>
                  <span className="text-foreground font-medium">₹ {subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Insured Courier</span>
                  <span className="text-foreground font-medium">{shipping === 0 ? "Free (Complimentary)" : `₹ ${shipping}`}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Payment Gateway Surcharge</span>
                  <span className="text-emerald-700 font-semibold">₹ 0 (Waived)</span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between text-xl font-serif text-primary font-bold">
                  <span>Grand Total</span>
                  <span>₹ {total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Confirm CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4.5 bg-primary text-white text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/95 transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isProcessing ? (
                  "Authorizing Order..."
                ) : (
                  <>
                    Confirm & Place Order <ArrowRight className="w-4 h-4 text-accent" />
                  </>
                )}
              </button>

              <div className="pt-6 border-t border-border/50 text-[11px] text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>100% Genuine Silk Mark Assurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-accent shrink-0" />
                  <span>Dispatched with Live Courier GPS Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
