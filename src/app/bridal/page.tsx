"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Calendar, Clock, CheckCircle2, Mail, Phone, ShoppingBag, ArrowRight, User, X } from "@/components/icons";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";
import { DateField, SelectField, TextAreaField, TextField } from "@/components/form-fields";
import { cn } from "@/lib/utils";

const stagger = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

const EMPTY_BOOKING = {
  name: "",
  email: "",
  phone: "",
  weddingDate: "",
  preferredTime: "Morning",
  notes: ""
};

type BookingField = keyof typeof EMPTY_BOOKING;

const TIME_SLOTS = [
  { value: "Morning", label: "Morning", hint: "11 AM - 1 PM" },
  { value: "Afternoon", label: "Afternoon", hint: "2 PM - 5 PM" },
  { value: "Evening", label: "Evening", hint: "6 PM - 8 PM" },
];

const BESPOKE_STEPS = [
  {
    title: "Stylist Consultation",
    description:
      "Connect via 1-on-1 HD video with our head drape curator to discover silhouettes and auspicious tones tailored to your ceremony.",
  },
  {
    title: "Custom Loom Drafting",
    description:
      "Choose pure zari alloys (antique gold, roopa kalabattu, or ganga-jamuna) and customize personalized pallu inscriptions.",
  },
  {
    title: "Sacred Handover",
    description:
      "Receive your bespoke heirloom in hand-carved mahogany chests with certified authenticity and personalized weaver blessing scrolls.",
  },
];

