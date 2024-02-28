'use client'

import { useEffect, useState } from 'react';
import FetchPast from '../../../src/components/FetchPast.js'
import Title from '../../../src/components/Title.js'
import BackArrow from '../../../src/components/BackArrow.js';



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
    <div className='flex flex-cols flex items-center'>
          <BackArrow />
        <Title name={"Past Events"}/>
      </div>
         <FetchPast />     
      </>
    )
}