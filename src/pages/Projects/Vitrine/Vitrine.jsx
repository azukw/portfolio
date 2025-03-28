import React from "react";
import { Link } from "react-router-dom";
import "../projects.css";


import ParallaxImage from "../../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../../components/AnimatedCopy/AnimatedCopy";
import ReactLenis from "lenis/react";
import Transition from "../../../components/Transition/Transition";

import Banner from "/work/work-4.jpg"
import Code from "/projects/Vitrine/code.png"
import Video from "/projects/Vitrine/site.mp4"

const Vitrine = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            HTML, CSS, Javascript, Python (Flask)
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
            Un site web de boutique que j'ai créé afin d'apprendre à créer des serveurs web 
            avec Python et Flask. Ce site m'a permis de découvrir les serveurs en Python, ainsi que 
            tout le processus de mémorisation des données utilisateurs, avec les cookies 
            par exemple.
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
              Projet universitaire, en groupe
            </AnimatedCopy>
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
            <video src={Video} autoPlay muted loop></video>
          </div>


        </div>

        <section className="next-project">
          <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
            05 - 06
          </AnimatedCopy>
          <AnimatedCopy tag="h3" animateOnScroll={true}>
            PROJET SUIVANT
          </AnimatedCopy>

          <div className="next-project-img">
            <Link to={`/works/genielog`}>
              <div className="next-project-img-wrapper">
                <ParallaxImage src="/work/work-5.jpg" alt="" />
              </div>
            </Link>
          </div>

          <AnimatedCopy tag="h4" animateOnScroll={true}>
            Génie Logiciel
          </AnimatedCopy>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Transition(Vitrine);
