import React from "react";
import Navigation from "../components/Navigation";
import Album from "../components/Album";

const Artwork = () => {
  return (
    <div>
      <div className="page-header">
        <Navigation />
        <h1>this impression of emptiness is full of sense</h1>
      </div>
      <Album />
    </div>
  );
};

export default Artwork;
