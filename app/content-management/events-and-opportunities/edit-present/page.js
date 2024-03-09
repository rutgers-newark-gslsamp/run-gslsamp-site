'use client'

import "../../../styles/cms-globals.css";
import Header from "../../../../src/components/Header";
import { useState, useEffect } from "react";

export default function Edit_Present() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [building, setBuilding] = useState('');
    const [room, setRoom] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [linkName, setLinkName] = useState('');
    const [link, setLink] = useState('');
    const [selection, setSelection] = useState('');
    const [formEnabled, setFormEnabled] = useState(false);
    const [events, setEvents] = useState([]);

    //set value of form
    function setForm(title = "", location = "", building = "", room = "", date = "", startTime = "", endTime = "", description = "", linkName = "", link = "") {
        setTitle(title || ''); // Initialize with empty string if null
        setLocation(location || ''); // Initialize with empty string if null
        setBuilding(building || ''); // Initialize with empty string if null
        setRoom(room || ''); // Initialize with empty string if null
        setDate(date || ''); // Initialize with empty string if null
        setStartTime(startTime || ''); // Initialize with empty string if null
        setEndTime(endTime || ''); // Initialize with empty string if null
        setDescription(description || ''); // Initialize with empty string if null
        setLinkName(linkName || ''); // Initialize with empty string if null
        setLink(link || ''); // Initialize with empty string if null
    }
    

    /** QUERY TITLES for stored past events */
    async function queryEvent() {
        try {
            const response = await fetch('/api/present-events/queryEventPresent', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.msg);
            }

            const responseData = await response.json();
            setEvents(responseData.response);
        } catch (error) {
            alert(error.message);
        }
    }

    /**QUERY EVENT AND FILL FORM (queryEventPast) */
    async function loadEvent(e) {
        e.preventDefault();

        try {
            const response = await fetch('/api/present-events/loadEventPresent', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    selection
                }),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.msg);
            }

            const responseData = await response.json();

            alert(responseData.msg);
            setForm(
                responseData.response[0].title,
                responseData.response[0].location,
                responseData.response[0].building,
                responseData.response[0].room,
                responseData.response[0].date,
                responseData.response[0].startTime,
                responseData.response[0].endTime,
                responseData.response[0].description,
                responseData.response[0].linkName,
                responseData.response[0].link
            );
            
            setFormEnabled(true);
        } catch (error) {
            alert(error.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/present-events/editPresentEvent', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    date,
                    description,
                    location,
                    building,
                    room,
                    startTime,
                    endTime,
                    linkName,
                    link
                }),
            });

            if (response.ok) {
                alert('Event updated successfully.');

                //reset the form
                setForm("");

            } else {
                alert('Failed to update event.');
            }
        } catch (error) {
            alert('Error adding event:', error);
        }
    };

    async function removeEvent(e) {
        e.preventDefault();

        // Ask for confirmation before proceeding
        const confirmRemove = window.confirm("Are you sure you want to remove this resource?");

        // If user confirms, proceed with removal
        if (confirmRemove) {
            const response = await fetch('/api/present-events/removePresentEvent', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    selection
                }),
            });

            //get response json
            const resp = await response.json()

            if (!response.ok) {
                alert(resp.msg);
            } else {
                alert(resp.msg);

                //reset the form
                setForm();
            }
        }
    };

    /**Query resources at start of page */
    useEffect(() => {
        queryEvent();
    }, [])


    return (
        <>
            <Header pageTitle="Modify: Events & Opportunities" back={true} />
            <h2 className="subheading">You are editing a present event.</h2>
            <div className="container-center">
                <div className="select-title-container">
                    <div className="item-title">
                        <form onSubmit={loadEvent}>
                            <div className="select-dropdown">
                                <label htmlFor="title"><b>Select an event to edit</b></label>
                                <select className="dropdown" required onChange={e => setSelection(e.target.value)}>
                                    <option value={selection}>Select an event</option>
                                    {
                                        events.map((e) => (
                                            <option key={e.title} value={e.title}>{e.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div id="stu-btn-container" className="item">
                                <button id="stu-btn" className='btn' type="submit">Load Event</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container-center">
                <form className="container-form" onSubmit={handleSubmit}>
                    <div className="items">
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="event-title">Event Title</label>
                                <input
                                    type="text"
                                    id="event-title"
                                    name="title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="Title"
                                    disabled={!formEnabled}
                                    required
                                />
                            </div>
                        </div>

                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    disabled={!formEnabled}
                                    required
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="event-description">Description</label>
                                <textarea
                                    id="event-description"
                                    name="description"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Description"
                                    disabled={!formEnabled}
                                    required
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={location}
                                    onChange={e => setLocation(e.target.value)}
                                    placeholder="Location"
                                    disabled={!formEnabled}
                                    required
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="building">Building</label>
                                <input
                                    type="text"
                                    id="building"
                                    name="building"
                                    value={building}
                                    onChange={e => setBuilding(e.target.value)}
                                    placeholder="Building"
                                    disabled={!formEnabled}
                                    required
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="room">Room #</label>
                                <input
                                    type="text"
                                    id="room"
                                    name="room"
                                    value={room}
                                    onChange={e => setRoom(e.target.value)}
                                    placeholder="Room #"
                                    disabled={!formEnabled}
                                    required
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div id="side-by-side">
                                <div id="start-time" className="text-input">
                                    <label htmlFor="start-time">Start Time</label>
                                    <input
                                        type="time"
                                        id="start-time"
                                        name="start-time"
                                        value={startTime}
                                        onChange={e => setStartTime(e.target.value)}
                                        disabled={!formEnabled}
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
                                        onChange={e => setEndTime(e.target.value)}
                                        disabled={!formEnabled}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="link-name">Link Name</label>
                                <input
                                    type="text"
                                    id="link-name"
                                    name="link-name"
                                    value={linkName}
                                    onChange={e => setLinkName(e.target.value)}
                                    placeholder="Link Name"
                                    disabled={!formEnabled}
                                    required
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="link">Link</label>
                                <input
                                    type="text"
                                    id="link"
                                    name="link"
                                    value={link}
                                    onChange={e => setLink(e.target.value)}
                                    placeholder="Link"
                                    disabled={!formEnabled}
                                    required
                                />
                            </div>
                        </div>
                        <div id="stu-btn-container" className="item">
                            <button id="stu-btn" className='btn' type="submit">Update</button>
                            <button id="red-btn" className='btn' onClick={removeEvent}>Remove</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
