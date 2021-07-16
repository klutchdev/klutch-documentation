import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import BasicButton from "../../components/BasicButton";
import { basicButtonCode } from "../../components/BasicButton/basicButtonCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";
import { useHistory } from "react-router-dom";

const BasicButtonPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const history = useHistory();
  return (
    <ComponentTemplate
      title="Button"
      component={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <BasicButton
            type="button"
            label="Say hello!"
            width={isDesktop ? "20%" : "100%"}
            margin="auto auto 1rem 0"
            bgColor="#22da6b"
            textColor="#030303"
            disabledBgColor="#676767"
            disabledTextColor="#030303cc"
            disabled={false}
            onClick={() => alert("Hey there!")}
          />
          <BasicButton
            type="button"
            label="Go Back"
            width={isDesktop ? "20%" : "100%"}
            margin="auto auto auto 0"
            bgColor="#dc4040"
            textColor="#030303"
            disabledBgColor="#9b3a3a"
            disabledTextColor="#030303cc"
            disabled={false}
            onClick={() => history.goBack()}
          />
        </div>
      }
      codeBlock={
        <CodeBlock
          lang="jsx"
          content={basicButtonCode}
          icon={<FaReact size="2rem" className="react" />}
          file="BasicButton.jsx"
        />
      }
    />
  );
};

export default BasicButtonPage;
