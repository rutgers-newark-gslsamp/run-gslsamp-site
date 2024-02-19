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
      <main className="landing-hero-container">
        {/*Later turn into hero-gallery*/}  
        <figure className="md:h-[66vh] h-48 bg-white overflow-hidden ">
          {/*refactor src */}
            <Image
              className="hero-picture object-cover h-full opacity-95"
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

      <section className="flex justify-center my-8 md:my-16 md:mx-8">
        <iframe className="w-5/6 sm:w-2/3 h-64 md:h-96" width="560" height="315" src="https://www.youtube.com/embed/TW7sWDVw_wM" title="YouTube video player" /*frameborder="0"*/ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
      </section>


    </>
  );
}
