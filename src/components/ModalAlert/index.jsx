import React from "react";
import { string, func } from "prop-types";
import BasicButton from "../BasicButton";

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
  position,
}) => {
  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        margin: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "calc(100vh)",
        width: "calc(100vw)",
        zIndex: 500,
        overflow: "hidden",
        background: "#000000cc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: transition || "all ease 400ms",
      }}
    >
      <div
        style={{
          position: position || "relative",
          zIndex: 400,
          width: width || "calc(95vw)",
          height: height || "calc(25vh)",
          margin: margin || "auto",
          background: background || "linear-gradient(#161818, #12181b)",
          borderRadius: radius || "2px",
          border: border,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          transition: transition || "all ease 400ms",
          overflow: "hidden",
        }}
      >
        <h3
          style={{
            margin: "2rem auto 2rem auto",
            textAlign: "left",
            color: textColor || "#22da6b",
            fontSize: "2rem",
            fontWeight: 500,
            fontFamily: "Montserrat",
            letterSpacing: "1px",
            transition: transition || "all ease 400ms",
          }}
        >
          {text}
        </h3>

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
      </div>
    </div>
  );
};

ModalAlert.propTypes = {
  handleClose: func.isRequired,
  text: string.isRequired,
  textColor: string,
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

//  <h5
//           style={{
//             margin: "auto",
//             textAlign: "left",
//             color: "#ff4088",
//             fontSize: "1.4rem",
//             fontWeight: 400,
//             fontFamily: "Montserrat",
//             letterSpacing: "1.25px",
//           }}
//         >
//           {bodyText}
//         </h5>
