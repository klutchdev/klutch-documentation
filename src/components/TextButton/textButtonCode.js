export const textButtonCode = `import React, { useEffect, useRef, useState } from "react";
import { string, func, bool } from "prop-types";

const TextButton = ({
  type,
  onClick,
  width,
  bgColor,
  textColor,
  disabled,
  margin,
  padding,
  height,
  border,
  transition,
  shadow,
  label,
}) => {
  const buttonRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  useEffect(() => {
    const node = buttonRef.current;

    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="button-container">
      <button
        ref={buttonRef}
        onClick={onClick}
        type={type || "button"}
        disabled={disabled || false}
        style={{
          width: width || "auto",
          height: height || "3rem",
          padding: padding || "0 1rem",
          margin: margin || "1rem auto",
          background: bgColor,
          color: textColor,
          border: border || isHover ? "1px solid #666666" : "none",
          borderRadius: "4px",
          textAlign: "center",
          fontWeight: 600,
          fontSize: "1.5rem",
          letterSpacing: "1px",
          fontFamily: '"Montserrat", sans-serif',
          filter: isHover ? " brightness(1.2)" : " brightness(1)",
          transition: transition || "all 250ms ease",
          boxShadow: shadow,
        }}
      >
        {label}
      </button>
    </div>
  );
};

TextButton.propTypes = {
  type: string.isRequired,
  label: string.isRequired,
  onClick: func,
  width: string,
  bgColor: string,
  textColor: string,
  disabled: bool,
  margin: string,
  padding: string,
  border: string,
  fontSize: string,
  transition: string,
  shadow: string,
};

export default TextButton;

`;
