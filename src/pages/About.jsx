import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import Chart from "../components/Chart";

const About = () => {
  return (
    <div className="page-header">
      <Navigation />
      <div className="introduction">
        <h1>Get to know me</h1>
        <h2>Hi there!</h2>
        <p>
          Don't worry I'll be short. <br /> <br />I am a French self-taught
          independant worker fond of learning new skills. I have worked in
          different environments and learned a lot in each and everyone of them
          as a marketing specialist more on this in the{" "}
          <NavLink to="/resume">
            <strong>Resume section</strong>
          </NavLink>
          . <br />
          <br />
          Aside work, I spend most time learning new things, and coding was part
          of it! I started on basics like HTML & CSS. Then I added Javascript
          and React (now moving on to Python 🫡). I also tried multiple artforms
          in a digital and traditional manner : pencil, gouache, watercolor,
          sculpture, digital drawings on both Procreate and Photoshop for all
          matters related to drawing and painting. I also love traveling and
          taking pictures of places and wildlife I encounter (moutains are my
          favourite!).
        </p>
        <p>
          <br />
          If I had to summarize it all, I am:
        </p>
        <Chart />
      </div>
      <div className="social-media">
        <h2>Find me here:</h2>
      </div>
    </div>
  );
};

export default About;
