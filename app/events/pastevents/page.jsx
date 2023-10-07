'use client'

import { useEffect, useState } from 'react';
import FetchPast from '../../components/FetchPast'



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
        setPastEvent(resp.resultPast)
      }
    }

    //run once 
    useEffect(() => {
      getEvents()
    }, [])


    return (
      <>
        <h1 className="text-[3.2em] m-[3rem] flex font-bold my-7 drop-shadow-xl">PAST EVENTS</h1>
         <FetchPast />     
      </>
    )
}