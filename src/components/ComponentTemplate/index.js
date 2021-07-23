import React from "react";
import { string, element } from "prop-types";
import { FaAngleRight, FaHome } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { iconVariants } from "../../animations";

const ComponentTemplate = ({ title, component, codeBlock }) => {
  const history = useHistory();

  return (
    <div style={{ padding: `1rem` }}>
      <Header
        title={title}
        handleBack={() => history.goBack()}
        handleHome={() => history.push("/")}
      />
      <hr color="#363636" />
      <div className="component-wrapper">{component}</div>
      {codeBlock}
    </div>
  );
};

const Header = ({ title, handleBack, handleHome }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <motion.span variants={iconVariants} initial="hidden" animate="visible">
      <FaHome size="1.75rem" color="#fa8142" onClick={handleHome} />
    </motion.span>
    <motion.span
      style={{ margin: "auto 0.5rem" }}
      variants={iconVariants}
      initial="hidden"
      animate="visible"
    >
      <FaAngleRight style={{ margin: "auto" }} size="1.5rem" color="#363636" />
    </motion.span>
    <h1
      style={{
        textAlign: `left`,
        margin: `auto auto auto 0`,
        paddingBottom: "0.25rem",
        fontFamily: `Montserrat`,
        fontSize: "1.75rem",
        fontWeight: 500,
      }}
    >
      {title}
    </h1>
  </div>
);
ComponentTemplate.propTypes = {
  title: string.isRequired,
  component: element.isRequired,
  codeBlock: element.isRequired,
};

export default ComponentTemplate;
