'use client'

import Title from '../components/Title'
import Carousel from '../components/Carousel'
import Link from 'next/link';
import FetchEvents from '../components/FetchEvents'
import Subtitle from '../components/Subtitle'
import pic1 from '../../public/event-photos/20221118_071909.jpg'
import pic2 from '../../public/event-photos/20221118_090330.jpg'
import pic3 from '../../public/event-photos/20221118_091611.jpg'



  export default function Events() {
    const images = [pic1, pic2, pic3]

    return (
      <main>
        <Title name={"EVENTS & OPPORTUNITIES"} />
        {/**AUTO SCROLLING IMAGES */}
        <section className='flex justify-center'>
          <Carousel images={images} />
        </section>
        
        <section className='m-8 p-4'>
          <Subtitle name="Upcoming Events"/>
          <FetchEvents isUpcoming={true}/>
        </section>

        <section className='m-8 p-4'>
          <Subtitle name="Recent Events"/>
          <FetchEvents isUpcoming={false}/>
        </section>

          {/**NEWSLETTER AND PAST EVENTS*/}
          <section className='grid grid-rows-2 m-8 p-4'>
            <Subtitle name="Weekly Newsletter" hasLink={true} link={"https://dailystoic.com/daily-stoic-email/"}/>
            <p className='pl-4 text-sm sm:text-[1.6rem]'>
              Learn about events, opportunities, workshops, access to tutoring and more!
            </p>
          </section>

          <section className='flex justify-center'>
            <h1 className="text-[1rem] sm:text-[2rem] justify-center flex font-bold mt-[4rem] w-1/3 hover:underline hover:scale-105 transition delay-75"><Link href='/events/pastevents'>Also check out our Past Events!</Link></h1>
          </section>
    </main>
    );
  }