import "../styles/hero.scss";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <motion.div
        className="opacity-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p className="intro">Hi, My Name Is:</p>
        <p className="name">Adan Moreno</p>
      </motion.div>

      <motion.div
        className="wrap-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="wrap-gradient">
          <p className="charge">Full Stack</p>
          <p className="charge">Web Dev</p>
        </div>
      </motion.div>

      <motion.p
        className="likes"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        I like to build cool apps that have a purpose
      </motion.p>

      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <a className="gradient-btn" href="#">
          LinkedIn
        </a>
        <a className="gradient-btn" href="#">
          Twitter
        </a>
      </motion.div>
    </div>
  );
}
