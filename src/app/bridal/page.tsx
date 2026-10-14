"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Sparkles, Calendar, Clock, Video, CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function BridalPage() {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [consultationData, setConsultationData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    preferredTime: "Morning (11 AM - 1 PM)",
    notes: ""
  });

  const bridalSarees = PRODUCTS.filter((p) => p.category === "Bridal" || p.price > 25000);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    toast.success("Consultation Booked!", {
      description: "Our bridal concierge will reach out on WhatsApp/Email."
    });
  };

  return (
    <main className="flex-1">
      {/* Bridal Grand Hero */}
      <section className="relative h-[85vh] min-h-[580px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bridal-4.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/50" />

        <div className="relative text-center text-white px-4 z-10 max-w-4xl">
          <span className="text-amber-300 text-xs md:text-sm tracking-[0.4em] uppercase font-bold block mb-4 drop-shadow-md">
            The Bespoke Haute Couture
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            The Bridal <br />
            <span className="italic font-light text-amber-300 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">Odyssey</span>
          </h1>
          <p className="text-sm md:text-lg tracking-[0.25em] uppercase font-medium text-amber-100/90 border-y border-amber-300/40 py-4 inline-block mb-8 drop-shadow-md">
            Sacred Heirlooms for a Lifetime
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-stone-950 font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:from-white hover:to-white hover:text-primary transition-all shadow-[0_8px_30px_rgba(245,158,11,0.5)] flex items-center gap-2.5 border-2 border-amber-300"
            >
              <Calendar className="w-4 h-4 stroke-[2.5]" /> Book Virtual Drape Session
            </button>
            <a
              href="#trousseau"
              className="px-8 py-4.5 bg-black/60 hover:bg-white hover:text-primary text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] border-2 border-white backdrop-blur-md shadow-2xl transition-all"
            >
              Explore Trousseau
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-accent text-xs uppercase tracking-[0.3em] font-bold block mb-3">
            Royal Trousseau
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
            Blessed in Pure Zari, Woven for Eternity
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg italic mb-10 max-w-2xl mx-auto">
            &ldquo;A Resham Craft bridal saree is not merely an ensemble. It is an auspicious blessing woven with 24K dipped gold zari, a generational story, and an everlasting celebration of sacred love.&rdquo;
          </p>
          <div className="w-24 h-0.5 bg-accent/40 mx-auto" />
        </div>
      </section>

      {/* Featured Bridal Trousseau Catalog */}
      <section id="trousseau" className="py-20 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-accent text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                Handpicked Silks
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary">
                Curated Bridal Heirlooms
              </h2>
            </div>
            <Link
              href="/collections"
              className="text-xs uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors flex items-center gap-1"
            >
              View Full Collection <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {bridalSarees.map((saree) => (
              <div
                key={saree.id}
                className="group bg-card border border-border/50 p-4 transition-all duration-300 hover:shadow-2xl flex flex-col"
              >
                <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-5">
                  <Link href={`/collections/${saree.id}`}>
                    <Image
                      src={saree.image}
                      alt={saree.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  <span className="absolute top-3 left-3 bg-primary text-accent text-xs font-bold uppercase tracking-wider px-2.5 py-1">
                    Bridal Edition
                  </span>
                  <button
                    onClick={() => addToCart(saree)}
                    className="absolute bottom-4 left-4 right-4 py-3 bg-white/95 text-primary text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2 hover:bg-primary hover:text-white"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Trousseau
                  </button>
                </div>

                <div className="flex flex-col flex-1">
                  <span className="label-tag text-accent mb-1">
                    {saree.category}
                  </span>
                  <h3 className="font-serif text-xl text-primary mb-2">
                    <Link href={`/collections/${saree.id}`} className="hover:text-accent">
                      {saree.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {saree.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-border/40 flex justify-between items-center">
                    <span className="font-serif text-lg font-bold text-primary">
                      ₹ {saree.price.toLocaleString("en-IN")}
                    </span>
                    <Link
                      href={`/collections/${saree.id}`}
                      className="text-xs uppercase tracking-wider font-bold text-accent hover:text-primary"
                    >
                      Drape Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 3-Step Bespoke Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-eyebrow block mb-2">
              The Bespoke Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              Crafting Your Custom Drape
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 border border-border/40 bg-card text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 text-accent rounded-full flex items-center justify-center mb-6 font-serif text-xl font-bold">
                1
              </div>
              <h3 className="font-serif text-lg text-primary mb-3 font-semibold">Stylist Consultation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect via 1-on-1 HD video with our head drape curator to discover silhouettes and auspicious tones tailored to your ceremony.
              </p>
            </div>

            <div className="p-8 border border-border/40 bg-card text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 text-accent rounded-full flex items-center justify-center mb-6 font-serif text-xl font-bold">
                2
              </div>
              <h3 className="font-serif text-lg text-primary mb-3 font-semibold">Custom Loom Drafting</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Choose pure zari alloys (antique gold, roopa kalabattu, or ganga-jamuna) and customize personalized pallu inscriptions.
              </p>
            </div>

            <div className="p-8 border border-border/40 bg-card text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 text-accent rounded-full flex items-center justify-center mb-6 font-serif text-xl font-bold">
                3
              </div>
              <h3 className="font-serif text-lg text-primary mb-3 font-semibold">Sacred Handover</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Receive your bespoke heirloom in hand-carved mahogany chests with certified authenticity and personalized weaver blessing scrolls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in"
          />

          <div className="relative w-full max-w-lg bg-card border border-border p-8 md:p-10 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
            {bookingSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-primary mb-2">Appointment Reserved</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  Thank you, {consultationData.name}. Our senior bridal curator will connect on WhatsApp with calendar invites and fabric swatch catalogs.
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setBookingSubmitted(false);
                  }}
                  className="px-8 py-3 bg-primary text-white text-xs uppercase tracking-widest font-bold"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-start mb-6 border-b border-border pb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-primary">Virtual Drape Concierge</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Reserve a private 45-minute video appointment
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-muted-foreground hover:text-primary text-lg"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={consultationData.name}
                      onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
                      placeholder="Pooja Mehta"
                      className="w-full px-3 py-2.5 text-sm bg-background border border-border focus:border-accent outline-none text-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={consultationData.email}
                        onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                        placeholder="pooja@example.com"
                        className="w-full px-3 py-2.5 text-sm bg-background border border-border focus:border-accent outline-none text-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={consultationData.phone}
                        onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2.5 text-sm bg-background border border-border focus:border-accent outline-none text-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">
                        Wedding Date
                      </label>
                      <input
                        type="date"
                        required
                        value={consultationData.weddingDate}
                        onChange={(e) => setConsultationData({ ...consultationData, weddingDate: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm bg-background border border-border focus:border-accent outline-none text-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">
                        Preferred Slot
                      </label>
                      <select
                        value={consultationData.preferredTime}
                        onChange={(e) => setConsultationData({ ...consultationData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm bg-background border border-border focus:border-accent outline-none text-primary"
                      >
                        <option>Morning (11 AM - 1 PM)</option>
                        <option>Afternoon (2 PM - 5 PM)</option>
                        <option>Evening (6 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">
                      Special Weave Preferences (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={consultationData.notes}
                      onChange={(e) => setConsultationData({ ...consultationData, notes: e.target.value })}
                      placeholder="Red Banarasi kadhwa, temple border Kanjeevaram, etc."
                      className="w-full px-3 py-2.5 text-sm bg-background border border-border focus:border-accent outline-none text-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/95 transition-all shadow-md mt-2 flex items-center justify-center gap-2"
                  >
                    Confirm Consultation <Sparkles className="w-3.5 h-3.5 text-accent" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
