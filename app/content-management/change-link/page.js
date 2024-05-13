'use client'

import { useState } from "react";
import Header from "../../../src/components/Header";
import "../../styles/cms-globals.css";

export default function ChangeLink() {
  const [link, setLink] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    //sending data to /pages/api/contact.ts
    const res = await fetch('/api/changelink', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            link
        }),
    });

    //getting response from api
    const msg = await res.json()

    //response handling
    if (res.ok) {
        alert(msg.msg)
        
        //reset the form
        setLink("")
        
    }
    if(!res.ok){
        alert(msg.msg)
    }

};

  return (
    <>
      <Header pageTitle="Modify: Application Link" back={true} />
      <div className="container-center">
          <form onSubmit={handleSubmit} className="container-form">
              <div className="items">
                  <div className="item">
                      <div className='text-input'>
                          <label htmlFor="title">Application Link</label>
                          <input
                              onChange={e => setLink(e.target.value)}
                              value={link}
                              type="text"
                              id="title"
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
  );
}