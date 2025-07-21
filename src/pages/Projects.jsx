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
      <h1>Projects</h1>
      <div className="pt-8">
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
