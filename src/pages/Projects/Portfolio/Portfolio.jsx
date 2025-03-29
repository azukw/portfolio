import React from "react";
import { Link } from "react-router-dom";
import "../projects.css";


import ParallaxImage from "../../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../../components/AnimatedCopy/AnimatedCopy";
import ReactLenis from "lenis/react";
import Transition from "../../../components/Transition/Transition";

import Banner from "/work/work-3.jpg"
import Video1 from "/projects/Portfolio/exSite.mp4"
import Video2 from "/projects/Portfolio/newSite.mp4"

const Portfolio = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            HTML, CSS, Javascript
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            Portfolio
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            <ParallaxImage src={Banner} alt="" />
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Projet
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Un site web portfolio
              vitrine qui m’a permis de
              développer mes
              compétences en
              programmation CSS. Ce
              site m'a notamment
              permis de découvrir les
              cartes ainsi que les sliders.
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Année
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              2024
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Type
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Site Web
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Détails
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              <a href="#"><h4><s>Github (Bientôt)</s></h4></a>
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Projet personnel, solo
            </AnimatedCopy>
          </div>
        </section>

        <div className="project-container">

          <div className="section-half">
            <div className="section-text">
              <p></p>
            </div>
          </div>


          <div className="section-full-video">
            <video src={Video1} autoPlay muted loop></video>
          </div>

          <div className="section-half">
            <div className="section-text">
              <p>Après avoir terminé la première version, j'ai créé une deuxième
                version du site avec un carousel d'images.</p>
            </div>
          </div>

          <div className="section-full-video">
            <video src={Video2} autoPlay muted loop></video>
          </div>


        </div>

        <section className="next-project">
          <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
            04 - 06
          </AnimatedCopy>
          <AnimatedCopy tag="h3" animateOnScroll={true}>
            PROJET SUIVANT
          </AnimatedCopy>

          <div className="next-project-img">
            <Link to={`/works/vitrine`}>
              <div className="next-project-img-wrapper">
                <img src="/work/work-4.jpg" alt="" />
              </div>
            </Link>
          </div>

          <AnimatedCopy tag="h4" animateOnScroll={true}>
            Vitrine Boutique
          </AnimatedCopy>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Transition(Portfolio);
