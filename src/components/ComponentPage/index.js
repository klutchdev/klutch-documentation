import React from "react";
import { Link } from "react-router-dom";
import { string, element } from "prop-types";
import { FaArrowLeft } from "react-icons/fa";

const ComponentPage = ({ title, component, codeBlock }) => {
  return (
    <div style={{ padding: `1rem` }}>
      <h1>
        <Link to="/">
          <FaArrowLeft className="back-arrow" />
        </Link>
        {title}
      </h1>
      <hr style={{ color: "#666666" }} />
      <div className="component-wrapper">{component}</div>
      {codeBlock}
    </div>
  );
};

ComponentPage.propTypes = {
  title: string.isRequired,
  component: element.isRequired,
  codeBlock: element.isRequired,
};

export default ComponentPage;
