"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/images/reshamcraft_nobg_1768746306662.png"
                alt="Resham Craft Logo"
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex flex-col items-start leading-none">
                <span className="font-serif text-lg tracking-[0.2em] font-bold uppercase">
                  Resham
                </span>
                <span className="text-xs tracking-[0.3em] text-accent uppercase mt-0.5 font-semibold">
                  Craft
                </span>
              </div>
            </Link>
            <p className="text-white/75 text-sm leading-relaxed">
              Resham Craft brings you the finest handwoven sarees from the heart of India. A tribute to heritage, crafted for the modern woman.
            </p>
          </div>

          {/* Shop Col */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Shop</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/new-arrivals" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  Banarasi
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  Kanjeevaram
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  Chanderi
                </Link>
              </li>
              <li>
                <Link href="/bridal" className="hover:text-white transition-colors">
                  Bridal Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Company</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story (About)
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="hover:text-white transition-colors">
                  Artisans &amp; Weavers
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Client Portal / Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Newsletter</h4>
            <p className="text-white/75 text-sm mb-4 leading-relaxed">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex border-b border-white/30 pb-2">
              <input
                placeholder="Your email address"
                className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/50 flex-1"
                type="email"
                required
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest text-accent hover:text-white transition-colors font-semibold"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/55 font-normal">
          <p>© 2026 Resham Craft. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Shipping &amp; Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
