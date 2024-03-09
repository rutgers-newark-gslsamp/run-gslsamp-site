'use client'

import { useState } from "react";
import Header from "../../../../src/components/Header";
import "../../../styles/cms-globals.css";


export default function Add_Resource() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [linkName, setLinkName] = useState('')
    const [link, setLink] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        //sending data to /pages/api/contact.ts
        const res = await fetch('/api/student-resources/addResource', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                title,
                description,
                linkName,
                link
            }),
        });

        //getting response from api
        const msg = await res.json()

        //response handling
        if (res.ok) {
            alert(msg.response)
            
            //reset the form
            setTitle("")
            setDescription("")
            setLinkName("")
            setLink("")
            
        }
        if(!res.ok){
            alert(msg.response)
        }

    };

    return (
        <> 
            <Header pageTitle="Modify: Student Resources" back={true} />
            <h2 className="subheading">You are adding a resource.</h2>
            <div className="container-center">
                <form onSubmit={handleSubmit} className="container-form">
                    <div className="items">
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="title">Resource Title</label>
                                <input
                                    onChange={e => setTitle(e.target.value)}
                                    value={title}
                                    type="text"
                                    id="title"
                                    placeholder="Title"
                                    required
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="description">Resource Description</label>
                                <textarea
                                    onChange={e => setDescription(e.target.value)}
                                    value={description}
                                    id="description"
                                    placeholder="Description"
                                    required
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="linkName">Link Name</label>
                                <input
                                    onChange={e => setLinkName(e.target.value)}
                                    value={linkName}
                                    type="text"
                                    id="linkName"
                                    placeholder="Link Name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="link">Link</label>
                                <input
                                    onChange={e => setLink(e.target.value)}
                                    value={link}
                                    type="text"
                                    id="link"
                                    placeholder="Link"
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
    )
}