export default function BridalPage() {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [consultationData, setConsultationData] = useState(EMPTY_BOOKING);
  const [bookingErrors, setBookingErrors] = useState<Partial<Record<BookingField, string>>>({});

  useEffect(() => {
    if (!isModalOpen) return;
    document.getElementById("booking-name")?.focus({ preventScroll: true });
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  const bridalSarees = PRODUCTS.filter((p) => p.category === "Bridal" || p.price >= 7500);

  const updateBooking = (field: BookingField, value: string) => {
    setConsultationData((data) => ({ ...data, [field]: value }));
    setBookingErrors((errors) => ({ ...errors, [field]: undefined }));
  };

  const validateBooking = () => {
    const errors: Partial<Record<BookingField, string>> = {};
    if (!consultationData.name.trim()) errors.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(consultationData.email)) errors.email = "Please enter a valid email";
    if (consultationData.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid number";
    if (!consultationData.weddingDate) errors.weddingDate = "Please choose your wedding date";
    return errors;
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateBooking();
    setBookingErrors(errors);
    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      document.getElementById(`booking-${firstInvalid}`)?.focus();
      return;
    }
    setBookingSubmitted(true);
    toast.success("Consultation Booked!", {
      description: "Our bridal concierge will reach out on WhatsApp/Email."
    });
  };

  // Keep the thank-you message on screen until the modal has finished closing
  const closeConfirmation = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setBookingSubmitted(false);
      setConsultationData(EMPTY_BOOKING);
    }, 300);
  };

  const scrollToTrousseau = (e: React.MouseEvent) => {
    e.preventDefault();
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("trousseau")?.scrollIntoView({ behavior: calm ? "auto" : "smooth" });
  };

  return (
    <main className="flex-1">
      {/* Bridal Grand Hero */}
      <section className="relative h-[85vh] min-h-[580px] flex items-center justify-center overflow-hidden">
        <div
          className="hero-zoom absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bridal-4.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/50" />

        <div className="relative text-center text-white px-4 z-10 max-w-4xl">
          <span className="hero-eyebrow text-amber-300 text-xs md:text-sm tracking-[0.4em] uppercase font-bold block mb-4 drop-shadow-md">
            The Bespoke Haute Couture
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            <span className="hero-line-mask">
              <span className="hero-line" style={stagger(350)}>
                The Bridal
              </span>
            </span>
            <span className="hero-line-mask">
              <span className="hero-line italic font-light text-amber-300" style={stagger(520)}>
                Odyssey
              </span>
            </span>
          </h1>
          <p style={stagger(800)} className="reveal-up text-sm md:text-lg tracking-[0.25em] uppercase font-medium text-amber-100/90 border-y border-amber-300/40 py-4 inline-block mb-8 drop-shadow-md">
            Sacred Heirlooms for a Lifetime
          </p>
          <div style={stagger(980)} className="reveal-up flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hero-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent hover:bg-white text-primary text-xs uppercase tracking-[0.2em] font-bold border border-accent hover:border-white shadow-lg transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" /> Book Virtual Drape Session
            </button>
            <a
              href="#trousseau"
              onClick={scrollToTrousseau}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white text-xs uppercase tracking-[0.2em] font-bold border border-white/70 hover:border-white backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Trousseau
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-bold block mb-3">
              Royal Trousseau
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Blessed in Pure Zari, Woven for Eternity
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg italic mb-10 max-w-2xl mx-auto">
              &ldquo;A Resham Craft bridal saree is not merely an ensemble. It is an auspicious blessing woven with 24K dipped gold zari, a generational story, and an everlasting celebration of sacred love.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="draw-line w-24 h-0.5 bg-accent/40 mx-auto" />
          </Reveal>
        </div>
      </section>

      {/* Featured Bridal Trousseau Catalog */}
      <section id="trousseau" className="scroll-mt-32 py-20 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <Reveal>
                <span className="text-accent text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                  Handpicked Silks
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-serif text-primary">
                  Curated Bridal Heirlooms
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Link
                href="/collections"
                className="group text-xs uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors flex items-center gap-1"
              >
                View Full Collection <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {bridalSarees.map((saree, index) => (
              <Reveal key={saree.id} delay={(index % 3) * 100}>
                <div
                  className="group h-full bg-card border border-border/50 p-4 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl flex flex-col"
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
                      className="absolute bottom-4 left-4 right-4 py-3 bg-white/95 text-primary text-xs uppercase tracking-widest font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 ease-out flex items-center justify-center gap-2 hover:bg-primary hover:text-white"
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
                      <span className="price-text text-lg font-semibold text-primary">
                        ₹ {saree.price.toLocaleString("en-IN")}
                      </span>
                      <Link
                        href={`/collections/${saree.id}`}
                        className="group/link text-xs uppercase tracking-wider font-bold text-accent hover:text-primary transition-colors"
                      >
                        Drape Details <ArrowRight className="inline-block w-3.5 h-3.5 ml-1 -mt-0.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The 3-Step Bespoke Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="label-eyebrow block mb-2">
                The Bespoke Experience
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-serif text-primary">
                Crafting Your Custom Drape
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BESPOKE_STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 150}>
                <div className="group h-full p-8 border border-border/40 bg-card text-center flex flex-col items-center transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-accent/40">
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary text-accent rounded-full flex items-center justify-center mb-6 font-serif text-xl font-bold transition-colors duration-300">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-lg text-primary mb-3 font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Booking Modal */}
      <div
        inert={!isModalOpen}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4 transition-[visibility] duration-0",
          isModalOpen ? "visible" : "invisible delay-300"
        )}
      >
        <div
          onClick={() => setIsModalOpen(false)}
          className={cn(
            "fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            isModalOpen ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          className={cn(
            "relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-card border-t-2 border-t-accent border-x border-b border-border p-6 sm:p-8 shadow-2xl z-10 transition duration-300 ease-out",
            isModalOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-3"
          )}
        >
          {bookingSubmitted ? (
            <div className="tick-in text-center py-6">
              <CheckCircle2 className="pop-in w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-primary mb-2">Appointment Reserved</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Thank you, {consultationData.name}. Our senior bridal curator will connect on WhatsApp with calendar invites and fabric swatch catalogs.
              </p>
              <button
                onClick={closeConfirmation}
                className="px-8 py-3 bg-primary text-white text-xs uppercase tracking-widest font-bold transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-start mb-5 pb-4 border-b border-border">
                <div>
                  <span className="label-eyebrow block mb-1">Bridal Concierge</span>
                  <h3 className="font-serif text-2xl text-primary">Virtual Drape Session</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Reserve a private 45-minute video appointment
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close booking form"
                  className="p-1 text-muted-foreground hover:text-primary transition duration-300 ease-out hover:rotate-90"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleBooking} noValidate className="space-y-3.5">
                <TextField
                  id="booking-name"
                  label="Full Name"
                  icon={User}
                  autoComplete="name"
                  value={consultationData.name}
                  error={bookingErrors.name}
                  onChange={(e) => updateBooking("name", e.target.value)}
                  placeholder="Pooja Mehta"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <TextField
                    id="booking-email"
                    label="Email Address"
                    icon={Mail}
                    type="email"
                    autoComplete="email"
                    value={consultationData.email}
                    error={bookingErrors.email}
                    onChange={(e) => updateBooking("email", e.target.value)}
                    placeholder="pooja@example.com"
                  />
                  <TextField
                    id="booking-phone"
                    label="WhatsApp Number"
                    icon={Phone}
                    type="tel"
                    autoComplete="tel"
                    value={consultationData.phone}
                    error={bookingErrors.phone}
                    onChange={(e) => updateBooking("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <DateField
                    id="booking-weddingDate"
                    label="Wedding Date"
                    value={consultationData.weddingDate}
                    error={bookingErrors.weddingDate}
                    onChange={(value) => updateBooking("weddingDate", value)}
                  />
                  <SelectField
                    id="booking-preferredTime"
                    label="Preferred Slot"
                    icon={Clock}
                    value={consultationData.preferredTime}
                    options={TIME_SLOTS}
                    onChange={(value) => updateBooking("preferredTime", value)}
                  />
                </div>

                <TextAreaField
                  id="booking-notes"
                  label="Special Weave Preferences"
                  optional
                  rows={2}
                  value={consultationData.notes}
                  onChange={(e) => updateBooking("notes", e.target.value)}
                  placeholder="Red Banarasi kadhwa, temple border Kanjeevaram, etc."
                />

                <button
                  type="submit"
                  className="group hero-sheen w-full h-12 bg-primary text-white text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/95 transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 shadow-md flex items-center justify-center gap-2"
                >
                  Confirm Consultation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
