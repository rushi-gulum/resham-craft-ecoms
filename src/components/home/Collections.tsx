import Link from "next/link";
import Image from "next/image";

export default function Collections() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-eyebrow block mb-3">
            Curated Expressions
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            Discover Our Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bridal Card */}
          <Link
            href="/bridal"
            className="group relative h-[480px] overflow-hidden bg-muted flex flex-col justify-end p-8"
          >
            <Image
              src="/images/violet_banarasi_saree_product.png"
              alt="The Bridal Edit"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="label-tag text-accent block mb-2">
                Ceremonial Elegance
              </span>
              <h3 className="text-3xl font-serif mb-2">The Bridal Edit</h3>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-4">
                Grand heirlooms woven with pure zari for eternal auspicious beginnings.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent font-bold group-hover:underline">
                Explore Bridal →
              </span>
            </div>
          </Link>

          {/* Pure Silk Card */}
          <Link
            href="/collections"
            className="group relative h-[480px] overflow-hidden bg-muted flex flex-col justify-end p-8"
          >
            <Image
              src="/images/peacock_teal_saree_product.png"
              alt="Pure Silk Sarees"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="label-tag text-accent block mb-2">
                Handcrafted South Silk
              </span>
              <h3 className="text-3xl font-serif mb-2">Pure Silk</h3>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-4">
                Rich contrast temple borders and heavy pallus from authentic looms.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent font-bold group-hover:underline">
                View Kanjeevarams →
              </span>
            </div>
          </Link>

          {/* Royal Banarasi Card */}
          <Link
            href="/collections"
            className="group relative h-[480px] overflow-hidden bg-muted flex flex-col justify-end p-8"
          >
            <Image
              src="/images/pink_banarasi_saree_product.png"
              alt="Royal Banarasi"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="label-tag text-accent block mb-2">
                Varanasi Legacy
              </span>
              <h3 className="text-3xl font-serif mb-2">Royal Banarasi</h3>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-4">
                Finest floral jaals and intricate kadhwa weaves celebrating royal heritage.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent font-bold group-hover:underline">
                View Banarasi →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
