import React from "react";

const CtaBlock: React.FC = () => {
    return (
        <aside className="cta-block px-5 py-2.5 md:h-auto lg:flex-col lg:absolute lg:right-5 lg:p-5 lg:translate-y-[50%] lg:min-h-auto lg:min-w- lg:top-1/2 lg:w-1/3 lg:rounded-3xl 2xl:w-1/4 shadow-md bg-gradient-to-t from-red-900  to-red-600 ">
            {/*Box 1*/}
            <div className="cta-wrapper pr-3.5 md:pr-0 w-4/5 md:w-3/4 lg:m-3 lg:w-auto lg:h-auto text-white font-bold  md:text-md">
                <h2 id="landing-cta-headline" className="text-left text-lg flex-wrap flex-grow md:text-xl xl:text-2xl">Increasing the retention, graduation and success of underrepresented minorities STEM.</h2>
            </div>
            {/*Box 2*/}
            <nav className="cta-wrapper flex-col lg:flex-row gap-2 w-1/5 md:w-1/4 lg:w-full lg:h-auto">
                <button className="cta-button rounded border-4 border-white md:p-2 lg:h-14 lg:w-auto bg-white hover:bg-red-400  shadow-md">
                    <a className="text-black font-bold uppercase text-sm flex-grow md:text-lg" href="/membership">Join Now</a>
                </button>
                <button className="cta-button border-2 rounded border-white lg:h-14 md:p-2 lg:w-auto bg-red-700 hover:bg-neutral-400 shadow-md">
                    <a className="font-bold text-white uppercase text-sm flex-grow md:text-lg" href="/membership">Eligibility</a>
                </button>
            </nav>
        </aside>
    );
}

export default CtaBlock;