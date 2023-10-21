import React from "react";

import Image from "next/image";
import runLogo from "../../public/rutgers-logos/ru-n_logo.png"
import rutgers from "../../public/rutgers-logos/RUN.png"
import fairleigh from "../../public/alliance-logos/Fairleigh_Dickinson_University_Seal.png"
import montclair from "../../public/alliance-logos/montclair_state_university_seal.png"
import william_p from "../../public/alliance-logos/william_paterson_university.png"
import kean from "../../public/alliance-logos/kean-university-logo-1.png"
import essex from "../../public/alliance-logos/essex-county-college-squarelogo.png"
import njit from "../../public/alliance-logos/New_Jersey_IT_seal.png"
import rutNb from "../../public/rutgers-logos/Rutgers_University_seal.png"

const Alliance: React.FC = () => {
    return (
      <section className="alliance-section">
          <div className="section-header">
              <h2 className="lsamp-alliance-header">GS-LSAMP Alliance</h2>
              <hr className="section-horizontal-line"/>
          </div>
          <div className="alliance-card-container">
              <div className="alliance-card">
                  <Image
                    className="alliance-university-logo"
                    src={rutgers}
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
                  <Image
                    className="alliance-university-logo"
                    src={fairleigh}
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
                  <Image
                    className="alliance-university-logo"
                    src={montclair}
                    alt="Montclair State University Logo"
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
                  <Image
                    className="alliance-university-logo"
                    src={william_p}
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
                  <Image
                    className="alliance-university-logo"
                    src={kean}
                    alt="Kean University Logo"
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
                  <Image
                    className="alliance-university-logo"
                    src={essex}
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
                  <Image
                    className="alliance-university-logo"
                    src={njit}
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
                  <Image
                    className="alliance-university-logo"
                    src={rutNb}
                    alt="Rutgers University Seal"
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


    );
};

export default Alliance;