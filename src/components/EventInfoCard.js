'use client'

import React, { useState, useEffect } from 'react';
import { dateConvert, timeConvert } from './dateTime'


export default function EventInfoCard({isUpcoming}) {
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState(null);
    const [showDescriptions, setShowDescriptions] = useState([]);

    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        fetch('/api/events')
            .then((response) => response.json())
            .then((result) => {
                if (isUpcoming) {
                    setLoading(false);
                    setEvents(result.resultPres.filter((event) => event.date >= today));
                } else {
                    setLoading(false);
                    setEvents(result.resultPres.filter((event) => event.date < today));
                }
                // Initialize showDescriptions array with false values for each event
                setShowDescriptions(Array(result.resultPres.length).fill(false));
            })
            .catch((error) => {
                setLoading(false);
                console.log('Error:', error);
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
    return (
        <>
            <div className="">
            {loading ? (
                <p>Loading...</p>
            ) : events === null ? (
                <p className="text-lg">Events being planned, come back soon!</p>
            ) : (
                events.map((e, index) => (
                    <div className="max-w-[20rem]" key={index}>
                        <div className="m-[1rem]">
                            <div className="flex flex-rows ssitems-center m-2 md:m-4 p-2 bg-neutral-300 h-100 border-0 shadow rounded-lg">
                                {/**<img class="card-img-top" src="media/photos/research.jpg" width="300px" height="200px" alt="Research Conference Photo">-*/}
                                <div>
                                    <h3 className="text-lg font-bold">{e.title}</h3>
                                    <p>
                                        <p className='font-bold'>{timeConvert(e.startTime, e.date)} - {timeConvert(e.endTime, e.date)} | {dateConvert(e.date)}</p>
                                        {e.building}, Room {e.room}<br/>
                                        {e.location}
                                    </p>
                                </div>
                                {/*<div className="card-footer">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScCKgqYLB5U3uixbzyC1ljbrw7XIyHIrZV8szsDfQTqA6Nbpg/viewform" class="btn btn-primary">RSVP!</a>
                                    </div>*/}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
        </>
            
    )
}

