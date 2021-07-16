import React from "react";
import ComponentPage from "../../components/ComponentPage";
import BasicButton from "../../components/BasicButton";
import { basicButtonCode } from "../../components/BasicButton/basicButtonCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";

const BasicButtonPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <ComponentPage
      title="Basic button"
      component={
        <BasicButton
          type="button"
          width={isDesktop && "20%"}
          label="Basic button"
          margin="auto auto auto 0"
          bgColor="#22da6b"
          textColor="#030303"
          disabledBgColor="#676767"
          disabledTextColor="#030303cc"
          disabled={false}
          onClick={() => alert("clicked")}
        />
      }
      codeBlock={
        <CodeBlock
          lang="jsx"
          content={basicButtonCode}
          icon={<FaReact size="2rem" className="react" />}
          file="Button.jsx"
        />
      }
    />
  );
};

export default BasicButtonPage;
