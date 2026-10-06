import Link from "next/link";
import Image from "next/image";

export default function HeritageStory() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
            <Image
              src="/images/handloom_weaving_craft.png"
              alt="Artisan weaving handloom saree"
              fill
              className="object-cover"
            />
            <div className="absolute -inset-4 border border-accent/20 -z-10 hidden sm:block" />
          </div>

          <div className="lg:pl-8">
            <span className="label-eyebrow block mb-4">
              The Living Loom
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              A Legacy Woven <br />
              in <span className="italic text-accent">Pure Gold</span>
            </h2>
            <div className="space-y-5 mb-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                Every Resham Craft creation passes through the patient hands of master weavers whose lineages have preserved these sacred techniques across dynasties.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                From testing each spool of mulberry silk to the intricate drafting of traditional nakshas, we honor the deliberate beauty of slow luxury.
              </p>
            </div>
            <Link
              href="/heritage"
              className="inline-block px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all text-xs uppercase tracking-[0.2em] font-bold"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
