import React from "react";
import Navigation from "../components/Navigation";
import WebProjects from "../components/WebProjects";

const Projects = () => {
  return (
    <div className="page-header">
      <Navigation />
      <h1>Digital projects</h1>
      <h4>Some projects I have been working on. Feel free to explore!</h4>
      <WebProjects />
    </div>
  );
};

export default Projects;
