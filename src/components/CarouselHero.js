'use client'
import React, { useState, useEffect } from 'react';
import HeroImageWithLoadingState from './HeroImageWithLoadingState';

const CarouselHero = ({ images }) => {
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
    <div className="relative flex justify-center" style={{ border: 'none', padding: 0 }}> {/* Remove Red Block */}
      <HeroImageWithLoadingState src={images[currentImageIndex]} alt={"Carousel Hero Item"} />
      <div className="absolute top-7 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselHero;

