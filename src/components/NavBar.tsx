import React from 'react';
import Link from "next/link";
import Image from "next/legacy/image";

// IMAGES
import nsfLogo from '../../public/lsamp-nsf-logos/NSF-clear.png';
import rutgersLogo from "../../public/Rutgers_University_Newark_logo.png"
import seal from "../../public/Rutgers_University_seal.png"

const NavBar: React.FC = () => {
    return (
        <nav className='flex flex-col w-full bg-white sticky z-30 top-0'>
            <div className='flex flex-wrap items-center justify-between' id='top-nav-container'>
                <header className='flex items-center'>
                    <div className='flex my-1' id='nav-logo-wrapper'>
                        <Image 
                            className='flex w-auto py-3 px-2 drop-shadow'
                            src={rutgersLogo}
                            alt="Rutgers Univesity–Newark Logo" 
                            width={160}
                            height={50}
                        />
                        <Image
                            className='flex w-auto py-3 px-2 drop-shadow'
                            src={nsfLogo}
                            alt="NSF Logo"
                            width={50}
                            height={50}
                        />
                    </div>
                    <hr className="text-gray-200 h-10 border-l-2 border-solid border-gray-200" />
                    <label className='flex ml-4 text-lg font-normal'>Louis Stokes Alliance for Minority Participation</label>  
                </header>
            </div>
            <div className='flex justify-center items-center text-center z-30 shadow-md bg-gradient-to-t from-red-900 to-red-700' id='bottom-nav-container'>
                <ul className='flex text-base justify-center place-items-center flex-wrap text-white font-medium my-1 mx-5 list-none no-underline drop-shadow-md' id="bottom-nav-page-list">
                    {/* FIXME: GLOBAL CSS FOR HOVER EFFECT IS NOT WORKING */}
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/membership">Membership</Link>
                    </li>
                    <li>
                        <Link href="/events">Events & Opportunities</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;