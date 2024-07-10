/*

// Original VideoWithLoadingState.js
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoWithLoadingState = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleReady = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    console.error('Failed to load video');
  };

  return (
    <div className='flex justify-center'>
      {isLoading && <p>Loading...</p>}
      <ReactPlayer
        url={url}
        playing
        onReady={handleReady}
        onError={handleError}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default VideoWithLoadingState;

*/





// New VideoWithLoadingState.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoWithLoadingState = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleReady = () => {
    setIsLoading(false);
  };

  const handleError = () => {   //Failed to load video MSG
    setIsLoading(false);
    console.error('Failed to load video');
  };

  return (
    <div className='flex justify-center react-player'>
      {isLoading && <p>Loading...</p>}
      <ReactPlayer
        url={url}
        playing={false} // Set this to false to prevent autoplay
        controls={true} // Add controls to the video
        onReady={handleReady}
        onError={handleError}
        style={{ display: isLoading ? 'none' : 'block' }}
        
        height={320}
        width={320}
      />
    </div>
  );
};

export default VideoWithLoadingState;
