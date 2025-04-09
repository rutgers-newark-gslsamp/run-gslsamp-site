'use client'

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

// IMAGES
import nsfLogo from '../../public/lsamp-nsf-logos/NSF-clear.png';
import rutgersLogo from "../../public/rutgers-logos/RN_H_RED_BLACK_RGB.png"
import menuIcon from "../../public/icons/hamburger-menu-icon.svg"
import secretHamburger from "../../public/icons/mr_r_hamburger.png";

const NavBar: React.FC<{}> = () => {
    //should add logo LSAMP logo to the nav bar
    const [isVisible, setIsVisible] = useState(false);
    
    const hideDiv = () => {
        setIsVisible(!isVisible);
    };
    return (
        <>
            <nav className='flex flex-col w-full h-1/5 bg-gray-300 sm:bg-white sticky z-30 top-0'>
                <div className='flex flex-wrap items-center justify-between h-fill sm:h-auto' id='top-nav-container'>
                    <header className='flex items-center flex-shrink'>
                        <div className='flex my-1 p-2 gap-2' id='nav-logo-wrapper'>
                            <div>
                                <Image 
                                    className='flex w-auto py-3 px-2 drop-shadow'
                                    src={rutgersLogo}
                                    alt="Rutgers Univesity–Newark Logo" 
                                    width={160}
                                    height={50}
                                    priority={true} // will preload image, no lazy loading feature
                                />
                            </div>
                            <Image
                                className='flex h-auto py-3 px-2 drop-shadow'
                                src={nsfLogo}
                                alt="NSF Logo"
                                width={65}
                                height={55}
                                priority={true} // will preload image, no lazy loading feature
                            />
                        </div>
                        <hr className="text-gray-500 sm:text-gray-200 h-10 border-l-2 border-solid border-gray-500 sm:border-gray-200" />
                        <h1 className='flex ml-4 text-sm text-black sm:text-base md:text-lg font-semibold sm:font-medium'>
                            Louis Stokes Alliance for Minority Participation
                        </h1>
                        <a onClick={hideDiv} className='flex mx-2 justify-center items-center w-10 hover:cursor-pointer'>
                            {   
                                !isVisible &&
                                <Image
                                className='w-auto px-2 drop-shadow grayscale sm:invisible'
                                src={menuIcon}
                                alt="Hamburger Menu Icon"
                                width={50}
                                height={50}
                                />
                            }
                            {
                                isVisible && <Image
                                className='w-auto px-2 drop-shadow sm:invisible'
                                src={secretHamburger}
                                alt="Hamburger Menu Icon"
                                width={50}
                                height={50}
                            />
                            }
                        </a>
                    </header>
                </div>
                <div id='navigation-pc'>
                    <div className='max-sm:hidden flex justify-center items-center text-center z-30 shadow-md bg-gradient-to-t from-red-900 to-red-700' id='bottom-nav-container '>
                        <ul className='flex text-base justify-center place-items-center flex-wrap text-white font-medium my-1 mx-5 list-none no-underline drop-shadow-md nav-page-list' id="bottom-nav-page-list">
                            {/* FIXME: GLOBAL CSS FOR HOVER EFFECT IS NOT WORKING */}
                            <li>
                                <Link className='hover:underline font-medium' href="/">Home</Link>
                            </li>
                            <li>
                                <Link className='hover:underline font-medium' href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link className='hover:underline font-medium' href="/faculty">Interested Faculty?</Link>
                            </li>
                            <li>
                                <Link className='hover:underline font-medium' href="/membership">Membership</Link>
                            </li>
                            <li>
                                <Link className='hover:underline font-medium' href="/events">Events & Opportunities</Link>
                            </li>
                            <li>
                                <Link className='hover:underline font-medium' href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {isVisible && (
                <div id='mobile-nav' className='fixed sm:invisible md:hidden left-0 top-0 w-full bg-gray-100 z-50 mt-14 h-[93vh]'>
                    <ul className='grid grid-col-6 h-full text-lg justify-center place-items-center flex-wrap text-black font-bold my-1 mx-5 list-none no-underline nav-page-list' id="bottom-nav-page-list">
                        {/* FIXME: GLOBAL CSS FOR HOVER EFFECT IS NOT WORKING */}
                        <li className='w-screen h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} className='flex items-center justify-center hover:bg-gray-200 w-screen h-full text-center text-black font-bold uppercase ' href="/">Home</Link>
                        </li>
                        <li className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} className='flex items-center justify-center hover:bg-gray-200 w-screen h-full text-center text-black font-bold uppercase' href="/about">About Us</Link>
                        </li>
                        <li className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} className='flex items-center justify-center hover:bg-gray-200 w-screen h-full text-center text-black font-bold uppercase' href="/faculty">Faculty</Link>
                        </li>
                        <li className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4] '>
                            <Link onClick={hideDiv} className='flex items-center justify-center hover:bg-gray-200 w-screen h-full text-center text-black font-bold uppercase' href="/membership">Membership</Link>
                        </li>
                        <li className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} className='flex items-center justify-center hover:bg-gray-200 w-screen h-full text-center text-black font-bold uppercase' href="/events">Events & Opportunities</Link>
                        </li>
                        <li className='w-full h-full flex justify-center items-center'>
                                <Link onClick={hideDiv} className='flex items-center justify-center hover:bg-gray-200 w-screen h-full text-center text-black font-bold uppercase' href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default NavBar;