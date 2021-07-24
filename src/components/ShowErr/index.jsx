import { motion } from "framer-motion";

const ShowErr = ({ err }) => (
  <motion.div
    animate={{ opacity: 0.9 }}
    initial={{ opacity: 0 }}
    style={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      height: `100vh`,
      width: `100vw`,
    }}
  >
    <p style={{ margin: `auto`, color: "red" }}>Error: {err}</p>
  </motion.div>
);

export default ShowErr;
