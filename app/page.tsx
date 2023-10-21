//images
import Image from "next/image";
import runLogo from "../public/rutgers-logos/ru-n_logo.png"
import Alliance from "../src/components/Alliance";

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


      <section className="landing-about-container">
          {/*I think the names of these divs could be improved for clarity*/}
          <Image
            className="landing-about-logo"
            src={runLogo}
            alt="Rutgers–Newark GS-LSAMP Logo"
          />  
          
          <div className="landing-about-card">
              <div className="landing-about-content">
                  <h2 className="landing-about-title">What is GS-LSAMP?</h2>
                  <p className="landing-about-body">
                      The Louis Stokes Alliance for Minority Participation (LSAMP) is an 
                      <a className="landing-about-anchor-body" href="https://www.nsf.gov/" target="blank">
                          <i>NSF-funded</i>
                      </a> 
                      program that provides academic support and specialized advising for students from historically underrepresented groups who wish to enter non-medical STEM professions. For students, adjusting to an unfamiliar environment can prove to be a difficult task. However, LSAMP aims to aid students in navigating critical transitions, including those from high school to college, college to graduate school, and eventually towards fulfilling careers.
                  </p>
              </div>    
              <div className="landing-about-button-container">
                  <button className="landing-about-button" id="landing-about-button-pending">
                      {/*How faculty can help LSAMP*/}
                      <a className="landing-about-anchor-button"  /*alt="Learn more about GS-LSAMP in our About Us Page" onclick="alert('Coming Soon!')"*/>For Faculty</a>
                  </button>
                  <button className="landing-about-button">
                      <a className="landing-about-anchor-button" href="about.html" /*alt="Learn more about GS-LSAMP in our About Us Page"*/>Learn More</a>
                  </button>
              </div>
        </div>
      </section>

      <section className="landing-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TW7sWDVw_wM" title="YouTube video player" /*frameborder="0"*/ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
      </section>

    <Alliance />

    </>
  );
}
