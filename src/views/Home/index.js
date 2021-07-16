import React from "react";
import { FaHome } from "react-icons/fa";

const Home = () => (
  <div style={{ padding: `1rem` }}>
    <Header label="Home" />
    <hr color="#363636" />
    <div className="flex-column">
      <SubHeader label="Buttons" />
      <LinkTo label="Basic" path="/basic-button" />
      <LinkTo label="Outline" path="/outline-button" />
      <LinkTo label="Loading" path="/loading-button" />
      <LinkTo label="Icon" path="/icon-button" />

      <SubHeader label="Alerts" />
      <LinkTo label="Banner" path="/top-banner" />

      <SubHeader label="Inputs" />
      <LinkTo label="Text" path="/text-input" />
      <LinkTo label="Password" path="/password-input" />

      <SubHeader label="Modals" />
      <LinkTo label="Alert" path="/modal-alert" />

      <SubHeader label="Toggles" />
      <LinkTo label="Checkbox" path="/checkbox" />
      <LinkTo label="Burger" path="/menu-toggle" />
    </div>
  </div>
);

const Header = ({ label }) => (
  <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
    <FaHome size="1.75rem" color="#fa8142" />
    <h1
      style={{
        textAlign: `left`,
        margin: `auto auto auto 1rem`,
        fontFamily: `Montserrat`,
        fontSize: "1.75rem",
      }}
    >
      {label}
    </h1>
  </div>
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
