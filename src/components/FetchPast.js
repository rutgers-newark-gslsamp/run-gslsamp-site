import React, { useState, useEffect } from 'react';
import { dateConvert, timeConvert } from './dateTime'

export default function FetchPast() {
    const [ loading, setLoading ] = useState(true);
    const [ events, setEvents ] = useState([]);
    const [showDescriptions, setShowDescriptions] = useState([]);

    //run once
    useEffect(() => {
        fetch('/api/events')
            .then((response) => response.json())
            .then((result) => {
                if (result.resultPastEvents) {
                    setEvents(result.resultPastEvents);
                    setShowDescriptions(Array(result.resultPastEvents.length).fill(false));
                } else {
                    // Handle case where result.resultPastEvents is null or undefined
                    console.error('result.resultPastEvents is null or undefined');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
            });            
    }, []);

    const toggleDescription = (index) => {
        // Toggle the value for the clicked event index
        setShowDescriptions((prev) => {
            const updatedDescriptions = [...prev];
            updatedDescriptions[index] = !updatedDescriptions[index];
            return updatedDescriptions;
        });
    };
    

    return(
        <div className="pl-[3rem]">
            {loading ? (
                <p className="pl-[4rem]">Loading...</p>
            ) : events.length === 0 ? (
                <p className="text-lg pl-[4rem]">Events being added, come back soon!</p>
            ) : (
                events.map((e, index) => (
                    <div className="max-w-[20rem]" key={index}>
                        <div className="m-[1rem]">
                            <h3 className="rounded-t-xl bg-[#9D1739] text-white rounded-t-sm text-center font-bold px-[1rem] py-[.5rem]">{e.title}</h3>
                            <div className="bg-[#F1F1F1] p-[.5rem]">
                                <p className='font-bold'>{dateConvert(e.date)}</p>
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