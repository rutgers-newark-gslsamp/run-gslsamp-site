'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image"
import ImageWithLoadingState from '../components/ImageWithLoadingState'

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(intervalId); // Cleanup the interval on unmount
    };
  }, [currentImageIndex]);

  return (
      <div>
        <div className="relative flex justify-center z-20">
          <ImageWithLoadingState src={images[currentImageIndex]} alt={"Carousel Item"}/>
        </div>
      <div className=''>
        <button
          className="absolute font-medium left-0 bg-white min-w-[6rem] ml-10 mx-10 p-3 pb-3 rounded-lg border-[4px] border-[#9D1739] hover:border-[#d4375e] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          onClick={previousImage}
        >
          Previous
        </button>
        <button
          className="absolute font-medium right-0 bg-white min-w-[6rem] ml-3 mx-10 p-3 pb-3 rounded-lg border-[4px] border-[#9D1739] hover:border-[#d4375e] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          onClick={nextImage}
        >
          Next
        </button>
      </div>
    </div>
    
  );
};

export default Carousel;