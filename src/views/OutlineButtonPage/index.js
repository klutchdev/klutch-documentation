import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";
import OutlineButton from "../../components/OutlineButton";
import { outlineButtonCode } from "../../components/OutlineButton/outlineButtonCode";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";

const OutlineButtonPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ComponentTemplate
        title="Outline Button"
        component={
          <OutlineButton
            type="button"
            label="Get Lucky ☘️"
            width={isDesktop ? "15%" : "auto"}
            margin="auto auto auto 0"
            border="1px solid #22da6b"
            textColor="#22da6b"
            bgColor="#151718"
            disabledTextColor="#22da6bcc"
            disabled={false}
            onClick={() => alert("🌈 ☘️ 💰")}
          />
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={outlineButtonCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="OutlineButton.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default OutlineButtonPage;
