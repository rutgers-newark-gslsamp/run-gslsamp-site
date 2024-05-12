'use client'

import Title from '../../src/components/Title.tsx';

export default function Faculty() {

    return(
        <>
            <Title name={"Faculty"} />
            <p className='whitespace-normal mx-8 md:mx-16 lg:mx-28'>
            The Garden-State Louis Stokes Alliance for Minority Participation (GS-LSAMP) has been supported by the National Science Foundation since 2009. Its mission has been to increase the interest, retention, and graduation and success of students from racial and ethnic groups that are historically underrepresented in STEM fields. As part of Phase III of the program (2019-2024), one of the program goals is to increase the number of LSAMP scholars continuing to graduate school.
            <br/><br/>Undergraduate research is an essential activity for students to gain the skills and motivation required to pursue and complete their PhD and embark on a research career. We are seeking STEM faculty mentors who will provide our scholars with inspiration, encouragement, and an excellent research experience. Faculty members from any 4-year accredited colleges and universities are also invited to apply to serve as research mentors to LSAMP scholars. 
            <br/><br/>Faculty members interested in serving as research mentors for LSAMP scholars are invited to submit project descriptions here. 
            <br/><br/>We will provide students with a brief description of the research performed in your laboratory as well as a description of a specific research project. You will have the opportunity to meet and interview interested students before agreeing to serve as a mentor. 
            <br/><br/>We are seeking faculty from any 4-year accredited colleges and universities nationally and internationally. 
            <br/><br/>Faculty can also recommend <a className='underline text-red-800 hover:text-blue-800' href='/membership' target='_blank'>eligible</a> students for the LSAMP program by directing them to our application page.   
            <br/><br/>If you would like more information about the LSAMP program, please feel free to contact us via email <span className='underline text-red-800 hover:text-blue-800'><a href='/contact'>oren.rabinovich@rutgers.edu</a></span> or by phone <span className='underline text-red-800'>(973) 353-3562</span>.   
            </p>

            <div className='md:ml-[4rem] lg:ml-[4rem] xl:ml-[4rem] flex justify-center'>
                {/* <button className=" min-w-[7rem] sm:w-[12rem] md:w-[12rem] lg:w-[12rem] xl:w-[12rem] text-center align-items-center bg-red-800 rounded-[.2rem] p-[.7rem] mt-[2rem] col-span-1 text-white font-bold drop-shadow-md hover:scale-105 transition">
                    <p className="drop-shadow-xl"><a href="/membership" target='_blank'>REGISTER TODAY!</a></p>
                </button> */}

                <div className='pl-[1rem]'>
                    <button className="w-[7rem] sm:w-[12rem] md:w-[12rem] lg:w-[12rem] min-h-[3rem] p-[.7rem] mt-[2rem] hover:underline rounded border-4 border-red-800 drop-shadow-md hover:scale-105 transition">
                        <a className="font-bold text-red-800 uppercase" href="/about" target='_blank'>Learn More</a>
                    </button>
                </div>
            </div>
        </>
    );
}