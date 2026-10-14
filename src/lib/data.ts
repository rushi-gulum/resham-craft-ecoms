export interface Product {
  id: string;
  name: string;
  category: "Banarasi" | "Kanjeevaram" | "Bridal";
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
  // ==========================================
  // BANARASI COLLECTION (5 Products)
  // ==========================================
  {
    id: "zeenat-royal-wine-banarasi",
    name: "Zeenat Royal Wine Katan Banarasi",
    category: "Banarasi",
    price: 24500,
    originalPrice: 28900,
    image: "/images/banarasi-1.jpg",
    secondaryImages: [
      "/images/banarasi-1.jpg",
      "/images/heritage_weaving_close-up.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "100% Pure Katan Silk (Silk Mark Certified)",
    zariType: "Antique Roopa Kalabattu Zari",
    color: "Royal Wine Burgundy with Gilded Gold Zari",
    origin: "Varanasi, Uttar Pradesh",
    blousePiece: "Included (Matching wine silk with heavy floral border, 85cm)",
    careInstructions: "Professional dry clean only. Wrap gently in pure cotton fabric.",
    description: "Regal wine burgundy pure katan silk woven with rich floral jaal, ornate foliage, and grand traditional borders inspired by Mughal royal heirlooms."
  },
  {
    id: "neelambari-midnight-navy-banarasi",
    name: "Neelambari Midnight Navy Banarasi",
    category: "Banarasi",
    price: 26900,
    originalPrice: 31500,
    image: "/images/banarasi-2.jpg",
    secondaryImages: [
      "/images/banarasi-2.jpg",
      "/images/handloom_weaving_craft.png",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: false,
    isNew: true,
    fabric: "Pure Katan Silk Warp & Weft",
    zariType: "24K Gold Dipped Kalabattu Zari",
    color: "Midnight Navy Blue with Shimmering Gold",
    origin: "Varanasi, Uttar Pradesh",
    blousePiece: "Included (Navy brocade blouse piece with intricate sleeve work, 90cm)",
    careInstructions: "Strictly dry clean only. Iron on reverse with low heat.",
    description: "Opulent midnight navy drape adorned with majestic antique gold paisley motifs and dense Shikargah-inspired floral borders."
  },
  {
    id: "begum-jamuni-katan-banarasi",
    name: "Begum Jamuni Katan Banarasi",
    category: "Banarasi",
    price: 22500,
    originalPrice: 26000,
    image: "/images/banarasi-3.jpg",
    secondaryImages: [
      "/images/banarasi-3.jpg",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: true,
    isNew: false,
    fabric: "Pure Handloom Katan Silk",
    zariType: "Refined Roopa Sona Dual Zari",
    color: "Imperial Aubergine Purple & Champagne Gold",
    origin: "Varanasi, Uttar Pradesh",
    blousePiece: "Included (Aubergine purple silk with brocade border, 85cm)",
    careInstructions: "Store folded in muslin cloth. Dry clean only.",
    description: "Deep imperial aubergine purple saree featuring intricate all-over floral vine jaal and a luminous ceremonial kadhwa pallu."
  },
  {
    id: "gul-e-bahaar-mauve-banarasi",
    name: "Gul-e-Bahaar Mauve Tissue Banarasi",
    category: "Banarasi",
    price: 28000,
    originalPrice: 33000,
    image: "/images/banarasi-4.png",
    secondaryImages: [
      "/images/banarasi-4.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: false,
    isNew: true,
    fabric: "Dual-tone Katan Tissue Silk",
    zariType: "Gilded Antique Gold & Rose Zari",
    color: "Mauve Lavender & Gilded Gold",
    origin: "Varanasi, Uttar Pradesh",
    blousePiece: "Included (Matching shimmering tissue blouse piece, 85cm)",
    careInstructions: "Professional dry clean only. Roll gently to preserve tissue sheen.",
    description: "Exquisite mauve and golden tissue silk featuring intricate royal medallion motifs and grand architectural border arches."
  },
  {
    id: "maragatham-forest-green-banarasi",
    name: "Maragatham Emerald Green Banarasi",
    category: "Banarasi",
    price: 21999,
    originalPrice: 25500,
    image: "/images/banarasi-5.png",
    secondaryImages: [
      "/images/banarasi-5.png",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: false,
    isNew: false,
    fabric: "High-twist Pure Katan Silk",
    zariType: "Pure Gold Dipped Kalabattu Zari",
    color: "Emerald Forest Green with Rani Pink Border",
    origin: "Varanasi, Uttar Pradesh",
    blousePiece: "Included (Contrast rani pink silk with gold zari border, 85cm)",
    careInstructions: "Dry clean only. Do not bleach or machine wash.",
    description: "Lush emerald green drape accented with delicate golden butas and a radiant contrast rani pink border."
  },

  // ==========================================
  // KANJEEVARAM COLLECTION (5 Products)
  // ==========================================
  {
    id: "mayil-rani-pink-kanjeevaram",
    name: "Mayil Rani Pink Korvai Kanjeevaram",
    category: "Kanjeevaram",
    price: 32000,
    originalPrice: 38000,
    image: "/images/kanjeevaram-1.png",
    secondaryImages: [
      "/images/kanjeevaram-1.png",
      "/images/heritage_weaving_close-up.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "100% Pure Mulberry Silk (Kanchipuram Silk Mark Certified)",
    zariType: "24K Gold Dipped Tested Zari",
    color: "Deep Rani Pink & Gilded Gold",
    origin: "Kanchipuram, Tamil Nadu",
    blousePiece: "Included (Matching deep rani silk with grand border, 85cm)",
    careInstructions: "Dry clean only. Store in a breathable muslin or cotton cloth away from moisture.",
    description: "Striking magenta rani pink pure silk woven with fine muthu kattam checks and grand temple peacock borders."
  },
  {
    id: "swarna-rajat-kumkum-kanjeevaram",
    name: "Swarna Rajat Silver & Kumkum Kanjeevaram",
    category: "Kanjeevaram",
    price: 34500,
    originalPrice: 40000,
    image: "/images/kanjeevaram-2.jpg",
    secondaryImages: [
      "/images/kanjeevaram-2.jpg",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: false,
    isNew: true,
    fabric: "Heavy 3-Ply Pure Mulberry Silk",
    zariType: "Authentic Gold & Copper Zari",
    color: "Lustrous Pearl Silver with Fiery Kumkum Orange Border",
    origin: "Kanchipuram, Tamil Nadu",
    blousePiece: "Included (Kumkum orange contrast silk with elephant zari sleeves, 90cm)",
    careInstructions: "Preserve in muslin cloth. Air dry in shade twice a year.",
    description: "Rare and magnificent pearl silver body paired with fiery orange korvai borders featuring sacred Yali and elephant motifs."
  },
  {
    id: "mukta-shweta-crimson-kanjeevaram",
    name: "Mukta Shweta Crimson Border Kanjeevaram",
    category: "Kanjeevaram",
    price: 29500,
    originalPrice: 35000,
    image: "/images/kanjeevaram-3.jpg",
    secondaryImages: [
      "/images/kanjeevaram-3.jpg",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: true,
    isNew: false,
    fabric: "High-density Pure Handloom Silk",
    zariType: "Pure Roopa Kalabattu Gold Zari",
    color: "Off-White Cream with Crimson Red Korvai Border",
    origin: "Kanchipuram, Tamil Nadu",
    blousePiece: "Included (Crimson red contrast brocade blouse, 85cm)",
    careInstructions: "Dry clean only. Fold along different lines periodically.",
    description: "Auspicious off-white cream silk with rich crimson red korvai temple borders and delicate golden butas, revered for sacred rituals."
  },
  {
    id: "ananya-ivory-rose-kanjeevaram",
    name: "Ananya Ivory & Rose Pink Kanjeevaram",
    category: "Kanjeevaram",
    price: 27500,
    originalPrice: 32000,
    image: "/images/kanjeevaram-4.png",
    secondaryImages: [
      "/images/kanjeevaram-4.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: false,
    isNew: true,
    fabric: "Pure Mulberry Silk",
    zariType: "Delicate Rose Gold & Champagne Zari",
    color: "Pristine Ivory White with Candy Pink Border",
    origin: "Kanchipuram, Tamil Nadu",
    blousePiece: "Included (Candy pink silk blouse piece with armlet border, 85cm)",
    careInstructions: "Dry clean only. Wrap in untreated cotton cloth.",
    description: "Serene ivory body framed by radiant rose pink zari borders, capturing the gentle morning warmth of festive poojas."
  },
  {
    id: "vaanam-sky-blue-kanjeevaram",
    name: "Vaanam Sky Blue Kattam Kanjeevaram",
    category: "Kanjeevaram",
    price: 31000,
    originalPrice: 36500,
    image: "/images/kanjeevaram-5.png",
    secondaryImages: [
      "/images/kanjeevaram-5.png",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: false,
    isNew: false,
    fabric: "Double-Warp Pure Kanchipuram Silk",
    zariType: "Antique Bronze-Gold Tested Zari",
    color: "Cerulean Sky Blue with Rich Bronze Border",
    origin: "Kanchipuram, Tamil Nadu",
    blousePiece: "Included (Sky blue check silk with matching zari border, 80cm)",
    careInstructions: "Dry clean only.",
    description: "Mesmerizing sky blue silk woven with fine golden check kattam patterns and broad antique temple zari borders."
  },

  // ==========================================
  // BRIDAL TROUSSEAU COLLECTION (5 Products)
  // ==========================================
  {
    id: "lavender-swarna-scallop-bridal",
    name: "Lavender Swarna Scallop Bridal Silk",
    category: "Bridal",
    price: 42000,
    originalPrice: 48500,
    image: "/images/bridal-1.png",
    secondaryImages: [
      "/images/bridal-1.png",
      "/images/heritage_weaving_close-up.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "Royal Tissue Bridal Silk (Silk Mark Certified)",
    zariType: "Heavy Electroplated Pure Gold & Silver Zari",
    color: "Shimmering Lilac Lavender & Champagne Gold",
    origin: "Varanasi Master Loom",
    blousePiece: "Included (Intricately embroidered matching bridal blouse fabric, 1m)",
    careInstructions: "Cherish as an heirloom. Dry clean only.",
    description: "Dreamy lilac lavender bridal drape crafted with breathtaking scallop cutwork borders and all-over radiant gold tissue weave."
  },
  {
    id: "haritha-sage-green-bridal",
    name: "Haritha Sage Green Muhurtham Bridal",
    category: "Bridal",
    price: 44500,
    originalPrice: 52000,
    image: "/images/bridal-2.png",
    secondaryImages: [
      "/images/bridal-2.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "Heavy Pure Tissue Silk",
    zariType: "Tested 24K Gold Dipped Zari",
    color: "Pale Sage Mint Green & Luminous Gold",
    origin: "Kanchipuram Heritage Guild",
    blousePiece: "Included (Embroidered zardozi blouse piece, 1m)",
    careInstructions: "Preserve in heritage trunk with neem leaves. Dry clean only.",
    description: "Auspicious sage mint green bridal drape interwoven with golden thread, designed for sacred morning Muhurtham ceremonies."
  },
  {
    id: "roopa-gulabi-rose-quartz-bridal",
    name: "Roopa Gulabi Rose Quartz Bridal",
    category: "Bridal",
    price: 38000,
    originalPrice: 45000,
    image: "/images/bridal-3.jpg",
    secondaryImages: [
      "/images/bridal-3.jpg",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: false,
    isNew: false,
    fabric: "Pure Mulberry Bridal Silk",
    zariType: "Rich Copper-Rose & Gold Zari",
    color: "Blush Rose Pink with Deep Copper Border",
    origin: "Kanchipuram, Tamil Nadu",
    blousePiece: "Included (Heavy floral embroidered pink blouse fabric, 1m)",
    careInstructions: "Wrap in pure muslin cloth. Dry clean only.",
    description: "Romantic blush rose bridal saree featuring auspicious temple borders and timeless Indian wedding motifs."
  },
  {
    id: "mangalyam-ivory-vermilion-bridal",
    name: "Mangalyam Ivory & Vermilion Bridal Saree",
    category: "Bridal",
    price: 46000,
    originalPrice: 54000,
    image: "/images/bridal-4.png",
    secondaryImages: [
      "/images/bridal-4.png",
      "/images/heritage_weaving_close-up.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "Heavy 4-Ply Pure Silk",
    zariType: "24K Real Gold Kalabattu Zari",
    color: "Warm Ivory Cream & Kumkum Red",
    origin: "Varanasi Royal Guild",
    blousePiece: "Included (Vermilion red bridal blouse with heavy zari border, 1m)",
    careInstructions: "Store folded in muslin cloth. Specialist dry cleaning recommended.",
    description: "The quintessence of Indian wedding sanctity. Ivory body with deep vermilion red borders woven with gold kalash and temple sanctum motifs."
  },
  {
    id: "swarna-haldi-neelam-bridal",
    name: "Swarna Haldi & Neelam Trousseau Drape",
    category: "Bridal",
    price: 39500,
    originalPrice: 46000,
    image: "/images/bridal-5.jpg",
    secondaryImages: [
      "/images/bridal-5.jpg",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: false,
    isNew: false,
    fabric: "Imperial Handloom Silk",
    zariType: "Antique Roopa Kalabattu Zari",
    color: "Turmeric Haldi Gold with Midnight Navy Border",
    origin: "Varanasi Master Loom",
    blousePiece: "Included (Contrasting midnight navy silk with sleeve brocade, 1m)",
    careInstructions: "Dry clean only. Roll rather than press-fold.",
    description: "Radiant golden turmeric silk paired with deep navy brocade borders and elaborate high-neck trousseau styling."
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
