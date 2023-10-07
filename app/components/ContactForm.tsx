'use client';
{/**turns component into a client component
* meaning: requires client-side interactivity
* MUST BE PLACE ON LINE 1 */}

{/**MAKE FONT CONGRUENT*/}

import { useState } from 'react';
import Image from 'next/image';
import mailIcon from '/public/mail-icon.png'
import Link from 'next/link';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: any) {
        //the default action which belongs to the event will not occur
        event.preventDefault();
        setLoading(true);
      
        //object data, with infered type of string 
        const data = {
          //when the event occurs:
          //stringify the value from event given it's id
          //prop: "value"
          fname: String(event.target.fname.value),
          lname: String(event.target.lname.value),
          email: String(event.target.email.value),
          inquiry: String(event.target.inquiry.value),
          message: String(event.target.message.value),
        };
        
        //POST request to SERVER
        //contains stringified json object from event
        //await will wait for a PROMISE obj during async task
        //fetch(resource, {options})
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
        <form className="bg-gray-300 grid" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3">
              <div className="p-4 col-span-2 m-3">
                <div className="grid grid-cols-2 grid-rows-4">
                  <div className="flex flex-col p-2 m-2">
                    <label className="w-2/6" htmlFor="fname">First Name</label>
                    <input className="w-3/4 rounded-lg p-3" type="text" autoComplete="off" id="fname"/>
                  </div>
                  <div className="flex flex-col p-2 m-2">
                    <label className="w-2/6" htmlFor="lname">Last Name</label>
                    <input className="w-3/4 rounded-lg p-3" type="text" autoComplete="off" id="lname"/>
                  </div>
                  <div className="flex flex-col p-2 m-2">
                    <label htmlFor="email">Email</label>
                    <input
                      className="w-3/4 rounded-lg p-3"
                      type="text"
                      autoComplete="off"
                      id="email"
                    />
                  </div>
                  <div className="flex flex-col p-2 m-2">
                    <label>Inquiry</label>
                      <select className="w-3/4 rounded-lg p-3" required id="inquiry" aria-label="inquiry">
                        <option value="General Question">General Question</option>
                        <option value="Looking for Opportunities">Looking for Opportunities</option>
                        <option value="Faculty Looking to Assist">Faculty Looking to Assist</option>
                      </select>
                  </div>
                  <div className="flex flex-col p-2 m-2 col-span-2">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className='rounded-lg p-3'
                      rows={5}
                      placeholder="How can we help you?"
                      required id="message"
                      minLength={10}
                      maxLength={250}
                    />
                  </div>
                  <div className="flex flex-col p-2 m-2">
                    <button
                      type="submit"
                      className="px-4 py-2 w-40 m-4 rounded-lg bg-red-700 text-white border-r-2 hover:scale-105 transition delay-50 active:scale-95 disabled:bg-red-300 disabled:text-gray-200"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
            </div>
              <div className="p-4 col-span-1 m-3">
                <Image
                  className='flex justify-center items-center'
                  src={mailIcon}
                  alt='Mail Icon'
                  width={700}
                  height={700}
                  />
              </div>
            </div>
          </form>

          <div className='flex justify-center text-lg p-6 m-6 hover:underline'>
            <Link href='/contact/faq'>Frequently Asked Questions</Link>
          </div>
      </div>         
    );
}