import React from "react";
import { Link } from "react-router-dom";
import "../projects.css";


import ParallaxImage from "../../../components/ParallaxImage/ParallaxImage";
import TexteAnime from "../../../components/TexteAnime/TexteAnime";
import ReactLenis from "lenis/react";
import Transition from "../../../components/Transition/Transition";
import VideoWithLoader from "../../../components/VideoWithLoader/VideoWithLoader";

import Banner from "/work/work-5.jpg"
import Site from "/projects/GenieLog/site.jpg"
import Diag from "/projects/GenieLog/diag.jpg"
import Carte from "/projects/GenieLog/carte.mp4"


const GenieLog = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <TexteAnime
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            Java, Swing, API REST, HTML, CSS, JS
          </TexteAnime>
          <TexteAnime tag="h2" delay={1}>
            Projet Génie Logiciel
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
            Le projet était de créer une application, avec une API ainsi qu'une base de données. Cette application cherche et compare les prix, 
            caractéristiques et + des stations essence en France.
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
              Application
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
              Projet universitaire, en groupe
            </TexteAnime>
          </div>
        </section>

        <div className="project-container">

          <div className="section-half">
            <div className="section-text">
              <p>Faire cette application était un réel défi, car les interfaces Swing sont plutôt compliquées à aménager. Nous sommes 
                tout de même arrivés à une interface compréhensible, et facile d'utilisation.
                </p>
            </div>
          </div>


          <div className="section-half">
            <div className="section-media">
              <img src={Site} alt="Description" />
            </div>
          </div>

          <div className="section-half">
            <div className="section-text">
              <p>Demander le résultat sur l'application redirige vers un site web, qui contient des comparaisons, des graphiques, 
                en fonction des filtres choisis. Pour que tout cela fonctionne, il fallait d'abord créer chacune des formes que nous allions 
                utiliser dans l'application. Cette application contient une carte pratique, car elle permet de choisir des régions et département avec un seul clic.
                </p>
            </div>
          </div>

          <div className="section-half">
            <div className="section-media">
              <img src={Diag} alt="Description" />
            </div>
          </div>

          <div className="section-full-video">
            <VideoWithLoader src={Carte} />
          </div>


        </div>

        <section className="next-project">
          <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
            06 - 06
          </TexteAnime>
          <TexteAnime tag="h3" animateOnScroll={true}>
            PROJET SUIVANT
          </TexteAnime>

          <div className="next-project-img">
            <Link to={`/works/casino`}>
              <div className="next-project-img-wrapper">
                <img src="/work/work-6.jpg" alt="" />
              </div>
            </Link>
          </div>

          <TexteAnime tag="h4" animateOnScroll={true}>
            Anti-Casino
          </TexteAnime>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Transition(GenieLog);
