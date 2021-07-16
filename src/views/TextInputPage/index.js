import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";
import TextInput from "../../components/TextInput";
import { textInputCode } from "../../components/TextInput/textInputCode";

const TextInputPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <ComponentTemplate
      title="Text Input"
      component={
        <TextInput
          width={isDesktop ? "50%" : "100%"}
          leftIcon={<UserSVG />}
          type="text"
        />
      }
      codeBlock={
        <CodeBlock
          lang="jsx"
          content={textInputCode}
          icon={<FaReact size="2rem" className="react" />}
          file="TextInput.jsx"
        />
      }
    />
  );
};

const UserSVG = () => (
  <svg
    style={{ margin: `auto` }}
    width="30"
    height="30"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path
      fillRule="evenodd"
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
    />
  </svg>
);

export default TextInputPage;
