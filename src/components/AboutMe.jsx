import "../styles/aboutMe.scss";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="about-me">
      <motion.h2
        className="gradient-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        About Me
      </motion.h2>
      <div className="content">
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          Hi there! My name is Alice, and I am a web developer with a passion
          for creating beautiful and functional websites. I have a strong
          foundation in HTML, CSS, JavaScript, React, Redux & SASS and I am
          always learning and exploring new technologies to enhance my skills.
        </motion.p>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          I started my journey by teachig myself how to code whit Python anfe
          fell in love with the joy of solving somplex problems, that same
          feeling lead me to try Machine Learning since I have always loved
          Math, but was not able to pull trhought whit motivation alone and
          decided that learning web dev was way more efficient, since it's a
          skill that can easy kickstart your way into entrepenoursihp & it's on
          everything.
        </motion.p>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          I also tried to challenge myself whit crypto, and was incredibly hard
          and rewarding, I was able to see with my ow eyes the importance of
          testing, since once the smart contract is out there, cannot be
          modified, however it was just a lovely experince and I thought web dev
          alone was the best option, thus decied to get help trought my
          full-stack journey
        </motion.p>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          When I'm not coding I can be reading any sort of things, going from
          Manga, Manhwa, to non-fiction and self-help books, I love reading, but
          lately the one thing I read is documentation! hahaha, I also love to
          challenge myself physically, thus I have tried Kapoeira and box, also
          fell in love with a videogame called PIU (pump it up)
        </motion.p>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          I am excited to bring my skills and enthusiasm to new projects and
          collaborate with talented teams. Thank you for visiting my portfolio,
          and I look forward to the opportunity to work with you!
        </motion.p>
      </div>
    </div>
  );
}
