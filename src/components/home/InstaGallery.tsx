import Image from "next/image";

const GALLERY_IMAGES = [
  "/images/banarasi-1.jpg",
  "/images/kanjeevaram-1.png",
  "/images/bridal-1.png",
  "/images/banarasi-2.jpg",
  "/images/kanjeevaram-2.jpg",
  "/images/bridal-4.png"
];

export default function InstaGallery() {
  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-4 text-center mb-12">
        <span className="label-eyebrow block mb-3">
          Follow The Journey
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-3">
          @ReshamCraft
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
          Tag #ReshamCraft on Instagram to be featured in our royal gallery
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className="group relative aspect-square overflow-hidden bg-muted cursor-pointer"
          >
            <Image
              src={img}
              alt={`Resham Craft Gallery ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white w-7 h-7 drop-shadow-md"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
