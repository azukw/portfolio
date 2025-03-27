import React, { useEffect } from "react";
import gsap from "gsap";

import "./Error.css";



const Error = () => {
    useEffect(() => {
        gsap.from(".header404 > span", {
          duration: 1.5,
          top: "-100vh",
          ease: "bounce.out",
          delay: 1,
          stagger: 0.2,
        });

        gsap.to(".footer404", {
            duration: 0.4,
            opacity: 1, 
            ease: "expo.inOut",
            delay: 2.4,
          });
        
        
        
      }, []);
      
    
      return (
        <div className="not-found-container">
          <div className="header404-container">
            <div className="header404">
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </div>
          </div>
    
          <div className="footer404">
            <span>On dirait que vous vous êtes perdu.</span>
          </div>
        </div>
      );
};

export default Error;