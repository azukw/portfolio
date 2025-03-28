import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './ReturnToTop.css';

const ReturnToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Function to handle scroll event
  const toggleVisibility = () => {
    // Show button when page is scrolled down more than 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Handle rendering with fade out
  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match the fade-out animation duration
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <>
      {shouldRender && (
        <button 
          onClick={scrollToTop}
          className={`return-to-top-btn ${isVisible ? '' : 'fade-out'}`}
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ReturnToTop;