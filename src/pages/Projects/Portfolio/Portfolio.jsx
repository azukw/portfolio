import React from "react";
import { Link } from "react-router-dom";
import "../projects.css";


import ParallaxImage from "../../../components/ParallaxImage/ParallaxImage";
import TexteAnime from "../../../components/TexteAnime/TexteAnime";
import ReactLenis from "lenis/react";
import Transition from "../../../components/Transition/Transition";
import VideoWithLoader from "../../../components/VideoWithLoader/VideoWithLoader";

import Banner from "/work/work-3.jpg"
import Video1 from "/projects/Portfolio/exSite.mp4"
import Video2 from "/projects/Portfolio/newSite.mp4"

const Portfolio = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <TexteAnime
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            HTML, CSS, Javascript
          </TexteAnime>
          <TexteAnime tag="h2" delay={1}>
            Portfolio
          </TexteAnime>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            <ParallaxImage src={Banner} alt="" />
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
              Projet
            </TexteAnime>
            <TexteAnime tag="h4" animateOnScroll={true}>
              Un site web portfolio
              vitrine qui m'a permis de
              développer mes
              compétences en
              programmation CSS. Ce
              site m'a notamment
              permis de découvrir les
              cartes ainsi que les sliders.
            </TexteAnime>
          </div>

          <div className="details">
            <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
              Année
            </TexteAnime>
            <TexteAnime tag="h4" animateOnScroll={true}>
              2024
            </TexteAnime>
          </div>

          <div className="details">
            <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
              Type
            </TexteAnime>
            <TexteAnime tag="h4" animateOnScroll={true}>
              Site Web
            </TexteAnime>
          </div>

          <div className="details">
            <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
              Détails
            </TexteAnime>
            <TexteAnime tag="h4" animateOnScroll={true}>
              <a href="#"><h4><s>Github (Bientôt)</s></h4></a>
            </TexteAnime>
            <TexteAnime tag="h4" animateOnScroll={true}>
              Projet personnel, solo
            </TexteAnime>
          </div>
        </section>

        <div className="project-container">

          <div className="section-half">
            <div className="section-text">
              <p></p>
            </div>
          </div>


          <div className="section-full-video">
            <VideoWithLoader src={Video1} />
          </div>

          <div className="section-half">
            <div className="section-text">
              <p>Après avoir terminé la première version, j'ai créé une deuxième
                version du site avec un carousel d'images.</p>
            </div>
          </div>

          <div className="section-full-video">
            <VideoWithLoader src={Video2} />
          </div>


        </div>

        <section className="next-project">
          <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
            04 - 06
          </TexteAnime>
          <TexteAnime tag="h3" animateOnScroll={true}>
            PROJET SUIVANT
          </TexteAnime>

          <div className="next-project-img">
            <Link to={`/works/vitrine`}>
              <div className="next-project-img-wrapper">
                <img src="/work/work-4.jpg" alt="" />
              </div>
            </Link>
          </div>

          <TexteAnime tag="h4" animateOnScroll={true}>
            Vitrine Boutique
          </TexteAnime>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Transition(Portfolio);
