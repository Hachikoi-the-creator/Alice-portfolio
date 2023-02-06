import "../styles/project.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import codeSvg from "/code.svg";
import linkSvg from "/link.svg";

export default function Project(props) {
  const { imgUrl, title, desc, liveLink, codeLink, techStack, rowReverse } =
    props;

  const [liveLinkHover, setLiveLinkHover] = useState(true);
  const [codeLinkHover, setCodeLinkHover] = useState(true);

  const handleLiveHover = () => {
    setLiveLinkHover((prev) => !prev);
  };

  const handleCodeHover = () => {
    setCodeLinkHover((prev) => !prev);
  };

  return (
    <div
      className={`project-wrapper ${rowReverse ? "row-reverse" : "row-normal"}`}
    >
      <motion.div
        className="desc-section"
        initial={{ x: +200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <h3 className="project-title">{title}</h3>
        <p className="desc">{desc}</p>

        <div className="tech-stack-section">
          <h5 className="stack-title">Stack used</h5>
          <div className="tech-wrapper">
            {techStack.map((tool) => (
              <p className="tech-name" key={tool}>
                {tool}
              </p>
            ))}
          </div>
        </div>

        <div className="links">
          <a
            href={liveLink}
            onMouseLeave={handleLiveHover}
            onMouseEnter={handleLiveHover}
            className="link gradient-btn"
          >
            {liveLinkHover ? (
              <span>Live Site</span>
            ) : (
              <img
                src={linkSvg}
                alt="goto the project live page"
                decoding="async"
                loading="lazy"
              />
            )}
          </a>
          <a
            href={codeLink}
            onMouseLeave={handleCodeHover}
            onMouseEnter={handleCodeHover}
            className="link gradient-btn"
          >
            {codeLinkHover ? (
              <span>Code Source</span>
            ) : (
              <img
                src={codeSvg}
                alt="take a look at the code of the project"
                decoding="async"
                loading="lazy"
              />
            )}
          </a>
        </div>
      </motion.div>

      <motion.a
        href={liveLink}
        className="thumbnail-wrapper"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <img src={imgUrl} alt={`preview of ${title}`} className="thumbnail" />
      </motion.a>
    </div>
  );
}
