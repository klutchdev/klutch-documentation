import { string, element } from "prop-types";
import { FaAngleRight, FaHome } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { iconVariants } from "../../animations";
import { useAuthState } from "klutch-fire-hooks/auth";
import { auth } from "../../firebase";
import { lazy } from "react";
const TextButton = lazy(() => import("../../components/TextButton"));

const ComponentTemplate = ({ title, component, codeBlock }) => {
  const history = useHistory();
  const [user] = useAuthState(auth);

  return (
    <div style={{ padding: `1rem` }}>
      <Header
        title={title}
        handleBack={() => history.goBack()}
        handleHome={() => history.push("/")}
        user={user}
      />
      <hr color="#363636" />
      <div className="component-wrapper">{component}</div>
      {codeBlock}
    </div>
  );
};

const Header = ({ title, handleHome, user }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <motion.span variants={iconVariants} initial="hidden" animate="visible">
      <FaHome size="1.75rem" color="#fa8142" onClick={handleHome} />
    </motion.span>
    <motion.span
      style={{ margin: "auto 0 auto 0.5rem" }}
      variants={iconVariants}
      initial="hidden"
      animate="visible"
    >
      <FaAngleRight style={{ margin: "auto" }} size="1.5rem" color="#363636" />
    </motion.span>
    <h1
      style={{
        textAlign: `left`,
        width: `100%`,
        margin: `auto 0 auto 0`,
        padding: "0 0.25rem 0 0.25rem",
        fontFamily: `Montserrat`,
        fontSize: "100%",
        fontWeight: 500,
      }}
    >
      {title}
    </h1>
    <TextButton
      type="button"
      label={user ? "🔥 " + user.displayName : "👋🏻 Welcome!"}
      width="auto"
      height="2.5rem"
      fontSize="80%"
      fontWeight={500}
      margin="auto 0 auto auto"
      letterSpacing="0"
      padding="0 0.5rem"
      border="1px dashed #292929"
      bgColor="#212121"
      textColor="#666666"
      disabled={false}
      onClick={() => {
        console.log("Welcome!");
      }}
    />
  </div>
);
ComponentTemplate.propTypes = {
  title: string.isRequired,
  component: element.isRequired,
  codeBlock: element.isRequired,
};

export default ComponentTemplate;
