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
        <Title title={"EVENTS & OPPORTUNITIES"} />
        {/**AUTO SCROLLING IMAGES */}
          <figure className='flex justify-center'>
            <Carousel images={images} />
          </figure>
        
        <div className='m-8 p-4'>
          <Subtitle name="Upcoming Events"/>
          <FetchEvents isUpcoming={true}/>
          
          <Subtitle name="Recent Events"/>
          <FetchEvents isUpcoming={false}/>

          {/**NEWSLETTER AND PAST EVENTS*/}
          <div className='grid grid-rows-2'>
            <Subtitle name="Newsletter" hasLink={true} link={"https://dailystoic.com/daily-stoic-email/"}/>
            <p className='text-center  text-[1.6rem]'>
              Learn about events, opportunities, workshops, access to tutoring and more!
            </p>

          </div>

          <div className='flex justify-center'>
            <h1 className="text-[2rem] justify-center flex font-bold mt-[4rem] p-7 w-1/3 hover:underline hover:scale-105 transition delay-75"><Link href='/events/pastevents'>Also check out our Past Events!</Link></h1>
          </div>
        </div>
    </main>
    );
  }