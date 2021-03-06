export const modalAlertCode = `import React from "react";
import { string, func } from "prop-types";
import BasicButton from "../BasicButton";

import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.25 },
  },
};

const ModalAlert = ({
  handleClose,
  text,
  textColor,
  width,
  background,
  margin,
  height,
  radius,
  border,
  transition,
  fontSize,
  position,
  showModal,
  children,
}) => {
  return (
    showModal && (
      <AnimatePresence>
        <motion.div
          onClick={handleClose}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={{
            position: "fixed",
            margin: 0,
            top: 0,
            left: 0,
            height: "calc(100vh)",
            width: "calc(100vw)",
            zIndex: 1,
            overflow: "hidden",
            background: "#030303ee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            variants={modal}
            style={{
              position: position || "relative",
              zIndex: 400,
              width: width || "calc(90vw)",
              height: height || "calc(25vh)",
              margin: margin || "auto",
              background: background || "linear-gradient(#303335, #232d32)",
              borderRadius: radius || "6px",
              border: border,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <h3
              style={{
                margin: "2rem auto 2rem auto",
                textAlign: "left",
                color: textColor || "#22da6b",
                fontSize: fontSize || "2rem",
                fontWeight: 500,
                fontFamily: "Montserrat",
                letterSpacing: "1px",
                transition: transition || "all ease 400ms",
              }}
            >
              {text}
            </h3>
            {children ? (
              children
            ) : (
              <BasicButton
                type="button"
                label="Close"
                width="75%"
                margin="0 auto 1rem auto"
                bgColor={textColor || "#22da6b"}
                textColor="#030303"
                disabledBgColor="#7de3a5"
                disabledTextColor="#030303cc"
                disabled={false}
                onClick={handleClose}
              />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  );
};

ModalAlertFramer.propTypes = {
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

export default ModalAlert;

`;
