import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ComponentPage = ({ title, component, codeBlock }) => {
  return (
    <div style={{ padding: `1rem` }}>
      <h1
        style={{
          textAlign: `left`,
          margin: `1rem auto 1rem 0.5rem`,
        }}
      >
        <Link to="/">
          <FaArrowLeft className="back-arrow" />
        </Link>
        {title}
      </h1>
      <hr color="#666666" />
      <div
        style={{
          display: `flex`,
          justifyContent: `start`,
          margin: `2rem auto 2rem 0.5rem`,
        }}
      >
        {component}
      </div>
      {codeBlock}
    </div>
  );
};

export default ComponentPage;
