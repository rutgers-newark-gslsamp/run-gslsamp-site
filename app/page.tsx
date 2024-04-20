//images
import Image from "next/legacy/image";
import AllianceGrid from "../src/components/AllianceGrid";
import LandingAbout from "../src/components/LandingAbout";
import CtaBlock from "../src/components/CtaBlock";
import heroPicture from "../public/hero/hero.jpg"

export default function Home() {
  return (
    <>
      {/**Title components*/}
      {/**<Title title={"Index Page"} />*/}
      <main className="landing-hero-container">
        {/*Later turn into hero-gallery*/}  
        <figure className="lg:h-96 xl:h-[32rem] md:h-72 h-44 overflow-hidden ">
          {/*refactor src */}
            <Image
              className="hero-picture object-cover h-full opacity-95"
              src={heroPicture}
              alt="Placeholder image"
            />
        </figure>
        <CtaBlock />  
      </main>

      <section className="flex justify-center my-8 md:my-16 md:mx-8">
        <iframe className="w-5/6 sm:w-2/3 h-72 md:h-96 lg:h-[28rem]" width="560" height="315" src="https://www.youtube.com/embed/t2HxIdkXPDw?si=_Oo1PBaC7GjsO_95M" title="YouTube video player" /*frameborder="0"*/ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
      </section>
      <LandingAbout />
      <section id='lsamp-alliance-container'>
        <div className="section-header">
            <h2 className="lsamp-alliance-header">GS-LSAMP Alliance</h2>
            <hr className="section-horizontal-line"/>
        </div>
        <AllianceGrid />
      </section>
    </>
  );
}
