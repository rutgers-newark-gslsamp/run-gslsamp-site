import React from 'react';

function Copyright({ currentYear }) {
  return (
    <div className='text-left pl-[3rem] pr-[5rem]'>
        <div className="space-x-[.5rem] pb-[.3rem] font-bold">
            <a className="hover:underline" href="rutgers.edu" target="_blank">Universitywide</a>
            <a className="hover:underline" href="https://newbrunswick.rutgers.edu/" target="_blank">New Brunswick</a>
            <a className="hover:underline" href="https://academichealth.rutgers.edu/" target="_blank">RBHS</a>
            <a className="hover:underline" href="https://newark.rutgers.edu/" target="_blank">Newark</a>
            <a className="hover:underline" href="https://camden.rutgers.edu/" target="_blank">Camden</a>
            <a className="hover:underline" href="https://online.rutgers.edu/" target="_blank">Online</a>
            <a className="hover:underline" href="https://rutgershealth.org/" target="_blank">Rutgers Health</a>
        </div>
        Copyright © {currentYear}, Rutgers, The State University of New Jersey<br />
        <p className='text-[.7rem]'>Rutgers is an equal access/equal opportunity institution. Individuals with disabilities are encouraged to direct suggestions, comments, or complaints concerning any accessibility issues with Rutgers websites to accessibility@rutgers.edu or complete the Report Accessibility Barrier / Provide Feedback Form.</p>
    </div>
  );
}

export default Copyright;
