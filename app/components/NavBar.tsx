import React from 'react';
import RutgersLogo from '../../public/images/rutgers-logos/Rutgers_University_Newark_logo.png';
import NSFLogo from '../../public/images/lsamp-nsf-logos/NSF-clear.png';

const NavBar: React.FC = () => {
    return (
        <nav>
            <div id='top-nav-container'>
                    <img src={RutgersLogo} alt="Rutgers Univesity–Newark Logo" />
                    <img src={NSFLogo} alt="Rutgers University–Newark Logo" />
                <hr id="nav-vertical-line" />
                <label>Louis Stokes Alliance for Minority Participation</label>  
            </div>
            <div id='bottom-nav-container'>
                <ul id="bottom-nav-page-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/membership">Membership</a></li>
                    <li><a href="/events">Events & Opportunities</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;