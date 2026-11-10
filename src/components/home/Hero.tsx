import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/photo-1617627143750-d86bc21e42bb.jpg"
          alt="Luxury Indian Saree Background"
          fill
          priority
          className="hero-zoom object-cover object-center filter brightness-[0.65]"
        />
      </div>

      <div className="container mx-auto px-4 text-center text-white max-w-4xl z-10">
        <span className="hero-eyebrow text-accent text-xs md:text-sm tracking-[0.4em] uppercase font-semibold block mb-4">
          Timeless Indian Weaves
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1] text-white">
          <span className="hero-line-mask">
            <span className="hero-line" style={{ "--reveal-delay": "350ms" } as React.CSSProperties}>
              Weaving
            </span>
          </span>
          <span className="hero-line-mask">
            <span className="hero-line italic font-light" style={{ "--reveal-delay": "520ms" } as React.CSSProperties}>
              Royal Traditions
            </span>
          </span>
        </h1>
        <p
          style={{ "--reveal-delay": "800ms" } as React.CSSProperties}
          className="reveal-up text-white/80 font-light text-base md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Each fold is a celebration of centuries-old craftsmanship, woven by master artisans with pure gold zari.
        </p>
        <div
          style={{ "--reveal-delay": "980ms" } as React.CSSProperties}
          className="reveal-up flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/collections"
            className="hero-sheen w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white text-xs uppercase tracking-[0.2em] font-bold transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 border border-primary-foreground/20"
          >
            Explore Collections
          </Link>
          <Link
            href="/bridal"
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white text-xs uppercase tracking-[0.2em] font-bold transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 border border-white/40 hover:border-white/80"
          >
            Bridal Odyssey
          </Link>
        </div>
      </div>
    </section>
  );
}
