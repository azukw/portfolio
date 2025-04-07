import React from "react";
import { Link } from "react-router-dom";
import "../projects.css";


import ParallaxImage from "../../../components/ParallaxImage/ParallaxImage";
import TexteAnime from "../../../components/TexteAnime/TexteAnime";
import ReactLenis from "lenis/react";
import Transition from "../../../components/Transition/Transition";
import VideoWithLoader from "../../../components/VideoWithLoader/VideoWithLoader";

import Banner from "/work/work-4.jpg"
import Code from "/projects/Vitrine/code.png"
import Video from "/projects/Vitrine/site.mp4"

const Vitrine = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <TexteAnime
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            HTML, CSS, Javascript, Python (Flask)
          </TexteAnime>
          <TexteAnime tag="h2" delay={1}>
            Vitrine Boutique
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
            Un site web de boutique que j'ai créé afin d'apprendre à créer des serveurs web 
            avec Python et Flask. Ce site m'a permis de découvrir les serveurs en Python, ainsi que 
            tout le processus de mémorisation des données utilisateurs, avec les cookies 
            par exemple.
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
              Projet universitaire, en groupe
            </TexteAnime>
          </div>
        </section>

        <div className="project-container">

          <div className="section-half">
            <div className="section-text">
              <p>Le site a une fonction de panier. Le panier est mémorisé dans un 
                fichier json, avec les noms d'utilisateur et leurs mots de passes 
                cryptés (évidemment).</p>
            </div>
          </div>


          <div className="section-half">
            <div className="section-media">
              <img src={Code} alt="Description" />
            </div>
          </div>

          <div className="section-half">
            <div className="section-text">
              <p>Le formulaire vérifie si l'utilisateur existe déjà, et si c'est le cas, 
                il le ramène vers la page de connexion. Sinon, le compte se crée, et l'utilisateur 
                peut ensuite se connecter et retrouver son panier.</p>
            </div>
          </div>

          <div className="section-full-video">
            <VideoWithLoader src={Video} />
          </div>


        </div>

        <section className="next-project">
          <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
            05 - 06
          </TexteAnime>
          <TexteAnime tag="h3" animateOnScroll={true}>
            PROJET SUIVANT
          </TexteAnime>

          <div className="next-project-img">
            <Link to={`/works/ctrlaltelite`}>
              <div className="next-project-img-wrapper">
                <img src="/work/work-5.jpg" alt="" />
              </div>
            </Link>
          </div>

          <TexteAnime tag="h4" animateOnScroll={true}>
            Génie Logiciel
          </TexteAnime>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Transition(Vitrine);
