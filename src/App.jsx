import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Menu from "./components/Menu/Menu";
import ReturnToTop from "./components/ReturnToTop/ReturnToTop";
import BlockRevealPreloader from "./components/BlockRevealPreloader/BlockRevealPreloader";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";

import Godette from "./pages/Projects/Godette/Godette";
import Seeds from "./pages/Projects/Seeds/Seeds";
import Portfolio from "./pages/Projects/Portfolio/Portfolio";
import Vitrine from "./pages/Projects/Vitrine/Vitrine";
import GenieLog from "./pages/Projects/GenieLog/GenieLog";
import Casino from "./pages/Projects/Casino/Casino";

import About from "./pages/About/About";
import Error from "./pages/Error/Error";

import { AnimatePresence } from "framer-motion";

function ScrollToTop() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1400);
  }, [location.pathname]);

  if (isLoading) {
    return <BlockRevealPreloader />;
  }

  return null;
}


function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Menu />
      <ReturnToTop /> {/* Add this line */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Work />} />
          <Route path="/works/godette" element={<Godette />} />
          <Route path="/works/seeds" element={<Seeds />} />
          <Route path="/works/portfolio" element={<Portfolio />} />
          <Route path="/works/vitrine" element={<Vitrine />} />
          <Route path="/works/ctrlaltelite" element={<GenieLog />} />
          <Route path="/works/casino" element={<Casino />} />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;