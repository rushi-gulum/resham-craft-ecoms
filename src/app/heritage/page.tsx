import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Scroll, Landmark, ShieldCheck, Compass, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Heritage - Resham Craft",
  description: "Preserving the Ancient Art of Slow Luxury. Discover the master weavers and royal looms of Varanasi and Kanchipuram.",
};

export default function HeritagePage() {
  return (
    <main className="flex-1">
      {/* Hero Header */}
      <section className="relative py-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/handloom_weaving_craft.png"
            alt="Handloom pit loom Varanasi"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-bold block mb-4">
            The Living Antiquity
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Preserving the Art of <br />
            <span className="italic font-light text-accent">Slow Luxury</span>
          </h1>
          <p className="text-primary-foreground/80 font-light text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            In the heart of holy Varanasi and temple-town Kanchipuram, our generational weavers keep centuries of royal heritage alive thread by thread.
          </p>
        </div>
      </section>

      {/* Origin Story Details */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="label-eyebrow block">
                The Sacred Looms
              </span>
              <h2 className="text-4xl font-serif text-primary leading-tight">
                Where Thread Becomes Scripture
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Resham Craft was born from an enduring devotion: to safeguard India&apos;s classical handloom weaving from the homogenizing speed of industrial automation.
                </p>
                <p>
                  A authentic Banarasi kadhwa or Kanchipuram korvai saree is never merely woven; it is composed. The rhythmic cadence of the foot-pedal, the whisper of the shuttle, and the precise placement of each gold zari motif echo temple rituals refined over a thousand years.
                </p>
                <p>
                  Each piece demands hundreds of hours of focused discipline. No shortcuts, no compromises—only unhurried master craftsmanship.
                </p>
              </div>
            </div>

            <div className="relative aspect-square bg-muted shadow-2xl">
              <Image
                src="/images/heritage_weaving_close-up.png"
                alt="Close-up of golden zari weave"
                fill
                className="object-cover"
              />
              <div className="absolute -inset-4 border border-accent/25 -z-10 hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Milestones of Craftsmanship */}
      <section className="py-20 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-eyebrow block mb-2">
              The Artisan Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              The Anatomy of a Resham Saree
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-card p-8 border border-border/40 flex flex-col items-start">
              <div className="w-10 h-10 bg-primary/10 text-accent rounded-full flex items-center justify-center mb-6">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2 font-semibold">1. The Naksha</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Master artists sketch intricate motifs onto graph paper, drafting punch cards that dictate every singular thread intersection.
              </p>
            </div>

            <div className="bg-card p-8 border border-border/40 flex flex-col items-start">
              <div className="w-10 h-10 bg-primary/10 text-accent rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2 font-semibold">2. Pure Zari Testing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Silk threads are wound with genuine silver and electroplated with pure 24K gold foil, ensuring eternal gleam and softness.
              </p>
            </div>

            <div className="bg-card p-8 border border-border/40 flex flex-col items-start">
              <div className="w-10 h-10 bg-primary/10 text-accent rounded-full flex items-center justify-center mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2 font-semibold">3. The Loom Rhythm</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Two artisans work in synchronized symphony on the pit loom, weaving row by row at an average pace of just 3 to 4 inches per day.
              </p>
            </div>

            <div className="bg-card p-8 border border-border/40 flex flex-col items-start">
              <div className="w-10 h-10 bg-primary/10 text-accent rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2 font-semibold">4. Silk Mark Seal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every finished drape undergoes rigorous weight and warp/weft checks before receiving the certified Silk Mark hologram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Artisan Support */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block mb-3">
            Fair Trade & Preservation
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
            Dignity for Generations of Weavers
          </h2>
          <p className="text-muted-foreground font-light text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            By procuring directly from weaver households without middlemen, Resham Craft ensures 100% transparent pricing and direct reinvestment into traditional weaving clusters.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-10 py-4.5 bg-primary text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary/95 transition-all shadow-lg"
          >
            Explore Their Creations <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>
      </section>
    </main>
  );
}
