import React from "react";

const CtaBlock: React.FC = () => {
    return (
        <aside className="flex flex-row w-full h-1/3 flex-shrink px-5 pt-3 pb-2 lg:flex-col lg:absolute lg:bottom-5 lg:right-3 lg:max-w-1/2 lg:h-2/7 lg:w-1/3 lg:rounded-3xl xl:h-1/3 shadow-md bg-gradient-to-t from-red-900  to-red-600 gap-1 ">
            {/*Box 1 */}
            <div className="flex flex-shrink justify-center pr-3 lg:pr-0 w-4/5 md:w-3/4 lg:m-3 lg:w-auto lg:h-auto text-white font-bold text-base md:text-md xl:flex-grow cta-headline">
                <h2 className="text-left text-lg flex-grow md:text-xl" id="landing-cta-headline">Increasing the retention, graduation and success of underrepresented minorities STEM.</h2>
            </div>
            {/*Box 2 */}
            <div className="flex flex-shrink justify-center mr-3 md:mr-0 w-1/5 md:w-1/4 lg:w-full lg:h-1/3">
                <nav className="flex flex-col flex-shrink justify-items-center lg:flex-row gap-2 cta-button-wrapper ">
                    <button className="flex flex-shrink max-w-md h-auto p-1.5 md:p-4 lg:h-14 lg:w-full bg-white hover:bg-neutral-300 rounded shadow-md" id="cta-join-now-button">
                        <a className="text-black font-bold uppercase text-sm flex-grow md:text-lg " href="/membership">Join Now</a>
                    </button>
                    <button className="flex max-w-md h-auto flex-shrink lg:h-14 p-1.5 md:p-3 lg:w-full hover:underline bg-red-700 hover:bg-red-800 rounded border-2 border-white shadow-md" id="cta-learn-more-button">
                        <a className="font-bold text-white uppercase text-sm flex-grow md:text-lg flex-shrink" href="/membership">Eligibility</a>
                    </button>
                </nav>
            </div>
        </aside>  
    );
}

export default CtaBlock;