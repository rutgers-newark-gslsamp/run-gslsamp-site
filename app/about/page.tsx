import rabinovich from "../../public/staff-pictures/rabinovich.jpeg"
import miguel from "/public/staff-pictures/miguel.png"
import gates from "/public/staff-pictures/gates.png"

import Image from "next/image";

export default function About() {

    return (
      <>
        {/*Title component*/}
        {/**<Title title={"ABOUT US"} />*/}

        <main className="about-description-container">
          <div className="section-header">
              <h1 className="about-us-page-title">About Us</h1>
              <hr/>
          </div>
          <p id="about-paragraph" className="subsection-paragraph">
            The Louis Stokes Alliance for Minority Participation (LSAMP) program
            at Rutgers University–Newark is a non-medical science program sponsored by the National Science Foundation. The program is designed to increase the interest, retention, graduation, and 
            success of students from racial and ethnic groups that are 
            historically underrepresented in non-medical (STEM) fields 
            (i.e. Black/African American, Hispanic/Latinx, Native American/Alaskan, Pacific Islander). Now in phase III of funding, the primary focus is to promote undergraduate research and post-baccalaureate studies in STEM fields. 
            The RUN - GSLSAMP program is one of the nine members of the <a href="about html" className="inline-link">Garden State Louis Strokes Alliance for Minority Participation (GS-LSAMP)</a>
          </p>
        </main>


        <div className="staff-section-container">
          <div className="section-subheader">
            <h2 className="about-us-page-subtitle">Staff</h2>
            <hr/>
          </div>
          <div className="staff-card-wrapper">
            <div className="staff-card">
              {/**refactor src */}
              <Image
                className="staff-picture"
                src={gates} 
                alt="Alexander Gates, PhD"
              />
              <div className="staff-content">
              <h3 className="staff-name">Alexander Gates, PhD</h3>
                <div className="staff-contact">
                  <p>
                    Executive Director of GS-LSAMP<br/>
                    Rutgers University - Newark<br/>
                    agates@newark.rutgers.edu<br/>
                    (973) 353-5034
                  </p>
                </div> 
              </div>
            </div>
            <div className="staff-card">
              <Image
                className="staff-picture"
                src={miguel} alt="Cristiane San Miguel, Ph.D"
              />
              <div className="staff-content" id="alliance-rutgers-newark">
                <h3 className="staff-name">Cristiane San Miguel, Ph.D</h3>
                <div className="staff-contact">
                  <p>
                    Assistant Director of GS-LSAMP<br/>
                    Rutgers University - Newark<br/>
                    csanmig@newark.rutgers.edu<br/>
                    (973) 353-5846
                  </p>
                </div>
              </div>
            </div>
            <div className="staff-card">
              <Image
                className="staff-picture"
                src={rabinovich}
                alt=">Oren Rabinovich"
              />
              <div className="staff-content" id="alliance-rutgers-newark">
                <h3 className="staff-name">Oren Rabinovich</h3>
                <div className="staff-contact">
                  <p>
                    Director of GS-LSAMP<br/>
                    Rutgers University - Newark<br/>
                    oren.rabinovich@rutgers.edu <br/>
                    (973) 353-3562
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="club-section-container">
          <div className="section-subheader">
            <h2 className="about-us-page-subtitle">Club Info</h2>
            <hr/>
          </div>
          <div>
            <p id="club-paragraph" className="subsection-paragraph">
              The GS-LSAMP Club at Rutgers Newark is a student organization affiliated with GS-LSAMP. Its roots lie in the pursuit of academic excellence in science, technology, engineering, and mathematics (STEM) fields.
            </p>
          </div>
        </div>
        <div className="about-events-container">
          <div className="section-subheader">
              <h2 className="about-us-page-subtitle">Events</h2>
              <hr/>
          </div>
          <div className="row">
              <div className="col-md-4 mb-5">
                <div className="card h-100 border-0 shadow zoom">
                  {/**<img class="card-img-top" src="media/photos/research.jpg" width="300px" height="200px" alt="Research Conference Photo">-*/}
                  <div className="card-body">
                    <h3 className="card-title">2nd LSAMP Meeting</h3>
                    <p className="card-text">
                      11:30AM - 12:50PM | May 26, 2020 <br/> 
                      Hill Hall, Room 210 <br/>
                      Rutgers Newark 
                    </p>
                  </div>
                  {/*<div className="card-footer">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScCKgqYLB5U3uixbzyC1ljbrw7XIyHIrZV8szsDfQTqA6Nbpg/viewform" class="btn btn-primary">RSVP!</a>
                    </div>*/}
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="card h-100 border-0 shadow zoom">
                  {/*<img className="card-img-top" src="media/photos/induction.jpg" width="300px" height="200px" alt="Induction Ceremony Photo">*/}
                  <div className="card-body">
                    <h3 className="card-title">3rd LSAMP Meeting</h3>
                    <p className="card-text">
                      2:30PM - 3:50PM | June 17, 2020 <br/>
                      Hill Hall, Room 101 <br/>
                      Rutgers Newark
                    </p>
                  </div>
                  {/*<div className="card-footer">
                    <a href="#contact" className="btn btn-primary">Find Out More!</a>
                  </div>*/}
                </div>
              </div>
              <div className="col-md-4 mb-5">
                  <div className="card h-100 border-0 shadow zoom">
                    {/*<img className="card-img-top" src="media/photos/induction.jpg" width="300px" height="200px" alt="Induction Ceremony Photo">*/}
                    <div className="card-body">
                      <h3 className="card-title">3rd LSAMP Meeting</h3>
                      <p className="card-text">
                        2:30PM - 3:50PM | June 17, 2020 <br/>
                        Hill Hall, Room 101 <br/>
                        Rutgers Newark
                      </p>
                    </div>
                  </div>
        
    </div>
    </div>
    </div>


      </>


        

        
    );
}
  