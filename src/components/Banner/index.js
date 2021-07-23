import React from "react";
import { string, number, func } from "prop-types";
import { motion } from "framer-motion";
import { basicVariant } from "../../animations";

const TopBanner = ({
  content,
  margin,
  padding,
  textColor,
  fontSize,
  textAlign,
  fontWeight,
  fontFamily,
  lineHeight,
  letterSpacing,
  transition,
  position,
  top,
  bgColor,
  gradient,
  shadow,
  width,
  height,
  handleDismiss,
}) => {
  const DismissButton = ({ onClick, bgColor }) => (
    <div
      style={{
        display: `flex`,
        alignContents: `center`,
        justifyContent: `center`,
        width: `2rem`,
      }}
    >
      <div
        onClick={onClick}
        style={{
          margin: `auto 0`,
          display: `flex`,
          alignContents: `center`,
          justifyContent: `center`,
          width: `3rem`,
          background: bgColor,
          filter: `brightness(0.8)`,
          height: `auto`,
          borderRadius: `500px`,
        }}
      >
        <svg
          style={{ margin: `auto`, height: `2rem`, width: `2rem` }}
          fill="currentColor"
          color={textColor || "#030303"}
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
    </div>
  );

  return (
    <motion.div
      positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.25 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{
        opacity: 0,
        scale: -1.5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{
        position: position || "relative",
        display: "flex",
        top: position && top ? top : 0,
        width: width || "100%",
        height: height || "4rem",
        margin: margin || 0,
        borderRadius: "2px",
        padding: padding || "0.5rem 1rem 0.5rem 1rem",
        background: gradient || bgColor || "#22da6b",
        boxShadow: shadow || "#030303 2px 2px 20px",
        transition: transition || "all 300ms ease",
      }}
    >
      <motion.div
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `flex-start`,
          width: `92%`,
          textAlign: `justify`,
        }}
      >
        <motion.h4
          variants={basicVariant}
          style={{
            margin: margin || `auto`,
            textAlign: textAlign || `left`,
            fontSize: fontSize || `110%`,
            fontWeight: fontWeight || 500,
            fontFamily: fontFamily || "Montserrat",
            color: textColor || "#030303",
            letterSpacing: letterSpacing || 0,
            lineHeight: lineHeight || `1.25rem`,
          }}
        >
          {content}
        </motion.h4>
      </motion.div>
      <DismissButton onClick={handleDismiss} bgColor={bgColor} />
    </motion.div>
  );
};

TopBanner.propTypes = {
  content: string.isRequired,
  width: string,
  height: string,
  margin: string,
  padding: string,
  bgColor: string,
  gradient: string || func,
  position: string,
  top: string,
  textColor: string,
  fontSize: string,
  textAlign: string,
  fontFamily: string,
  fontWeight: number,
  lineHeight: string,
  letterSpacing: string,
  transition: string,
  shadow: string,
};

export default TopBanner;
