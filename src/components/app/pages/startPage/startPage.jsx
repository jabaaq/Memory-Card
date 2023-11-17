import gameLogo from "../../../../assets/img/pokemon-logo.png";
import "./startPage.css";
import { motion } from "framer-motion";

function StartPage() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="startPage-container">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="game-logo"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <img src={gameLogo} style={{ width: 600 }} alt="Game logo" />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="game-name"
      >
        Memory Game
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="btn-class-name"
      >
        <span className="back"></span>
        <span className="front">START</span>
      </motion.div>
    </div>
  );
}

export { StartPage };
