import { motion } from "framer-motion";
import React from "react";
import { FaHome } from "react-icons/fa";
import { pageVariant, iconVariants } from "../../animations";

const Home = () => (
  <motion.div
    style={{ padding: `1rem` }}
    variants={pageVariant}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <Header label="Home" />
    <hr color="#363636" />
    <div className="flex-column">
      <SubHeader label="Alerts" />
      <LinkTo label="Banner" path="/top-banner" />

      <SubHeader label="Buttons" />
      <LinkTo label="Icon" path="/icon-button" />
      <LinkTo label="Basic" path="/basic-button" />
      <LinkTo label="Outline" path="/outline-button" />
      <LinkTo label="Loading" path="/loading-button" />
      <LinkTo label="Progress" path="/progress-button" />

      <SubHeader label="Inputs" />
      <LinkTo label="Text" path="/text-input" />
      <LinkTo label="Password" path="/password-input" />
      <LinkTo label="Search" path="/search-input" />

      <SubHeader label="Modals" />
      <LinkTo label="Alert" path="/modal-alert" />

      <SubHeader label="Toggles" />
      <LinkTo label="Checkbox" path="/checkbox" />
      <LinkTo label="Burger" path="/menu-toggle" />
    </div>
  </motion.div>
);

const Header = ({ label }) => (
  <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
    <motion.span variants={iconVariants} initial="hidden" animate="visible">
      <FaHome size="1.75rem" color="#fa8142" />
    </motion.span>
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
    <p
      style={{
        color: "#fa8142",
        fontFamily: `Montserrat`,
        margin: "auto 0.5rem auto auto",
        fontWeight: 600,
        fontSize: "100%",
      }}
    >
      0.1.5
    </p>
  </div>
);

const SubHeader = ({ label }) => (
  <h3 style={{ fontFamily: `Montserrat`, padding: "0 0.25rem" }}> {label}</h3>
);

const LinkTo = ({ label, path }) => (
  <a
    style={{
      margin: `0.25rem auto 0.25rem 0.5rem`,
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
