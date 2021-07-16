import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import { passwordInputCode } from "../../components/PasswordInput/passwordInputCode";
import useMediaQuery from "../../hooks/useMedia";
import PasswordInput from "../../components/PasswordInput";

const PasswordInputPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <ComponentTemplate
      title="Password Input"
      component={
        <PasswordInput
          width={isDesktop ? "50%" : "100%"}
          leftIcon={<KeySVG />}
          type="password"
        />
      }
      codeBlock={
        <CodeBlock
          lang="jsx"
          content={passwordInputCode}
          icon={<FaReact size="1.75rem" className="react" />}
          file="Input.jsx"
        />
      }
    />
  );
};

// const UserSVG = () => (
//   <svg
//     width="35"
//     height="35"
//     fill="currentColor"
//     className="user-svg"
//     viewBox="0 0 16 16"
//   >
//     <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//     <path
//       fillRule="evenodd"
//       d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
//     />
//   </svg>
// );

const KeySVG = () => (
  <svg
    style={{ margin: `auto` }}
    width="30"
    height="30"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />{" "}
  </svg>
);

export default PasswordInputPage;
