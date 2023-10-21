'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);
      
        const data = {
          fname: String(event.target.fname.value),
          lname: String(event.target.lname.value),
          email: String(event.target.email.value),
          inquiry: String(event.target.inquiry.value),
          message: String(event.target.message.value),
        };
        
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        if (response.ok) {
            alert("Message sent succesfully")
            setLoading(false)
            //reset the form
            event.target.fname.value = "";
            event.target.lname.value = "";
            event.target.email.value = "";
            event.target.message.value = "";
            
        }
        if(!response.ok){
          alert("Error sending message")
          setLoading(false)
        }
      }
    return (
      <div>
            <section className="flex justify-center items-center h-screen">
                <form onSubmit={handleSubmit} className="bg-gray-300 rounded shadow-lg w-[300px] minw-[200px] sm:w-[800px] pl-[12.5%] py-5">
                    <legend className='text-lg pb-3'>Contact Inquiry</legend>
                    <fieldset>
                        <div className='form-div'>
                            <label className="form-label" htmlFor="fname">First Name</label>
                            <input className="form-input" type="text" required pattern="[a-zA-Z]{3,20}" id="fname"/>
                        </div>

                        <div className='form-div'>
                            <label className="form-label" htmlFor="lname">Last Name</label>
                            <input className="form-input" type="text" required pattern="[a-zA-Z]{3,20}" id="lname"/>
                        </div>
                    
                        <div className='form-div'>
                            <label className='form-label' htmlFor="email">Email</label>
                            <input
                                className="form-input"
                                type="text"
                                required
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                id="email"
                            />
                        </div>
                        
                        <div className='form-div'>
                            <label className='form-label'>Inquiry</label>
                            <select className="form-input" required id="inquiry" aria-label="inquiry">
                                <option value="General Question">General Question</option>
                                <option value="Looking for Opportunities">Looking for Opportunities</option>
                                <option value="Faculty Looking to Assist">Faculty Looking to Assist</option>
                            </select>
                        </div>

                        <div className='form-div'>
                            <label className='form-label' htmlFor="message">Message</label>
                            <textarea
                                className='form-input'
                                rows={5}
                                placeholder="How can we help you?"
                                required 
                                id="message"
                                minLength={10}
                                maxLength={250}
                            />
                        </div>
                    </fieldset>

                    <div className='form-div'>
                        <button
                            type="submit"
                            className="py-2 w-40 rounded-lg bg-red-700 text-white border-r-2 hover:scale-105 transition delay-50 active:scale-95 disabled:bg-red-300 "
                            >
                            Send Message
                        </button>
                    </div>
                </form>
            </section>
        </div>         
    );
}