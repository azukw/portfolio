import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0 });
    
    // Animate columns up
    tl.to(".col", {
      top: "0",
      duration: 3,
      ease: "power4.inOut"
    });
    
    // Animate items in each column with different stagger patterns
    tl.to(".c-1 .item", {
      top: "0",
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut"
    }, "-=2");
    
    tl.to(".c-2 .item", {
      top: "0",
      stagger: -0.25,
      duration: 3,
      ease: "power4.inOut"
    }, "-=4");
    
    tl.to(".c-3 .item", {
      top: "0",
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut"
    }, "-=4");
    
    tl.to(".c-4 .item", {
      top: "0",
      stagger: -0.25,
      duration: 3,
      ease: "power4.inOut"
    }, "-=4");
    
    tl.to(".c-5 .item", {
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
    
    // Animate title
    tl.to(".title p", {
      top: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=1.5");
  }, []);

  // Create arrays to distribute work images across columns
  const getColumnImages = (colIndex) => {
    // We'll use work-1 through work-6 distributed across 5 columns
    // Repeating some images to fill all slots
    const allImages = [
      ['/work/work-1.jpg', '/work/work-2.jpg'],
      ['/work/work-3.jpg', '/work/work-4.jpg'],
      ['/work/work-5.jpg','', '/work/work-6.jpg'],
      ['/work/work-1.jpg', '/work/work-2.jpg'],
      ['/work/work-3.jpg', '/work/work-4.jpg']
    ];
    
    return allImages[colIndex - 1];
  };

  return (
    <div className="preloader-wrapper">
      <div className="preloader-container">
        {[1, 2, 3, 4, 5].map(colIndex => (
          <div key={`col-${colIndex}`} className={`col c-${colIndex}`}>
            {getColumnImages(colIndex).map((imgSrc, imgIndex) => (
              <div key={`item-${colIndex}-${imgIndex}`} className="item">
                <img src={imgSrc} alt={`Work ${imgIndex + 1}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="content">
        <div className="hero">
          <div className="title">
            <p>The Regeneration Site</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .preloader-wrapper {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #141414;
          font-family: "Neue Montreal", sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
        }
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .content {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
        
        .hero {
          position: absolute;
          width: 95%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          color: #fff;
        }
        
        .title {
          width: 100%;
          text-align: center;
          font-size: 40px;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        
        .title p {
          position: relative;
          top: 50px;
        }
        
        .preloader-container {
          position: fixed;
          width: 100%;
          height: 100%;
          display: flex;
          gap: 1em;
        }
        
        .preloader-container .col {
          position: relative;
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1em;
        }
        
        .col .item {
          position: relative;
          flex: 1;
          width: 100%;
          background: #222;
          overflow: hidden;
        }
        
        .c-1, .c-3, .c-5 {
          top: 100%;
        }
        
        .c-1 .item, .c-3 .item, .c-5 .item {
          top: 100%;
        }
        
        .c-2 .item, .c-4 .item {
          top: -100%;
        }
        
        @media (max-width: 900px) {
          .title {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;