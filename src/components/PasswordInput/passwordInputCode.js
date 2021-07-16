export const passwordInputCode = `import React, { useRef, useState } from "react";
import { string, element, func } from "prop-types";

const PasswordInput = ({
  type,
  value,
  leftIcon,
  rightIcon,
  placeholder,
  onKeyDown,
  onKeyUp,
  textColor,
  leftIconColor,
  rightIconColor,
  width,
  height,
  margin,
  border,
  radius,
  shadow,
  autoComplete,
}) => {
  const passwordInputRef = useRef(null);
  const [val, setVal] = useState("");

  let len = val.length;

  const onChange = (e) => {
    setVal(e.target.value);
  };

  const borderStyle =
    (len > 0 && len < 8 && "red 2px solid") ||
    (len >= 8 && "#22da6b 2px solid") ||
    "#3e4244 2px solid";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        ref={passwordInputRef}
        style={{
          width: width || "100%",
          height: height || "3rem",
          margin: margin || "0.25rem 0 1rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          outline: "none",
          background: "#03030350",
          border: border || borderStyle,
          borderRadius: radius || "6px",
          transition: "all 300ms ease",
          boxShadow: shadow || "1px 1px 6px #030303",
        }}
      >
        {leftIcon && (
          <div
            style={{
              margin: "0 auto 0 0",
              width: "3rem",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: leftIconColor || "#3e4244",
              transition: "all 300ms ease",
            }}
          >
            {leftIcon}
          </div>
        )}
        <input
          type={type || "text"}
          value={val || value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          autoComplete={autoComplete || "off"}
          style={{
            width: "100%",
            height: "100%",
            outline: "none",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            color: textColor || "#cccccc",
            background: "transparent",
            fontSize: "1.5rem",
            fontWeight: 500,
            fontFamily: "Montserrat",
          }}
        />
        {rightIcon && (
          <div
            style={{
              margin: "auto 0 auto auto",
              width: "3rem",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: rightIconColor || "#3e4244",
              transition: "all 300ms ease",
            }}
          >
            {rightIcon}
          </div>
        )}
      </div>

      {val.length > 0 && val.length < 8 && (
        <span style={{ color: "red", fontWeight: 500 }}>
          * Must be 8 or more characters
        </span>
      )}
      {val.length >= 8 && (
        <span style={{ color: "green", fontWeight: 500 }}>
          ✔︎ Must be 8 or more characters
        </span>
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  leftIcon: element,
  rightIcon: element,
  type: string,
  value: string,
  handleChange: func,
  textColor: string,
  leftIconColor: string,
  rightIconColor: string,
  placeholder: func,
  onKeyUp: func,
  onKeyDown: func,
  width: string,
  height: string,
  margin: string,
  border: string,
  radius: string,
  shadow: string,
  autoComplete: string,
  bgColor: string,
};

export default PasswordInput;

`;
