import { useEffect, useRef, useState } from "react";

const BasicButton = ({
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
    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [buttonRef]);

  return (
    <div className="button-container">
      <button
        ref={buttonRef}
        onClick={onClick}
        type={type || "button"}
        style={{
          width: width || `auto`,
          height: height || `3rem`,
          padding: padding || `0 1rem`,
          margin: margin || `1rem auto`,
          background: disabled ? disabledBgColor : bgColor,
          color: disabled ? disabledTextColor : textColor,
          border: border || `none`,
          borderRadius: radius || `4px`,
          textAlign: textAlign || `center`,
          fontWeight: fontWeight || 700,
          fontSize: fontSize || `1.25rem`,
          letterSpacing: letterSpacing || `1.25px`,
          fontFamily: fontFamily || `"Montserrat", sans-serif`,
          filter: isHover ? ` brightness(1.2)` : ` brightness(1)`,
          transition: transition || `all 250ms ease`,
          boxShadow: isHover ? hoverShadow : shadow,
        }}
        disabled={disabled || false}
      >
        {label}
      </button>
    </div>
  );
};

export default BasicButton;
