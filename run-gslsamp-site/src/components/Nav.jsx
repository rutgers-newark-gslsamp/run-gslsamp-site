import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <>
            <nav class="desktop-nav">
                <div class="top-nav-container">
                    <div class="top-nav-header">
                        <div class="nav-logo-wrapper">
                            {/**add img src */}
                            <img class="nav-logo" src="" alt="Rutgers Univesity–Newark Logo" />
                            <img class="nav-logo" src="" alt="Rutgers University–Newark Logo" />
                        </div>
                        {/**cant use horizontal rule */}
                        {/*<hr class="nav-vertical-line"*/}
                        <label class="nav-header-title">Louis Stokes Alliance for Minority Participation</label>  
                    </div>
                </div>
                {/** 
                 * <div class="top-nav-search">
                        <form action="#">
                            <input class="search" type="text" placeholder="Search RU-N GS-LSAMP">
                        </form>
                    </div>
                */} 
                <div class="bottom-nav-container">
                    <ul class="nav-page-list">
                        {/**refactor using router */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/membership">Membership</Link></li>
                        <li><Link to="/events-and-opportunities">Events & Opportunities</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
            
        </>
    )
}

export default Nav;




