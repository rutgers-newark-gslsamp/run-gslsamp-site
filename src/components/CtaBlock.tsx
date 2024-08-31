import React from "react";

const CtaBlock: React.FC = () => {
    return (
        <aside className="cta-block flex flex-row w-full h-1/3 px-5 py-2.5 items-center md:h-fit lg:flex-col lg:absolute lg:right-5 lg:top-1/2 lg:h-auto lg:w-1/3 lg:rounded-3xl shadow-md bg-gradient-to-t from-red-900  to-red-600 ">
            {/*Box 1*/}
            <div className="cta-headline flex flex-shrink justify-center pr-3.5 md:pr-0 lg:pr-0 w-4/5 md:w-3/4 lg:m-3 lg:w-auto lg:h-auto text-white font-bold text-base md:text-md">
                <h2 id="landing-cta-headline" className="text-left text-lg flex-grow md:text-xl xl:text-2xl">Increasing the retention, graduation and success of underrepresented minorities STEM.</h2>
            </div>
            {/*Box 2*/}
            <div className="cta-buttons flex flex-shrink justify-center w-1/5 md:w-1/4 lg:w-full lg:h-1/3">
                <nav className="flex flex-col flex-shrink lg:flex-row gap-2">
                    <button className="flex flex-shrink max-w-md h-auto p-1.5 md:p-2 lg:h-14 lg:w-full bg-white hover:bg-neutral-300 border-2 border-white rounded shadow-md">
                        <a className="text-black font-bold uppercase text-sm flex-grow md:text-lg" href="/membership">Join Now</a>
                    </button>
                    <button className="flex max-w-md h-auto lg:h-14 p-1.5 md:p-2 lg:w-full hover:underline bg-red-700 hover:bg-red-800 rounded border-2 border-white shadow-md">
                        <a className="font-bold text-white uppercase text-sm flex-grow md:text-lg" href="/membership">Eligibility</a>
                    </button>
                </nav>
            </div>
        </aside>
    );
}

export default CtaBlock;