export interface Product {
  id: string;
  name: string;
  category: "Banarasi" | "Kanjeevaram" | "Paithani" | "Bridal";
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
    price: 5499,
    originalPrice: 6999,
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
    price: 6200,
    originalPrice: 7800,
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
    price: 4850,
    originalPrice: 5999,
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
    price: 6800,
    originalPrice: 8400,
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
    price: 4299,
    originalPrice: 5400,
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
    price: 7499,
    originalPrice: 8999,
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
    price: 7999,
    originalPrice: 8999,
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
    price: 6950,
    originalPrice: 8500,
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
    price: 5800,
    originalPrice: 7200,
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
    price: 6450,
    originalPrice: 7900,
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
  // PAITHANI COLLECTION (5 Products)
  // ==========================================
  {
    id: "raas-mor-rani-paithani",
    name: "Raas Rani Mor-Popat Pure Paithani",
    category: "Paithani",
    price: 7200,
    originalPrice: 8900,
    image: "/images/paithani-1.jpg",
    secondaryImages: [
      "/images/paithani-1.jpg",
      "/images/heritage_weaving_close-up.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "100% Pure Yeola Mulberry Silk (Silk Mark Certified)",
    zariType: "Pure Gold & Resham Tapestry Weave Zari",
    color: "Rani Pink with Gold Asavali & Mor Pallu",
    origin: "Yeola / Paithan, Maharashtra",
    blousePiece: "Included (Matching Rani pink silk with peacock border, 85cm)",
    careInstructions: "Professional dry clean only. Wrap gently in pure cotton or muslin fabric.",
    description: "Magnificent Maharashtrian pure silk Paithani saree in vibrant rani pink. Features traditional golden butti work and an opulent golden pallu woven with iconic Mor-Popat (peacock and parrot) tapestry motifs."
  },
  {
    id: "indraneel-kattam-paithani",
    name: "Indraneel Royal Blue Kattam Paithani",
    category: "Paithani",
    price: 7600,
    originalPrice: 8999,
    image: "/images/paithani-2.jpg",
    secondaryImages: [
      "/images/paithani-2.jpg",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: false,
    isNew: true,
    fabric: "Pure Handloom Mulberry Silk",
    zariType: "Traditional Narali Border with Multi-color Resham Zari",
    color: "Royal Sapphire Blue with Multi-color Pallu",
    origin: "Paithan, Maharashtra",
    blousePiece: "Included (Royal blue brocade blouse with ornate border, 90cm)",
    careInstructions: "Dry clean only. Air in shade periodically.",
    description: "Regal royal blue saree detailed with geometric check kattam and an authentic Paithani multi-colored floral vine and peacock border, a prized heirloom for Maharashtrian weddings."
  },
  {
    id: "shrikala-bottle-green-paithani",
    name: "Shrikala Emerald Bottle Green Paithani",
    category: "Paithani",
    price: 5999,
    originalPrice: 7500,
    image: "/images/paithani-3.png",
    secondaryImages: [
      "/images/paithani-3.png",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: true,
    isNew: false,
    fabric: "High-Lustre Pure Handloom Silk",
    zariType: "Broad Swarna Pankh Zari Border",
    color: "Bottle Green & Lustrous Antique Gold",
    origin: "Yeola, Maharashtra",
    blousePiece: "Included (Bottle green matching pure silk, 85cm)",
    careInstructions: "Dry clean only. Fold along different creases to protect handloom fibers.",
    description: "Timeless bottle green silk Paithani celebrating age-old Maharashtrian grace. Broad glistening gold border with fine golden star buttis and traditional Asavali floral pallu."
  },
  {
    id: "padma-kairi-gulabi-paithani",
    name: "Padma Kairi Ruby Magenta Paithani",
    category: "Paithani",
    price: 6350,
    originalPrice: 7800,
    image: "/images/paithani-4.jpg",
    secondaryImages: [
      "/images/paithani-4.jpg",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: false,
    isNew: true,
    fabric: "Pure Silk Warp & Weft",
    zariType: "Authentic Muniya & Kairi Zari",
    color: "Ruby Magenta Pink with Gilded Zari Pallu",
    origin: "Paithan, Maharashtra",
    blousePiece: "Included (Ruby pink silk with matching border, 85cm)",
    careInstructions: "Store in clean muslin bag. Strictly dry clean.",
    description: "Luminous ruby magenta Paithani saree adorned with sacred mango (Kairi) buttis and vibrant multi-colored bird motifs along the traditional handloom pallu."
  },
  {
    id: "rajasa-imperial-violet-paithani",
    name: "Rajasa Imperial Violet Paithani",
    category: "Paithani",
    price: 6900,
    originalPrice: 8500,
    image: "/images/paithani-5.png",
    secondaryImages: [
      "/images/paithani-5.png",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: false,
    isNew: false,
    fabric: "Double-Warp Fine Yeola Silk",
    zariType: "Antique Copper & Yellow Gold Zari",
    color: "Imperial Deep Violet with Burnished Gold Border",
    origin: "Yeola, Maharashtra",
    blousePiece: "Included (Deep violet silk blouse fabric, 85cm)",
    careInstructions: "Professional dry clean only.",
    description: "Rich imperial violet drape woven with delicate gold zari polka buttis and a heavy burnished gold border, creating a royal silhouette for festive celebrations."
  },
  {
    id: "lavanya-lavender-mor-paithani",
    name: "Lavanya Lavender Mor-Bangadi Paithani",
    category: "Paithani",
    price: 7800,
    originalPrice: 8999,
    image: "/images/paithani-6.png",
    secondaryImages: [
      "/images/paithani-6.png",
      "/images/heritage_weaving_close-up.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "Pure Yeola Silk with Silver & Resham Threads",
    zariType: "Roopa Silver Kalabattu & Multi-color Meenakari",
    color: "Soft Lavender Lilac with Silver Peacock Border",
    origin: "Yeola, Maharashtra",
    blousePiece: "Included (Matching lavender silk with peacock sleeve border, 85cm)",
    careInstructions: "Professional dry clean only. Wrap in muslin cloth.",
    description: "Enchanting pastel lavender Paithani featuring delicate silver polka buttis and an iconic silver Mor-Bangadi (peacock ring) tapestry border woven with vibrant Meenakari resham."
  },
  {
    id: "kamalini-swarna-lotus-paithani",
    name: "Kamalini Lotus Motif Tissue Paithani",
    category: "Paithani",
    price: 4950,
    originalPrice: 6200,
    image: "/images/paithani-7.jpg",
    secondaryImages: [
      "/images/paithani-7.jpg",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: false,
    isNew: true,
    fabric: "Pure Handloom Tussar Silk",
    zariType: "Fine Matte Gold Zari with Hand-woven Lotus Pallu",
    color: "Warm Haldi Gold with Lotus Blossom Pallu",
    origin: "Paithan, Maharashtra",
    blousePiece: "Included (Contrasting emerald green silk blouse piece, 80cm)",
    careInstructions: "Dry clean only. Iron on reverse.",
    description: "Radiant haldi-gold handloom silk highlighted by serene blooming pink lotus (Kamal) floral motifs along the sweeping pallu, complemented by clean gold tissue borders."
  },
  {
    id: "mayur-turquoise-resham-paithani",
    name: "Mayur Turquoise Peacock Paithani",
    category: "Paithani",
    price: 7150,
    originalPrice: 8800,
    image: "/images/paithani-8.jpg",
    secondaryImages: [
      "/images/paithani-8.jpg",
      "/images/heritage_weaving_close-up.png"
    ],
    isBestseller: false,
    isNew: true,
    fabric: "100% Pure Mulberry Silk (Silk Mark Certified)",
    zariType: "Silver & Multi-hued Resham Tapestry Zari",
    color: "Vibrant Turquoise Sky Blue with Mor-Popat Pallu",
    origin: "Yeola, Maharashtra",
    blousePiece: "Included (Matching turquoise silk with ornate border, 85cm)",
    careInstructions: "Strictly dry clean only. Store flat in breathable cotton wrap.",
    description: "Vivid turquoise blue pure silk draped in regal splendor. Showcases pure silver zari borders and an expansive hand-interlocked peacock and parrot tapestry pallu."
  },
  {
    id: "kasturi-chocolate-asavali-paithani",
    name: "Kasturi Mocha Chocolate Asavali Paithani",
    category: "Paithani",
    price: 5600,
    originalPrice: 6900,
    image: "/images/paithani-9.jpg",
    secondaryImages: [
      "/images/paithani-9.jpg",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: true,
    isNew: false,
    fabric: "High-twist Pure Yeola Silk",
    zariType: "Antique Gold Dipped Kalabattu Zari",
    color: "Rich Coffee Chocolate Brown with Multi-color Pallu",
    origin: "Yeola, Maharashtra",
    blousePiece: "Included (Coffee brown silk with matching gold border, 85cm)",
    careInstructions: "Specialist dry cleaning recommended.",
    description: "Rare and striking mocha chocolate brown Paithani saree woven with triangular narali temple borders and a vibrant floral Asavali and peacock tapestry pallu."
  },
  {
    id: "swarna-pitambari-mor-paithani",
    name: "Swarna Pitambari Royal Nauvari Paithani",
    category: "Paithani",
    price: 8200,
    originalPrice: 8999,
    image: "/images/paithani-10.jpg",
    secondaryImages: [
      "/images/paithani-10.jpg",
      "/images/heritage_weaving_close-up.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "Heavy Pure Yeola Silk (Silk Mark Certified)",
    zariType: "24K Dipped Gold Kalabattu with Vivid Peacock Tapestry",
    color: "Auspicious Swarna Pitambari Yellow & Pure Gold",
    origin: "Yeola / Paithan, Maharashtra",
    blousePiece: "Included (Pitambari yellow brocade fabric with heavy armlet zari, 90cm)",
    careInstructions: "Preserve with cedar chips in muslin. Dry clean only.",
    description: "The quintessential auspicious Maharashtrian wedding saree in lustrous Pitambari golden-yellow, woven with dense golden buttis and a magnificent celebratory Mor-Popat pallu."
  },
  {
    id: "shweta-moti-nauvari-paithani",
    name: "Shweta Moti Royal Nauvari Paithani",
    category: "Paithani",
    price: 7900,
    originalPrice: 8999,
    image: "/images/paithani-11.jpg",
    secondaryImages: [
      "/images/paithani-11.jpg",
      "/images/heritage_weaving_close-up.png",
      "/images/handloom_weaving_craft.png"
    ],
    isBestseller: true,
    isNew: true,
    fabric: "100% Pure Yeola Mulberry Silk (Silk Mark Certified)",
    zariType: "Pure Gold Dipped Kalabattu & Vivid Meenakari Tapestry",
    color: "Pearl Off-White & Gilded Gold with Mor-Asavali Pallu",
    origin: "Yeola, Maharashtra",
    blousePiece: "Included (Matching pearl cream pure silk blouse fabric with gold border, 90cm)",
    careInstructions: "Wrap in muslin cloth. Specialist dry clean only.",
    description: "Pristine pearl off-white pure silk Paithani saree woven with subtle golden polka buttis and a breathtaking celebratory tapestry pallu featuring multi-hued peacocks and floral vines."
  },

  // ==========================================
  // BRIDAL TROUSSEAU COLLECTION (5 Products)
  // ==========================================
  {
    id: "lavender-swarna-scallop-bridal",
    name: "Lavender Swarna Scallop Bridal Silk",
    category: "Bridal",
    price: 8499,
    originalPrice: 8999,
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
    price: 8900,
    originalPrice: 8999,
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
    price: 7850,
    originalPrice: 8999,
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
    price: 8999,
    originalPrice: 8999,
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
    price: 8150,
    originalPrice: 8999,
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
