import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

const COLLECTIONS = [
  {
    href: "/bridal",
    image: "/images/bridal-1.png",
    alt: "The Bridal Edit",
    tag: "Ceremonial Elegance",
    title: "The Bridal Edit",
    description: "Grand heirlooms woven with pure zari for eternal auspicious beginnings.",
    cta: "Explore Bridal",
  },
  {
    href: "/collections?category=Kanjeevaram",
    image: "/images/kanjeevaram-1.png",
    alt: "Pure Kanjeevaram Silk",
    tag: "South Silk Legacy",
    title: "Kanjeevaram",
    description: "Rich contrast temple korvai borders and heavy pure gold zari pallus.",
    cta: "View Kanjeevarams",
  },
  {
    href: "/collections?category=Banarasi",
    image: "/images/banarasi-1.jpg",
    alt: "Royal Banarasi",
    tag: "Varanasi Heritage",
    title: "Royal Banarasi",
    description: "Finest floral jaals and intricate kadhwa weaves celebrating royal heritage.",
    cta: "View Banarasi",
  },
  {
    href: "/collections?category=Paithani",
    image: "/images/paithani-1.jpg",
    alt: "Yeola Paithani Silk",
    tag: "Maharashtra Pride",
    title: "Yeola Paithani",
    description: "Iconic Mor-Popat tapestry pallus and pure gold Swarna pankh borders.",
    cta: "View Paithani",
  },
];

export default function Collections() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="label-eyebrow block mb-3">
              Curated Expressions
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Discover Our Collections
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((item, index) => (
            <Reveal key={item.href} delay={index * 120}>
              <Link
                href={item.href}
                className="group relative h-[480px] overflow-hidden bg-muted flex flex-col justify-end p-6 border border-border/40 shadow-sm hover:shadow-xl transition duration-300 ease-out hover:-translate-y-1"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10 text-white">
                  <span className="label-tag text-accent block mb-2 font-bold">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-serif mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">{item.title}</h3>
                  <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">
                    {item.cta}
                    <ArrowRight className="inline-block w-3.5 h-3.5 ml-1.5 -mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
