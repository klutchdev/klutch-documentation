import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import BasicButton from "../../components/BasicButton";
import { basicButtonCode } from "../../components/BasicButton/basicButtonCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";

const BasicButtonPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const history = useHistory();
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
              label="Greetings"
              width={isDesktop ? "15%" : "auto"}
              margin="auto auto 1rem 0"
              bgColor="#22da6b"
              textColor="#030303ee"
              disabledBgColor="#5eaf7ebe"
              disabledTextColor="#030303aa"
              disabled={false}
              onClick={() => alert("Hey there!")}
            />
            <BasicButton
              type="button"
              label="✖︎ Cancel"
              width={isDesktop ? "15%" : "auto"}
              margin="auto auto auto 0"
              bgColor="#c74d4d"
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
            icon={<FaReact size="1.75rem" className="react" />}
            file="BasicButton.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default BasicButtonPage;
