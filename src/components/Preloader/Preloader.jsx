import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.width = '100%';
    
    const tl = gsap.timeline({ 
      delay: 0,
      onComplete: () => {
        const event = new CustomEvent('preloaderComplete');
        window.dispatchEvent(event);
        setIsAnimating(false);
        
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        if (onComplete) onComplete();
      }
    });
    
    tl.to(".pl_col", {
      top: "0",
      duration: 1.5,
      ease: "power4.inOut"
    });
    
    tl.to(".pl_c-1 .pl_item", {
      top: "0",
      stagger: 0.2,
      duration: 1.5,
      ease: "power4.inOut"
    }, "-=0.75");
    
    tl.to(".pl_c-2 .pl_item", {
      top: "0",
      stagger: -0.2,
      duration: 1.5,
      ease: "power4.inOut"
    }, "-=2.25");
    
    tl.to(".pl_c-3 .pl_item", {
      top: "0",
      stagger: 0.2,
      duration: 1.5,
      ease: "power4.inOut"
    }, "-=3");
    
    tl.to(".pl_c-4 .pl_item", {
      top: "0",
      stagger: -0.2,
      duration: 1.5,
      ease: "power4.inOut"
    }, "-=3");
    
    tl.to(".pl_c-5 .pl_item", {
      top: "0",
      stagger: 0.2,
      duration: 1.5,
      ease: "power4.inOut"
    }, "-=2.25");
    
    tl.to(".preloader-container", {
      scale: 6,
      duration: 2.2,
      ease: "power4.inOut"
    }, "-=1.5");
    
    tl.to(".preloader-wrapper", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      pointerEvents: "none"
    }, "-=1.1");  
    
    return () => {
      tl.kill();
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [onComplete]);

  
  const getColumnImages = (colIndex) => {
    const allImages = [
      ['/work/work-1.jpg', '/work/work-2.jpg', '/work/work-3.jpg'],
      ['/work/work-4.jpg', '/work/work-5.jpg', '/work/work-6.jpg'],
      ['/work/work-2.jpg', null, '/work/work-1.jpg'],
      ['/work/work-6.jpg', '/work/work-3.jpg', '/work/work-4.jpg'],
      ['/work/work-2.jpg', '/work/work-5.jpg', '/work/work-1.jpg'],
    ];
    
    return allImages[colIndex - 1];
  };

  if (!isAnimating && typeof window !== 'undefined') {
    return null;
  }

  return (
    <div className="preloader-wrapper">
      <div className="preloader-container">
        {[1, 2, 3, 4, 5].map(colIndex => (
          <div key={`col-${colIndex}`} className={`pl_col pl_c-${colIndex}`}>
            {getColumnImages(colIndex).map((imgSrc, imgIndex) => (
              <div key={`pl_item-${colIndex}-${imgIndex}`} className={`pl_item ${!imgSrc ? 'empty-item' : ''}`}>
                {imgSrc ? (
                  <img src={imgSrc} alt={`Work ${imgIndex + 1}`} />
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;