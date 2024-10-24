'use client'

import Title from '../../src/components/Title.tsx';

export default function Faculty() {
    return(
        <>
            <Title name={"For Interested Faculty"} />
            <p className='whitespace-normal mx-8 md:mx-16 lg:mx-28'>
                The Garden-State Louis Stokes Alliance for Minority Participation (GS-LSAMP) has been supported by the National Science Foundation since 2009. Its mission has been to increase the interest, retention, and graduation and success of students from racial and ethnic groups that are historically underrepresented in STEM fields. As part of Phase III of the program (2019-2024), one of the program goals is to increase the number of LSAMP scholars continuing to graduate school.
                <br/><br/>
                Undergraduate research is an essential activity for students to gain the skills and motivation required to pursue and complete their PhD and embark on a research career. We are seeking STEM faculty mentors who will provide our scholars with inspiration, encouragement, and an excellent research experience. Faculty members from any 4-year accredited colleges and universities are also invited to apply to serve as research mentors to LSAMP scholars. 
                <br/><br/>
                Faculty members interested in serving as research mentors for LSAMP scholars are invited to submit project descriptions here. 
                <br/><br/>
                We will provide students with a brief description of the research performed in your laboratory as well as a description of a specific research project. You will have the opportunity to meet and interview interested students before agreeing to serve as a mentor. 
                <br/><br/>
                We are seeking faculty from any 4-year accredited colleges and universities nationally and internationally. 
                <br/><br/>
                Faculty can also recommend <a className='underline italic text-red-800 font-medium hover:text-blue-800' href='/membership' target='_blank'>eligible</a> students for the LSAMP program by directing them to our application page.   
                <br/><br/>
                If you'd like to learn more about the GS-LSAMP program, don't hesitate to reach out to us through our <span className='underline italic text-red-800 hover:text-blue-800'><a className='font-medium' href='/contact'>contact form</a></span>.
               
                The Garden-State Louis Stokes Alliance for Minority Participation (GS-LSAMP) has been supported by the National Science Foundation since 2009. Its mission has been to increase the interest, retention, and graduation and success of students from racial and ethnic groups that are historically underrepresented in STEM fields. As part of Phase III of the program (2019-2024), one of the program goals is to increase the number of LSAMP scholars continuing to graduate school.
                <br/><br/>
                Undergraduate research is an essential activity for students to gain the skills and motivation required to pursue and complete their PhD and embark on a research career. We are seeking STEM faculty mentors who will provide our scholars with inspiration, encouragement, and an excellent research experience. Faculty members from any 4-year accredited colleges and universities are also invited to apply to serve as research mentors to LSAMP scholars. 
                <br/><br/>
                Faculty members interested in serving as research mentors for LSAMP scholars are invited to submit project descriptions here. 
                <br/><br/>
                We will provide students with a brief description of the research performed in your laboratory as well as a description of a specific research project. You will have the opportunity to meet and interview interested students before agreeing to serve as a mentor. 
                <br/><br/>
                We are seeking faculty from any 4-year accredited colleges and universities nationally and internationally. 
                <br/><br/>
                Faculty can also recommend <a className='underline italic text-red-800 font-medium hover:text-blue-800' href='/membership' target='_blank'>eligible</a> students for the LSAMP program by directing them to our application page.   
                <br/><br/>
                If you'd like to learn more about the GS-LSAMP program, don't hesitate to reach out to us through our <span className='underline italic text-red-800 hover:text-blue-800'><a className='font-medium' href='/contact'>contact form</a></span>.
               
            </p>

            
            <div className='md:ml-16 lg:ml-16 xl:ml-16 flex justify-center gap-4 mx-4 my-2'>
                <button className="flex-1 max-w-xs w-1/2 text-center bg-red-800 rounded-md p-2 mt-8 col-span-1 text-white font-bold shadow-md hover:scale-105 transition h-22">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdTgChA5iMoDNfKB6AEwei7fWAR1xoa6wA5niBYa78x0mCOIw/closedform" target='_blank' className="text-xs md:text-sm break-words">Mentor a GS-LSAMP Scholar <br className="md:hidden"/> in your lab</a>
                </button>

                <button className="flex-1 max-w-xs w-1/2 h-12 p-2 mt-8 hover:underline rounded-md border-4 border-red-800 shadow-md hover:scale-105 transition h-22">
                    <a className="flex items-center justify-center font-bold text-red-800 uppercase" href="/about" target='_blank'>Learn More</a>
                </button>
            </div>
            
            
        </>
    );
}