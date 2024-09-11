'use client'

// COMPONENTS
import Title from '../../src/components/Title.tsx'
import Carousel from '../../src/components/Carousel'
import Subtitle from '../../src/components/Subtitle'
import EventCard from '../../src/components/EventCard'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// CAROUSEL IMAGES
import pic4 from '../../public/event-photos/Events_Carousel1v2.JPG'
import pic5 from '../../public/event-photos/Events_Carousel2v2.JPG'
import pic6 from '../../public/event-photos/Events_Carousel3v2.JPG'
import pic7 from '../../public/event-photos/Events_Carousel4v2.JPG'
import pic8 from '../../public/event-photos/Events_Carousel5.JPG'   // Taken out of rotation

// TEST EVENT BANNER
import testBanner from '../../public/test_event_banner.jpg'


  export default function Events() {
    const images = [pic4, pic5, pic6, pic7];

    const [showDescription1, setShowDescription1] = useState(false);
    const [showDescription2, setShowDescription2] = useState(false);
    const [showDescription3, setShowDescription3] = useState(false);
    const [showDescription4, setShowDescription4] = useState(false);

    return (
      <main>
        <Title name={"EVENTS & OPPORTUNITIES"} />
        {/**AUTO SCROLLING IMAGES */}
        <section>
          <Carousel images={images} />
        </section>

        <div className='flex flex-col lg:flex-row '>
          {/** LEFT BLOCK: Events (UNDER CONSTRUCTION)*/}
          <div className=' w-full lg:w-[60%]'>
            <div className='w-[95%]'>
              <section className='w-[30rem] md:w-[40rem] md:ml-auto md:mr-2 mt-12 pl-4'>

                <Subtitle name="Upcoming Events"/>
                  View all of our upcoming events at the <br />Rutgers University&mdash;Newark Academic Foundations Center!

                  {/* Link to AFC GSLSAMP events page */}
                  <a href="https://afc.newark.rutgers.edu/events/tag/gs-lsamp/" target='_blank' className='text-base text-black font-semibold hover:underline'>
                    <button className='rounded-lg border-4 border-gray-300 w-[10rem] h-[3rem] mr-10 mr-5 ml-auto mt-5 shadow-sm shadow-black/40 bg-gray-300'>
                      View Our Events
                    </button>
                  </a>
                

                {/* <EventCard isUpcoming={true}/> */}

                {/** 
                {/** Props for testing in dev 
                <div className='events_container'>

                  <div className="event_card_outer">
                    <div className="event_card_inner">
                      <h3 className="event_card_title">Plan For Success Workshop 8/26</h3>
                      <div className="event_card_details">
                        <p className='font-bold'>11AM - 1PM<br /> August 26, 2024</p>
                        <p>110 Warren Street, Room 148</p>
                        <p>Hybrid: Zoom/In Person</p>
                      </div>
                      {showDescription1 && (
                        <div className="text-black bg-[#F1F1F1] border-t-2 p-[.5rem]">
                          Identify your goals based on the outcomes you seek for the coming year. Create an actionable plan for reaching your goals, academically and professionally. Advance yourself towards your post graduation aspirations! Held in hybrid format in person and on Zoom. Dates: 8/13,14,&26
                          <div className="flex justify-end">
                              <button className="bg-[#767676] px-[1rem] py-[.5rem] rounded-lg text-white font-bold">
                                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNY51RF_R4dEtK087DOw0dGNQThMHdGQ8s9HICRN-5li9y7A/viewform" target='_blank'>REGISTER HERE</a>
                              </button>
                          </div>
                        </div>
                      )}
                      <button onClick={() => setShowDescription1(!showDescription1)} className="event_card_button">Show Details</button>
                    </div>
                  </div>

                  <div className="event_card_outer">
                    <div className="event_card_inner">
                      <h3 className="event_card_title">Academic Resources & Time Management Plan</h3>
                      <div className="event_card_details">
                        <p className='font-bold'>11:30AM - 12PM<br />September 9, 2024</p>
                        <p>110 Warren Street, Room 140</p>
                        <p>Learning Center</p>
                      </div>
                      {showDescription2 && (
                        <div className="text-black bg-[#F1F1F1] border-t-2 p-[.5rem]">
                          Take the semester by the horns: Learn about the resources for success offered on campus. Learn time management and prepare your work plan.
                          <div className="flex justify-end">
                            <button className="bg-[#767676] px-[1rem] py-[.5rem] rounded-lg text-white font-bold">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQWcXNf6BQJmGV7foKYH__RCo2vwa21fF27adT0lsGKnB5lg/viewform" target='_blank'>REGISTER HERE</a>
                            </button>
                          </div>
                        </div>
                      )}
                      <button onClick={() => setShowDescription2(!showDescription2)} className="event_card_button">Show Details</button>
                    </div>
                  </div>

                  <div className="event_card_outer">
                    <div className="event_card_inner">
                      <h3 className="event_card_title">Become a LinkedIn STAR</h3>
                      <div className="event_card_details">
                        <p className='font-bold'>11:30AM - 12PM<br />September 23, 2024</p>
                        <p>TBA, Room TBA</p>
                        <p>TBA</p>
                      </div>
                      {showDescription3 && (
                        <div className="text-black bg-[#F1F1F1] border-t-2 p-[.5rem]">
                          ~ Learn about networking ~ Make LinkedIn WORK FOR YOU! ~ Create a POWERFUL profile ~
                          <div className="flex justify-end">
                            <button className="bg-[#767676] px-[1rem] py-[.5rem] rounded-lg text-white font-bold">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSerVSgpL71AYH54xbFkhEjRsaqfFn8TLuWhLePy_4pCjQhdsQ/viewform" target='_blank'>REGISTER HERE</a>
                            </button>
                          </div>
                        </div>
                      )}
                      <button onClick={() => setShowDescription3(!showDescription3)} className="event_card_button">Show Details</button>
                    </div>
                  </div>

                  <div className="event_card_outer">
                    <div className="event_card_inner">
                      <h3 className="event_card_title">YEAR OPENING MEETING
                      </h3>
                      <div className="event_card_details">
                        <p className='font-bold'>9AM - 10:30AM<br />September 25, 2024</p>
                        <p>See Registration Form, Room TBA</p>
                        <p>Hybrid: Zoom/In Person</p>
                      </div>
                      {showDescription4 && (
                        <div className="text-black bg-[#F1F1F1] border-t-2 p-[.5rem]">
                          ~ Meet fellow GS-LSAMPers! ~ Learn about RESOURCES. ~ Maintain access to opportunities! ~
                          <div className="flex justify-end">
                            <button className="bg-[#767676] px-[1rem] py-[.5rem] rounded-lg text-white font-bold">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKfz0j6PbgOLTauO5vY4B1vgNkD7xfq9eOmcTSS27Oi_tqDw/viewform" target='_blank'>Detail + RSVP</a>
                            </button>
                          </div>
                        </div>
                      )}
                      <button onClick={() => setShowDescription4(!showDescription4)} className="event_card_button">Show Details</button>
                    </div>
                  </div>

                </div>
                */}
                
                
                
              </section>

              {/* <section className='m-8 p-4'>
                <Subtitle name="Recent Events"/>
                <EventCard isUpcoming={false}/>
              </section> */}
            </div>
          </div>

          {/** RIGHT BLOCK: NEWSLETTER AND PAST EVENTS*/}
          <div className='flex flex-col items-center w-full lg:w-[40%]'>
            <section id='newsletter-cta-pc' className='flex flex-col items-center mt-[10%] mx-auto sm:mr-[10%]'>
              <div className="flex flex-col items-center py-3 px-4 ml-auto sm:ml-10 rounded-3xl shadow-lg max-w-lg shadow-black/20 border">
                  
                  <div className="flex flex-col items-start text-base">
                      <h2 className="text-4xl font-bold my-1 px-1">Don't Miss An Event!</h2>
                      <p className="p-2 text-base">
                        Join our vibrant community and unlock a wealth of knowledge with our weekly newsletter! 
                        Discover exciting events, unique opportunities, transformative workshops, dedicated tutoring, and so much more, 
                        all tailored to fuel your growth. Don't miss out!
                      </p>
                  </div>    
                  
                  <div className="flex justify-evenly items-center">
                      <button className="bg-gray-300 border-4 border-gray-300 rounded text-xs max-w-sm max-h-12 mx-1 shadow-sm shadow-black/40">
                          <a className="text-base text-black font-semibold hover:underline px-2 py-1" href="/membership" target='_blank'>Join now!</a>
                      </button>
                      {/* <button className="bg-gray-50 border-4 border-gray-300 rounded text-xs max-w-sm max-h-12 mx-1 shadow-sm shadow-black/40">
                          <a className="text-base text-black font-semibold hover:underline px-2 py-1" href="/events/pastevents" target='_blank'>Past Events</a>
                      </button> */}
                  </div>

              </div>
            </section>
          </div>
        </div>

        
        
      </main>
    );
  }