import React from "react";
import Navigation from "../components/Navigation";
import WebProjects from "../components/WebProjects";

const Projects = () => {
  return (
    <div>
      <Navigation />
      <h1>wow much projects</h1>
      <p>Some projects I have been working on. Feel free to explore!</p>
      <WebProjects />
    </div>
  );
};

export default Projects;
