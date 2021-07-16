import React from "react";

const LinkTo = ({ path, label }) => {
  return (
    <a href={path} className="links">
      {label}
    </a>
  );
};

export default LinkTo;
