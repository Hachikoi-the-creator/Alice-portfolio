import "../styles/projectsContainer.scss";
import Project from "./Project";
import projectsData from "../projectsData";

export default function ProjectsContainer() {
  return (
    <div className="main-container" id="projects">
      <div className="title-wrapper">
        <h2 className="title">Projects</h2>
      </div>
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
