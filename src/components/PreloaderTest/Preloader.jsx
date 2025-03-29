import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ 
      delay: 0,
      onComplete: () => {
        // Set a state to track when animation completes
        setIsAnimating(false);
        // Call the onComplete prop to notify parent component
        if (onComplete) onComplete();
      }
    });
    
    // Animate columns up
    tl.to(".pl_col", {
      top: "0",
      duration: 3,
      ease: "power4.inOut"
    });
    
    // Animate items in each column with different stagger patterns
    tl.to(".pl_c-1 .pl_item", {
      top: "0",
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut"
    }, "-=2");
    
    tl.to(".pl_c-2 .pl_item", {
      top: "0",
      stagger: -0.25,
      duration: 3,
      ease: "power4.inOut"
    }, "-=4");
    
    tl.to(".pl_c-3 .pl_item", {
      top: "0",
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut"
    }, "-=4");
    
    tl.to(".pl_c-4 .pl_item", {
      top: "0",
      stagger: -0.25,
      duration: 3,
      ease: "power4.inOut"
    }, "-=4");
    
    tl.to(".pl_c-5 .pl_item", {
      top: "0",
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut"
    }, "-=4");
    
    // Scale up container
    tl.to(".preloader-container", {
      scale: 6,
      duration: 4,
      ease: "power4.inOut"
    }, "-=2");
    
    // Fade out the preloader after scaling animation is partially complete
    tl.to(".preloader-wrapper", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      pointerEvents: "none"
    }, "-=1.5"); // This starts 1.5 seconds before the timeline completes
    
    // Return cleanup function to kill animation if component unmounts
    return () => {
      tl.kill();
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
      
      <style jsx>{`
        .preloader-wrapper {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: var(--plbg);
          font-family: "Neue Montreal", sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
        }
        
        .preloader-container {
          position: fixed;
          width: 100%;
          height: 100%;
          display: flex;
          gap: 1em;
        }
        
        .preloader-container .pl_col {
          position: relative;
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1em;
        }
        
        .pl_col .pl_item {
          position: relative;
          flex: 1;
          width: 100%;
          background: #222;
          overflow: hidden;
        }
        
        .pl_col .pl_item.empty-item {
          background: var(--plfg);
        }

        .pl_col .pl_item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .pl_c-1, .pl_c-3, .pl_c-5 {
          top: 100%;
        }
        
        .pl_c-1 .pl_item, .pl_c-3 .pl_item, .pl_c-5 .pl_item {
          top: 100%;
        }
        
        .pl_c-2 .pl_item, .pl_c-4 .pl_item {
          top: -100%;
        }
      `}</style>
    </div>
  );
};

export default Preloader;