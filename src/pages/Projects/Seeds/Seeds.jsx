import React from "react";
import { Link } from "react-router-dom";
import "../projects.css";


import ParallaxImage from "../../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../../components/AnimatedCopy/AnimatedCopy";
import ReactLenis from "lenis/react";
import Transition from "../../../components/Transition/Transition";

import Banner from "/work/work-2.jpg"

import Preview from "/projects/Seeds/preview.mp4"
import Colored from "/projects/Seeds/colored.jpg"
import Black from "/projects/Seeds/black.jpg"


const Seeds = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            Maya, Unreal Engine, Substance, Mixamo, C#
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            Creative Seeds
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
            Projet de modélisation 3D créé au sein de l'école Creative Seeds, à l'occasion 
            d'une spécialité en L2. Le but était d'habiller le personnage en modélisant le 
            tout de A à Z. J'ai créé un personnage original : un gentleman, avec une veste 
            longue, un chapeau, ainsi qu'une moustache.
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
              Modélisation 3D, Animation, Programmation
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
              Projet universitaire, solo
            </AnimatedCopy>
          </div>
        </section>

        <div className="project-container">

          <div className="section-half">
            <div className="section-media">
              <img src={Colored} alt="Description" />
            </div>
            <div className="section-media">
              <img src={Black} alt="Description" />
            </div>
          </div>

          <div className="section-half">
            <div className="section-text">
            <p>Après avoir modélisé les vêtements et texturisé le personnage 
              grâce à Maya et Adobe Substance, j'ai créé un petit monde, pour 
              montrer les animations importées de Mixamo, et j'ai codé le mouvement 
              du personnage sur Unreal Engine.</p>            
            </div>
          </div>

          <div className="section-full-video">
            <video src={Preview} autoPlay muted loop></video>
          </div>
        </div>

        <section className="next-project">
          <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
            03 - 06
          </AnimatedCopy>
          <AnimatedCopy tag="h3" animateOnScroll={true}>
            PROJET SUIVANT
          </AnimatedCopy>

          <div className="next-project-img">
            <Link to={`/works/portfolio`}>
              <div className="next-project-img-wrapper">
                <img src="/work/work-3.jpg" alt="" />
              </div>
            </Link>
          </div>

          <AnimatedCopy tag="h4" animateOnScroll={true}>
            Portfolio
          </AnimatedCopy>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Transition(Seeds);
