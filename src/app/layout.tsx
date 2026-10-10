import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import { CartProvider } from "@/lib/cart-context";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resham Craft | Luxury Indian Handloom Sarees & Bridal Trousseau",
  description: "Experience the eternal grandeur of authentic Banarasi, Kanjeevaram, and Chanderi pure silk sarees handwoven with certified Silk Mark and pure gold zari.",
  keywords: [
    "Resham Craft",
    "Handloom Sarees",
    "Banarasi Silk",
    "Kanjeevaram Saree",
    "Bridal Saree",
    "Pure Zari",
    "Silk Mark Certified",
    "Indian Luxury Clothing"
  ],
  authors: [{ name: "Resham Craft Artisanal Guild" }],
  openGraph: {
    title: "Resham Craft | Luxury Indian Handloom Sarees",
    description: "Discover handcrafted slow luxury from holy Varanasi and temple-town Kanchipuram. 100% certified pure silk.",
    url: "https://reshamcraft.com",
    siteName: "Resham Craft",
    images: [
      {
        url: "/images/violet_banarasi_saree_product.png",
        width: 1200,
        height: 630,
        alt: "Resham Craft Luxury Handloom Sarees"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/reshamcraft_nobg_1768746306662.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <Toaster position="bottom-right" richColors />
        </CartProvider>
      </body>
    </html>
  );
}
