'use client'

import { useState, useEffect } from "react";
import "../../../styles/cms-globals.css";
import Header from "../../../../src/components/Header";


export default function Edit_Resource() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [linkName, setLinkName] = useState('')
    const [link, setLink] = useState('')

    //set useState for resource title being quieried 
    const [ resources, setResources ] = useState([])

    //selected resource
    const [ selection, setSelection ] = useState('')

    const [formEnabled, setFormEnabled] = useState(false);

    //set value of form
    function setForm(title="", description="", link="", linkName=""){
        setTitle(title)
        setDescription(description)
        setLink(link)
        setLinkName(linkName)
    }

    /** QUERY TITLES for stored resources */
    async function queryResources() {
        try {
            const response = await fetch('/api/student-resources/queryResources', {
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
            setResources(responseData.response);
        } catch (error) {
            alert(error.message);
        }
    }
    

    /**QUERY EVENT AND FILL FORM (queryResource) */
    async function loadResource(e) {
        e.preventDefault();
    
        try {
            const response = await fetch('/api/student-resources/loadResource', {
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
                responseData.response[0].description,
                responseData.response[0].linkName,
                responseData.response[0].link
            );
            setFormEnabled(true);
            console.log(responseData.response[0])
        } catch (error) {
            alert(error.message);
        }
    }
    

    /**SEND FORM DATA TO API (editResource)*/
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch('/api/student-resources/editResource', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                title,
                description,
                linkName,
                link
            }),
        });

        //get response json
        const resp = await response.json()

        if (!response.ok) {
            alert(resp.msg)
            
        } else {
            alert(resp.msg)

            //reset the form
            setForm()
        }
    };

    async function removeResource(e) {
        e.preventDefault();
    
        // Ask for confirmation before proceeding
        const confirmRemove = window.confirm("Are you sure you want to remove this resource?");
    
        // If user confirms, proceed with removal
        if (confirmRemove) {
            const response = await fetch('/api/student-resources/removeResource', {
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
        queryResources();
    }, [])

    return (
        <>
            <Header pageTitle="Modify: Student Resources" back={true} />
            <h2 className="subheading">You are editing a resource.</h2>
            <div className="container-center">
                <div className="select-title-container">
                    <div className="item-title">
                        <form onSubmit={loadResource}>
                            <div className="select-dropdown">
                                <label htmlFor="title"><b>Select resource to edit</b></label>
                                <select className="dropdown" required onChange={e => setSelection(e.target.value)}>
                                    <option value={selection}>Select a resource</option>
                                    {
                                    resources.map((e) => (
                                        <option key={e.title} value={e.title}>{e.title}</option>
                                    ))
                                    }
                                </select>
                            </div>
                            <div id="stu-btn-container"  className="item">
                                <button id="stu-btn" className='btn' type="submit">Load Resource</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




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
                                    disabled={!formEnabled}
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
                                    disabled={!formEnabled}
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
                                    disabled={!formEnabled}
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
                                    disabled={!formEnabled}
                                    required
                                />
                            </div>
                        </div>
                        <div id="stu-btn-container"  className="item">
                            <button id="stu-btn" className='btn' type="submit">Update</button>
                            <button id="red-btn" className='btn' onClick={removeResource}>Remove</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}