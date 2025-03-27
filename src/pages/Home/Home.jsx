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
          <div className="container">

            <div className="hero-img">
              <img src="/home/hero.jpg" alt="" />
            </div>
            <div className="hero-copy">
              <div className="hero-copy-wrapper">
                <h1>Sami SAOUD</h1>
              </div>
            </div>

            <div className="hero-text-left">
              <p>Passionné par l'informatique et les jeux vidéos.</p>
            </div>

            <div className="hero-text-right">
              <p>Toujours en recherche d'innovation et de créativité.</p>
            </div>


            <div className="hero-tagline">
              <DecryptedText
                text="Étudiant en troisième année de Licence à l'Université de Rennes."
                maxIterations={50}
                revealDirection="center"
                sequential={true}
                animateOn="hover"
              />
            </div>

            <div className="skills">
              <p>Organisé</p>
              <p>Esprit d'équipe</p>
              <p>Créatif</p>
              <p>Curieux</p>
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
        
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
