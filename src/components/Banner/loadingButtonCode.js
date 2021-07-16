export const bannerCode = `import React, { useState } from "react";

const TopBanner = ({
  content,
  margin,
  textColor,
  fontSize,
  textAlign,
  fontWeight,
  fontFamily,
  lineHeight,
  transition,
  position,
  top,
  bgColor,
  gradient,
  shadow,
}) => {
  const [dismissed, setDismissed] = useState(false);

  const DismissButton = ({ onClick }) => (
    <div
      style={{
        display: "flex",
        alignContents: "center",
        justifyContent: "center",
        width: "1.5rem",
      }}
    >
      <div
        onClick={onClick}
        style={{
          margin: "auto 0",
          display: "flex",
          alignContents: "center",
          justifyContent: "center",
          width: "3rem",
          backgroundColor: "#2ac969",
          filter: "brightness(0.85)",
          height: "auto",
          borderRadius: "500px",
        }}
      >
        <svg
          style={{ margin: "auto", height: "1.5rem", width: "1.5rem" }}
          fill="currentColor"
          color="#030303"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
    </div>
  );

  return (
    <div
      style={{
        position: position || "relative",
        display: "flex",
        top: position && top ? top : "",
        width: "auto",
        margin: 0,
        padding: "0.5rem 1rem 0.5rem 1rem",
        backgroundColor: bgColor || "#22da6b",
        background:
          gradient || "linear-gradient(to bottom right, #09c372, #22da6b)",
        boxShadow: shadow || "#030303 2px 2px 20px",
      }}
    >
      <div
        style={{
          display: dismissed ? "none" : "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "92%",
          textAlign: "justify",
          transition: transition || "all 250ms ease",
        }}
      >
        <h4
          style={{
            margin: margin || "auto",
            textAlign: textAlign || "left",
            fontSize: fontSize || "95%",
            fontWeight: fontWeight || 500,
            fontFamily: fontFamily || "Montserrat",
            color: textColor || "#030303",
            letterSpacing: 0,
            lineHeight: lineHeight || "1.25rem",
          }}
        >
          {content}
        </h4>
      </div>
      <DismissButton onClick={() => setDismissed(!dismissed)} />
    </div>
  );
};

export default TopBanner;

`;
