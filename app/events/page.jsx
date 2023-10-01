'use client'

import Title from '../components/title'
import Image from 'next/image';
import placeHolder from '/public/placeholder.png'
import { useEffect, useState } from 'react';
import Link from 'next/link';

{/**create component for events & pull data from database*/}

export default function Events() {
  //set useState
  const [ event, setEvent ] = useState([])
  const [ recentEvent, setRecentEvent ] = useState([])


  /**QUERY EVENTS */
  async function getEvents(){
    const response = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    //get response json
    const resp = await response.json()

    //response handling 
    if(!response.ok){
      //MISSIING set description to: No new events coming up. Be on the lookout!
      console.log(resp.msg)

    } else {
      console.log(resp.responsePres)

      //set event(s)
      setEvent(resp.responsePres)
    }
  }
  
  //run once 
  useEffect(() => {
    getEvents()
  }, [])

    return (
      <>
        <Title title={"EVENTS & OPPORTUNITIES"} />
        
        <div className='grid grid-rows-3 m-8 p-4'>
          {/**AUTO SCROLLING IMAGES */}
          <div className='flex justify-center'>
            <Image
              src={placeHolder}
              alt='Placeholder Image'
              height={500}
              width={500}
            />
          </div>

          <div className=''>
            <span className='bg-white text-[2rem] flex pb-7 pt-10 font-bold'>Upcoming Events</span>
              {
                event.map((e) => (
                <>
                  <h1 className='underline text-xl p-7'>{e.title}</h1>
                  <p className='font-bold px-9'>{e.location}</p>
                  <p className='font-bold px-9'>{e.date}</p>
                  <p className='font-bold px-9'>{e.startTime} - {e.endTime}</p>
                  <p className='px-9'>
                    {e.description}
                  </p>
                </>
                ))
              }
          </div>
          
          {/**RECENT EVENTS*/}
          <div className='border'>
            <span className='bg-white text-[2rem] flex pb-7 pt-10 font-bold'>Recent Events</span>
            {/**Placeholder */}
            <p className='px-9 text-center'>
              <i>We're still working on this check back soon</i>
            </p>
            {/**
              recentEvent.map((e) => (
              <>
                <h1 className='underline text-xl p-7'>{e.title}</h1>
                <p className='font-bold px-9'>{e.location}</p>
                <p className='font-bold px-9'>{e.date}</p>
                <p className='font-bold px-9'>{e.startTime} - {e.endTime}</p>
                <p className='px-9'>
                  {e.description}
                </p>
              </>
              ))
              */
            }
          </div>

          {/**NEWSLETTER AND PAST EVENTS*/}
          <div className='grid grid-rows-2'>

            <h1 className="text-[2rem]  flex font-bold my-7 hover:underline active:scale-90 transition delay-75">
                <a href='https://dailystoic.com/daily-stoic-email/' target='_blank'>Weekly Newsletter</a>

                
            </h1>

            <p className='text-center py-4'>
              Learn about events, opportunities, workshops, access to tutoring and more!
            </p>

          </div>

          <h1 className="text-[2rem] justify-center flex font-bold my-7 hover:underline active:scale-90 transition delay-75"><Link href='/events/pastevents'>Also check out our Past Events!</Link></h1>

        </div>
      </>
    );
  }