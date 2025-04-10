import React, { useEffect, useRef, useState } from "react";
import "./Menu.css";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const Menu = () => {
  const menuLinks = [
    { path: "/", label: "Accueil" },
    { path: "/works", label: "Projets" },
    { path: "/about", label: "contact" },
  ];

  const location = useLocation();
  const menuContainer = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef();
  const menuLinksAnimation = useRef();
  const menuBarAnimation = useRef();

  const lastScrollY = useRef(0);
  const menuBarRef = useRef();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldDelayClose, setShouldDelayClose] = useState(false);
  const previousPathRef = useRef(location.pathname);
  const scrollPositionRef = useRef(0);
  const [currentTime, setCurrentTime] = useState("");

  const toggleBodyScroll = (disableScroll) => {
    if (disableScroll) {
      scrollPositionRef.current = window.pageYOffset;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("top");
      document.body.style.removeProperty("width");
      window.scrollTo(0, scrollPositionRef.current);
    }
  };

  const toggleMenu = () => {
    document.querySelector(".hamburger-icon").classList.toggle("active");
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    toggleBodyScroll(newMenuState);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      document.querySelector(".hamburger-icon").classList.toggle("active");
      setIsMenuOpen(false);
      toggleBodyScroll(false);
    } else return;
  };

  const handleLinkClick = (path) => {
    if (path !== location.pathname) {
      setShouldDelayClose(true);
    }
  };

  useEffect(() => {
    if (location.pathname !== previousPathRef.current && shouldDelayClose) {
      const timer = setTimeout(() => {
        closeMenu();
        setShouldDelayClose(false);
      }, 700);

      previousPathRef.current = location.pathname;
      return () => clearTimeout(timer);
    }

    previousPathRef.current = location.pathname;
  }, [location.pathname, shouldDelayClose]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.set(".menu-link-item-tient", { y: 125 });
    gsap.set(".menu-social-icons", { opacity: 0, y: 20 });

    menuAnimation.current = gsap.timeline({ paused: true }).to(".menu", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
      force3D: true,
      willChange: "transform"
    });

    const createMenuBarAnimation = () => {
      if (menuBarAnimation.current) {
        menuBarAnimation.current.kill();
      }

      const heightValue =
        windowWidth < 1000 ? "calc(100% - 2.5em)" : "calc(100% - 4em)";

      menuBarAnimation.current = gsap
        .timeline({ paused: true })
        .to(".menu-bar", {
          duration: 1,
          height: heightValue,
          ease: "power4.inOut",
          force3D: true,
          willChange: "transform"
        });
    };

    createMenuBarAnimation();

    menuLinksAnimation.current = gsap
      .timeline({ paused: true })
      .to(".menu-link-item-tient", {
        y: 0,
        duration: 1.25,
        stagger: 0.075,
        ease: "power3.inOut",
        delay: 0.125,
        force3D: true,
        willChange: "transform"
      })
      .to(".menu-social-icons", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        force3D: true,
        willChange: "transform"
      }, "-=0.3");

  const isPageReload = () => {
    if (window.performance) {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        return navEntries[0].type === 'reload';
      }
    }
    return false;
  };

  if (isPageReload()) {
    gsap.set(".menu-bar", { y: -100, opacity: 0 });
    
    gsap.to(".menu-bar", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 4  
    });
  } else {
    gsap.set(".menu-bar", { y: 0, opacity: 1 });
  }
}, [windowWidth]);

  useEffect(() => {
    if (isMenuOpen) {
      menuAnimation.current.play();
      menuBarAnimation.current.play();
      menuLinksAnimation.current.play();
    } else {
      menuAnimation.current.reverse();
      menuBarAnimation.current.reverse();
      menuLinksAnimation.current.reverse();
      gsap.set(".menu-social-icons", { opacity: 0, y: 20 });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
  
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        gsap.to(".menu-bar", {
          y: 0,
          duration: 1,
          ease: "power2.out",
        });
      } else if (currentScrollY > lastScrollY.current) {
        gsap.to(".menu-bar", {
          y: -200,
          duration: 1,
          ease: "power2.out",
        });
      } else {
        gsap.to(".menu-bar", {
          y: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
  
      lastScrollY.current = currentScrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      if (document.body.style.position === "fixed") {
        toggleBodyScroll(false);
      }
    };
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];
      const day = days[now.getDay()];
      const date = now.getDate().toString().padStart(2, '0');
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${day} ${date}, ${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const getRandomTransform = () => {
    const scale = 1 + Math.random() * 0.05;
    const rotate = (Math.random() - 0.5) * 8;
    const translateX = (Math.random() - 0.5) * 10;
    const translateY = (Math.random() - 0.5) * 10;
    return `scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
  };

  const getRandomColor = () => {
    const hue = Math.random() * 360;
    return `hsl(${hue}, 50%, 70%)`;
  };

  const handleLogoHover = (e) => {
    const logo = e.currentTarget;
    logo.style.transform = getRandomTransform();
  };

  const handleLogoLeave = (e) => {
    const logo = e.currentTarget;
    logo.style.transform = 'none';
  };

  const handleMenuLinkHover = (e) => {
    const link = e.currentTarget;
    link.style.transform = getRandomTransform();
    link.style.color = getRandomColor();
  };

  const handleMenuLinkLeave = (e) => {
    const link = e.currentTarget;
    link.style.transform = 'none';
    link.style.color = 'var(--fg)';
  };

  return (
    <div className="menu-container" ref={menuContainer}>
      <div className="menu-bar" ref={menuBarRef}>
        <div className="menu-bar-container">
          <div className="menu-logo" onClick={closeMenu}>
            <Link to="/">
              <img 
                src="/logoP.png" 
                alt="Logo Pixel" 
                onMouseEnter={handleLogoHover}
                onMouseLeave={handleLogoLeave}
              />
            </Link>
          </div>
          <div className="menu-clock">
            {currentTime}
          </div>
          <div className="menu-actions">
            <ThemeToggle/>
            <div className="menu-toggle">
              <button className="hamburger-icon" onClick={toggleMenu}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="menu-col">
          <div className="menu-sub-col">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div key={index} className="menu-link-item">
                  <div className="menu-link-item-tient">
                    <Link
                      className="menu-link"
                      to={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      onMouseEnter={handleMenuLinkHover}
                      onMouseLeave={handleMenuLinkLeave}
                    >
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="menu-social-icons">
          <a href="https://github.com/azukw/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/sami-saoud-446836340/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;