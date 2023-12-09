//images
import Image from "next/legacy/image";
import runLogo from "../public/rutgers-logos/ru-n_logo.png"
import AllianceGrid from "../src/components/AllianceGrid";
import LandingAbout from "../src/components/LandingAbout";
import CtaBlock from "../src/components/CtaBlock";

export default function Home() {
  return (
    <>
      {/**Title components*/}
      {/**<Title title={"Index Page"} />*/}
      <main className="landing-hero-container">
        {/*Later turn into hero-gallery*/}
        <figure className="hero-picture-wrapper">
          {/*refactor src */}
            <img
              className="hero-picture"
              src="https://placehold.co/1500x600/png"
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
