import Title from "../../src/components/Title.js";
import diploma from "../../public/diploma.png";
import Image from 'next/image';

export default function Membership() {
    return (
      <main>

        <Title name={"MEMBERSHIP"}/>
        <div className="flex justify-center items-center">
          
          <section className="relative w-1/2 h-[30vw]">
              
              <Image className="relative w-full h-[30vw]" src={diploma} alt="Graduation Diploma" />
              <div className="absolute inset-0 bg-[#9D1739] bg-opacity-40 rounded-lg grid grid-rows-4">
                
                <div className="grid grid-cols-4 row-span-1">
                  <div className="m-5 col-span-3 text-white">
                    <h2 className="drop-shadow-lg font-bold text-2xl italic">
                      As an LSAMP Scholar, you will have outstanding 
                      opportunities to help you complete your undergraduate!
                    </h2>
                  </div>

                  <div className="align-items-center">
                    <button className="bg-[#9D1739] rounded-[.2rem] p-[.7rem] mt-[2rem] col-span-1 text-white font-bold drop-shadow-md">
                      <p className="drop-shadow-xl">APPLY NOW!</p>
                    </button>
                  </div>
                  
                </div>
                
                <div className="flex justify-center row-span-3">
                  <article className="w-4/5  bg-white border-2 border-[#9D1739] rounded-lg shadow-md row-span-3 mt-[3rem]">
                    <h1 className="text-center p-3 bg-[#9D1739] text-white font-bold shadow-md rounded-tl-xlg rounded-tr-xlg">
                      Admission Requirements
                    </h1>

                    <p>
                      text in box here
                    </p>
                  </article>
                </div>

              </div>
          </section>
        </div>
      </main>
    );
  }