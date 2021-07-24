import React, { useContext } from "react";
import { string, func } from "prop-types";

import { motion, AnimatePresence } from "framer-motion";
import { MenuContext } from "../../contexts/menuContext";

// const backdrop = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 },
// };

const drawer = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 25,
    opacity: 1,
    transition: { delay: 0.25 },
  },
};

const MenuDrawer = ({
  background,
  margin,
  border,
  position,
  width,
  children,
}) => {
  const { expanded } = useContext(MenuContext);

  return (
    expanded && (
      <AnimatePresence>
        <motion.div
          variants={drawer}
          style={{
            position: position || "relative",
            zIndex: 400,
            width: width || "calc(70vw)",
            height: "calc(100vh)",
            margin: margin || "0",
            background: background || "linear-gradient(#090909, #111111f6)",
            borderRadius: 0,
            border: border,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "#000000cc 1px 1px 20px 6px",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    )
  );
};

MenuDrawer.propTypes = {
  handleClose: func.isRequired,
  text: string.isRequired,
  textColor: string,
  fontSize: string,
  position: string,
  width: string,
  height: string,
  background: string,
  margin: string,
  radius: string,
  border: string,
  transition: string,
};

export default MenuDrawer;

//  <motion.div
//         onClick={handleClose}
//         variants={backdrop}
//         initial="hidden"
//         animate="visible"
//         exit="hidden"
//         style={{
//           position: "fixed",
//           margin: 0,
//           top: 0,
//           left: 0,
//           height: "calc(100vh)",
//           width: "calc(100vw)",
//           zIndex: 1,
//           overflow: "hidden",
//           background: "#030303aa",
//         }}
//       />
