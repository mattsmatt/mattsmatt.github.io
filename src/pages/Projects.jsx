import { useEffect } from "react";
import "../App.css";
import {} from "@heroui/react";
import { projects } from "../json/projects.js";
import ProjectItem from "../components/ProjectItem.jsx";

function Projects() {
  useEffect(() => {
    document.title = "Mattsmatt | Projects";
  }, []);

  return (
    <>
      <h1
        className="font-avantgarde-demi"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        Projects
      </h1>
      <div>
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
