'use client'

import Title from '../components/title'
import Image from 'next/image';
import placeHolder from '/public/placeholder.png'
import { useEffect, useState } from 'react';

{/**create component for events & pull data from database*/}

export default function Events() {
  //set useState
  const [ event, setEvent ] = useState([])

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
      console.log(resp.response)

      //set event(s)
      setEvent(resp.response)
    }
  }
  
  //run once 
  useEffect(() => {
    getEvents()
  }, [])

  //run on page startup once
//   useEffect(() => {
//     getTitles()
// }, [])
    return (
      <>
        <Title title={"EVENTS"} />
        
        <div className='grid grid-rows-4 m-8 p-4'>
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
        </div>
      </>
    );
  }