import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";

import CodeBlock from "../../components/CodeBlock";
import { FaGoogle, FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";
import IconButton from "../../components/IconButton";
import { iconButtonCode } from "../../components/IconButton/iconButtonCode";

const IconButtonPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <ComponentTemplate
      title="Icon Button"
      component={
        <IconButton
          type="button"
          icon={<FaGoogle size="1.5rem" style={{ marginRight: "0.5rem" }} />}
          label="Account login"
          width={isDesktop ? "20%" : "auto"}
          margin="auto auto auto 0"
          bgColor="#dc4040"
          textColor="#030303"
          disabledBgColor="#676767"
          disabledTextColor="#030303cc"
          disabled={false}
          onClick={() => alert("Google sign in coming soon")}
        />
      }
      codeBlock={
        <CodeBlock
          lang="jsx"
          content={iconButtonCode}
          icon={<FaReact size="2rem" className="react" />}
          file="IconButton.jsx"
        />
      }
    />
  );
};

export default IconButtonPage;
