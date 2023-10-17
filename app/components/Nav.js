import Link from "next/link";
import logo from "/public/Rutgers_University_Newark_logo.png"
import seal from "/public/Rutgers_University_seal.png"
import Image from "next/image";

{/**tailwind NOT implemented*/}
export default function Nav() {
    return (
      <nav className="desktop-nav">
        <div className="top-nav-container">
          <div className="top-nav-header">
            <div className="nav-logo-wrapper">
              {/**UPDATE image src */}
              <Image
                className="nav-logo"
                src={seal}
                alt="Rutgers Univesity–Newark Logo"
              />
              <Image
                className="nav-logo"
                src={logo}
                alt="Rutgers University–Newark Logo"
              />
            </div>
            <hr className="nav-vertical-line"/>
            <label className="nav-header-title">Louis Stokes Alliance for Minority Participation</label>
          </div> 
        </div>
        <div className="bottom-nav-container">
          <ul className="nav-page-list">
              <li><Link href="/">Home</Link></li>
              <li><li><Link href="/about">About Us</Link></li></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><li><Link href="/events">Events & Opportunities</Link></li></li>
              <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
        
    );
  }

