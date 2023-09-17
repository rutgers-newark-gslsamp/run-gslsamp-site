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
        event.preventDefault();
        setLoading(true);
    
        const data = {
          fname: String(event.target.fname.value),
          lname: String(event.target.lname.value),
          email: String(event.target.email.value),
          inquiry: String(event.target.inquiry.options.value),
          message: String(event.target.message.value),
        };
    
        {/**check data - FIX DROPDOWN RETRIEVAL */}
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
          console.log(data)
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
                        <option value="general question">General Question</option>
                        <option value="looking for opportunities">Looking for Opportunities</option>
                        <option value="faculty looking to assist">Faculty Looking to Assist</option>
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

/**
 *  <div class="grid grid-cols-3">
      <div class="p-4 col-span-2 m-3">
        <div class="grid grid-cols-2 grid-rows-4">
          <div class="p-2 m-2 rounded-lg bg-gray-500">
            <label className="w-2/6" htmlFor="fname">First Name</label>
            <input className="w-3/4 rounded-lg p-3" type="text" autoComplete="off" id="fname"/>
          </div>
          <div class="p-2 m-2 rounded-lg bg-gray-500">
            <label className="w-2/6" htmlFor="lname">Last Name</label>
            <input className="w-3/4 rounded-lg p-3" type="text" autoComplete="off" id="lname"/>
          </div>
          <div class="p-2 m-2 rounded-lg bg-gray-500">
            <label htmlFor="email">Email</label>
            <input
              lassName="w-3/4 rounded-lg p-3"
              type="text"
              autoComplete="off"
              id="email"
            />
          </div>
          <div class="p-2 m-2 rounded-lg bg-gray-500">
            <label>Inquiry</label>
              <select className="w-3/4 rounded-lg p-3" required id="inquiry" aria-label="inquiry">
                <option value="general question">General Question</option>
                <option value="looking for opportunities">Looking for Opportunities</option>
                <option value="faculty looking to assist">Faculty Looking to Assist</option>
              </select>
          </div>
          <div class="p-2 m-2 rounded-lg bg-gray-500 col-span-2">
            <label htmlFor="message">Message*</label>
            <textarea
              className='rounded-lg p-3'
              rows={5}
              placeholder="How can we help you?"
              required id="message"
              minLength={10}
              maxLength={250}
            />
          </div>
          <div class="p-2 m-2 rounded-lg bg-gray-500">
            <button
              type="submit"
              className="px-4 py-2 w-40 m-4 rounded-lg bg-red-700 text-white border-r-2 hover:scale-105 transition delay-50 active:scale-95 disabled:bg-red-300 disabled:text-gray-200"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div class="p-4 col-span-1 m-3 rounded-lg bg-blue-500">
        IMAGE
      </div>
  </div>
 * 
 */

//OLD 
  /**
   * <div className='w-full items-center'>
          <form className="bg-gray-300 grid" onSubmit={handleSubmit}>
            <div className='w-full flex flex-row m-4'>
              <div className="w-1/6 flex flex-col m-4">
                <label className="w-2/6" htmlFor="fname">First Name</label>
                <input className="w-3/4 rounded-lg p-3" type="text" autoComplete="off" id="fname"/>
              </div>

              <div className="w-1/6 flex flex-col m-4">
                <label className="w-2/6" htmlFor="lname">Last Name</label>
                <input className="w-3/4 rounded-lg p-3" type="text" autoComplete="off" id="lname"/>
              </div>
            </div>

              <div className='w-full flex flex-row m-4'>
                <div className="w-1/6 flex flex-col m-4">
                    <label htmlFor="email">Email</label>
                    <input
                      className="w-3/4 rounded-lg p-3"
                      type="text"
                      autoComplete="off"
                      id="email"
                    />
                </div>
                <div className="w-1/6 flex flex-col m-4">
                  <label>Inquiry</label>
                      <select className="w-3/4 rounded-lg p-3" required id="inquiry" aria-label="inquiry">
                        <option value="general question">General Question</option>
                        <option value="looking for opportunities">Looking for Opportunities</option>
                        <option value="faculty looking to assist">Faculty Looking to Assist</option>
                      </select>
                </div>
              </div>

              <div className="w-2/6 flex flex-col m-4">
                <div className="w-full flex flex-col m-4">
                      <label htmlFor="message">Message*</label>
                          <textarea
                            className='rounded-lg p-3'
                            rows={5}
                            placeholder="How can we help you?"
                            required id="message"
                            minLength={10}
                            maxLength={250}
                          />
                </div>
              </div>

            <div className="m-4">
                  <button
                  type="submit"
                  className="px-4 py-2 w-40 m-4 rounded-lg bg-red-700 text-white border-r-2 hover:scale-105 transition delay-50 active:scale-95 disabled:bg-red-300 disabled:text-gray-200">Send Message</button>
            </div>
          </form>
        </div>
   */