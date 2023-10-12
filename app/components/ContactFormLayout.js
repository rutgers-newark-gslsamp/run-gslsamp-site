'use client';

import Image from 'next/image';
import mailIcon from '/public/mail-icon.png'
import Link from 'next/link';

export default function ContactForm() {
    
    return (
        <div className="flex justify-center items-center h-screen border border-black">
            <form className="bg-gray-300 rounded shadow-lg w-[300px] minw-[200px] sm:w-[800px] pl-[225px] pt-5">
                <legend>Contact Inquiry</legend>
                <fieldset>
                    <div className='form-div'>
                        <label className="form-label" htmlFor="fname">First Name</label>
                        <input className="form-input" type="text" autoComplete="off" id="fname"/>
                    </div>

                    <div className='form-div'>
                        <label className="form-label" htmlFor="lname">Last Name</label>
                        <input className="form-input" type="text" autoComplete="off" id="lname"/>
                    </div>
                
                    <div className='form-div'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input
                            className="form-input"
                            type="text"
                            autoComplete="off"
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
                            required id="message"
                            minLength={10}
                            maxLength={250}
                        />
                    </div>
                </fieldset>

                <div className='form-div'>
                    <button
                        type="submit"
                        className="px-4 py-2 w-40 m-4 rounded-lg bg-red-700 text-white border-r-2 hover:scale-105 transition delay-50 active:scale-95 disabled:bg-red-300 disabled:text-gray-200"
                        >
                        Send Message
                    </button>
                </div>

                <nav className='text-lg p-6 m-6 hover:underline'>
                    <Link href='/contact/faq'>Frequently Asked Questions</Link>
                </nav>
            </form>

            <figure className="border hidden">
                <Image
                    className=''
                    src={mailIcon}
                    alt='Mail Icon'
                    width={500}
                    height={500}
                />
            </figure>
        </div>
    );
}