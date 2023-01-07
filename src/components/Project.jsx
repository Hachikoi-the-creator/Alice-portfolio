import { useState } from "react";
import "../styles/project.scss";
import codeSvg from "/code.svg";
import linkSvg from "/link.svg";

export default function Project(props) {
  const { imgUrl, title, desc, liveLink, codeLink, techStack, rowReverse } =
    props;

  const [liveLinkHover, setLiveLinkHover] = useState(false);
  const [codeLinkHover, setCodeLinkHover] = useState(false);

  const handleLiveHover = () => {
    // console.log("LIVE HO");
    setLiveLinkHover((prev) => !prev);
  };

  const handleCodeHover = () => {
    // console.log("CODE HOE");
    setCodeLinkHover((prev) => !prev);
  };

  return (
    <div
      className={`project-wrapper ${rowReverse ? "row-reverse" : "row-normal"}`}
    >
      <div className="desc-section">
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
      </div>

      <a href={liveLink} className="thumbnail-wrapper">
        <img src={imgUrl} alt={`preview of ${title}`} className="thumbnail" />
      </a>
    </div>
  );
}
