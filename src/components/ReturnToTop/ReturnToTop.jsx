import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './ReturnToTop.css';

const ReturnToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
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