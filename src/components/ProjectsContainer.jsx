import "../styles/projectsContainer.scss";
import Project from "./Project";
import projectsData from "../projectsData";
import { motion } from "framer-motion";

export default function ProjectsContainer() {
  return (
    <div className="main-container" id="projects">
      <motion.div
        className="title-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="title">Projects</h2>
      </motion.div>
      <div className="wrapper">
        {projectsData.map((project) => {
          const {
            imgUrl,
            title,
            desc,
            liveLink,
            codeLink,
            techStack,
            rowReverse,
          } = project;

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
        })}
      </div>
    </div>
  );
}
