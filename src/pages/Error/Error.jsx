import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "./Error.css";

const Error = () => {
    const headerRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        // Ensure refs are current before animating
        if (headerRef.current && footerRef.current) {
            // Animate each span in the header
            const headerSpans = headerRef.current.querySelectorAll('span');
            
            gsap.fromTo(headerSpans, 
                {
                    top: "-100vh",
                    opacity: 0
                }, 
                {
                    duration: 1.5,
                    top: "0",
                    opacity: 1,
                    ease: "bounce.out",
                    delay: 1,
                    stagger: 0.2,
                }
            );

            // Animate footer
            gsap.fromTo(footerRef.current, 
                {
                    opacity: 0,
                    y: 50
                },
                {
                    duration: 0.4,
                    opacity: 1,
                    y: 0,
                    ease: "expo.inOut",
                    delay: 2.4,
                }
            );
        }
    }, []); // Empty dependency array means this runs once after initial render
    
    return (
        <div className="not-found-container">
          <div className="header404-container">
            <div className="header404" ref={headerRef}>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </div>
          </div>
    
          <div className="footer404" ref={footerRef}>
            <span>On dirait que vous vous êtes perdu.</span>
          </div>
        </div>
    );
};

export default Error;