import React from "react";
// LOGOS
import lsampRUNLogo from "../../public/rutgers-logos/ru-n_logo.png"
import runLogo from "../../public/rutgers-logos/RUN.png"
import fduLogo from "../../public/alliance-logos/Fairleigh_Dickinson_University_Seal.png"
import montclairLogo from "../../public/alliance-logos/montclair_state_university_seal.png"
import williamPatLogo from "../../public/alliance-logos/william_paterson_university.png"
import keanLogo from "../../public/alliance-logos/kean-university-logo-1.png"
import essexLogo from "../../public/alliance-logos/essex-county-college-squarelogo.png"
import njitLogo from "../../public/alliance-logos/New_Jersey_IT_seal.png"
import runbLogo from "../../public/rutgers-logos/Rutgers_University_seal.png"

// COMPONENTS
import AllianceCard from "./AllianceCard";

const AllianceGrid: React.FC = () => {
    return (
        <section id="alliance-section">
            {/* <div className="section-header">
                <h2 className="lsamp-alliance-header">GS-LSAMP Alliance</h2>
                <hr className="section-horizontal-line"/>
            </div> */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-2 m-12 gap-4">
                <AllianceCard
                    logo={runLogo}
                    universityName='Rutgers University-Newark' 
                    contactName='Mr. Oren Rabinovich' 
                    contactEmail='oren.rabinovich@rutgers.edu' 
                    contactPhone='(973) 353-3562'
                    id="alliance-rutgers-newark"
                />
                <AllianceCard
                    logo={fduLogo}
                    universityName='Fairleigh Dickinson University' 
                    contactName='Dr. Marion McClary' 
                    contactEmail='mcclary@fdu.edu' 
                    contactPhone='(201) 692-2606 '
                    id="alliance-fairleigh-dickinson"
                />
                <AllianceCard
                    logo={montclairLogo}
                    universityName='Montclair State University' 
                    contactName='Dr. Yvonne Gindt' 
                    contactEmail='gindty@montclair.edu' 
                    contactPhone='(973) 655-3469'
                    id="alliance-montclair"
                />
                <AllianceCard
                    logo={williamPatLogo}
                    universityName='William Paterson University' 
                    contactName='Dr. Eliana Antoniou' 
                    contactEmail='antonioue@wpunj.edu' 
                    contactPhone='(973) 720-3715'
                    id='alliance-william-paterson'
                />
                <AllianceCard
                    logo={keanLogo}
                    universityName='Kean University'
                    contactName='Dr. Juyoung Ha' 
                    contactEmail='haj@kean.edu' 
                    contactPhone='(908) 737-3739'
                    id='alliance-kean'
                />
                <AllianceCard
                    logo={essexLogo}
                    universityName='Essex County College' 
                    contactName='' 
                    contactEmail='gslsamp@essex.edu' 
                    contactPhone=''
                    id="alliance-essex"
                />
                <AllianceCard
                    logo={njitLogo}
                    universityName='New Jersey Institute of Technology' 
                    contactName='Dr. Crystal Smith' 
                    contactEmail='smithcs@njit.edu' 
                    contactPhone='(973) 596-3690'
                    id='alliance-njit'
                />
                <AllianceCard
                    logo={runbLogo}
                    universityName='Rutgers University-New Brunswick' 
                    contactName='Dr. Beverely Gaines' 
                    contactEmail='bag104@echo.rutgers.edu' 
                    contactPhone='(848) 932-2559'
                    id=''
                />
          </div>
          
      </section>
    );
};

export default AllianceGrid;