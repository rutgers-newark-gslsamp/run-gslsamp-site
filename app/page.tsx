// Images
import Image from "next/legacy/image";
import AllianceGrid from "../src/components/AllianceGrid";
import LandingAbout from "../src/components/LandingAbout";
import CtaBlock from "../src/components/CtaBlock";
import heroPicture from "../public/hero/hero.jpg";

import image3 from "../public/club-carousel/image3.jpg"; //Test Image

// Components
import CarouselHero from "../src/components/CarouselHero";

export default function Home() {
 
  // Array of images for CarouselHero
  const heroImages = [heroPicture, image3];

  return (
    <>
      {/**Title components*/}

      {/**<Title title={"Index Page"} />*/}  
      <main className="landing-hero-container">
       
        {/* Hero Gallery */}
        <figure
          className="lg:h-96 xl:h-[38rem] md:h-72 h-44 overflow-hidden"
          style={{
            marginTop: '-0.99rem', // Horizontal of Hero
            width: '100%' // Width of Hero
          }}
        >
          <CarouselHero images={heroImages} /> {/* Use CarouselHero */}
        </figure>
        <CtaBlock />
      </main>


      {/* Youtube Video */}
      <section className="flex justify-center my-8 md:my-16 md:mx-8">
        <iframe
          className="w-5/6 sm:w-2/3 h-72 md:h-96 lg:h-[28rem]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/t2HxIdkXPDw?si=_Oo1PBaC7GjsO_95M"
          title="YouTube video player"
          /* frameborder="0" */
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        ></iframe>
      </section>


      {/* About */}
      <LandingAbout />
      <section id="lsamp-alliance-container">
        <div className="section-header">
          <h2 className="lsamp-alliance-header">GS-LSAMP Alliance</h2>
          <hr className="section-horizontal-line" />
        </div>
        <AllianceGrid />
      </section>
    </>
  );
}
