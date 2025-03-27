import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Footer from "../../components/Footer/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import Transition from "../../components/Transition/Transition";
import workList from "../../data/workList";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const stickyWorkHeaderRef = useRef(null);
  const homeWorkRef = useRef(null);

  useEffect(() => {
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
      if (workHeaderPinTrigger) {
        workHeaderPinTrigger.kill();
      }
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page work">
        <section ref={stickyWorkHeaderRef} className="sticky-work-header">
          <AnimatedCopy tag="h1" animateOnScroll="true">
          ↓ Mes projets ↓
          </AnimatedCopy>
        </section>

        <section ref={homeWorkRef} className="home-work">
          <div className="home-work-list">
            {workList.map((work, index) => (
              <Link to={`/works/${work.nom}`} key={work.id} className="home-work-item">
                <p className="primary sm">{`${String(index + 1).padStart(
                  2,
                  "0"
                )} - ${String(workList.length).padStart(2, "0")}`}</p>
                <h3>{work.title} </h3>
                <div className="work-item-img">
                  <img src={work.image} alt={work.title} />
                </div>
                <h4>{work.category}</h4>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Work);
