import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, Users, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Resham Craft",
  description: "Learn about Resham Craft's mission to preserve the heritage art of Indian handloom weaving.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Banner */}
      <section className="relative py-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/handloom_weaving_craft.png"
            alt="Handloom Weaving"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold block mb-4">
            Our Story & Heritage
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Weaving Generations of Grace
          </h1>
          <p className="text-primary-foreground/80 font-light text-base md:text-lg leading-relaxed">
            Resham Craft was established with a singular vision: to safeguard India&apos;s centuries-old handloom tapestry, empowering artisanal lineages while dressing the world in genuine royal elegance.
          </p>
        </div>
      </section>

      {/* The Brand Philosophy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] bg-muted shadow-2xl">
              <Image
                src="/images/heritage_weaving_close-up.png"
                alt="Close-up of golden zari weave"
                fill
                className="object-cover"
              />
              <div className="absolute -inset-4 border border-accent/30 -z-10 hidden sm:block" />
            </div>

            <div className="space-y-6">
              <span className="label-eyebrow block">
                The Philosophy
              </span>
              <h2 className="text-4xl font-serif text-primary leading-tight">
                Slow Luxury Born from Sacred Looms
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                In an era dominated by rapid power looms and synthetic substitutes, Resham Craft champions the sanctity of the pit-loom. Each saree takes anywhere between 18 days to 4 months of relentless artisanal dedication.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                From testing each thread of mulberry silk to hand-drawing the naksha cards for intricate pallus, our weavers breathe prayer and poetry into every motif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Brand Pillars */}
      <section className="py-20 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-eyebrow block mb-2">
              Our Commitments
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              Why Royalty Chooses Resham Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-card p-8 border border-border/40 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2 font-semibold">Pure Silk Mark</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                100% certified authentic Indian silk verified by government standard bodies.
              </p>
            </div>

            <div className="bg-card p-8 border border-border/40 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-accent">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2 font-semibold">Tested Pure Zari</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Genuine electroplated silver and gold zari threads that preserve luminescence for generations.
              </p>
            </div>

            <div className="bg-card p-8 border border-border/40 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-accent">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2 font-semibold">Artisan Welfare</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Direct trade ensuring fair remuneration, healthcare, and educational grants for weaver families.
              </p>
            </div>

            <div className="bg-card p-8 border border-border/40 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-accent">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2 font-semibold">Heirloom Guarantee</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Timeless designs crafted to be passed down as treasured memories from mother to daughter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-serif text-primary mb-6">
            Begin Your Heritage Journey
          </h2>
          <p className="text-muted-foreground font-light mb-10">
            Immerse yourself in our latest drapes or book an exclusive session with our master drape stylists.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/collections"
              className="px-8 py-4 bg-primary text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary/90 flex items-center gap-2"
            >
              Explore Masterpieces <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/bridal"
              className="px-8 py-4 border border-primary text-primary text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-white transition-colors"
            >
              The Bridal Edit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
