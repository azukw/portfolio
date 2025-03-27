import React from "react";
import { Link } from "react-router-dom";
import "../projects.css";


import ParallaxImage from "../../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../../components/AnimatedCopy/AnimatedCopy";
import ReactLenis from "lenis/react";
import Transition from "../../../components/Transition/Transition";

import Banner from "/work/work-6.jpg"
import Aim from "/projects/Casino/Aim.mp4"
import Bingo from "/projects/Casino/Bingo.mp4"
import Crash from "/projects/Casino/Crash.mp4"

const Casino = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            HTML, CSS, Javascript, Python (Pygame)
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            Anti-Casino
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
            Un site proposant plusieurs jeux, le thème était la sensibilisation à la dépendance aux jeux d'argent. 
            Ce site permet de continuer à jouer sans dépenser de la monnaie réelle.
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Année
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              2022
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Type
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Site Web, Jeu vidéo
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
              Projet de lycée, en groupe
            </AnimatedCopy>
          </div>
        </section>

        <div className="project-container">
          
          <div className="section-half">
            <div className="section-text">
              <p>Le premier jeu disponible dans le navigateur sert seulement à se détendre, c'est un mini-jeu où il faut simplement cliquer 
                sur les cibles. Le résultat final de précision est affiché à la fin.
                </p>
            </div>
          </div>


          <div className="section-full-video">
            <video src={Aim} autoPlay muted></video>
          </div>

          <div className="section-half">
            <div className="section-text">
              <p>Le deuxième est un jeu de bingo, on ne peut pas activer le bingo tant qu'une ligne n'est pas remplie. Il faut cliquer sur les cases pour
                les remplir, et une fois qu'une ligne est remplie, il faut cliquer sur le bouton "Bingo" pour gagner. Les nombres sont générés aléatoirement.
                </p>
            </div>
          </div>

          <div className="section-full-video">
            <video src={Bingo} autoPlay muted></video>
          </div>

          <div className="section-half">
            <div className="section-text">
              <p>Les derniers jeux sont plus axés casino en ligne. On y retrouve un "Coinflip", ou il y a "une chance sur deux" de gagner 
                le double de sa mise avec un simple pile ou face, et il y a un jeu appelé "Crash" dans lequel une fusée décolle et s'arrête à 
                un multiplicateur "aléatoire". Il faut retirer l'argent avant que la fusée n'explose pour récuperer les gains.
                </p>
            </div>
          </div>

          <div className="section-full-video">
            <video src={Crash} autoPlay muted></video>
          </div>


        </div>

        <section className="next-project">
          <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
            00 - 06
          </AnimatedCopy>
          <AnimatedCopy tag="h3" animateOnScroll={true}>
            AUTRES PROJETS
          </AnimatedCopy>

          <div className="next-project-img">
            <Link to={`/works`}>
              <div className="next-project-img-wrapper">
                <ParallaxImage src="/work/soon.jpg" alt="" />
              </div>
            </Link>
          </div>

          <AnimatedCopy tag="h4" animateOnScroll={true}>
            Retour à la page des projets
          </AnimatedCopy>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Transition(Casino);
