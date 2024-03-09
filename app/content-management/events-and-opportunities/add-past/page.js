'use client'

import Header from "../../../../src/components/Header";
import "../../../styles/cms-globals.css";
import { useState } from "react";

export default function Add_Past() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('/api/past-events/addPastEvent', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    date,
                    description
                }),
            });
    
            if (response.ok) {
                alert('Event added successfully.');
    
                //reset the form
                setTitle("")
                setDate("")
                setDescription("")
                
            } else {
                alert('Failed to add event.');
            }
        } catch (error) {
            alert('Error adding event:', error);
        }
    };
    

    return (
        <>
            <Header pageTitle="Modify: Events & Opportunities" back={true} />
            <h2 className="subheading">You are adding a past event.</h2>
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
                            <button id="stu-btn" className='btn' type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
