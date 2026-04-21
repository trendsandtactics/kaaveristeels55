import SteelScroll from "@/components/SteelScroll";
import HomeAbout from "@/components/HomeAbout";
import GreenSteel from "@/components/GreenSteel";
import HomeProducts from "@/components/HomeProducts";
import SteelCalculator from "@/components/Calculators/SteelCalculator";
import MapEmbed from "@/components/MapEmbed";
import TrustOnsite from "@/components/trustonsite";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full relative pt-20 md:pt-24">
      {/* Scrollytelling Hero Area */}
      <SteelScroll />

      {/* About Section */}
      <HomeAbout />

      {/* Products Section */}
      <HomeProducts />

      {/* Green Steel Certification Section */}
      <GreenSteel />

    
      <SteelCalculator />
       

      </section>
      <TrustOnsite />

      {/* Map Section (moved here before footer) */}
      <MapEmbed />
    </main>
  );
}
