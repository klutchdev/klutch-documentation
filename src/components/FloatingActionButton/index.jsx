import { useContext, useEffect, useRef, useState } from "react";
import { string, func } from "prop-types";
import MenuToggle from "../MenuToggle";
import { MenuContext } from "../../contexts/MenuContext";

const FloatingActionButton = ({ onClick, bgColor, margin, padding, size, transition, shadow }) => {
  const buttonRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const { expanded, handleExpand } = useContext(MenuContext);

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
  }, []);

  return (
    <div className="button-container">
      <button
        ref={buttonRef}
        onClick={onClick}
        type="button"
        disabled={false}
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1.5rem",
          zIndex: 500,
          width: size || "3.35rem",
          height: size || "3.35rem",
          padding: padding || "0",
          margin: margin || "auto",
          background: bgColor || "#030303",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: expanded ? "1px ridge #e91616" : "1px dashed #333333ee",
          borderRadius: "50%",
          textAlign: "center",
          filter: isHover ? ` brightness(1.2)` : ` brightness(1)`,
          transition: transition || "all 750ms 100ms linear",
          boxShadow: shadow || "#030303cc 1px 1px 26px",
        }}
      >
        <MenuToggle color="#6b6f71" expanded={expanded} handleExpand={handleExpand} />
      </button>
    </div>
  );
};

FloatingActionButton.propTypes = {
  onClick: func,
  bgColor: string,
  textColor: string,
  margin: string,
  padding: string,
  size: string,
  transition: string,
  shadow: string,
};

export default FloatingActionButton;
