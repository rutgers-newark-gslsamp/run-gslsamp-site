'use client'

import "../../../styles/cms-globals.css";
import Header from "../../../../src/components/Header";
import { useState, useEffect } from "react";

export default function Add_Past() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [ selection, setSelection ] = useState('')
    const [formEnabled, setFormEnabled] = useState(false);
    const [ events, setEvents ] = useState([])

    //set value of form
    function setForm(title="", date="", description=""){
        setTitle(title)
        setDate(date)
        setDescription(description)
    }

    /** QUERY TITLES for stored past events */
    async function queryEvent() {
        try {
            const response = await fetch('/api/past-events/queryEventPast', {
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
            const response = await fetch('/api/past-events/loadEventPast', {
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
                responseData.response[0].date,
                responseData.response[0].description,
            );
            setFormEnabled(true);
        } catch (error) {
            alert(error.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('/api/past-events/editPastEvent', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    date,
                    description
                }),
            });
    
            if (response.ok) {
                alert('Event updated successfully.');
    
                //reset the form
                setTitle("")
                setDate("")
                setDescription("")
                
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
            const response = await fetch('/api/past-events/removePastEvent', {
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
            <h2 className="subheading">You are editing a past event.</h2>
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
                            <div id="stu-btn-container"  className="item">
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
                                    type="month" 
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
                        {/*<div className="item">
                            <div className='cms-text-input'>
                                <label htmlFor="image">Upload Image</label>
                                <input 
                                    type="file" 
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                />
                            </div>
                        </div>*/}
                        <div id="stu-btn-container"  className="item">
                            <button id="stu-btn" className='btn' type="submit">Update</button>
                            <button id="red-btn" className='btn' onClick={removeEvent}>Remove</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
