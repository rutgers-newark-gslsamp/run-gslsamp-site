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
        <div className="">
            {loading ? (
                <p>Loading...</p>
            ) : events === null ? (
                <p className="text-lg">Events being planned, come back soon!</p>
            ) : (
                events.map((e, index) => (
                    <div className="max-w-[20rem]" key={index}>
                        <div className="m-[1rem]">
                            <h3 className="rounded-t-xl bg-[#9D1739] text-white rounded-t-sm text-center font-bold px-[1rem] py-[.5rem]">{e.title}</h3>
                            <div className="bg-[#F1F1F1] p-[.5rem]">
                                <p className='font-bold'>{timeConvert(e.startTime, e.date)} - {timeConvert(e.endTime, e.date)} | {dateConvert(e.date)}</p>
                                <p>{e.location}</p>
                            </div>
                            {showDescriptions[index] && (
                                <div className="text-black bg-[#F1F1F1] border-t-2 p-[.5rem]">
                                    {e.description}
                                </div>
                            )}
                            <button onClick={() => toggleDescription(index)} className="rounded-b-xl bg-[#D3D3D3] w-full text-black font-bold px-[1rem] py-[.5rem]">
                                {showDescriptions[index] ? 'Hide Details' : 'Show Details'}
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}