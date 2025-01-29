import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            My resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Digital projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/artwork"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            My artwork
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
