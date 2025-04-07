import React, { useState, useRef } from 'react';
import './VideoWithLoader.css';

const VideoWithLoader = ({ src, autoPlay = true, muted = true, loop = true }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="video-container">
      {isLoading && (
        <div className="loading-overlay">
          <img src="/loading.gif" alt="Loading..." className="loading-gif" />
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        onLoadedData={handleLoadedData}
      />
    </div>
  );
};

export default VideoWithLoader; 