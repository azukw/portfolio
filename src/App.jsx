import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Menu from "./components/Menu/Menu";

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
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1400);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Menu />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Work />} />
          <Route path="/works/godette" element={<Godette />} />
          <Route path="/works/seeds" element={<Seeds />} />
          <Route path="/works/portfolio" element={<Portfolio />} />
          <Route path="/works/vitrine" element={<Vitrine />} />
          <Route path="/works/genie" element={<GenieLog />} />
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
