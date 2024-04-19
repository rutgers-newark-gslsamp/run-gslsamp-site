import rabinovich from "../../public/staff-pictures/rabinovich.jpeg"
import sanMiguel from "../../public/staff-pictures/Dr_San_Miguel.jpg"
import gates from "../../public/staff-pictures/Dr_Gates.jpg"
import StaffCard from "../../src/components/StaffCard";
import EventInfoCard from "../../src/components/EventInfoCard";
import Title from "../../src/components/Title.tsx";
import Carousel from "../../src/components/Carousel";

import image1 from "../../public/club-carousel/image1.jpg";
import image2 from "../../public/club-carousel/image2.jpg";
import image3 from "../../public/club-carousel/image3.jpg";
import image4 from "../../public/club-carousel/image4.jpg";
import image5 from "../../public/club-carousel/image5.jpg";






export default function About() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <>
      {/*Title component*/}
      <main className="about-description-container">
        <Title name={"ABOUT US"} />
        <p id="about-paragraph" className="subsection-paragraph text-base md:text-lg">
          The Louis Stokes Alliance for Minority Participation (LSAMP) program at Rutgers University–Newark is a non-medical science program sponsored by the National Science Foundation. The program is designed to increase the interest, retention, graduation, and success of students from racial and ethnic groups that are historically underrepresented in non-medical (STEM) fields (i.e. Black/African American, Hispanic/Latinx, Native American/Alaskan, Pacific Islander). Now in phase III of funding, the primary focus is to promote undergraduate research and post-baccalaureate studies in STEM fields.  The Rutgers Newark GS=LSAMP program is one of the nine members of the <a href="" className="inline-link font-medium">Garden State Louis Strokes Alliance for Minority Participation (GS-LSAMP)</a>
        </p>
        <div className="flex flex-rows justify-center py-[.3rem]">
          <p className="p-[.5rem] m-[.3rem] text-xl font-bold">Follow Us:</p>
          <div className="bg-[#0A66C2] rounded-lg m-[.3rem]">
            <h3 className="p-[.5rem] hover:underline text-lg text-white"><a href="https://www.linkedin.com/company/rutgers-newark-gs-lsamp/mycompany/" target="_blank">LinkedIn</a></h3>
          </div>
          <div className="bg-gradient-to-b from-purple-600 via-pink-600 to-yellow-400 rounded-lg m-[.3rem]">
            <h3 className="p-[.5rem] hover:underline text-lg text-white"><a href="https://www.instagram.com/lsamp.newark/" target="_blank">Instagram</a></h3>
          </div>
          <div className="bg-[#9D1739] rounded-lg m-[.3rem]">
            <h3 className="p-[.5rem] hover:underline text-lg text-white"><a href="https://raiderlink.newark.rutgers.edu/organization/lsamp" target="_blank">Raiderlink</a></h3>
          </div>
        </div>
      </main>



      <section className="club-section-container">
          <div className="section-subheader mx-4 md:mx-8 lg:mx-16">
            <h2 className="text-3xl font-bold text-neutral-800">Club Info</h2>
            <hr/>
          </div>
          <div className="flex flex-cols">
            <p id="club-paragraph" className="subsection-paragraph text-base md:text-lg w-1/2">
              The GS-LSAMP Club at Rutgers Newark is a student organization affiliated with GS-LSAMP. Its roots lie in the pursuit of academic excellence in science, technology, engineering, and mathematics (STEM) fields.
            </p>

            <div className="w-1/2 flex items-center">
              <Carousel images={images} />
            </div>
          </div>
      </section>
      <section className="about-events-container">
        <div className="section-subheader mx-4 md:mx-8 lg:mx-16">
          <h2 className="text-3xl font-bold text-neutral-800">Events</h2>
          <hr/>
        </div>
        <div id="event-container" className="grid md:grid-cols-3 mx-4  md:mx-16 gap-2">
          <EventInfoCard isUpcoming={true}/>
        </div> 
      </section> 
      <section className="staff-section-container">
        <div className="section-subheader mx-4 md:mx-8 lg:mx-16">
          <h2 className="text-3xl font-bold text-neutral-800">Staff</h2>
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
            picture={sanMiguel}
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
   
    </>
  );
}
  