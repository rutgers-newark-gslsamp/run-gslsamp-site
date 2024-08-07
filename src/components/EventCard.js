'use client'

import { dateConvert, timeConvert } from './dateTime'
import React, { useState, useEffect } from 'react';

export default function EventCard({ isUpcoming }) {
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState(null);
    const [showDescriptions, setShowDescriptions] = useState([]);

    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        fetch('/api/events')
            .then((response) => response.json())
            .then((result) => {
                setLoading(false);
                if (isUpcoming) {
                    const temp = result.resultPres?.filter((event) => event.date >= today);
                    temp.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort upcoming events in ascending order
                    setEvents(temp || []);
                } else {
                    const temp = result.resultPast?.filter((event) => event.date < today);
                    temp.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort past events in descending order
                    setEvents(temp || []);
                }

                // Initialize showDescriptions array with false values for each event
                setShowDescriptions(Array(result.resultPres?.length || 0).fill(false));
            })
            .catch((error) => {
                setLoading(false);
                console.log('Error:', error);
            });
    }, [isUpcoming, today]);


    const toggleDescription = (index) => { // Toggle the value for the clicked event index
        setShowDescriptions((prev) => {
            const updatedDescriptions = [...prev];
            updatedDescriptions[index] = !updatedDescriptions[index];
            return updatedDescriptions;
        });
    };

    return (
        <div className="events_container">
            {loading ? (
                <p>Loading...</p>
            ) : events === null ? (
                <p className="text-lg">Events being planned, come back soon!</p>
            ) : events.length === 0 ? (
                <p className="text-lg">No events found.</p>
            ) : (
                events.map((e, index) => (
                    <div className="event_card_outer" key={index}>
                        <div className="event_card_inner">
                            <h3 className="event_card_title">{e.title}</h3>
                            <div className="event_card_details">
                                <p className='font-bold'>{timeConvert(e.startTime, e.date)} - {timeConvert(e.endTime, e.date)} <br/> {dateConvert(e.date)}</p>
                                <p>{e.building}, Room {e.room}</p>
                                <p>{e.location}</p>
                            </div>
                            {showDescriptions[index] && (
                                <div className="text-black bg-[#F1F1F1] border-t-2 p-[.5rem]">
                                    {e.description}
                                    <div className="flex justify-end">
                                        <button className="bg-[#767676] px-[1rem] py-[.5rem] rounded-lg text-white font-bold">
                                            <a href={e.link} target='_blank'>{e.linkName}</a>
                                        </button>
                                    </div>
                                </div>
                            )}
                            <button onClick={() => toggleDescription(index)} className="event_card_button">
                                {showDescriptions[index] ? 'Hide Details' : 'Show Details'}
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
// If Failure occurs, I will restore code. cntrl + F, "Original EventCard.js", Notes Doc