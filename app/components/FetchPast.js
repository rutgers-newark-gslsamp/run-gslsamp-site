import React, { useState, useEffect } from 'react';
import { dateConvert, timeConvert } from './dateTime'

export default function FetchPast() {
    const [ loading, setLoading ] = useState(true);
    const [ events, setEvents ] = useState([])

    //run once
    useEffect(() => {
        fetch('/api/events')
            .then((response) => response.json())
            .then((result) => {
                setEvents(result.resultPast)
                setLoading(false)
            })
            .catch((error) => {
              console.log('Error:', error)
              setLoading(false)
            });            
    }, []);

    return(
        <ul className='grid sm:grid-flow-col sm:grid-cols-4 '>
            {loading ? (
                <p>Loading...</p>
            ) : events === null ? (
                <p>Events being planned, come back soon!</p>
            ) : (
                events.map((e) =>(
                    <li className='min-w-[10rem] min-h-[5rem] m-[20px] p-[7px] focus:scale-105 sm:min-w-[15rem] sm:min-h-[22rem] sm:m-[25px] sm:p-[15px] sm:hover:scale-105 transition delay-75 shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] text-black'>
                        <article className='relative z-10 w-[10rem] min-h-[10rem] sm:w-[20rem] sm:min-h-[20rem]'>
                            <p className='px-1 text-sm sm:text-md m-3'>
                            {e.description}
                            </p>
                        </article>

                        <article className='relative h-[9rem] w-[9rem] sm:bottom-[10rem] sm:w-[18rem] sm:h-[18rem] active:opacity-0 z-20 sm:py-10 sm:hover:opacity-0 transition delay-75 bg-white'>
                            <h1 className='underline text-sm p-2 sm:text-xl sm:p-5 sm:text-[1.7rem] sm:max-h-[7rem] sm:min-h-[7.5rem]'>
                                {e.title}
                            </h1>
                            <address>
                                <p className='font-bold py-3 sm:px-9 text-xs sm:text-[1.15rem]'>{e.location}</p>
                            </address>
                            <time>
                                <p className='font-bold px-9 text-xs sm:text-[1.15rem]'>{dateConvert(e.date)}</p>
                                <p className='font-bold px-9 text-xs sm:text-[1.15rem]'>{timeConvert(e.startTime, e.date)} - {timeConvert(e.endTime,e.date)}</p>
                            </time>
                        </article>
                    </li>
                ))
            )}
        </ul>
    )
}
