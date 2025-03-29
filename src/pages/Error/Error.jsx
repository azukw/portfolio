import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "./Error.css";

const Error = () => {
    const headerRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current && footerRef.current) {
            const headerSpans = headerRef.current.querySelectorAll('span');
            
            gsap.fromTo(headerSpans, 
                {
                    top: "-100dvh",
                    opacity: 0
                }, 
                {
                    duration: 1.5,
                    top: "0",
                    opacity: 1,
                    ease: "bounce.out",
                    delay: 4,
                    stagger: 0.2,
                }
            );

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
                    delay: 4.5,
                }
            );
        }
    }, []); 
    
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