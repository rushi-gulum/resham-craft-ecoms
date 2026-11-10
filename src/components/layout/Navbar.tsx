"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, Search, User, ShoppingBag } from "@/components/icons";
import { useCart } from "@/lib/cart-context";
import { cn, FREE_SHIPPING_ABOVE } from "@/lib/utils";

const LEFT_LINKS = [
  { href: "/collections", label: "Collections" },
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/bridal", label: "Bridal" },
];

const RIGHT_LINKS = [
  { href: "/about", label: "Our Story" },
  { href: "/heritage", label: "Heritage" },
];

const MOBILE_LINKS = [
  ...LEFT_LINKS,
  { href: "/about", label: "Our Story (About)" },
  { href: "/heritage", label: "Heritage" },
  { href: "/login", label: "Sign In / Profile" },
];

const ICON_BUTTON =
  "p-2 rounded-md text-primary hover:text-accent transition duration-200 ease-out hover:-translate-y-0.5 active:scale-95";

function DesktopLink({ href, label, delay }: { href: string; label: string; delay: number }) {
  return (
    <Link
      href={href}
      style={{ "--nav-delay": `${delay}ms` } as React.CSSProperties}
      className="nav-enter nav-underline whitespace-nowrap text-xs uppercase tracking-[0.15em] font-semibold hover:text-accent transition-colors text-primary"
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { totalCount, setIsDrawerOpen } = useCart();

  // Lift the header off the page once the visitor starts scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus({ preventScroll: true });
  }, [searchOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-shadow duration-300",
        scrolled && "shadow-[0_6px_24px_-12px_rgba(92,11,27,0.35)]"
      )}
    >
      {/* Top micro-announcement bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-xs uppercase tracking-[0.2em] font-medium border-b border-white/10 px-4">
        <span>Free Insured Shipping Above ₹ {FREE_SHIPPING_ABOVE.toLocaleString("en-IN")} • 100% Certified Pure Silk</span>
      </div>

      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile menu button: the three bars fold into a cross */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-md text-primary hover:text-accent transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={cn(
                "absolute h-[1.75px] w-5 rounded-full bg-current transition-transform duration-300 ease-out",
                mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "absolute h-[1.75px] w-5 rounded-full bg-current transition duration-200",
                mobileMenuOpen ? "scale-x-0 opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute h-[1.75px] w-5 rounded-full bg-current transition-transform duration-300 ease-out",
                mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
              )}
            />
          </button>
        </div>

        {/* Desktop left nav links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {LEFT_LINKS.map((link, index) => (
            <DesktopLink key={link.href} {...link} delay={index * 60} />
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center px-3">
          <Link href="/" className="nav-enter flex items-center gap-3 group">
            <Image
              src="/images/reshamcraft_nobg_1768746306662.png"
              alt="Resham Craft Logo"
              width={52}
              height={52}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="flex flex-col items-start leading-none">
              <span className="font-serif text-xl md:text-2xl tracking-[0.2em] text-primary font-bold uppercase">
                Resham
              </span>
              <span className="text-xs tracking-[0.3em] text-accent uppercase mt-0.5 font-semibold">
                Craft
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop right nav links + action icons */}
        <div className="flex items-center gap-4 lg:gap-5 xl:gap-7 justify-end">
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {RIGHT_LINKS.map((link, index) => (
              <DesktopLink key={link.href} {...link} delay={180 + index * 60} />
            ))}
          </div>

          <div
            style={{ "--nav-delay": "300ms" } as React.CSSProperties}
            className="nav-enter flex items-center gap-2 md:gap-3 pl-4 border-l border-border/50"
          >
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className={ICON_BUTTON}
              aria-label="Search collection"
              aria-expanded={searchOpen}
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/login"
              className={cn(ICON_BUTTON, "hidden md:inline-flex")}
              aria-label="Account Login"
              title="Sign In / Profile"
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className={cn(ICON_BUTTON, "relative inline-flex items-center")}
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalCount > 0 && (
                // The key restarts the pop each time the count changes
                <span
                  key={totalCount}
                  className="nav-badge-pop absolute -top-1 -right-1 bg-accent text-accent-foreground font-bold rounded-full flex items-center justify-center leading-none shadow-sm min-w-[18px] min-h-[18px] text-xs"
                >
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Instant Search Bar Dropdown */}
      <div
        inert={!searchOpen}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          searchOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border bg-background px-4 py-4 shadow-md">
            <div className="container mx-auto max-w-2xl flex items-center gap-3">
              <Search className="w-4 h-4 text-accent shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Banarasi, Kanjeevaram, Paithani, Bridal silk..."
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-sm text-primary placeholder:text-muted-foreground"
              />
              <Link
                href="/collections"
                onClick={() => setSearchOpen(false)}
                className="whitespace-nowrap text-xs uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors"
              >
                Browse All
              </Link>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="p-1 text-muted-foreground hover:text-primary transition duration-200 hover:rotate-90"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer: slides open, links follow one after another */}
      <div
        inert={!mobileMenuOpen}
        className={cn(
          "lg:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-b border-border bg-background px-6 py-6 space-y-4 shadow-lg">
            {MOBILE_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 40}ms` : "0ms" }}
                className={cn(
                  "block text-sm font-semibold tracking-wider uppercase py-2 hover:text-accent transition duration-300 ease-out",
                  index < MOBILE_LINKS.length - 1 && "border-b border-border/30",
                  mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
