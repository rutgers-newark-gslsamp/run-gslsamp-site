'use client'

import Title from '../../src/components/Title'
import Carousel from '../../src/components/Carousel'
import Subtitle from '../../src/components/Subtitle'
import pic2 from '../../public/event-photos/20221118_090330.jpg'
import pic3 from '../../public/event-photos/20221118_091611.jpg'
import EventCard from '../../src/components/EventCard'



  export default function Events() {
    const images = [pic2, pic3]

    return (
      <main>
        <Title name={"EVENTS & OPPORTUNITIES"} />
        {/**AUTO SCROLLING IMAGES */}
        <section>
          <Carousel images={images} />
        </section>
        <div className='lg:grid lg:grid-cols-2'>
          <div>
            <section className='m-8 p-4'>
              <Subtitle name="Upcoming Events"/>
              <EventCard isUpcoming={true}/>
            </section>

            <section className='m-8 p-4'>
              <Subtitle name="Recent Events"/>
              <EventCard isUpcoming={false}/>
            </section>
          </div>

          {/**NEWSLETTER AND PAST EVENTS*/}
          <div className='flex items-center'>
            <section id='newsletter-cta-pc' className='flex justify-center'>
              <div className="flex flex-col items-center py-3 px-4 ml-10 rounded-3xl shadow-lg max-w-lg shadow-black/20 border">
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
                          <a className="text-base text-black font-semibold hover:underline px-2 py-1" href="https://docs.google.com/forms/d/e/1FAIpQLSdPVNYfpvLnqMP5R4Kl8gzXeqNEDDrcF9bGsIx_HfRMaAFWrA/viewform">Join now!</a>
                      </button>
                      <button className="bg-gray-50 border-4 border-gray-300 rounded text-xs max-w-sm max-h-12 mx-1 shadow-sm shadow-black/40">
                          <a className="text-base text-black font-semibold hover:underline px-2 py-1" href="/events/pastevents">Past Events</a>
                      </button>
                  </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }