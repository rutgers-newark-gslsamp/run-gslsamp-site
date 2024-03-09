'use client'

import React from 'react';
import "../../app/styles/cms-globals.css"

const BackArrow = ({ isVisible }) => {
  return (
    <button className={`back-arrow ${isVisible ? 'visible' : 'hidden'}`} onClick={() => window.history.back()} aria-label="Go back" disabled={!isVisible}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="back-arrow-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

export default BackArrow;
