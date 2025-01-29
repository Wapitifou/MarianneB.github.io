import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [leftEyeSrc, setleftEyeSrc] = useState("eye.png");
  const [rightEyeSrc, setRightEyeSrc] = useState("eye.png");

  const handleLeftEyeEnter = () => setleftEyeSrc("eye-closed.png");
  const handleLeftEyeLeave = () => setleftEyeSrc("eye.png");
  const handleRightEyeEnter = () => setRightEyeSrc("eye-closed.png");
  const handleRightEyeLeave = () => setRightEyeSrc("eye.png");

  return (
    <div>
      <div className="home-page">
        <Navigation />
        <div className="header">
          <div className="eyes">
            <img
              src={leftEyeSrc}
              alt="left-eye"
              onMouseEnter={handleLeftEyeEnter}
              onMouseLeave={handleLeftEyeLeave}
              style={{ transition: "0.3s ease" }}
            />
            <img
              src={rightEyeSrc}
              alt="right-eye"
              onMouseEnter={handleRightEyeEnter}
              onMouseLeave={handleRightEyeLeave}
              style={{ transition: "0.3s ease" }}
            />
          </div>
          <h1>WELCOME</h1>
          <h2>Exploring the intersection of technology & creativity</h2>
          <div className="buttons">
            <button
              id="btn-work"
              onMouseEnter={handleRightEyeEnter}
              onMouseLeave={handleRightEyeLeave}
            >
              <NavLink
                to="/resume"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Professional work
              </NavLink>
            </button>
            <button
              id="btn-art"
              onMouseEnter={handleLeftEyeEnter}
              onMouseLeave={handleLeftEyeLeave}
            >
              <NavLink
                to="/artwork"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Artistic work
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
