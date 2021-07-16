import React from "react";

const Home = () => (
  <div style={{ padding: `1rem` }}>
    <h1
      style={{
        textAlign: `left`,
        margin: `1rem auto 1rem 0.5rem`,
        fontFamily: `Montserrat`,
      }}
    >
      HOME
    </h1>
    <hr style={{ color: "#666666" }} />
    <div className="flex-column">
      <h3 style={{ fontFamily: `Montserrat` }}>Buttons</h3>
      <a
        style={{
          margin: `0.25rem auto 0.25rem 0.25rem`,
          textAlign: `left`,
          fontSize: `1.25rem`,
          fontWeight: 500,
          color: `#ff4088`,
          fontFamily: "Montserrat",
        }}
        href="/basic-button"
      >
        Basic Button
      </a>
      <a
        style={{
          margin: `0.25rem auto 0.25rem 0.25rem`,
          textAlign: `left`,
          fontSize: `1.25rem`,
          fontWeight: 500,
          color: `#ff4088`,
          fontFamily: "Montserrat",
        }}
        href="/loading-button"
      >
        Loading Button
      </a>

      <h3 style={{ fontFamily: `Montserrat` }}>Banners</h3>
      <a
        style={{
          margin: `0.25rem auto 0.25rem 0.25rem`,
          textAlign: `left`,
          fontSize: `1.25rem`,
          fontWeight: 500,
          color: `#ff4088`,
          fontFamily: "Montserrat",
        }}
        href="/top-banner"
      >
        Alert Banner
      </a>
      <h3 style={{ fontFamily: `Montserrat` }}>Inputs</h3>
      <a
        style={{
          margin: `0.25rem auto 0.25rem 0.25rem`,
          textAlign: `left`,
          fontSize: `1.25rem`,
          fontWeight: 500,
          color: `#ff4088`,
          fontFamily: "Montserrat",
        }}
        href="/text-input"
      >
        Text Input
      </a>
      <a
        style={{
          margin: `0.25rem auto 0.25rem 0.25rem`,
          textAlign: `left`,
          fontSize: `1.25rem`,
          fontWeight: 500,
          color: `#ff4088`,
          fontFamily: "Montserrat",
        }}
        href="/password-input"
      >
        Password Input
      </a>

      <h3 style={{ fontFamily: `Montserrat` }}>Toggles</h3>
      <a
        style={{
          margin: `0.25rem auto 0.25rem 0.25rem`,
          textAlign: `left`,
          fontSize: `1.25rem`,
          fontWeight: 500,
          color: `#ff4088`,
          fontFamily: "Montserrat",
        }}
        href="/checkbox"
      >
        Checkbox
      </a>
      <a
        style={{
          margin: `0.25rem auto 0.25rem 0.25rem`,
          textAlign: `left`,
          fontSize: `1.25rem`,
          fontWeight: 500,
          color: `#ff4088`,
          fontFamily: "Montserrat",
        }}
        href="/menu-toggle"
      >
        Menu Toggle
      </a>
    </div>
  </div>
);

export default Home;
