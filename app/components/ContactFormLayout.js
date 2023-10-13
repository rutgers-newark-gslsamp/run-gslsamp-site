'use client';

export default function ContactForm() {
    
    return (
        <div>
            <section className="flex justify-center items-center h-screen">
                <form className="bg-gray-300 rounded shadow-lg w-[300px] minw-[200px] sm:w-[800px] pl-[12.5%] py-5">
                    <legend className='text-lg pb-3'>Contact Inquiry</legend>
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
                            className="py-2 w-40 rounded-lg bg-red-700 text-white border-r-2 hover:scale-105 transition delay-50 active:scale-95 disabled:bg-red-300 "
                            >
                            Send Message
                        </button>
                    </div>
                </form>

             {/*<figure className="border hidden">
                    <Image
                        className=''
                        src={mailIcon}
                        alt='Mail Icon'
                        width={500}
                        height={500}
                    />
                </figure>*/}
            </section>
        </div>
    );
}