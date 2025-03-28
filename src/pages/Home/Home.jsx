import React, { useEffect, useRef } from "react";
import "./Home.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import DecryptedText from "../../components/DecryptedText/DecryptedText";
import Footer from "../../components/Footer/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

import Transition from "../../components/Transition/Transition";

const Home = () => {
  const stickyTitlesRef = useRef(null);
  const titlesRef = useRef([]);
  const stickyWorkHeaderRef = useRef(null);
  const homeWorkRef = useRef(null);
  const containerRef = useRef(null);


  useEffect(() => {
    const animateTextElements = (selector, splitBy) => {
      const textContainers = containerRef.current.querySelectorAll(selector);

      textContainers.forEach((textContainer) => {
        let elements = [];
        let elementType = "";

        if (splitBy === "words") {
          elements = textContainer.textContent.trim().split(/\s+/);
          elementType = "word";
        } else if (splitBy === "letters") {
          const words = textContainer.textContent.trim().split(/\s+/);
          elements = [];

          words.forEach((word, wordIndex) => {
            for (let i = 0; i < word.length; i++) {
              elements.push(word[i]);
            }

            if (wordIndex < words.length - 1) {
              elements.push(" ");
            }
          });

          elementType = "letter";
        }

        textContainer.textContent = "";

        const animatedElements = [];

        elements.forEach((element, index) => {
          if (splitBy === "letters" && element === " ") {
            textContainer.appendChild(document.createTextNode(" "));
            return;
          }

          const elementSpan = document.createElement("span");
          elementSpan.classList.add(elementType);
          elementSpan.textContent = element;
          textContainer.appendChild(elementSpan);

          if (splitBy === "words" && index < elements.length - 1) {
            textContainer.appendChild(document.createTextNode(" "));
          }

          animatedElements.push({
            element: elementSpan,
            originalX: 0,
            originalY: 0,
            currentX: 0,
            currentY: 0,
            targetX: 0,
            targetY: 0,
          });
        });

        setTimeout(() => {
          animatedElements.forEach((element) => {
            const rect = element.element.getBoundingClientRect();
            element.originalX = rect.left + rect.width / 2;
            element.originalY = rect.top + rect.height / 2;
            element.currentX = 0;
            element.currentY = 0;
            element.targetX = 0;
            element.targetY = 0;
          });
        }, 100);

        const handleMouseMove = (e) => {
          const mouseX = e.clientX;
          const mouseY = e.clientY;

          const radius = 150;
          const maxDisplacement = 50;

          animatedElements.forEach((element) => {
            const originalX = element.originalX;
            const originalY = element.originalY;

            const dx = originalX - mouseX;
            const dy = originalY - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < radius) {
              const force = (1 - distance / radius) * maxDisplacement;

              element.targetX = (dx / distance) * force;
              element.targetY = (dy / distance) * force;
            } else {
              element.targetX = 0;
              element.targetY = 0;
            }
          });
        };

        document.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
          const lerpFactor = 0.1;

          animatedElements.forEach((element) => {
            element.currentX +=
              (element.targetX - element.currentX) * lerpFactor;
            element.currentY +=
              (element.targetY - element.currentY) * lerpFactor;

            element.element.style.transform = `translate(${element.currentX}px, ${element.currentY}px)`;
          });

          requestAnimationFrame(animate);
        };

        animate();

        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
        };
      });
    };

    animateTextElements(".anime-text", "words");
    animateTextElements(".anime-header", "letters");

    const handleResize = () => {
      animateTextElements(".anime-text", "words");
      animateTextElements(".anime-header", "letters");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const stickySection = stickyTitlesRef.current;
    const titles = titlesRef.current.filter(Boolean);

    if (!stickySection || titles.length !== 3) {
      window.removeEventListener("resize", handleResize);
      return;
    }

    gsap.set(titles[0], { opacity: 1, scale: 1 });
    gsap.set(titles[1], { opacity: 0, scale: 0.75 });
    gsap.set(titles[2], { opacity: 0, scale: 0.75 });

    const pinTrigger = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${window.innerHeight * 4}`,
      pin: true,
      pinSpacing: true,
    });

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: stickySection,
        start: "top top",
        end: `+=${window.innerHeight * 3}`,
        scrub: 0.5,
      },
    });

    masterTimeline
      .to(
        titles[0],
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.3,
          ease: "power2.out",
        },
        1
      )

      .to(
        titles[1],
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        1.25
      );

    masterTimeline
      .to(
        titles[1],
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.3,
          ease: "power2.out",
        },
        2.5
      )

      .to(
        titles[2],
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        2.75
      );

    const workHeaderSection = stickyWorkHeaderRef.current;
    const homeWorkSection = homeWorkRef.current;

    let workHeaderPinTrigger;
    if (workHeaderSection && homeWorkSection) {
      workHeaderPinTrigger = ScrollTrigger.create({
        trigger: workHeaderSection,
        start: "top top",
        endTrigger: homeWorkSection,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }

    return () => {
      pinTrigger.kill();
      if (workHeaderPinTrigger) {
        workHeaderPinTrigger.kill();
      }
      if (masterTimeline.scrollTrigger) {
        masterTimeline.scrollTrigger.kill();
      }
      masterTimeline.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
        <div className="container" ref={containerRef}>
          <div className="container">

            <div className="hero-img">
              <img src="/home/hero.jpg" alt="" />
            </div>
            <div className="hero-copy">
              <div className="hero-copy-wrapper">
                <h1>Sami SAOUD</h1>
              </div>
            </div>

            <div className="hero-text-left anime-header">
              <p>Passionné par l'informatique et les jeux vidéos.</p>
            </div>

            <div className="hero-text-right anime-header">
              <p>Toujours en recherche d'innovation et de créativité.</p>
            </div>


            <div className="hero-tagline anime-header">
              Étudiant en troisième année de Licence à l'Université de Rennes.
            </div>

            <div className="skills">
              <span>Organisé</span>
              <span>Esprit d'équipe</span>
              <span>Créatif</span>
              <span>Curieux</span>
            </div>
          </div>
        </div>
        </section>

        <section ref={stickyTitlesRef} className="sticky-titles">
          <div className="sticky-titles-nav">
            <p className="primary sm">Moi</p>
            <p className="primary sm">2025</p>
          </div>
          <div className="sticky-titles-footer">
            <p className="primary sm">Sami SAOUD</p>
            <p className="primary sm">Scrollez</p>
          </div>
          <h2 ref={(el) => (titlesRef.current[0] = el)}>
          <DecryptedText
                text="Étudiant à l'Université de Rennes."
                maxIterations={20}
                revealDirection="center"
                sequential={true}
                animateOn="view"
              />
          </h2>
          <h2 ref={(el) => (titlesRef.current[1] = el)}>
          <DecryptedText
                text="Je suis passionné par l'informatique et les jeux vidéos."
                maxIterations={20}
                revealDirection="center"
                sequential={true}
                animateOn="view"
              />
          </h2>
          <h2 ref={(el) => (titlesRef.current[2] = el)}>
          <DecryptedText
                text="Bienvenue dans mon portfolio !"
                maxIterations={20}
                revealDirection="center"
                sequential={true}
                animateOn="view"
              />
          </h2>
        </section>
        <ContactForm/>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
