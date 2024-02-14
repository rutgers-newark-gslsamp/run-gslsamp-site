import Title from "../../src/components/Title.js";
import diploma from "../../public/diploma.png";
import Image from 'next/image';

export default function Membership() {
    return (
      <main className="text-sm">

        <Title name={"MEMBERSHIP"}/>
        <div className="flex justify-center items-center">
          
          <section className="relative w-3/4 h-[50vw]">
              
              <Image className="relative w-full h-[50vw]" src={diploma} alt="Graduation Diploma" />
              <div className="absolute inset-0 bg-[#9D1739] bg-opacity-40 rounded-lg grid grid-rows-4 shadow-lg">
                
                <div className="grid grid-cols-4 row-span-1">
                  <div className="m-5 col-span-3 text-white">
                    <h2 className="drop-shadow-lg font-bold text-2xl italic">
                      As an LSAMP Scholar, you will have outstanding 
                      opportunities to help you complete your undergraduate!
                    </h2>
                  </div>

                  <div className="align-items-center">
                    <div className="w-[8rem] text-center bg-[#9D1739] rounded-[.2rem] p-[.7rem] mt-[2rem] col-span-1 text-white font-bold drop-shadow-md hover:scale-105 transition">
                      <p className="drop-shadow-xl"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdPVNYfpvLnqMP5R4Kl8gzXeqNEDDrcF9bGsIx_HfRMaAFWrA/viewform">APPLY NOW!</a></p>
                    </div>
                  </div>
                  
                </div>
                
                <div className="flex justify-center row-span-3 mb-[2rem]">
                  <article className="w-4/5 h-[30vw] bg-white border-2 border-[#9D1739] rounded-lg shadow-md row-span-3 mt-[3rem]">
                    <h1 className="text-center p-3 bg-[#9D1739] text-white font-bold drop-shadow-md rounded-tl-xlg rounded-tr-xlg">
                      Admission Requirements
                    </h1>

                    <h3 className="text-center text-[#9D1739] font-bold p-[.5rem] drop-shadow-md">
                      To become a LSAMP Scholar you must exhibit the following criteria:
                    </h3>

                    <p className="pl-[.5rem] font-bold drop-shadow-md">
                      1. Be an undergraduate student from an ethnic or racial group.
                      <br/>2. Full matriculated.
                      <br/>3. Major or intended to major in a STEM field.
                    </p>

                    <p className="text-[#9D1739] drop-shadow-md text-md p-[.5rem]">
                      *if you do not fit these criteria, click <a className="underline hover:text-[#62e8c6]" href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:4c0a5d4f-0a0f-4433-ac13-e1580520d415">here</a> for more resources.
                    </p>

                    <h3 className="text-left text-[#9D1739] font-bold p-[.5rem] drop-shadow-md">
                      Eligible Majors
                    </h3>

                    <div className="grid grid-cols-3 pl-[.5rem]">
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
    );
  }