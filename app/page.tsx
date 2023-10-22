//images
import Image from "next/image";
import runLogo from "../public/rutgers-logos/ru-n_logo.png"
import AllianceGrid from "../src/components/AllianceGrid";
import LandingAbout from "../src/components/LandingAbout";

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
        <aside className="hero-cta-block">
            <div className="cta-headline">
                <h2 id="landing-cta-headline">Increasing the retention, graduation and success of underrepresented minorities STEM.</h2>
            </div>
            <nav className="cta-button-wrapper">
                <button className="cta-button" id="cta-learn-more-button">
                    <a className="cta-learn-more-anchor" href="membership.html">Eligibility</a>
                </button>
                <button className="cta-button" id="cta-join-now-button">
                    <a className="cta-join-now-anchor"href="membership.html">Join Now</a>
                </button>
            </nav>
        </aside>  
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
