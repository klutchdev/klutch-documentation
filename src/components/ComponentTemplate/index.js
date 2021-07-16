import React from "react";
import { string, element } from "prop-types";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const ComponentTemplate = ({ title, component, codeBlock }) => {
  const history = useHistory();

  return (
    <div style={{ padding: `1rem` }}>
      <Header title={title} onClick={() => history.goBack()} />
      <hr color="#363636" />
      <div className="component-wrapper">{component}</div>
      {codeBlock}
    </div>
  );
};

const Header = ({ title, onClick }) => (
  <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
    <FaArrowLeft size="1.75rem" color="#fa8142" onClick={onClick} />
    <h1
      style={{
        textAlign: `left`,
        margin: `auto auto auto 1rem`,
        fontFamily: `Montserrat`,
        fontSize: "1.75rem",
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
