










'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { dateConvert, timeConvert } from './dateTime';

export default function EventInfoCard({ isUpcoming }) {
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
                    setEvents(result.resultPres.filter((event) => event.date >= today));
                } else {
                    setEvents(result.resultPres.filter((event) => event.date < today));
                }
                setShowDescriptions(Array(result.resultPres.length).fill(false));
            })
            .catch((error) => {
                setLoading(false);
                console.log('Error:', error);
            });
    }, [isUpcoming, today]);

    const toggleDescription = (index) => {
        setShowDescriptions((prev) => {
            const updatedDescriptions = [...prev];
            updatedDescriptions[index] = !updatedDescriptions[index];
            return updatedDescriptions;
        });
    };

    return (
        <>
            <div className="flex">
                {loading ? (
                    <p>Loading...</p>
                ) : events === null ? (
                    <p className="text-lg">Events being planned, come back soon!</p>
                ) : (
                    events.map((e, index) => (
                        <Link href="/events" key={index}>
                            <a target="_blank" className="block max-w-[20rem] m-[1rem]">
                                <div className="flex flex-rows items-center m-2 md:m-4 p-2 bg-neutral-300 h-100 border-0 shadow rounded-lg">
                                    <div>
                                        <h3 className="text-lg font-bold">{e.title}</h3>
                                        <p className="font-bold">
                                            {timeConvert(e.startTime, e.date)} - {timeConvert(e.endTime, e.date)} | {dateConvert(e.date)}
                                        </p>
                                        <p>
                                            {e.building}, Room {e.room}
                                            <br />
                                            {e.location}
                                        </p>
                                    </div>
                                </div>
                                {/**<div className="card-footer">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScCKgqYLB5U3uixbzyC1ljbrw7XIyHIrZV8szsDfQTqA6Nbpg/viewform" className="btn btn-primary">RSVP!</a>
                                </div> **/}
                            </a>
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}
//Testing this code! I'll push to test EventCard link, if FAILURE, I will restore this code!