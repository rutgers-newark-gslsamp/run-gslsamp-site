import Image from "next/legacy/image";
import runLogo from "../../public/rutgers-logos/ru-n_logo.png"
import Link from "next/link";


// TODO: Replace anchor tag with Link component that implements the router  
const LandingAbout: React.FC = () => {
    return (
        <section className="flex flex-wrap justify-center items-center my-12">
            <Image
                id="landing-about-logo"
                className="max max-w-xs h-auto rounded-3xl shadow-lg shadow-black/20"
                src={runLogo}
                alt="Rutgers–Newark GS-LSAMP Logo"
            />  
            
            <div className="flex flex-col items-center py-3 px-4 ml-10 rounded-3xl shadow-lg max-w-lg shadow-black/20">
                <div className="flex flex-col items-start text-base">
                    <h2 className="uppercase text-4xl font-bold my-1 px-1">What is GS-LSAMP?</h2>
                    <p className="p-2 text-base">
                        The Louis Stokes Alliance for Minority Participation (LSAMP) is an 
                        <a className="text-black shadow-none m-1 hover:bg-neutral-300 rounded transition duration-200 font-medium" href="https://www.nsf.gov/" target="blank">
                            <i>NSF-funded</i>
                        </a> 
                        program that provides academic support and specialized advising for students from historically underrepresented groups who wish to enter non-medical STEM professions. For students, adjusting to an unfamiliar environment can prove to be a difficult task. However, LSAMP aims to aid students in navigating critical transitions, including those from high school to college, college to graduate school, and eventually towards fulfilling careers.
                    </p>
                </div>    
                <div className="flex justify-evenly items-center">
                    <button className="bg-gray-300 border-4 border-gray-300 rounded text-xs max-w-sm max-h-12 mx-1 shadow-sm shadow-black/40">
                        {/*How faculty can help LSAMP*/}
                        <a className="text-base text-black font-semibold hover:underline px-2 py-1" href="about.html"  /*alt="Learn more about GS-LSAMP in our About Us Page" onclick="alert('Coming Soon!')"*/>For Faculty</a>
                    </button>
                    <button className="bg-gray-50 border-4 border-gray-300 rounded text-xs max-w-sm max-h-12 mx-1 shadow-sm shadow-black/40">
                        <a className="text-base text-black font-semibold hover:underline px-2 py-1" href="about.html" /*alt="Learn more about GS-LSAMP in our About Us Page"*/>Learn More</a>
                        {/* <Link>
                            
                        </Link> */}
                    </button>
                </div>
            </div>
      </section>
    );
}

export default LandingAbout;