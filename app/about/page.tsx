import Image from "next/legacy/image";
import rabinovich from "../../public/staff-pictures/rabinovich.jpeg"
import miguel from "/public/staff-pictures/miguel.png"
import gates from "/public/staff-pictures/gates.png"
import StaffCard from "../../src/components/StaffCard";
import EventInfoCard from "../../src/components/EventInfoCard";
import Title from "../../src/components/Title";


export default function About() {
  return (
    <>
      {/*Title component*/}
      <main className="about-description-container">
        <Title name={"ABOUT US"} />
        <p id="about-paragraph" className="subsection-paragraph">
          The Louis Stokes Alliance for Minority Participation (LSAMP) program at Rutgers University–Newark is a non-medical science program sponsored by the National Science Foundation. The program is designed to increase the interest, retention, graduation, and success of students from racial and ethnic groups that are historically underrepresented in non-medical (STEM) fields (i.e. Black/African American, Hispanic/Latinx, Native American/Alaskan, Pacific Islander). Now in phase III of funding, the primary focus is to promote undergraduate research and post-baccalaureate studies in STEM fields.  The RUN - GSLSAMP program is one of the nine members of the <a href="" className="inline-link">Garden State Louis Strokes Alliance for Minority Participation (GS-LSAMP)</a>
        </p>
      </main>

      <section className="staff-section-container">
        <div className="section-subheader">
          <h2 className="text-3xl font-bold text-neutral-700">Staff</h2>
          <hr/>
        </div>
        <div id="staff-card-container" className="grid md:grid-cols-3 mx-4 md:mx-16">
          <StaffCard 
            picture={gates}
            name="Alexander Gates, PhD"
            role="Executive Director of GS-LSAMP"
            university="Rutgers University - Newark"
            email="agates@newark.rutgers.edu"
            phone="(973) 353-5034"
          />
          <StaffCard 
            picture={miguel}
            name="Cristiane San Miguel, Ph.D"
            role="Assistant Director of GS-LSAMP"
            university="Rutgers University - Newark"
            email="csanmig@newark.rutgers.edu"
            phone="(973) 353-5846"
          />
          <StaffCard 
            picture={rabinovich}
            name="Oren Rabinovich"
            role="Director of GS-LSAMP"
            university="Rutgers University - Newark"
            email="oren.rabinovich@rutgers.edu"
            phone="(973) 353-3562"
          />
        </div>
      </section>

      <section className="club-section-container">
        <div className="section-subheader">
          <h2 className="text-3xl font-bold text-neutral-700">Club Info</h2>
          <hr/>
        </div>
        <div>
          <p id="club-paragraph" className="subsection-paragraph">
            The GS-LSAMP Club at Rutgers Newark is a student organization affiliated with GS-LSAMP. Its roots lie in the pursuit of academic excellence in science, technology, engineering, and mathematics (STEM) fields.
          </p>
        </div>
      </section>
      <section className="about-events-container">
        <div className="section-subheader">
          <h2 className="text-3xl font-bold text-neutral-700">Events</h2>
          <hr/>
        </div>
        <div id="event-container" className="grid gap-3 md:grid-cols-3 mx-4 md:mx-16">
          <EventInfoCard 
            title="2nd LSAMP Meeting"
            time="11:30AM - 12:50PM"
            date="May 26, 2020"
            room="Hill Hall, Room 210"
            location="Rutgers Newark"
          />
          <EventInfoCard 
            title="2nd LSAMP Meeting"
            time="11:30AM - 12:50PM"
            date="May 26, 2020"
            room="Hill Hall, Room 210"
            location="Rutgers Newark"
          />
          <EventInfoCard 
            title="2nd LSAMP Meeting"
            time="11:30AM - 12:50PM"
            date="May 26, 2020"
            room="Hill Hall, Room 210"
            location="Rutgers Newark"
          />
        </div> 
      </section>
    </>
  );
}
  