import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div style={{ padding: `1rem` }}>
    <h1
      style={{
        textAlign: `left`,
        margin: `1rem auto 1rem 0.5rem`,
      }}
    >
      HOME
    </h1>
    <hr style={{ color: "#666666" }} color="#666666" />
    <div className="flex-column">
      <h3>Buttons</h3>
      <Link to="/basic-button">Basic Button</Link>
      <Link to="/loading-button">Loading Button</Link>
      <h3>Banners</h3>
      <Link to="/top-banner">Alert Banner</Link>
    </div>
  </div>
);

export default HomePage;
