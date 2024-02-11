//images
import Image from "next/legacy/image";
import AllianceGrid from "../src/components/AllianceGrid";
import LandingAbout from "../src/components/LandingAbout";
import CtaBlock from "../src/components/CtaBlock";
import heroPicture from "../public/event-photos/20230424_140148_2024-02-03 16.25.37.jpg"

export default function Home() {
  return (
    <>
      {/**Title components*/}
      {/**<Title title={"Index Page"} />*/}
      <main className="landing-hero-container absolute inset-0">
        {/*Later turn into hero-gallery*/}
        
        <figure className="relative lg:h-[66vh] bg-black overflow-hidden ">
          {/*refactor src */}
            <Image
              className="hero-picture object-cover h-full opacity-75"
              src={heroPicture}
              alt="Placeholder image"
            />
        </figure>
        <CtaBlock />  
      </main>


      <LandingAbout />
      <section id='lsamp-alliance-container'>
        <div className="section-header">
            <h2 className="lsamp-alliance-header">GS-LSAMP Alliance</h2>
            <hr className="section-horizontal-line"/>
        </div>
        <AllianceGrid />

      </section>

      <section className="landing-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TW7sWDVw_wM" title="YouTube video player" /*frameborder="0"*/ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
      </section>


    </>
  );
}
