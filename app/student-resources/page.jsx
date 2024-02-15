'use client'

import Title from '../../src/components/Title'

export default function StudentResources() {
    return (
        <>
            <Title name={"STUDENT RESOURCES"} />
            <main className="">
                <div className="bg-gray-200 p-6 w-3/4 flex flex-col justify-center rounded-lg">
                    <section className="grid grid-cols-3 justify-items-center place-items-center gap-8 mt-2">
                        <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                            <div className="sr-button">ALEKS Boot Camp | Academic Success Boot Camp</div>
                            <div className='description-container'>
                                <p>
                                    ALEKS trains students based on their performance on an initial pre-test.
                                    As they complete the training daily, the math level gradually progresses to their desired level of achievement.
                                    Scores are recorded and displayed until mastery is reached. To participate in the LSAMP ALEKS boot camp, please contact a LSAMP coordinator.<br /><br />
                                    The academic success boot camp is a unique program designed for students who may be struggling academically. This boot camp helps students develop the following skills:
                                    <br /><br />Time Management
                                    <br />Increasing GPA
                                    <br />Essential Study Skills
                                </p>
                            </div>
                            <button className='link-button'><a href='/contact'>Learn More</a></button>
                        </div>

                        <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                            <div className="sr-button">Visit the RU-Newark Learning Center</div>
                            <div className='description-container'>
                                <p>
                                    Active and collaborative place to learn through a variety of peer-led academic support services that will enhance the success of students. We offer the following core support programs:

                                    <br/><br/>Peer-Led Tutoring:

                                    <br/>Walk-in Group Tutoring: Available on all campuses.
                                    <br/>One-on-One Tutoring: Available through our partnership with the SAS Honors Program.
                                    <br/>Academic Coaching:

                                    <br/><br/>Time Management
                                    <br/>Critical Thinking
                                    <br/>Study skills
                                </p>
                            </div>
                            <button className='link-button'><a href='/contact'>Visit Today!</a></button>
                        </div>

                        <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                            <div className="sr-button">PLTL & Study Groups</div>
                            <div className='description-container'>
                                <p>
                                    A Peer Led Team Leader is an LSAMP upperclassman assigned to a group of students who
                                    require guidance on how to navigate a STEM-related major, get help with homework assignments, 
                                    receive test review/prep for STEM courses, study skills, and progression and retention in a major. 
                                    Your PLTL will be available during scheduled PLTL sessions to assist with the STEM courses you may be 
                                    struggling with. The PLTL student will also be assigned to students who have been newly admitted in 
                                    LSAMP to assist throughout the semester.
                                </p>
                            </div>
                            <button className='link-button'><a href='/contact'>Learn More</a></button>
                        </div>
                     
                        <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                            <div className="sr-button">GRE Prep & Applying to Graduate School</div>
                            <div className='description-container'>
                                <p>
                                    Free GRE prep is offered to juniors and seniors preparing for the GRE exam. Meetings/events hosted by LSAMP for GRE and graduate school include:

                                    <br/><br/>1. Strategies for Taking the GRE Exam
                                    <br/>2. Full Length Past GRE Exams
                                    <br/>3. National Research Fellowship Program Workshops
                                    <br/>4. How to Apply to the NRFP
                                    <br/>5. Career Development Workshops
                                    <br/><br/>For more GRE prep visit these popular sites:
                                    
                                    <br/>
                                    <br/><a className='text-[#007bff] hover:underline' href='https://www.ets.org/gre.html'>ETS</a>
                                    <br/><a className='text-[#007bff] hover:underline' href='https://www.princetonreview.com/grad/gre-test-prep'>The Princeton Review</a>
                                    <br/><a className='text-[#007bff] hover:underline' href='https://www.manhattanprep.com/gre/'>Manhattan Prep</a>
                                </p>
                            </div>
                            <button className='link-button'><a href='/contact'>Learn More</a></button>
                        </div>

                        <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                            <div className="sr-button">Bridge to the Doctorate</div>
                            <div className='description-container'>
                                <p>
                                    The bridge to the Doctorate program is a fellowship which offers LSAMP graduates monetary support while they pursue a doctoral degree in STEM. The BD program provides LSAMP scholars financial support up to $32,000 for the first two years of graduate study including graduate school tuition and fees, as well as health insurance!

                                    <br /><br />Eligibility includes:

                                    <br /><br />Participation in LSAMP at an undergraduate institution. Bachelor's degree in a STEM field as well as being first time graduate student. 
                                    <br />U.S. citizen or permanent resident.
                                    <br />3.0 GPA 
                                    <br />Plans to pursue doctoral degree in STEM.
                                    <br />Gain admission to a STEM graduate program.
                                </p>
                            </div>
                            <button className='link-button'><a href='/contact'>Learn More</a></button>
                        </div>

                        <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                            <div className="sr-button">How to Find your Academic Advisor(s)</div>
                            <div className='description-container'>
                                <p>
                                    For students enrolled in Newark College of Arts and Science(NCAS) or University College Newark(UCN), the Office of Academic Services(OAS) will see students according to there last name. See the Advisor breakdown and how to make an appointment by clicking <a href='https://sasn.rutgers.edu/support'>HERE!</a>.

                                    <br /><br />For students in the Honors College, please contact the Honors College for information about your adviser assignment. Find contact information for the honors college <a className='text-[#007bff] hover:underline' href='https://sasn.rutgers.edu/honors-college'>HERE!</a>.

                                    <br /><br />To meet with your adviser for your declared major(s) and minor(s), please visit the respective department. Contact the <a className='text-[#007bff] hover:underline' href='/contact'>LSAMP office</a> for assistance.
                                </p>
                            </div>
                            <button className='link-button'><a href='/contact'>Learn More</a></button>
                        </div>
                    </section>
                </div>
            </main>

        </>
    );
}
