/*


// CarouselVideo.js
'use client'
import React, { useState, useEffect } from 'react';
import VideoWithLoadingState from './VideoWithLoadingState';

const CarouselVideo = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };




// This timer switched between videos. I suggest to turn it off with COMMENTS
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextVideo();
    }, 60000); // Change video every 60 seconds

    return () => {
      clearInterval(intervalId); // Cleanup the interval on unmount
    };
  }, [currentVideoIndex]);




  return (
    <div>
      <div className="flex justify-center z-20">
        <VideoWithLoadingState url={videos[currentVideoIndex]} />
      </div>
      <button onClick={previousVideo}>Previous Video</button>
      <button onClick={nextVideo}>Next Video</button>
    </div>
  );
};

export default CarouselVideo;



*/






// CarouselVideo.js
'use client'
import React, { useState } from 'react';
import VideoWithLoadingState from './VideoWithLoadingState';

const CarouselVideo = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-4"> {/* Adding padding around the entire carousel */}
      <div className="flex justify-center z-20">
        <div className="p-4"> {/* Adding padding around the video */}
          <VideoWithLoadingState url={videos[currentVideoIndex]} />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={previousVideo}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Previous Video
        </button>
        <button
          onClick={nextVideo}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Next Video
        </button>
      </div>
    </div>
  );
};

export default CarouselVideo;


