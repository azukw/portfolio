import { motion } from "framer-motion";
import "./Transition.css";

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.3; // Réduction du délai aléatoire
  const rowDelay = (totalRows - rowIndex - 1) * 0.03; // Réduction du délai en cascade
  return blockDelay + rowDelay;
};

const Transition = (Page) => {
  return () => (
    <>
      <Page />

      <div className="blocks-container transition-in">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="block"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 0.6, // Animation plus rapide
                  ease: [0.25, 1, 0.5, 1], // Accélération plus dynamique
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>

      <div className="blocks-container transition-out">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="block"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 0.6, // Même réduction de durée
                  ease: [0.25, 1, 0.5, 1], // Même easing pour une sortie plus rapide
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Transition;
