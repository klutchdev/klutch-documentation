import React from "react";

const Home = () => (
  <div style={{ padding: `1rem` }}>
    <Header label="Home" />
    <hr style={{ color: "#666666" }} />
    <div className="flex-column">
      <SubHeader label="Buttons" />
      <LinkTo label="Basic Button" path="/basic-button" />
      <LinkTo label="Outline Button" path="/outline-button" />
      <LinkTo label="Loading Button" path="/loading-button" />
      <LinkTo label="Icon Button" path="/icon-button" />

      <SubHeader label="Alerts" />
      <LinkTo label="Banner" path="/top-banner" />

      <SubHeader label="Inputs" />
      <LinkTo label="Text Input" path="/text-input" />
      <LinkTo label="Password Input" path="/password-input" />

      <SubHeader label="Toggles" />
      <LinkTo label="Checkbox" path="/checkbox" />
      <LinkTo label="Menu Toggle" path="/menu-toggle" />
    </div>
  </div>
);

const Header = ({ label }) => (
  <h1
    style={{
      textAlign: `left`,
      margin: `1rem auto 1rem 0.5rem`,
      fontFamily: `Montserrat`,
    }}
  >
    {label}
  </h1>
);

const SubHeader = ({ label }) => (
  <h3 style={{ fontFamily: `Montserrat` }}>{label}</h3>
);

const LinkTo = ({ label, path }) => (
  <a
    style={{
      margin: `0.25rem auto 0.25rem 0.25rem`,
      textAlign: `left`,
      fontSize: `1.25rem`,
      fontWeight: 500,
      color: `#ff4088`,
      fontFamily: "Montserrat",
    }}
    href={path}
  >
    {label}
  </a>
);

export default Home;
