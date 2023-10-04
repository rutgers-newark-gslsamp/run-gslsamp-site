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
            <div className='grid grid-flow-col grid-cols-4'>
              {
                event.map((e) => (
                  <div className='hover:scale-105 transition delay-75 m-[25px] p-[15px] shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] max-w-[22rem] max-h-[22rem]'>
                      <div className='relative z-10 min-w-[20rem] min-h-[20rem]'>
                        <p className='px-3 py-1 text-md m-3'>
                          {e.description}
                        </p>
                      </div>

                      <div className='relative bottom-[20rem] min-w-[15rem] min-h-[17rem] z-20 hover:opacity-0 transition delay-75 py-10 bg-white'>
                        <h1 className='underline text-xl p-5 text-[1.7rem] max-h-[7rem] min-h-[7rem]'>{e.title}</h1>
                        <p className='font-bold px-9 text-[1.15rem]'>{e.location}</p>
                        <p className='font-bold px-9 text-[1.15rem]'>{e.date}</p>
                        <p className='font-bold px-9 text-[1.15rem]'>{e.startTime} - {e.endTime}</p>
                      </div>
                  </div>
                ))
              
              }
          </div>
          
          {/**RECENT EVENTS*/}
          <div className=''>
            <span className='bg-white text-[2rem] flex pt-10 font-bold'>Recent Events</span>
            <hr className='h-[.2rem] max-w-[35vw] bg-[#D9D9D9]'/>

            {/**Placeholder */}
            <p className='px-9 m-9 text-center'>
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
      </>
    );
  }