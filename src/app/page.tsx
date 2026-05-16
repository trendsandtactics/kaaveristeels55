import SteelScroll from "@/components/SteelScroll";
import HomeAbout from "@/components/HomeAbout";
import GreenSteel from "@/components/GreenSteel";
import HomeProducts from "@/components/HomeProducts";
import SteelCalculator from "@/components/Calculators/SteelCalculator";
import MapEmbed from "@/components/MapEmbed";
import TrustOnsite from "@/components/trustonsite";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full relative pt-20 md:pt-24">
      
      <section className="snap-start scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Scrollytelling Hero Area */}
        <SteelScroll />
      </section>

      <section className="snap-start scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* About Section */}
        <HomeAbout />
      </section>

      <section className="snap-start scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Products Section */}
        <HomeProducts />
      </section>

      <section className="snap-start scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Green Steel Certification Section */}
        <GreenSteel />
      </section>

      <section className="snap-start scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Calculator Section */}
        <SteelCalculator />
      </section>

      <section className="snap-start scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Trust Section */}
        <TrustOnsite />
      </section>

      <section className="snap-start scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Map Section */}
        <MapEmbed />
      </section>

    </div>
  );
}
