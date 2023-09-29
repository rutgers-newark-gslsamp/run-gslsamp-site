import Image from "next/image";
import Title from "./components/title";
import runLogo from "/wamp64/www/run-gslsamp-site-fork/run-gslsamp-site-/public/rutgers-logos/ru-n_logo.png"

export default function Home() {
  return (
    <>
      {/**Title components*/}
      {/**<Title title={"Index Page"} />*/}
      <main className="landing-hero-container">
        {/*Later turn into hero-gallery*/}
        <div className="hero-picture-wrapper">
          {/*refactor src */}
            <img
              className="hero-picture"
              src="https://placehold.co/1500x600/png"
              alt="Placeholder image"
            />
        </div>
        <div className="hero-cta-block">
            <div className="cta-headline">
                <h2 id="landing-cta-headline">Increasing the retention, graduation and success of underrepresented minorities STEM.</h2>
            </div>
            <div className="cta-button-wrapper">
                <button className="cta-button" id="cta-learn-more-button">
                    <a className="cta-learn-more-anchor" href="membership.html">Eligibility</a>
                </button>
                <button className="cta-button" id="cta-join-now-button">
                    <a className="cta-join-now-anchor"href="membership.html">Join Now</a>
                </button>
            </div>
        </div>  
      </main>


      <section className="landing-about-container">
          {/*I think the names of these divs could be improved for clarity*/}
          <img
            className="landing-about-logo"
            src=""
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TW7sWDVw_wM" title="YouTube video player" /*frameborder="0"*/ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>



      <section className="alliance-section">
          <div className="section-header">
              <h2 className="lsamp-alliance-header">GS-LSAMP Alliance</h2>
              <hr className="section-horizontal-line"/>
          </div>
          <div className="alliance-card-container">
              <div className="alliance-card">
                  <img
                    className="alliance-university-logo"
                    src=""
                    alt="Rutgers University–Newark Logo"
                  />
                  <div className="alliance-university-content" id="alliance-rutgers-newark">
                      <h3 className="alliance-university-name">Rutgers University – Newark</h3>
                      <div className="alliance-university-contact">
                          <p>
                              Oren Rabinovich 
                              <br/>
                              <span className="alliance-university-contact-email">oren.rabinovich@rutgers.edu</span>
                              <br/>
                              (973) 353-3562
                          </p>
                      </div>
                  </div>
              </div>
              <div className="alliance-card">
                  <img
                    className="alliance-university-logo"
                    src=""
                    alt="Fairleigh Dickinson University Logo"
                  />
                  <div className="alliance-university-content" id="alliance-fairleigh-dickinson">
                      <h3 className="alliance-university-name">Fairleigh Dickinson University</h3>
                      <div className="alliance-university-contact">
                          <p>
                              Dr. Marion McClary 
                              <br/>
                              <span className="alliance-university-contact-email">mcclary@fdu.edu</span>
                              <br/>
                              (201) 692-2606
                          </p>
                      </div>
                  </div>
              </div>
              <div className="alliance-card">
                  <img
                    className="alliance-university-logo"
                    src="" alt="Montclair State University Logo"
                  />
      
                  <div className="alliance-university-content" id="alliance-montclair">
                      <h3 className="alliance-university-name">Montclair State University</h3>
                      <div className="alliance-university-contact">
                          <p>
                              Dr. Yvonne Gindt 
                              <br/>
                              <span className="alliance-university-contact-email">gindty@montclair.edu</span> 
                              <br/>
                              (973) 655-3469
                          </p>
                      </div>
                  </div>
              </div>
              <div className="alliance-card">
                  <img
                    className="alliance-university-logo"
                    src=""
                    alt="William Paterson University Logo"
                  />
                  <div className="alliance-university-content" id="alliance-william-paterson">
                      <h3 className="alliance-university-name">William Paterson University</h3>
                      <div className="alliance-university-contact">
                          <p>
                              Dr. Eliana Antoniou 
                              <br/>
                              <span className="alliance-university-contact-email">antonioue@wpunj.edu</span>
                              <br/>
                              (973) 720-3715
                          </p>
                      </div>
                  </div>
              </div>
              <div className="alliance-card">
                  <img
                    className="alliance-university-logo"
                    src="" alt="Kean University Logo"
                  />
                  <div className="alliance-university-content" id="alliance-kean">
                      <h3 className="alliance-university-name">Kean University</h3>
                      <div className="alliance-university-contact">
                          <p>
                              Dr. Juyoung Ha 
                              <br/>
                              <span className="alliance-university-contact-email">haj@kean.edu</span>
                              <br/>
                              (908) 737-3739
                          </p>
                      </div>
                  </div>
              </div>
              <div className="alliance-card">
                  <img
                    className="alliance-university-logo"
                    src=""
                    alt="Essex Count College Logo"
                  />
                  <div className="alliance-university-content" id="alliance-essex-county-college">
                      <h3 className="alliance-university-name">Essex County College</h3>
                      <div className="alliance-university-contact">
                          <p>
                              <span className="alliance-university-contact-email">gslsamp@essex.edu</span>
                          </p>
                      </div>
                  </div>
              </div>
              <div className="alliance-card">
                  <img
                    className="alliance-university-logo" src=""
                    alt="New Jersey Institute of Technology Logo"
                  />
                  <div className="alliance-university-content" id="alliance-njit">
                      <h3 className="alliance-university-name">New Jersey 
                          Institute of Technology</h3>
                      <div className="alliance-university-contact">
                          <p>
                              Dr. Crystal Smith 
                              <br/>
                              <span className="alliance-university-contact-email">smithcs@njit.edu</span>
                              <br/>
                              (973) 596-3690
                          </p>
                      </div>
                  </div>
              </div>
              <div className="alliance-card">
                  <img
                    className="alliance-university-logo"
                    src="" alt="Rutgers University Seal"
                  />
                  <div className="alliance-university-content" id="alliance-rutgers-new-brunswick">
                      <h3 className="alliance-university-name">Rutgers University - 
                          New Brunswick</h3>
                      <div className="alliance-university-contact">
                          <p>
                              Dr. Beverely Gaines 
                              <br/>
                              <span className="alliance-university-contact-email">bag104@echo.rutgers.edu</span> 
                              <br/>
                              (848) 932-2559
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          
      </section>

    </>
  );
}
