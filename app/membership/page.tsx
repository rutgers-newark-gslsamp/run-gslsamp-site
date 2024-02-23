import Title from "../../src/components/Title.js";
import diploma from "../../public/diploma.png"
import Image from 'next/image';

export default function Membership() {
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

                <div className="flex justify-center mt-1 md:pl-[30rem] lg:pl-[35rem]">
                  <div className="w-[8rem] p-[.3rem] md:w-[9rem] md:p-[.7rem] text-xs md:text-sm text-center text-white font-bold drop-shadow-md hover:scale-105 transition bg-[#9D1739] rounded-[.2rem]">
                    <p className="drop-shadow-xl"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdPVNYfpvLnqMP5R4Kl8gzXeqNEDDrcF9bGsIx_HfRMaAFWrA/viewform">JOIN NOW!</a></p>
                  </div>
                </div>
                  
                <div className=" flex justify-center mb-[2rem]">
                  <article className="overflow-auto w-[90%] h-[48vw] md:h-[35vw] lg:h-[20vw] bg-white border-2 border-[#9D1739] rounded-lg shadow-md row-span-3 mt-[2rem]">
                    <h1 className="text-center p-1 bg-[#9D1739] text-white text-sm md:text-xl font-bold drop-shadow-md rounded-tl-xlg rounded-tr-xlg">
                      Admission Requirements
                    </h1>


                    <div className="text-[.6rem] md:text-[.75rem] font-bold pl-[.5rem] drop-shadow-md list-decimal text-black">
                      <div className="list-decimal">Majoring or intending to major in a non medical STEM field.</div>
                    </div>

                    <h3 className="text-xs md:text-md text-left text-[rgb(157,23,57)] font-bold p-[.5rem] drop-shadow-md">
                      Eligible Majors
                    </h3>

                    <div className="text-[.6rem] md:text-[.8rem] grid grid-cols-3 pl-[.5rem]">
                      <p className="">
                        <a className="majors" href="https://sasn.rutgers.edu/biology">Biology</a>
                        <br/> <a className="majors" href="https://sasn.rutgers.edu/chemistry">Chemistry</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/mathematics-and-computer-science">Computer Science</a>
                        <br/><a className="majors" href="https://soe.rutgers.edu/">Engineering</a>
                      </p>
                      <p className="">
                        <a  className="majors" href="https://sasn.rutgers.edu/earth-and-environmental-sciences">Environmental Science</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/earth-and-environmental-sciences">Environmental Geology</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/earth-environmental-science/ba-geoscience-geology">Geology</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/geoscience-geology-minor">Geoscience Engineering</a>
                      </p>
                      <p className="">
                        <a  className="majors" href="https://sasn.rutgers.edu/mathematics-and-computer-science">Mathematics</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/center-molecular-and-behavioral-neuroscience">Neuroscience and Behavior</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/academics/undergraduate-majors-minors">Science Education</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/node/318">Physics</a>
                      </p>
                    </div>
                  </article>
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
			<ol id='member-benefits-list' className=" list-decimal list-inside bg-gray-100 rounded-lg py-1 my-1 font-medium text-black">
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
								<h2 className="sr-button">ALEKS Boot Camp | Academic Success Boot Camp</h2>
								<div className='description-container'>
									<p>
										ALEKS trains students based on their performance on an initial pre-test.
										As they complete the training daily, the math level gradually progresses to their desired level of achievement.
										Scores are recorded and displayed until mastery is reached. To participate in the LSAMP ALEKS boot camp, please contact a LSAMP coordinator.
										<br/><br/>
										The academic success boot camp is a unique program designed for students who may be struggling academically. This boot camp helps students develop the following skills:
									</p>
									<ul>
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
						</div>

						<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem]'>
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
						</div>

						<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem] md:pl-[2rem] lg:pl-0'>
								<div className="sr-button">GRE Prep & Applying to Graduate School</div>
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
									<p>For more GRE prep visit these popular sites:</p>
									<ul>
										<li>
											<a className='text-[#007bff] hover:underline' href='https://www.ets.org/gre.html'>ETS</a>
										</li>
										<li>
											<a className='text-[#007bff] hover:underline' href='https://www.princetonreview.com/grad/gre-test-prep'>The Princeton Review</a>
										</li>
										<li>
											<a className='text-[#007bff] hover:underline' href='https://www.manhattanprep.com/gre/'>Manhattan Prep</a>
										</li>
									</ul>
								</div>
								<button className='link-button'><a href='/contact'>Learn More</a></button>
								</div>
						</div>
						<div className="flex justify-center">
								<div className='hover:scale-105 transition-transform duration-300 ease-in-out mb-[2rem] md:pl-[2rem] lg:pl-0'>
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
						</div>
					</div>

					{/**MOBILE LAYOUTS */}
					<div className="lg:hidden">

						<div className="md:flex md:justify-center">
							<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem]'>
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
							</div>

							<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem] md:pl-[2rem]'>
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
							</div>
						</div>
					
					<div className="md:flex md:justify-center">
						<div className="flex justify-center">
						<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem]'>
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
						</div>
				

					<div className="flex justify-center">
						<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem] md:pl-[2rem]'>
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
						</div>
						</div>  

					<div className="md:flex md:justify-center">
						<div className="flex justify-center">
						<div className='hover:scale-105 transition-transform duration-300 ease-in-out pb-[3rem]'>
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
						</div>

						<div className="flex justify-center">
							<div className='hover:scale-105 transition-transform duration-300 ease-in-out mb-[2rem] md:pl-[2rem]'>
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
						</div>
						</div>

					</div>              
				</div>
			</div>
		</section>
      </>
    );

}