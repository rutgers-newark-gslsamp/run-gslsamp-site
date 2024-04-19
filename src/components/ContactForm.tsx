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
                <form onSubmit={handleSubmit} className="flex flex-col justify-center bg-neutral-200 rounded shadow-lg w-full md:w-4/5 lg:w-3/5">
                    <legend className='text-2xl p-4 font-extrabold text-left text-neutral-800 mb-2'>Contact Inquiry</legend>
                    <fieldset className='flex flex-col items-center justify-center'>
                        <div className="grid lg:grid-cols-2 w-full lg:w-5/6 xl:w-3/4 lg:mx-4">
                            <div className='form-div'>
                                <label className="form-label" htmlFor="fname">First Name</label>
                                <input className="w-4/5 lg:w-3/4 rounded-lg p-3 flex justify-center" type="text" required pattern="[a-zA-Z]{3,20}" id="fname"/>
                            </div>

                            <div className='form-div'>
                                <label className="form-label" htmlFor="lname">Last Name</label>
                                <input className="w-4/5 lg:w-3/4 rounded-lg p-3 flex justify-center" type="text" required pattern="[a-zA-Z]{3,20}" id="lname"/>
                            </div>
                        
                        </div>
                        <div className='form-div'>
                            <label className='form-label' htmlFor="email">Email</label>
                            <div className="flex justify-center"></div>
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
                            <select className="form-input bg-white hover:cursor-pointer" required id="inquiry" aria-label="inquiry">
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

                    <div className='form-div flex justify-center'>
                        <button
                            type="submit"
                            className="py-2 w-40 rounded-lg font-bold bg-blue-600 text-white border-r-2 hover:scale-105 transition delay-50 active:scale-95 disabled:bg-blue-300"
                            >
                            Send Message
                        </button>
                    </div>
                </form>
            </section>
        </div>         
    );
}