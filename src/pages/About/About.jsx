import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import TexteAnime from "../../components/TexteAnime/TexteAnime";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Marquee from "react-fast-marquee";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const About = () => {
  return (
    <ReactLenis root>
      <div className="page about">
        <section className="about-header">
          <Marquee>
            <h1>
              -&nbsp;Sami Saoud - Étudiant en Informatique à l'Université de Rennes&nbsp;
            </h1>
          </Marquee>
        </section>

        <section className="informations">
          <div className="informations-col">
            <div className="informations-banner">
              <img src="/about/about-hero.jpg" alt="" />
            </div>
          </div>
          <div className="informations-col">
            <TexteAnime animateOnScroll={true} tag="h4">
              Actuellement étudiant à l'Université de Rennes en Licence 3 Informatique,
              j'ai pour passions l'informatique et les jeux vidéos. J'ai pu faire de nombreux
              projets en lien avec ces deux domaines, qu'ils soient personnels ou universitaires.
            </TexteAnime>

            <div className="informations-list">
              <div className="information-list-row">
                <div className="information-list-col">
                  <h5>Email</h5>
                </div>
                <div className="information-list-col">
                  <a href="mailto:sami.ssaoud@gmail.com">sami.ssaoud@gmail.com</a>
                </div>
              </div>

              <div className="information-list-row">
                <div className="information-list-col">
                  <h5>Actuellement à</h5>
                </div>
                <div className="information-list-col">
                  <p>
                    Rennes
                  </p>
                </div>
              </div>

              <div className="information-list-row">
                <div className="information-list-col">
                  <h5>Loisirs</h5>
                </div>
                <div className="information-list-col">
                  <p>
                    Jeux Vidéo, Lecture, Badminton
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sami-trucs">

          <div className="sami-list">
            <div className="sami-list-row">

            </div>
            <div className="sami-list-row">
              <div className="sami-truc">
                <a href="/about/cv_sami-saoud.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="sami-truc-img">
                    <img src="/about/cv.jpg" alt="" />
                  </div>
                  <h4>Mon CV</h4>
                </a>
              </div>

              <div className="sami-truc">
                <a href="https://github.com/azukw/" target="_blank">
                  <div className="sami-truc-img">
                    <img src="/about/gh.jpg" alt="" />
                  </div>
                  <h4>GitHub</h4>
                </a>
              </div>
              <div className="sami-truc">
                <a href="https://www.linkedin.com/in/sami-saoud-446836340/" target="_blank">
                  <div className="sami-truc-img">
                    <img src="/about/li.jpg" alt="" />
                  </div>
                  <h4>LinkedIn</h4>
                </a>
              </div>
            </div>
          </div>
        </section>
        <ContactForm/>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
