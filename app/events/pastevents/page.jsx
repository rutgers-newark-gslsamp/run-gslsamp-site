'use client'

import { useEffect, useState } from 'react';
import { dateConvert } from '../../components/dateConvert'



export default function PastEvents(){
    const [ pastEvent, setPastEvent ] = useState([])


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
        console.log(resp.responsePast)

        //set event(s)
        setPastEvent(resp.responsePast)
      }
    }

    //run once 
    useEffect(() => {
      getEvents()
    }, [])


    return (
      <>
        <h1 className="text-[3.2em] m-[3rem] flex font-bold my-7 drop-shadow-xl">PAST EVENTS</h1>

              {
                pastEvent.map((e) => (
                <div className='ml-10'>
                  <h1 className='underline text-xl p-7 text-[1.7rem]'>{e.title}</h1>
                  <p className='font-bold px-9 text-[1.15rem]'>{e.location}</p>
                  <p className='font-bold px-9 text-[1.15rem]'>{dateConvert(e.date)}</p>
                  <p className='px-9 text-[1.30rem]'>
                    {e.description}
                  </p>
                </div>
                ))
              }   
    </>
  )
}