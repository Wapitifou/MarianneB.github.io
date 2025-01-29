import React from "react";

const Work = () => {
  return (
    <div className="resume">
      <div className="work-cards">
        <div className="2024-2025">
          <h2>2024-2025</h2>
          <h3>Learning new skills</h3>
          <p>
            Taking time to learn coding, developping new projects and working on
            giving another path to my career.
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="2019-2023">
          <h2>2019-2023</h2>
          <h3>Transports Bonnard</h3>
          <p>Brief description of what it was</p>
          <ul>
            <li>key skills</li>
            <li>key projects</li>
            <li>Javascript</li>
          </ul>
        </div>
      </div>
      <div className="education">
        <div className="2013-2015">
          <h2>2013-2015</h2>
          <h3>Master Management de l'innovation</h3>
        </div>
      </div>
      <div className="skills">
        <ul>
          <li>Languages</li>
          <li>Softwares</li>
          <li>Hobbies</li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
