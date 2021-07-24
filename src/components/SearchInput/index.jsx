import { useEffect, useRef, useState } from "react";
import { string, element, func } from "prop-types";

const fruits = [
  "Apple 🍎",
  "Banana 🍌",
  "Cherry 🍒",
  "Peach 🍑",
  "Watermelon 🍉",
  "Kiwi 🥝",
  "Strawberry 🍓",
  "Pineapple 🍍",
  "Tomato 🍅",
  "Lemon 🍋",
];

const SearchInput = ({
  type,
  value,
  leftIcon,
  rightIcon,
  placeholder,
  onKeyDown,
  onKeyUp,
  onChange,
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
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div
        ref={inputRef}
        style={{
          width: width || "100%",
          height: height || "2.75rem",
          margin: margin || "0.25rem 0 0.5rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          outline: "none",
          background: "#03030350",
          border: border || "1px solid #545759",
          borderRadius: radius || "4px",
          transition: "all 300ms ease",
          boxShadow: shadow || "1px 1px 10px #03030390",
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
          value={searchTerm || value}
          onChange={handleChange || onChange}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          placeholder={"Search fruits..." || placeholder}
          autoComplete={autoComplete || "off"}
          style={{
            width: "100%",
            height: "100%",
            outline: "none",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            color: textColor || "#d9d9d9",
            background: "transparent",
            fontSize: "1.25rem",
            letterSpacing: "0.75px",
            fontWeight: 400,
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "0 0 0 0.25rem",
        }}
      >
        {searchTerm && searchResults.length > 0 && (
          <p
            style={{
              color: "#a76ff5",
              margin: "0.25rem auto 0.25rem 0",
              fontSize: "110%",
              fontWeight: 600,
              // fontStyle: "italic",
            }}
          >
            Showing {searchResults.length} results:
          </p>
        )}
        {searchTerm && !searchResults.length && (
          <p
            style={{
              color: "#e8ceff",
              margin: "0.25rem auto 0.25rem 0",
              fontSize: "110%",
              fontStyle: "italic",
            }}
          >
            No results found!
          </p>
        )}
        {searchTerm &&
          searchResults &&
          searchResults.map((match) => {
            return (
              <p
                key={match}
                style={{
                  color: "#dfc8ff",
                  margin: "0.25rem auto 0 0",
                  fontSize: "95%",
                  fontWeight: 400,
                }}
              >
                {match}
              </p>
            );
          })}
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  leftIcon: element,
  rightIcon: element,
  type: string,
  value: string,
  handleChange: func,
  textColor: string,
  leftIconColor: string,
  rightIconColor: string,
  placeholder: string,
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

export default SearchInput;
