import React from "react";
import { Link } from "react-router-dom";
import "../projects.css";


import ParallaxImage from "../../../components/ParallaxImage/ParallaxImage";
import TexteAnime from "../../../components/TexteAnime/TexteAnime";
import ReactLenis from "lenis/react";
import Transition from "../../../components/Transition/Transition";
import VideoWithLoader from "../../../components/VideoWithLoader/VideoWithLoader";

import Banner from "/work/work-1.jpg"
import Code from "/projects/Godette/code.png"
import Map from "/projects/Godette/map.png"
import GodetteX from "/projects/Godette/godette.png"
import SkeletonWarrior from "/projects/Godette/skeletonwarrior.png"
import SkeletonMage from "/projects/Godette/skeletonmage.png"
import GanonBoss from "/projects/Godette/ganonboss.png"

import Preview from "/projects/Godette/preview.mp4"
import Attack from "/projects/Godette/attack.mp4"
import Jump from "/projects/Godette/jump.mp4"
import Run from "/projects/Godette/run.mp4"
import Swap from "/projects/Godette/swap.mp4"
import FightWarrior from "/projects/Godette/fightwarrior.mp4"
import FightMage from "/projects/Godette/fightmagic.mp4"
import Castle from "/projects/Godette/castle.mp4"
import FightBoss from "/projects/Godette/bossfight.mp4"

const Godette = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <TexteAnime
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            GdScript
          </TexteAnime>
          <TexteAnime tag="h2" delay={1}>
            The Legend of Godette
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
              Un jeu vidéo que j'ai créé en suivant une vidéo tutoriel
              (voir source) afin d'apprendre à utiliser Godot. J'ai donc appris à
              l'utiliser et à maîtriser GdScript. Cette vidéo m'a permis de comprendre
              beaucoup de concepts importants : les états, les animations, les
              collisions, les attaques, les sauts, les déplacements, les caméras, les
              ennemis, les boss, les interfaces, les objets, et même les sons.
            </TexteAnime>
          </div>

          <div className="details">
            <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
              Année
            </TexteAnime>
            <TexteAnime tag="h4" animateOnScroll={true}>
              2025
            </TexteAnime>
          </div>

          <div className="details">
            <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
              Type
            </TexteAnime>
            <TexteAnime tag="h4" animateOnScroll={true}>
              Jeu vidéo <br /> Projet personnel, solo
            </TexteAnime>
          </div>

          <div className="details">
            <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
              Détails
            </TexteAnime>
            <TexteAnime tag="h4" animateOnScroll={true}>
            <a href="https://www.youtube.com/watch?v=AoGOIiBo4Eg&t=7453s" target="_blank"><h4>Source Vidéo</h4></a>
            </TexteAnime>
          </div>
        </section>

        <div className="project-container">

          <div className="section-half">
            <div className="section-text">
            <p>J'ai pu apprendre à développer en GdScript de manière fluide,
            et j'ai compris beaucoup de nouvelles choses sur Godot.</p>            
            </div>
          </div>


          <div className="section-half">
            <div className="section-media">
              <img src={Code} alt="Description" />
            </div>
          </div>

          <div className="section-half">
            <div className="section-text">
            <p>Malgré le fait que certains modèles 3D étaient fournis,
                j'ai pu les modifier moi-même pour rajouter des montagnes,
                des rochers ou des arbres.</p>            
            </div>
          </div>

          <div className="section-half">
            <div className="section-media">
              <img src={Map} alt="Description" />
            </div>
          </div>

          <div className="section-half">
            <div className="section-media">
              <img src={GodetteX} alt="Description" />
            </div>
            <div className="section-media">
              <img src={GanonBoss} alt="Description" />
            </div>
          </div>

          <div className="section-half">
            <div className="section-media">
              <img src={SkeletonMage} alt="Description" />
            </div>
            <div className="section-media">
              <img src={SkeletonWarrior} alt="Description" />
            </div>
          </div>


          <div className="section-half">
            <div className="section-text">
              <p>Au début, j'ai pu créer des prototypes sans les modèles afin de coder d'abord les mécaniques importantes.</p>
            </div>
          </div>


          <div className="section-full-video">
            <VideoWithLoader src={Preview} />
          </div>

          <div className="section-half">
            <div className="section-text">
              <p>Ensuite, j'ai animé les modèles avec des animations venant de Mixamo, et j'ai ajouté des particules en fonction
                de certaines actions. Dans l'ordre : Attaquer, Sauter, Courir, Changer d'arme.
                Le joueur possède une épee (clic gauche) et un bouclier (clic droit), ainsi qu'un bâton de mage et peut changer d'arme avec la molette.
                Le bâton possède deux pouvoir, soit une boule de feu, soit un soin.
              </p>
            </div>
          </div>


          <div className="section-half">
            <div className="section-media">
              <VideoWithLoader src={Attack} />
            </div>
            <div className="section-media">
              <VideoWithLoader src={Jump} />
            </div>
          </div>

          <div className="section-half">
            <div className="section-media">
              <VideoWithLoader src={Run} />
            </div>
            <div className="section-media">
              <VideoWithLoader src={Swap} />
            </div>
          </div>


          <div className="section-half">
            <div className="section-text">
              <p>Il était important de créer des ennemis avec des comportements différents, alors
                j'ai pu créer un guerrier et un mage squelette. Le guerrier attaque au corps à corps,
                tandis que le mage attaque à distance. Tout les ennemis suivent le joueur dans
                un certain rayon.
              </p>
            </div>
          </div>


          <div className="section-half">
            <div className="section-media">
              <VideoWithLoader src={FightWarrior} />
            </div>
            <div className="section-media">
              <VideoWithLoader src={FightMage} />
            </div>
          </div>

          <div className="section-half">
            <div className="section-text">
              <p>J'ai aussi appris à créer un boss final, qui possède plusieurs pattern d'attaques :
                soit il tourne et attaque, soit il envoie des boules de feu, soit il frappe une fois.
                Ce boss se trouve dans un château, et le joueur peut y accéder en passant la porte.
              </p>
            </div>
          </div>


          <div className="section-half">
            <div className="section-media">
              <VideoWithLoader src={Castle} />
            </div>
            <div className="section-media">
              <VideoWithLoader src={FightBoss} />
            </div>
          </div>


        </div>

        <section className="next-project">
          <TexteAnime tag="p" animateOnScroll={true} className="primary sm">
            02 - 06
          </TexteAnime>
          <TexteAnime tag="h3" animateOnScroll={true}>
            PROJET SUIVANT
          </TexteAnime>

          <div className="next-project-img">
            <Link to={`/works/seeds`}>
              <div className="next-project-img-wrapper">
                <img src="/work/work-2.jpg" alt="" />
              </div>
            </Link>
          </div>

          <TexteAnime tag="h4" animateOnScroll={true}>
            Creative Seeds
          </TexteAnime>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Transition(Godette);
