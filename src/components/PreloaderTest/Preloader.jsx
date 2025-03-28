import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";
import img1 from "/work/work-3.jpg";
import img2 from "/work/work-4.jpg";
import img3 from "/work/work-1.jpg";
import img4 from "/work/work-2.jpg";
import img5 from "/work/work-5.jpg";
import img6 from "/work/work-6.jpg";
import logo from "/site-icon.png";

const images = [img1, img2, img3, logo, img4, img5, img6];

const Preloader = ({ setIsLoaded }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    
    // Timeline complète de l'animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Désactiver complètement le préchargeur
        gsap.to(loader, {
          display: 'none',
          duration: 0,
          onComplete: () => {
            setIsLoaded(true);
          }
        });
      }
    });
 
    // Animations initiales
    gsap.set(".img", { y: 500, opacity: 0 });
    gsap.set(".loader-imgs", { x: -500 });
 
    // Animation des images
    tl.to(".img", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.05,
      ease: "power3.inOut",
    })
    .to(".loader-imgs", { 
      x: 0, 
      duration: 3, 
      ease: "power3.inOut" 
    }, "-=2.5")
    .to(".img:not(#loader-logo)", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      stagger: 0.1,
      ease: "power3.inOut",
    }, "-=1")
    .to(loader, { 
      opacity: 0, 
      duration: 0.5, 
      ease: "power3.inOut" 
    });

    // Nettoyer l'animation si nécessaire
    return () => tl.kill();
  }, [setIsLoaded]);
 
  return (
    <div ref={loaderRef} className="loader">
      <div className="loader-imgs">
        {images.map((src, index) => (
          <div 
            className="img" 
            id={index === 3 ? "loader-logo" : ""} 
            key={index}
          >
            <img src={src} alt={`project-${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;