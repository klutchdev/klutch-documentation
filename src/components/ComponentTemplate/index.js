import React from "react";
import { string, element } from "prop-types";
import { FaArrowLeft } from "react-icons/fa";

const ComponentTemplate = ({ title, component, codeBlock }) => {
  return (
    <div style={{ padding: `1rem` }}>
      <h1>
        <a href="/">
          <FaArrowLeft className="back-arrow" />
        </a>
        {title}
      </h1>
      <hr style={{ color: "#666666" }} />
      <div className="component-wrapper">{component}</div>
      {codeBlock}
    </div>
  );
};

ComponentTemplate.propTypes = {
  title: string.isRequired,
  component: element.isRequired,
  codeBlock: element.isRequired,
};

export default ComponentTemplate;
