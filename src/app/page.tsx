import Hero from "@/components/home/Hero";
import Collections from "@/components/home/Collections";
import HeritageStory from "@/components/home/HeritageStory";
import Bestsellers from "@/components/home/Bestsellers";
import InstaGallery from "@/components/home/InstaGallery";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Collections />
      <HeritageStory />
      <Bestsellers />
      <InstaGallery />
    </main>
  );
}
