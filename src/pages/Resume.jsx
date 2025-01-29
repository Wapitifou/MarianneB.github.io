import React from "react";
import Navigation from "../components/Navigation";
import Work from "../components/Work";

const Resume = () => {
  return (
    <div>
      <Navigation />
      <div className="parkour">
        <h1>My resume as never seen before</h1>
        <div className="work-experience">
          <Work />
        </div>
      </div>
    </div>
  );
};

export default Resume;
