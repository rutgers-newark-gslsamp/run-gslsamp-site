import React from "react";

const NavBar: React.FC = () => {
    return (
        <nav>
            <div id='top-nav-container'>
                    <img alt="Rutgers Univesity–Newark Logo" />
                    <img alt="Rutgers University–Newark Logo" />
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