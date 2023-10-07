'use client'

import Title from '../components/Title'
import Image from 'next/image';
import placeHolder from '/public/placeholder.png'
import Link from 'next/link';
import FetchEvents from '../components/FetchEvents'

  export default function Events() {

    return (
      <main>     
        <Title title={"EVENTS & OPPORTUNITIES"} />
        {/**AUTO SCROLLING IMAGES */}
          <div className='flex justify-center'>
            <Image
              src={placeHolder}
              alt='Placeholder Image'
              height={500}
              width={500}
            />
          </div>
        
        <div className='m-8 p-4'>

            <span className='bg-white text-[2rem] flex pt-10 font-bold'>Upcoming Events</span>
            <hr className='h-[.2rem] max-w-[35vw] bg-[#D9D9D9]'/>
            <FetchEvents isUpcoming={true}/>
          
            <span className='bg-white text-[2rem] flex pt-10 font-bold'>Recent Events</span>
            <hr className='h-[.2rem] max-w-[35vw] bg-[#D9D9D9]'/>
                <FetchEvents isUpcoming={false}/>

          {/**NEWSLETTER AND PAST EVENTS*/}
          <div className='grid grid-rows-2'>

            <h1 className="text-[2rem]  flex font-bold mt-3 hover:underline hover:scale-105 transition delay-75 w-1/4">
                <a href='https://dailystoic.com/daily-stoic-email/' target='_blank'>Weekly Newsletter</a>
            </h1>
            <hr className='h-[.2rem] max-w-[35vw] bg-[#D9D9D9]'/>

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