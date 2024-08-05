// staff images
import rabinovich from "../../public/staff-pictures/rabinovich.jpeg"
import sanMiguel from "../../public/staff-pictures/Dr_San_Miguel.jpg"
import gates from "../../public/staff-pictures/Dr_Gates.jpg"


// components
import Carousel from "../../src/components/Carousel";
import CarouselVideo from "../../src/components/CarouselVideo";
import StaffCard from "../../src/components/StaffCard";
import EventInfoCard from "../../src/components/EventInfoCard";
import Title from "../../src/components/Title.tsx";

// carousel images
import image1 from "../../public/club-carousel/image1.jpg";
import image2 from "../../public/club-carousel/image2.jpg";
import image3 from "../../public/club-carousel/image3.jpg";
import image4 from "../../public/club-carousel/image4.jpg";
import image5 from "../../public/club-carousel/image5.jpg";

import image11 from "../../public/club-carousel/Club_Carousel1.jpg";
import image12 from "../../public/club-carousel/Club_Carousel2.jpg";
import image13 from "../../public/club-carousel/Club_Carousel3.jpg";

export default function About() {

  // Array of Youtube video URLS
  const videos = [
    'https://youtu.be/oSkjtPdGvfc?si=MTyOX2l9vo8EAMkH',
    'https://youtu.be/PaEkpST0_W0?si=Pw0GxlP6-FqXUxuA',
    'https://youtube.com/shorts/vrIrUVbmjAg?si=pX6l4IFeFhQsSWy_'
  ];

  // Array of images for carousel
  const images = [image11, image12, image13];

  return (
    <>
      {/* ABOUT US */}
      <main className="about-description-container flex flex-col items-center">

        {/* Layer 1 */}
        <div>
          <Title name={"ABOUT US"} />

          <p id="about-paragraph" className="subsection-paragraph text-base mb-4 md:text-lg">
            The Louis Stokes Alliance for Minority Participation (LSAMP) program at Rutgers University–Newark is a non-medical science program sponsored by the National Science Foundation. The program is designed to increase the interest, retention, graduation, and success of students from racial and ethnic groups that are historically underrepresented in non-medical (STEM) fields (i.e. Black/African American, Hispanic/Latinx, American Indian/Alaska Native, Native Hawaiian/Pacific Islander). Now in Phase III of funding, the primary focus is to promote undergraduate research and post-baccalaureate studies in STEM fields.  The Rutgers Newark GS-LSAMP program is one of the eight members of the <a className="font-medium text-red-700 underline" href="http://gslsamp.rutgers.edu/" target="_blank">Garden State Louis Strokes Alliance for Minority Participation (GS-LSAMP)</a>
          </p>

          {/* TESTIMONIALS - MOBILE */}
          <div className="flex flex-col items-center sm:hidden">
              <div className="section-subheader">
                <h3 className="text-2xl font-semibold text-black pt-2">GS-LSAMP Scholars' Testimonials</h3>
              </div>
              <hr className="mobile_bar"/>
              

              <div className="w-1/2 flex flex-col items-center p-5">
                <CarouselVideo videos={videos} />
              </div>
            </div>
        </div>
        
        {/* Layer 2 */}
        <div className="flex flex-col sm:flex-row w-full items-center w-full sm:h-[672px]">
          
          {/* LEFT BLOCK */}
          <div className="flex flex-col sm:w-1/2 mt-0 mb-auto sm:w-[50%]">
            
            {/* FOLLOW US */}
            <div className="follow_us_container flex items-center subsection-paragraph pt-2 w-fullsm:mx-4 md:mx-8 lg:mx-16">
              <div className="flex items-center m-auto">
              <p className="p-[.5rem] text-lg md:text-xl font-bold text-center">Follow Us:</p>

              {/* LINKEDIN & INSTAGRAM BUTTONS */}
              <div className="flex flex-row items-center">
                <div className="bg-[#0A66C2] rounded-lg m-[.3rem] w-[100px]">
                  <h3 className="p-[.5rem] hover:underline text-lg text-white text-center"><a href="https://www.linkedin.com/company/rutgers-newark-gs-lsamp" target="_blank">LinkedIn</a></h3>
                </div>
                <div className="bg-gradient-to-b from-purple-600 via-pink-600 to-yellow-400 rounded-lg m-[.3rem] w-[100px]">
                  <h3 className="p-[.5rem] hover:underline text-lg text-white text-center"><a href="https://www.instagram.com/lsamp.newark/" target="_blank">Instagram</a></h3>
                </div>
              </div>
              </div>
              
            </div>
            
            <div className="flex flex-col items-center lg:flex-row">
              {/* CLUB INFO */}
              <div>      
                <div className="section-subheader pt-2 mx-4 md:mx-8 lg:mx-16">
                  <h2 className="text-3xl font-bold text-neutral-800">Club Info</h2>
                  <hr/>
                </div>

                <p className="subsection-paragraph text-base mx-4 md:mx-8 lg:mx-16 md:text-lg">
                  The GS-LSAMP Club at Rutgers Newark is a student organization affiliated with GS-LSAMP. Its roots lie in the pursuit of academic excellence in science, technology, engineering, and mathematics (STEM) fields.
                </p>
              </div>

              {/* JOIN US */}
              <div className="flex flex-row md:flex-col pt-4 mb-8 mr-12 ml-auto md:w-[60%] items-center">
                <p className="p-[.5rem] m-[.3rem] text-xl font-bold text-center">JOIN US:</p>
                <div className="rounded-lg m-[.3rem] bg-red-600 w-[150px] h-[50px]">
                  <h3 className="p-[.5rem] hover:underline text-lg text-white text-center"><a href="https://raiderlink.newark.rutgers.edu/organization/lsamp" target="_blank">Raiderlink</a></h3>
                </div>  
              </div>
            </div>

            <div className="flex flex-col items-center mb-8">
              <div className="w-[90%] subsection-paragraph">
                {/* IMAGES */}
                <Carousel images={images} />
              </div> 
            </div>

          </div>

          {/* RIGHT BLOCK */}
          <div className="flex flex-col sm:w-1/2 m-2 items-center lg:w-[50%] h-full">

            {/* TESTIMONIALS - PC */}
            <div className="flex flex-col items-center testimonial_container">
              <div className="section-subheader">
                <h3 className="text-2xl font-semibold text-black pt-2">GS-LSAMP Scholars' Testimonials</h3>
                <hr/>
              </div>

              <div className="w-1/2 flex flex-col items-center p-5">
                <CarouselVideo videos={videos} />
              </div>
            </div>
            
          </div>
        </div>

        {/* EVENTS */}
        <section className="about-events-container pb-4 pt-12 ml-0 mr-auto">
          <div className="section-subheader mx-4 md:mx-8 lg:mx-16">
            <h2 className="text-3xl font-bold text-neutral-800">Events</h2>
            <hr/>
          </div>
          <div id="event-container" className="grid md:grid-cols-3 mx-4 md:mx-16 gap-2">
            <EventInfoCard isUpcoming={true}/>
          </div> 
        </section> 
        
      </main>

      {/* STAFF */}
      <section className="staff-section-container pt-4">
        <div className="section-subheader mx-4 md:mx-8 lg:mx-16">
          <h2 className="text-3xl font-bold text-neutral-800">Staff</h2>
          <hr/>
        </div>
        <div id="staff-card-container" className="grid md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-16">
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
