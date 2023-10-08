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

    return (
        <ul className='grid grid-flow-col grid-cols-4'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                events.map((e) =>(
                    <li className='hover:scale-105 transition delay-75 m-[25px] p-[15px] shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] max-w-[22rem] h-[22rem] text-black'>
                        <article className='relative z-10 w-[20rem] min-h-[20rem]'>
                            <p className='px-3 py-1 text-md m-3'>
                            {e.description}
                            </p>
                        </article>

                        <article className='relative bottom-[20rem] w-[17rem] h-[18rem] z-20 hover:opacity-0 transition delay-75 py-10 bg-white'>
                            <h1 className='underline text-xl p-5 text-[1.7rem] max-h-[7rem] min-h-[7.5rem]'>
                                {e.title}
                            </h1>
                            <address>
                                <p className='font-bold px-9 text-[1.15rem]'>{e.location}</p>
                            </address>
                            <time>
                                <p className='font-bold px-9 text-[1.15rem]'>{dateConvert(e.date)}</p>
                                <p className='font-bold px-9 text-[1.15rem]'>{timeConvert(e.startTime, e.date)} - {timeConvert(e.endTime,e.date)}</p>
                            </time>
                        </article>
                    </li>
                ))
            )}
        </ul>
    )   
}
