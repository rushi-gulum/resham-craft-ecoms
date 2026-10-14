"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalCount, setIsDrawerOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-colors">
      {/* Top micro-announcement bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-xs uppercase tracking-[0.2em] font-medium border-b border-white/10 px-4">
        <span>Complimentary Insured Shipping Across India • 100% Certified Pure Silk</span>
      </div>

      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md hover:text-accent transition-colors text-primary"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop left nav links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/collections"
            className="text-xs uppercase tracking-[0.15em] font-semibold hover:text-accent transition-colors text-primary"
          >
            Collections
          </Link>
          <Link
            href="/new-arrivals"
            className="text-xs uppercase tracking-[0.15em] font-semibold hover:text-accent transition-colors text-primary"
          >
            New Arrivals
          </Link>
          <Link
            href="/bridal"
            className="text-xs uppercase tracking-[0.15em] font-semibold hover:text-accent transition-colors text-primary"
          >
            Bridal
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="flex items-center gap-3 group">
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
        <div className="flex items-center gap-4 md:gap-7 justify-end">
          <div className="hidden md:flex items-center gap-7">
            <Link
              href="/about"
              className="text-xs uppercase tracking-[0.15em] font-semibold hover:text-accent transition-colors text-primary"
            >
              Our Story
            </Link>
            <Link
              href="/heritage"
              className="text-xs uppercase tracking-[0.15em] font-semibold hover:text-accent transition-colors text-primary"
            >
              Heritage
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-3 pl-4 border-l border-border/50">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-md hover:text-accent transition-colors text-primary cursor-pointer"
              aria-label="Search collection"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/login"
              className="p-2 rounded-md hover:text-accent transition-colors text-primary hidden md:inline-flex"
              aria-label="Account Login"
              title="Sign In / Profile"
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 rounded-md hover:text-accent transition-colors text-primary relative inline-flex items-center cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold h-4.5 w-4.5 rounded-full flex items-center justify-center leading-none shadow-sm min-w-[18px] min-h-[18px] text-xs">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Instant Search Bar Dropdown */}
      {searchOpen && (
        <div className="border-t border-border bg-background px-4 py-4 shadow-md animate-in fade-in slide-in-from-top-2">
          <div className="container mx-auto max-w-2xl flex items-center gap-3">
            <Search className="w-4 h-4 text-accent shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Banarasi, Kanjeevaram, Paithani, Bridal silk..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-primary placeholder:text-muted-foreground"
              autoFocus
            />
            <Link
              href="/collections"
              onClick={() => setSearchOpen(false)}
              className="text-xs uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors"
            >
              Browse All
            </Link>
            <button
              onClick={() => setSearchOpen(false)}
              className="p-1 text-muted-foreground hover:text-primary"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-6 py-6 space-y-4 shadow-lg animate-in fade-in">
          <Link
            href="/collections"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase py-2 hover:text-accent border-b border-border/30"
          >
            Collections
          </Link>
          <Link
            href="/new-arrivals"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase py-2 hover:text-accent border-b border-border/30"
          >
            New Arrivals
          </Link>
          <Link
            href="/bridal"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase py-2 hover:text-accent border-b border-border/30"
          >
            Bridal
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase py-2 hover:text-accent border-b border-border/30"
          >
            Our Story (About)
          </Link>
          <Link
            href="/heritage"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase py-2 hover:text-accent border-b border-border/30"
          >
            Heritage
          </Link>
          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase py-2 hover:text-accent"
          >
            Sign In / Profile
          </Link>
        </div>
      )}
    </header>
  );
}
