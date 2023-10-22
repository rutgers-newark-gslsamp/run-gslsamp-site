import Image from "next/image";
import runLogo from "../../public/rutgers-logos/ru-n_logo.png"

const LandingAbout: React.FC = () => {
    return (
        <section className="flex flex-wrap justify-center items-center my-12">
            <Image
                id="landing-about-logo"
                className="max max-w-xs h-auto rounded-3xl shadow-lg shadow-black/20"
                src={runLogo}
                alt="Rutgers–Newark GS-LSAMP Logo"
            />  
            
            <div className="landing-about-card flex flex-col items-center py-3 px-4 ml-10 rounded-3xl shadow-lg max-w-lg shadow-black/20">
                <div className="landing-about-content flex flex-col items-start text-base">
                    <h2 className="uppercase text-3xl font-bold my-1 mx-0 pt-1 pb-0 px-1">What is GS-LSAMP?</h2>
                    <p className="landing-about-body">
                        The Louis Stokes Alliance for Minority Participation (LSAMP) is an 
                        <a className="landing-about-anchor-body m-1" href="https://www.nsf.gov/" target="blank">
                            <i>NSF-funded</i>
                        </a> 
                        program that provides academic support and specialized advising for students from historically underrepresented groups who wish to enter non-medical STEM professions. For students, adjusting to an unfamiliar environment can prove to be a difficult task. However, LSAMP aims to aid students in navigating critical transitions, including those from high school to college, college to graduate school, and eventually towards fulfilling careers.
                    </p>
                </div>    
                <div className="landing-about-button-container">
                    <button className="landing-about-button" id="landing-about-button-pending">
                        {/*How faculty can help LSAMP*/}
                        <a className="landing-about-anchor-button"  /*alt="Learn more about GS-LSAMP in our About Us Page" onclick="alert('Coming Soon!')"*/>For Faculty</a>
                    </button>
                    <button className="landing-about-button">
                        <a className="landing-about-anchor-button" href="about.html" /*alt="Learn more about GS-LSAMP in our About Us Page"*/>Learn More</a>
                    </button>
                </div>
            </div>
      </section>
    );
}

export default LandingAbout;