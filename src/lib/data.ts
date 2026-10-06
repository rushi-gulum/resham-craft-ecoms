export interface Product {
  id: string;
  name: string;
  category: "Banarasi" | "Kanjeevaram" | "Bridal" | "Chanderi" | "Silk";
  price: number;
  originalPrice?: number;
  image: string;
  secondaryImages?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  fabric: string;
  zariType: string;
  color: string;
  origin: string;
  blousePiece: string;
  careInstructions: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "royal-peacock-silk",
    name: "Royal Peacock Silk",
    category: "Kanjeevaram",
    price: 24999,
    originalPrice: 29999,
    image: "/images/peacock_teal_saree_product.png",
    secondaryImages: [
      "/images/peacock_teal_saree_product.png",
      "/images/handloom_weaving_craft.png",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "100% Pure Mulberry Silk (Kanchipuram Silk Mark Certified)",
    zariType: "Pure Gold Dipped Tested Zari",
    color: "Peacock Teal & Antique Gold",
    origin: "Kanchipuram, Tamil Nadu",
    blousePiece: "Included (Matching unstitched contrast silk blouse, 80cm)",
    careInstructions: "Dry clean only. Store in a breathable muslin or cotton cloth away from moisture.",
    description: "Intricately handwoven pure silk saree adorned with majestic royal peacock (Mayil) motifs and shimmering golden zari korvai borders. Designed for sacred nuptials and grand festive gatherings."
  },
  {
    id: "midnight-violet-banarasi",
    name: "Midnight Violet Banarasi",
    category: "Banarasi",
    price: 18500,
    originalPrice: 22000,
    image: "/images/violet_banarasi_saree_product.png",
    secondaryImages: [
      "/images/violet_banarasi_saree_product.png",
      "/images/heritage_weaving_close-up.png",
      "/images/modern_silk_saree_drape.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "Pure Katan Silk",
    zariType: "Antique Antique-Gold Roopa Kalabattu Zari",
    color: "Midnight Deep Violet with Champagne Gold Zari",
    origin: "Varanasi, Uttar Pradesh",
    blousePiece: "Included (Matching running tone with zari border, 85cm)",
    careInstructions: "Professional dry clean only. Wrap gently in pure cotton fabric.",
    description: "Opulent midnight violet saree featuring hand-woven zari jaal and timeless floral bootas inspired by Mughal garden architecture."
  },
  {
    id: "blush-rose-banarasi",
    name: "Blush Rose Banarasi",
    category: "Banarasi",
    price: 21999,
    originalPrice: 25500,
    image: "/images/pink_banarasi_saree_product.png",
    secondaryImages: [
      "/images/pink_banarasi_saree_product.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: false,
    isNew: true,
    fabric: "Soft Katan Organza Silk",
    zariType: "Ganga Jamuna (Gold & Silver dual zari)",
    color: "Blush Rose Pink",
    origin: "Varanasi, Uttar Pradesh",
    blousePiece: "Included (Unstitched heavy zari brocade, 80cm)",
    careInstructions: "Strictly dry clean only. Iron on reverse low heat.",
    description: "Graceful blush rose hue highlighted by delicate floral silver and gold zari kadhwa work. Perfect for reception evenings and celebratory soirees."
  },
  {
    id: "emerald-gold-heritage",
    name: "Emerald Gold Heritage",
    category: "Kanjeevaram",
    price: 32500,
    originalPrice: 38000,
    image: "/images/green_kanjeevaram_saree_product.png",
    secondaryImages: [
      "/images/green_kanjeevaram_saree_product.png",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: false,
    isNew: false,
    fabric: "Heavy Korvai Pure Kanchipuram Silk",
    zariType: "Authentic Pure Gold Dipped Zari",
    color: "Royal Emerald Green & Crimson Red Border",
    origin: "Kanchipuram, Tamil Nadu",
    blousePiece: "Included (Crimson red contrast silk with grand armlet zari, 90cm)",
    careInstructions: "Preserve in muslin cloth. Air dry in shade twice a year.",
    description: "Traditional emerald green Kanjeevaram saree crafted with authentic pure gold dipped zari thread. Boasts the classical temple shikhar border."
  },
  {
    id: "ivory-gold-classic",
    name: "Ivory Gold Classic",
    category: "Bridal",
    price: 28999,
    originalPrice: 34000,
    image: "/images/photo-1617627143750-d86bc21e42bb.jpg",
    secondaryImages: [
      "/images/photo-1617627143750-d86bc21e42bb.jpg",
      "/images/modern_silk_saree_drape.png"
    ],
    isBestseller: true,
    isNew: false,
    fabric: "Raw Tussar Silk with Mulberry Finish",
    zariType: "Matte Antique Champagne Zari",
    color: "Pristine Ivory Cream & Gilded Gold",
    origin: "Chanderi / Varanasi Collaboration",
    blousePiece: "Included (Matching ivory tissue brocade, 85cm)",
    careInstructions: "Specialist dry cleaning recommended.",
    description: "Ethereal ivory saree accented with grand temple zari borders and subtle gold shimmer, revered by royal brides for day rituals."
  },
  {
    id: "crimson-bridal-special",
    name: "Crimson Bridal Special",
    category: "Bridal",
    price: 36000,
    originalPrice: 42500,
    image: "/images/modern_silk_saree_drape.png",
    secondaryImages: [
      "/images/modern_silk_saree_drape.png",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "Heavy Royal Bridal Silk",
    zariType: "Heavy 24K Electroplated Gold Thread",
    color: "Deep Kumkum Crimson Red",
    origin: "Varanasi Master Loom",
    blousePiece: "Included (Heavily embroidered matching bridal blouse fabric, 1m)",
    careInstructions: "Cherish as an heirloom. Dry clean only.",
    description: "Magnificent bridal drape showcasing pure mulberry silk and ornate heritage embroidery, honoring the eternal royal Indian wedding ceremony."
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
