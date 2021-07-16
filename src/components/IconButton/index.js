import React, { useEffect, useRef, useState } from "react";
import { string, func, bool, number, element } from "prop-types";

const IconButton = ({
  type,
  onClick,
  width,
  bgColor,
  disabledBgColor,
  textColor,
  disabled,
  disabledTextColor,
  margin,
  padding,
  fontFamily,
  height,
  radius,
  border,
  fontSize,
  letterSpacing,
  transition,
  shadow,
  hoverShadow,
  fontWeight,
  textAlign,
  label,
  icon,
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
          background: disabled ? disabledBgColor : bgColor,
          color: disabled ? disabledTextColor : textColor,
          border: border || "none",
          borderRadius: radius || "4px",
          textAlign: textAlign || "center",
          fontWeight: fontWeight || 700,
          fontSize: fontSize || "1.25rem",
          letterSpacing: letterSpacing || 0,
          fontFamily: fontFamily || '"Montserrat", sans-serif',
          filter: isHover ? " brightness(1.2)" : " brightness(1)",
          transition: transition || "all 250ms ease",
          boxShadow: isHover ? hoverShadow : shadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {icon} {label}
      </button>
    </div>
  );
};

IconButton.propTypes = {
  type: string.isRequired,
  label: string.isRequired,
  icon: element.isRequired,
  onClick: func,
  width: string,
  bgColor: string,
  disabledBgColor: string,
  textColor: string,
  disabled: bool,
  disabledTextColor: string,
  margin: string,
  padding: string,
  fontFamily: string,
  height: string,
  radius: string,
  border: string,
  fontSize: string,
  letterSpacing: string,
  transition: string,
  shadow: string,
  hoverShadow: string,
  fontWeight: number,
  textAlign: string,
};

export default IconButton;
