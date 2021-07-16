import React from "react";
import LinkTo from "../../components/Link";

const HomePage = () => (
  <div style={{ padding: `1rem` }}>
    <h1
      style={{
        textAlign: `left`,
        margin: `1rem auto 1rem 0.5rem`,
        fontFamily: `Montserrat`,
      }}
    >
      HOME
    </h1>
    <hr style={{ color: "#666666" }} />
    <div className="flex-column">
      <h3 style={{ fontFamily: `Montserrat` }}>Buttons</h3>
      <LinkTo label="Basic Button" path="/basic-button" />
      <LinkTo label="Loading Button" path="/loading-button" />
      <h3 style={{ fontFamily: `Montserrat` }}>Banners</h3>
      <LinkTo label="Alert Banner" path="/top-banner" />
    </div>
  </div>
);

export default HomePage;
