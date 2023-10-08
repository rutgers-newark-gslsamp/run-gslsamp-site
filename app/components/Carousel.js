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
          className="m-3 absolute left-0 mt-10 p-3 rounded-lg bg-[#cbcbcb] min-w-[6rem] transform -translate-y-1/2 border border-black"
          onClick={previousImage}
        >
          Previous
        </button>
        <button
          className="m-3 absolute right-0 mt-10 p-3 rounded-lg bg-[#cbcbcb] min-w-[6rem] transform -translate-y-1/2 border border-black"
          onClick={nextImage}
        >
          Next
        </button>
      </div>
    </div>
    
  );
};

export default Carousel;