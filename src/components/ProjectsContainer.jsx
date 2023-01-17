import "../styles/projectsContainer.scss";
import Project from "./Project";
import projectsData from "../projectsData";
import { motion } from "framer-motion";

export default function ProjectsContainer() {
  const cleanerReturns = (projectData, isTricky) => {
    const { imgUrl, title, desc, liveLink, codeLink, techStack, rowReverse } =
      projectData;

    return (
      <Project
        key={title}
        {...{ title }}
        {...{ imgUrl }}
        {...{ desc }}
        {...{ liveLink }}
        {...{ codeLink }}
        {...{ techStack }}
        {...{ rowReverse }}
      />
    );
  };

  // since I can't keep bothering with the dammed parallex effect I'll just add a project that will be hidden on small screens, and display none in big screens

  return (
    <div className="main-container" id="projects">
      <motion.div
        className="title-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="gradient-subtitle">Projects</h2>
      </motion.div>
      <div className="wrapper">
        {projectsData.map((project) => cleanerReturns(project))}
      </div>
    </div>
  );
}
