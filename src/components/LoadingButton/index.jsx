import { useEffect, useRef, useState } from "react";
import { string, func, bool, number } from "prop-types";
import { motion } from "framer-motion";

const LoadingButton = ({
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
  loading,
}) => {
  const loadingButtonRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  useEffect(() => {
    const node = loadingButtonRef.current;
    if (loading) {
      return;
    }
    if (node & !loading) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [loading]);

  const Loader = () => (
    <motion.div
      className="rotation"
      style={{
        margin: "auto",
        border: "5px solid #03030320",
        borderTop: "5px solid #030303ee",
        borderRadius: "50%",
        width: "2.5rem",
        height: "2.5rem",
      }}
    />
  );

  return (
    <div className="button-container">
      <button
        ref={loadingButtonRef}
        onClick={onClick}
        type={type || "button"}
        disabled={disabled || false}
        style={{
          width: width || "50%",
          height: height || "3rem",
          padding: padding || "0 1rem",
          margin: margin || "1rem auto",
          background: disabled ? disabledBgColor : bgColor,
          color: disabled ? disabledTextColor : textColor,
          border: border || "none",
          borderRadius: radius || "4px",
          textAlign: textAlign || "center",
          fontWeight: fontWeight || 700,
          fontSize: fontSize || "1.35rem",
          letterSpacing: letterSpacing || "1.25px",
          fontFamily: fontFamily || "'Montserrat', sans-serif",
          filter: isHover ? " brightness(1.2)" : " brightness(1)",
          transition: transition || "all 250ms ease",
          boxShadow: isHover ? hoverShadow : shadow,
        }}
      >
        {loading ? <Loader /> : label}
      </button>
    </div>
  );
};

LoadingButton.propTypes = {
  type: string.isRequired,
  label: string.isRequired,
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
  loading: bool.isRequired,
};

export default LoadingButton;
