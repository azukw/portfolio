import React, { useState, useRef, useEffect } from 'react';
import './VideoWithLoader.css';

const VideoWithLoader = ({ src, autoPlay = true, muted = true, loop = true }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  // Gérer le début du chargement
  const handleLoadStart = () => {
    setIsLoading(true);
  };

  // Gérer quand la vidéo est en attente de données
  const handleWaiting = () => {
    setIsLoading(true);
  };

  // Gérer quand la vidéo peut commencer à jouer
  const handleCanPlay = () => {
    setIsLoading(false);
  };

  // Gérer quand la vidéo a fini de charger
  const handleLoadedData = () => {
    setIsLoading(false);
  };

  // S'assurer que la vidéo commence à charger
  useEffect(() => {
    if (videoRef.current) {
      // Forcer le chargement de la vidéo
      videoRef.current.load();
    }
  }, [src]);

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
        preload="auto"
        onLoadStart={handleLoadStart}
        onWaiting={handleWaiting}
        onCanPlay={handleCanPlay}
        onLoadedData={handleLoadedData}
      />
    </div>
  );
};

export default VideoWithLoader; 