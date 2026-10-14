import Link from "next/link";
import Image from "next/image";

export default function Collections() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-eyebrow block mb-3">
            Curated Expressions
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            Discover Our Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bridal Card */}
          <Link
            href="/bridal"
            className="group relative h-[480px] overflow-hidden bg-muted flex flex-col justify-end p-6 border border-border/40 shadow-sm hover:shadow-xl transition-all"
          >
            <Image
              src="/images/bridal-1.png"
              alt="The Bridal Edit"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="label-tag text-accent block mb-2">
                Ceremonial Elegance
              </span>
              <h3 className="text-2xl font-serif mb-2">The Bridal Edit</h3>
              <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-4">
                Grand heirlooms woven with pure zari for eternal auspicious beginnings.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent font-bold group-hover:underline">
                Explore Bridal →
              </span>
            </div>
          </Link>

          {/* Kanjeevaram Card */}
          <Link
            href="/collections?category=Kanjeevaram"
            className="group relative h-[480px] overflow-hidden bg-muted flex flex-col justify-end p-6 border border-border/40 shadow-sm hover:shadow-xl transition-all"
          >
            <Image
              src="/images/kanjeevaram-1.png"
              alt="Pure Kanjeevaram Silk"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="label-tag text-accent block mb-2">
                South Silk Legacy
              </span>
              <h3 className="text-2xl font-serif mb-2">Kanjeevaram</h3>
              <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-4">
                Rich contrast temple korvai borders and heavy pure gold zari pallus.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent font-bold group-hover:underline">
                View Kanjeevarams →
              </span>
            </div>
          </Link>

          {/* Royal Banarasi Card */}
          <Link
            href="/collections?category=Banarasi"
            className="group relative h-[480px] overflow-hidden bg-muted flex flex-col justify-end p-6 border border-border/40 shadow-sm hover:shadow-xl transition-all"
          >
            <Image
              src="/images/banarasi-1.jpg"
              alt="Royal Banarasi"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="label-tag text-accent block mb-2">
                Varanasi Heritage
              </span>
              <h3 className="text-2xl font-serif mb-2">Royal Banarasi</h3>
              <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-4">
                Finest floral jaals and intricate kadhwa weaves celebrating royal heritage.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent font-bold group-hover:underline">
                View Banarasi →
              </span>
            </div>
          </Link>

          {/* Yeola Paithani Card */}
          <Link
            href="/collections?category=Paithani"
            className="group relative h-[480px] overflow-hidden bg-muted flex flex-col justify-end p-6 border border-border/40 shadow-sm hover:shadow-xl transition-all"
          >
            <Image
              src="/images/paithani-1.jpg"
              alt="Yeola Paithani Silk"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="label-tag text-accent block mb-2">
                Maharashtra Pride
              </span>
              <h3 className="text-2xl font-serif mb-2">Yeola Paithani</h3>
              <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-4">
                Iconic Mor-Popat tapestry pallus and pure gold Swarna pankh borders.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent font-bold group-hover:underline">
                View Paithani →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
