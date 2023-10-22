import Image from "next/image";
import runLogo from "../../public/rutgers-logos/ru-n_logo.png"

const LandingAbout: React.FC = () => {
    return (
        <section className="landing-about-container">
            <Image
                className="landing-about-logo"
                src={runLogo}
                alt="Rutgers–Newark GS-LSAMP Logo"
            />  
            
            <div className="landing-about-card">
                <div className="landing-about-content">
                    <h2 className="landing-about-title">What is GS-LSAMP?</h2>
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