import React from "react";

// LOGOS
import runLogo from "../../public/alliance-logos/run_logo_24.png"
import fduLogo from "../../public/alliance-logos/fdu_logo_24.jpg"
import montclairLogo from "../../public/alliance-logos/montclair_logo_24.png"
import williamPatLogo from "../../public/alliance-logos/wp_logo_24.png"
import keanLogo from "../../public/alliance-logos/kean_logo_24.png"
import essexLogo from "../../public/alliance-logos/essex_logo_24.png"
import njitLogo from "../../public/alliance-logos/njit_logo_24.png"
import runbLogo from "../../public/alliance-logos/runb_logo_24.png"

// COMPONENTS
import AllianceCard from "./AllianceCard";

const AllianceGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2 mx-6 mb-6 lg:mx-12 gap-4">
            <AllianceCard
                logo={runLogo}
                universityName='Rutgers University-Newark' 
                contactName='Mr. Oren Rabinovich' 
                contactEmail='oren.rabinovich@rutgers.edu' 
                contactPhone='(973) 353-3562'
            />
            <AllianceCard
                logo={fduLogo}
                universityName='Fairleigh Dickinson University' 
                universityURL="http://view2.fdu.edu/academics/university-college/school-of-natural-sciences/lsamp/"
                contactName='Dr. Marion McClary' 
                contactEmail='mcclary@fdu.edu' 
                contactPhone='(201) 692-2606 '
            />
            <AllianceCard
                logo={montclairLogo}
                universityName='Montclair State University' 
                universityURL="http://www.montclair.edu/csam/lsamp/"
                contactName='Dr. Yvonne Gindt' 
                contactEmail='gindty@montclair.edu' 
                contactPhone='(973) 655-3469'
            />
            <AllianceCard
                logo={williamPatLogo}
                universityName='William Paterson University' 
                universityURL="http://www.wpunj.edu/lsamp/"
                contactName='Dr. Eliana Antoniou' 
                contactEmail='antonioue@wpunj.edu' 
                contactPhone='(973) 720-3715'
            />
            <AllianceCard
                logo={keanLogo}
                universityName='Kean University'
                universityURL="https://www.kean.edu/offices/student-success-and-retention/lsamp-program"
                contactName='Dr. Juyoung Ha' 
                contactEmail='haj@kean.edu' 
                contactPhone='(908) 737-3739'
            />
            <AllianceCard
                logo={essexLogo}
                universityName='Essex County College' 
                universityURL="https://www.essex.edu/gs-lsamp/"
                contactName='Prof. Emmanuel Aouad & Prof. Kanji Ojelade' 
                contactEmail='gslsamp@essex.edu' 
                contactPhone=''
            />
            <AllianceCard
                logo={njitLogo}
                universityName='New Jersey Institute of Technology' 
                universityURL="https://www.njit.edu/gslsamp"
                contactName='Dr. Crystal Smith' 
                contactEmail='smithcs@njit.edu' 
                contactPhone='(973) 596-3690'
            />
            <AllianceCard
                logo={runbLogo}
                universityName='Rutgers University-New Brunswick' 
                universityURL="https://lsamp-nb.rutgers.edu/"
                contactName='Dr. Beverely Gaines' 
                contactEmail='bag104@echo.rutgers.edu' 
                contactPhone='(848) 932-2559'
            />
        </div>
    );
};

export default AllianceGrid;