'use client'

import { useState, useEffect} from "react";
import Title from "../../src/components/Title.tsx";
import diploma from "../../public/diploma.png"
import Image from 'next/image';
import Link from "next/link.js";

export default function Membership() {
	const [link, setLink] = useState('');

	useEffect(() => {
        fetch('/api/fetchLink')
            .then((response) => response.json())
            .then((result) => {
                setLink(result[0].link)
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }, []);

    return (
      <>
        <main id='admission-application' className="overflow-auto">
          <Title name={"MEMBERSHIP"}/>
          <div className="flex justify-center"> 
            <section className="relative w-[90vw] lg:w-[75vw]">  
              <Image className="relative w-[90vw] h-[90vw] md:h-[63vw] lg:w-[75vw] lg:h-[35vw]  rounded-lg " src={diploma} alt="Graduation Diploma" />
              <div className="absolute inset-0 shadow-lg rounded-lg">
                <div className="flex justify-center text-white">
                  <h2 className="md:text-[1.5rem] lg:text-[1.8rem] drop-shadow-lg font-bold italic pl-[.5rem] lg:pl-[1.2rem]">
                    As an LSAMP Scholar, you will have outstanding 
                    opportunities to help you complete your undergraduate!
                  </h2>
                </div>
                  
                <div className=" flex justify-center mb-2">
                  <article className="overflow-auto w-[90%] h-[48vw] md:h-[35vw] lg:h-[20vw] bg-white border-2 border-red-800 rounded-lg shadow-md row-span-3 mt-[2rem]">
                    <h1 className="text-center p-1 bg-red-800 text-white text-sm md:text-xl font-bold drop-shadow-md rounded-tl-xlg rounded-tr-xlg">
						Eligibility for Rutgers Newark GS-LSAMP
                    </h1>


                    <div className="text-sm md:text-base font-semibold px-2 drop-shadow-md text-black py-2">        
					  <div className="list-decimal-m">A US citizen or permanent resident.</div>
					  <div className="list-decimal-m">Improves participation of racial and ethnic underserved groups in STEM.</div>
					  <div className="list-decimal-m">Fully matriculated in Rutgers Newark. (If you are matriculated in another alliance school, apply to GS-LSAMP there)</div>
					  <div className="list-decimal-m">Majoring or intending to major in a non medical STEM field.</div>
                    </div>

                    <h3 className="text-base md:text-lg text-left text-red-800 font-bold px-2 drop-shadow-md underline">
                      Eligible Majors
                    </h3>

                    <div className="text-sm md:text-base grid grid-cols-3 px-2">
                      <p className="">
                        <a className="majors" href="https://sasn.rutgers.edu/biology" target="_blank">Biology</a>
                        <br/> <a className="majors" href="https://sasn.rutgers.edu/chemistry" target="_blank">Chemistry</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/mathematics-and-computer-science" target="_blank">Computer Science</a>
                        <br/><a className="majors" href="https://soe.rutgers.edu/" target="_blank">Engineering</a>
                      </p>
                      <p className="">
                        <a  className="majors" href="https://sasn.rutgers.edu/earth-and-environmental-sciences" target="_blank">Environmental Science</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/earth-and-environmental-sciences" target="_blank">Environmental Geology</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/earth-environmental-science/ba-geoscience-geology" target="_blank">Geology</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/geoscience-geology-minor" target="_blank">Geoscience Engineering</a>
                      </p>
                      <p className="">
                        <a  className="majors" href="https://sasn.rutgers.edu/mathematics-and-computer-science" target="_blank">Mathematics</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/center-molecular-and-behavioral-neuroscience" target="_blank">Neuroscience and Behavior</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/urban-education-urban-secondary-education-ba" target="_blank">Science Education</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/node/318" target="_blank">Physics</a>
                      </p>
                    </div>
                  </article>
                </div>

                <div className="flex justify-center">
                  <div className="w-[8rem] p-[.3rem] md:w-[9rem] md:p-[.7rem] text-xs md:text-sm text-center text-white font-bold drop-shadow-md hover:scale-105 transition bg-red-800 rounded">
                    <p className="drop-shadow-xl"><a href={link} target="_blank">JOIN NOW!</a></p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <section id="student-benefits" className="section-subheader mx-4 md:mx-8 lg:mx-16">
          <h2 className="text-3xl font-bold text-neutral-700">Student Benefits</h2>
          <hr/>
          <div id="benefits-info">
            <p>
              LSAMP Scholars have outstanding opportunities to help them complete a degree in STEM fields, including:
            </p>
			<ol id='member-benefits-list' className=" list-decimal list-inside bg-gray-100 rounded-lg py-1 my-1 px-4 font-medium text-black md:text-base text-sm">
				<li className="p-2">Be part of a Learning Community of students who help each other succeed in classes.</li>
				<li className="p-2">Have counselors who will personally help you choose courses and programs to best suit your interests.</li>
				<li className="p-2">Earn stipends for tutoring, leading study groups, doing research, etc.</li>
				<li className="p-2">Have research experiences in your area of interest in faculty laboratories.</li>
				<li className="p-2">Attend LSAMP conferences to be part of the greater LSAMP community.</li>
				<li className="p-2">Graduate with a solid degree and have opportunities for careers or graduate school.</li>
				<li className="p-2">Tutoring and group learning opportunities to help you succeed in your studies.</li>
			</ol>
            <p>
              Being an LSAMP scholar also gives you opportunities to have experiences at laboratories through special programs that will provide financial support to you. You also qualify for the Bridges to the Doctorate program which allows you to attend any one of a number of universities.
            </p>
          </div>
        </section>

        <section id="student-resources" className="section-subheader mx-4 md:mx-8 lg:mx-16">
            <h2 className="text-3xl font-bold text-neutral-700">Student Resources</h2>
            <hr/>
			<div className="mt-5 bg-gray-200 w-[90vw] flex flex-col justify-center rounded-lg shadow-md align-middle">
				<div className="mt-[2rem]">
					{/**LAPTOP LAYOUT*/}
					<div className="lg:grid lg:grid-cols-3 sm:hidden md:hidden">
						<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem]'>
								<h3 className="sr-button">ALEKS Boot Camp | Academic Success Boot Camp</h3>
								<div className='description-container'>
									<p className="p-1">
										ALEKS trains students based on their performance on an initial pre-test.
										As they complete the training daily, the math level gradually progresses to their desired level of achievement.
										Scores are recorded and displayed until mastery is reached. To participate in the LSAMP ALEKS boot camp, please contact a LSAMP coordinator.
										<br/>
										The academic success boot camp is a unique program designed for students who may be struggling academically. 
									</p>
									<b className="p-1">This bootcamp helps students develop the following skills:</b>
									<ul className="list-disc list-inside">
										<li>Time Management</li>
										<li>Increasing GPA</li>
										<li>Essential Study Skills</li>
									</ul>
								</div>
							<button className='link-button'><a href='/contact'>Learn More</a></button>
							</div>
						</div>

						<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem] md:pl-[2rem] lg:pl-0'>
								<h3 className="sr-button">Visit the RU-Newark Learning Center</h3>
								<div className='description-container'>
									<p className="p-1">
										Active and collaborative place to learn through a variety of peer-led academic support services that will enhance the success of students. 
									</p>
									<b className="underline p-1">We offer the following core support programs:</b>
									<h4 className="p-1 font-bold">Peer-Led Tutoring:</h4>
									<ul className="list-disc list-inside px-4">
										<li>Walk-in Group Tutoring: Available on all campuses.</li>
										<li>One-on-One Tutoring: Available through our partnership with the SAS Honors Program.</li>
									</ul>
									<h4 className="p-1 font-bold">Academic Coaching:</h4>
									<ul className="list-disc list-inside px-4">
										<li>Time Management</li>
										<li>Critical Thinking</li>
										<li>Study Skills</li>
									</ul>
								</div>
								<button className='link-button'><a href='/contact'>Visit Today!</a></button>
							</div>
						</div>

						<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem]'>
								<h3 className="sr-button">PLTL & Study Groups</h3>
								<div className='description-container'>
									<p className="p-1">
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
						</div>

						<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem] md:pl-[2rem] lg:pl-0'>
								<h3 className="sr-button">GRE Prep & Applying to Graduate School</h3>
								<div className='description-container'>
									<p className="p-1">
										Free GRE prep is offered to juniors and seniors preparing for the GRE exam.
									</p>  
									<b className="p-1">Meetings/events hosted by LSAMP for GRE and graduate school include:</b>
									<ol className="px-4 list-disc list-inside">
										<li>Strategies for Taking the GRE Exam</li>
										<li>Full Length Past GRE Exams</li> 
										<li>National Research Fellowship Program Workshops</li>
										<li>How to Apply to the NRFP</li>
										<li>Career Development Workshops</li>
									</ol>
									<b className="p-1">For more GRE prep visit these popular sites:</b>
									<ul className="list-disc list-inside px-4">
										<li>
											<a className='text-blue-600 hover:underline' href='https://www.ets.org/gre.html'>ETS</a>
										</li>
										<li>
											<a className='text-blue-600 hover:underline' href='https://www.princetonreview.com/grad/gre-test-prep'>The Princeton Review</a>
										</li>
										<li>
											<a className='text-blue-600 hover:underline' href='https://www.manhattanprep.com/gre/'>Manhattan Prep</a>
										</li>
									</ul>
								</div>
								<button className='link-button'>
									<Link href="/contact">Learn More</Link>
								</button>
							</div>
						</div>
						<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out mb-[2rem] md:pl-[2rem] lg:pl-0'>
								<h3 className="sr-button">How to Find your Academic Advisor(s)</h3>
								<div className='description-container'>
										<p className="p-1">
											For students enrolled in Newark College of Arts and Science(NCAS) or University College Newark(UCN), the Office of Academic Services(OAS) will see students according to there last name. 
										</p>
										<b className="px-4 mb-2">See the Advisor breakdown and how to make an appointment by clicking <a className='text-blue-600 hover:underline' href='https://sasn.rutgers.edu/support'>HERE!</a></b>
										<p className="p-1">
											For students in the Honors College, please contact the Honors College for information about your adviser assignment. 
										</p>
										<b className="px-4 mb-2">Find contact information for the honors college <a className='text-blue-600 hover:underline' href='https://sasn.rutgers.edu/honors-college'>HERE!</a>.</b>
										<p className="p-1">
											To meet with your adviser for your declared major(s) and minor(s), please visit the respective department. 
										</p>
										<b className="px-4 mb-2">Contact the <Link className='text-blue-600 hover:underline' href='/contact'>LSAMP office</Link> for assistance.</b>
									</div>
								<button className='link-button'><a href='/contact'>Learn More</a></button>
							</div>
						</div>
					</div>

					{/**MOBILE LAYOUTS */}
					<div className="lg:hidden">

						<div className="md:flex md:justify-center">
							<div className="flex justify-center">
								<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem]'>
									<h3 className="sr-button">ALEKS Boot Camp | Academic Success Boot Camp</h3>
									<div className='description-container'>
										<p>
											ALEKS trains students based on their performance on an initial pre-test.
											As they complete the training daily, the math level gradually progresses to their desired level of achievement.
											Scores are recorded and displayed until mastery is reached. 
											To participate in the LSAMP ALEKS boot camp, please contact a LSAMP coordinator.
											The academic success boot camp is a unique program designed for students who may be struggling academically. 
										</p>
										<b className="p-1">This bootcamp helps students develop the following skills:</b>
										<ol className="list-decimal list-inside">
											<li>Time Management</li>
											<li>Increasing GPA</li>
											<li>Essential Study Skills</li>
										</ol>
									</div>
									<button className='link-button'><a href='/contact'>Learn More</a></button>
								</div>
							</div>
							<div className="flex justify-center">
								<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem] md:pl-[2rem]'>
									<h3 className="sr-button">Visit the RU-Newark Learning Center</h3>
									<div className='description-container'>
										<p className="p-1">
											Active and collaborative place to learn through a variety of peer-led academic support services that will enhance the success of students. We offer the following core support programs:
										</p>
										<b className="p-1">Peer-Led Tutoring:</b>	
										<ul className="px-4 list-inside list-disc">
											<li>Walk-in Group Tutoring: Available on all campuses.</li>
											<li>One-on-One Tutoring: Available through our partnership with the SAS Honors Program.</li>
										</ul>
										<b className="p-1">Academic Coaching:</b>
										<ul className="px-1 list-inside list-disc">
											<li>Time Management</li>
											<li>Critical Thinking</li>
											<li>Study Skills</li>
										</ul>
									</div>
									<button className='link-button'><a href='/contact'>Visit Today!</a></button>
								</div>
							</div>
						</div>
					
						<div className="md:flex md:justify-center">
							<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem]'>
								<h3 className="sr-button">PLTL & Study Groups</h3>
								<div className='description-container'>
									<p className="p-1">
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
						</div>
				

					<div className="flex justify-center">
						<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem] md:pl-[2rem]'>
							<h3 className="sr-button">GRE Prep & Applying to Graduate School</h3>
							<div className='description-container'>
								<p>
									Free GRE prep is offered to juniors and seniors preparing for the GRE exam. Meetings/events hosted by LSAMP for GRE and graduate school include:
								</p>
								<ol>
									<li>Strategies for Taking the GRE Exam</li>
									<li>Full Length Past GRE Exams</li>
									<li>National Research Fellowship Program Workshops</li>
									<li>How to Apply to the NRFP</li>
									<li>Career Development Workshops</li>
								</ol>
								<b className="font-bold">For more GRE prep visit these popular sites:</b>
								<ul>
									<li>
										<a className='text-blue-600 hover:underline' href='https://www.ets.org/gre.html'>ETS</a>
									</li>
									<li>
										<a className='text-blue-600 hover:underline' href='https://www.manhattanprep.com/gre/'>Manhattan Prep</a>
									</li>
									<li>
										<a className='text-blue-600 hover:underline' href='https://www.princetonreview.com/grad/gre-test-prep'>The Princeton Review</a>
									</li>
								</ul>
									
							</div>
							<button className='link-button'><a href='/contact'>Learn More</a></button>
							</div>
						</div>
						</div>  

					<div className="md:flex md:justify-center">
						<div className="flex justify-center">
						<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem]'>
							<h3 className="sr-button">Bridge to the Doctorate</h3>
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
						</div>

						<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out mb-[2rem] md:pl-[2rem]'>
								<h3 className="sr-button">How to Find your Academic Advisor(s)</h3>
								<div className='description-container'>
									<p>
										For students enrolled in Newark College of Arts and Science(NCAS) or University College Newark(UCN), the Office of Academic Services(OAS) will see students according to there last name. See the Advisor breakdown and how to make an appointment by clicking <a href='https://sasn.rutgers.edu/support'>HERE!</a>.

										<br /><br />For students in the Honors College, please contact the Honors College for information about your adviser assignment. Find contact information for the honors college <a className='text-blue-600 hover:underline' href='https://sasn.rutgers.edu/honors-college'>HERE!</a>.

										<br /><br />To meet with your adviser for your declared major(s) and minor(s), please visit the respective department. Contact the <a className='text-blue-600 hover:underline' href='/contact'>LSAMP office</a> for assistance.
									</p>
								</div>
								<button className='link-button'><a href='/contact'>Learn More</a></button>
							</div>
						</div>
						</div>

					</div>              
				</div>
			</div>
		</section>
      </>
    );

}