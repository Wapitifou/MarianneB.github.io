import React from "react";
import Navigation from "../components/Navigation";
import Work from "../components/Work";

const Resume = () => {
  return (
    <div className="page-header">
      <Navigation />
      <h1>My resume as never seen before</h1>
      <div className="work-experience">
        <Work />
      </div>
    </div>
  );
};

export default Resume;
