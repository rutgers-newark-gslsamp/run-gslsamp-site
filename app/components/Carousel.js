'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image"

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
    <div className="relative flex justify-center">
      <Image
        src={images[currentImageIndex]}
        alt="Carousel Item"
        className="w-[50rem] h-[50rem]"
      />
      <button
        className="absolute left-0 mt-10 p-3 rounded-lg bg-[#cbcbcb] min-w-[6rem] top-[100%] transform -translate-y-1/2 border border-black"
        onClick={previousImage}
      >
        Previous
      </button>
      <button
        className="absolute right-0 mt-10 p-3 rounded-lg bg-[#cbcbcb] min-w-[6rem] top-[100%] transform -translate-y-1/2 border border-black"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;