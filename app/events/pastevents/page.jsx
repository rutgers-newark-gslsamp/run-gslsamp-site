'use client'

import { useEffect, useState } from 'react';
import FetchPast from '../../../src/components/FetchPast.js'
import Title from '../../../src/components/Title.tsx'
import pic2 from '../../../public/event-photos/image2.jpg'
import pic3 from '../../../public/event-photos/image3.jpg'
import Carousel from '../../../src/components/Carousel.js';
import BackArrow from '../../../src/components/BackArrow.js';


export default function PastEvents(){
    const [ pastEvent, setPastEvent ] = useState([])
    const images = [pic2, pic3];

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
        setPastEvent(resp.resultPastEvents)
        console.log(pastEvent)
      }
    }

    //run once 
    useEffect(() => {
      getEvents()
    }, [])


    return (
      <>
        <div className='flex flex-cols flex items-center'>
          <div className='pt-[1rem]'>
            <BackArrow isVisible={true}/>
          </div>
          <Title name={"Past Events"}/>
        </div>

        <section className='border-2 border-gray-300 p-[1rem] rounded-xl bg-gradient-to-r from-gray-200 to-gray-400'>
          <Carousel images={images} />
        </section>
         <FetchPast />     
      </>
    )
}