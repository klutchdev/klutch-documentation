import { useState } from "react";
import { string } from "prop-types";

const Checkbox = ({
  bgColor,
  shadow,
  border,
  radius,
  width,
  height,
  margin,
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <input
      type="checkbox"
      style={{
        appearance: "none",
        width: width || "1.5rem",
        height: height || "1.5rem",
        outline: "none",
        margin: margin || "auto auto auto 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all ease 400ms",
        borderRadius: radius || "2px",
        border: border || "#151718 4px solid inset",
        backgroundColor: checked ? bgColor || "#22da6b" : "#9aa0a4",
        boxShadow: shadow || "#030303af 1px 1px 10px",
      }}
      value={checked}
      checked={checked}
      onChange={handleCheck}
    />
  );
};

Checkbox.propTypes = {
  bgColor: string,
  shadow: string,
  border: string,
  radius: string,
  width: string,
  height: string,
  margin: string,
};

export default Checkbox;
