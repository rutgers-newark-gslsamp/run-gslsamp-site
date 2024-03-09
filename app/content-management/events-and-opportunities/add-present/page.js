'use client'

import React, { useState } from 'react';
import "../../../styles/cms-globals.css";
import Header from '../../../../src/components/Header';

export default function Add_Present() {
    // State variables for each input field
    const [eventTitle, setEventTitle] = useState('');
    const [location, setLocation] = useState('');
    const [building, setBuilding] = useState('');
    const [room, setRoom] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');
    const [linkName, setLinkName] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/present-events/addPresentEvent', {
                method: 'POST',
                body: JSON.stringify({
                    eventTitle,
                    location,
                    building,
                    room,
                    date,
                    startTime,
                    endTime,
                    description,
                    linkName,
                    link
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                alert('Event added successfully.');

                // Reset the form
                setEventTitle('');
                setLocation('');
                setBuilding('');
                setRoom('');
                setDate('');
                setStartTime('');
                setEndTime('');
                setDescription('');
                setLinkName('');
                setLink('');
            } else {
                alert('Failed to add event.');
            }
        } catch (error) {
            console.error('Error adding event:', error);
            alert('Error adding event:', error);
        }
    };

    return (
        <>
            <Header pageTitle="Modify: Events & Opportunities" back={true} />
            <h2 className="subheading">You are adding a present event.</h2>
            <div className="container-center">
                <form className="container-form" onSubmit={handleSubmit}>
                    <div className="items">
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="event-title">Event Title</label>
                                <input 
                                    type="text" 
                                    id="event-title" 
                                    name="event-title" 
                                    value={eventTitle}
                                    onChange={(e) => setEventTitle(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        {/* Repeat the same pattern for other input fields */}
                        {/* Location */}
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="location">Location</label>
                                <input 
                                    type="text" 
                                    id="location" 
                                    name="location" 
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        {/* Building */}
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="building">Building</label>
                                <input 
                                    type="text" 
                                    id="building" 
                                    name="building" 
                                    value={building}
                                    onChange={(e) => setBuilding(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        {/* Room */}
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="room">Room #</label>
                                <input 
                                    type="text" 
                                    id="room" 
                                    name="room" 
                                    value={room}
                                    onChange={(e) => setRoom(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        {/* Date */}
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="date">Date</label>
                                <input 
                                    type="date" 
                                    id="date" 
                                    name="date" 
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        {/* Start and End Time */}
                        <div className="item">
                            <div id="side-by-side">
                                <div id="start-time" className="text-input">
                                    <label htmlFor="start-time">Start Time</label>
                                    <input 
                                        type="time" 
                                        id="start-time" 
                                        name="start-time" 
                                        value={startTime}
                                        onChange={(e) => setStartTime(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="text-input">
                                    <label htmlFor="end-time">End Time</label>
                                    <input 
                                        type="time" 
                                        id="end-time" 
                                        name="end-time" 
                                        value={endTime}
                                        onChange={(e) => setEndTime(e.target.value)}
                                        required 
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Description */}
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="event-description">Description</label>
                                <textarea 
                                    id="event-description" 
                                    name="event-description" 
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        {/* Link Name */}
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="link-name">Link Name</label>
                                <input 
                                    type="text" 
                                    id="link-name" 
                                    name="link-name" 
                                    value={linkName}
                                    onChange={(e) => setLinkName(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        {/* Link */}
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="link">Link</label>
                                <input 
                                    type="text" 
                                    id="link" 
                                    name="link" 
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        <div id="stu-btn-container"  className="item">
                            <button id="stu-btn" className='btn' type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
