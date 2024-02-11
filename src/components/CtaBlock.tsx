import React from "react";

const CtaBlock: React.FC = () => {
    return (
        <aside className="hero-cta-block flex flex-col items-center justify-center absolute lg:max-w-1/2 w-full md:w-2/5 lg:w-1/3 md:h-1/2 shadow-md rounded-3xl px-5 py-2 md:right-5 bg-gradient-to-t from-red-900 to-red-600">
            <div className="flex text-xl lg:text-3xl text-white font-bold text-left mr-4 cta-headline">
                <h2 id="landing-cta-headline">Increasing the retention, graduation and success of underrepresented minorities STEM.</h2>
            </div>
            <nav className="flex justify-center m-2 gap-3 cta-button-wrapper">
                <button className="w-1/3 h-14 p-2 lg:w-full bg-white hover:bg-neutral-300 rounded shadow-md" id="cta-join-now-button">
                    <a className="text-black font-bold uppercase" href="membership.html">Join Now</a>
                </button>
                <button className="w-1/3 h-14 p-2 lg:w-full hover:underline bg-red-700 hover:bg-red-800 rounded border-4 border-white shadow-md " id="cta-learn-more-button">
                    <a className="font-bold text-white uppercase" href="membership.html">Eligibility</a>
                </button>
            </nav>
        </aside>  
    );
}

export default CtaBlock;