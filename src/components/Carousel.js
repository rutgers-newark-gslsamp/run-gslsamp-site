'use client'
import React, { useState, useEffect } from 'react';
import ImageWithLoadingState from './ImageWithLoadingState'

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
        <div className="flex justify-center">
          <ImageWithLoadingState src={images[currentImageIndex]} alt={"Carousel Item"}/>
        </div>
    </div>
    
  );
};

export default Carousel;