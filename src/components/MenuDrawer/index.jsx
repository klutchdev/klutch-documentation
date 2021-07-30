import { useContext } from "react";
import { string, func } from "prop-types";
import { motion } from "framer-motion";
import { MenuContext } from "../../contexts/MenuContext";
import useMedia from "../../hooks/useMedia";

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
  height,
  children,
}) => {
  const { expanded } = useContext(MenuContext);
  const isLandscape = useMedia("(min-width: 480px) and (max-height: 600px)");

  return (
    expanded && (
      <motion.div
        variants={drawer}
        style={{
          position: position || "relative",
          zIndex: 400,
          width: width || "calc(70vw)",
          height: height || "calc(100vh)",
          margin: margin || "0",
          background: background || "linear-gradient(#090909, #111111f6)",
          borderRadius: 0,
          border: border,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          overflowY: isLandscape ? "scroll" : "hidden",
          boxShadow: "#000000cc 1px 1px 20px 6px",
        }}
      >
        {children}
      </motion.div>
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
