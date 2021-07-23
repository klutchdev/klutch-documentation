/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMedia";
import ProgressButton from "../../components/ProgressButton";
import { progressButtonCode } from "../../components/ProgressButton/progressButtonCode";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";

const ProgressButtonPage = () => {
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const [label, setLabel] = useState("Upload data");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleLoading = () => {
    if (percent === 100) {
      setPercent(0);
      setLoading(false);
      setLabel("Upload data");
    } else {
      setLoading(true);
    }
  };

  useEffect(() => {
    if (percent === 100) {
      setLoading(false);
      setLabel("Complete!");
    }
  }, [percent]);

  useEffect(() => {
    if (loading) {
      for (let i = 1; i < 101; i++) {
        setTimeout(() => setPercent(i), 1000);
      }
    }
    if (percent === 100) {
      return () => clearTimeout();
    }
  }, [loading]);

  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ComponentTemplate
        title="Progress Button"
        component={
          <ProgressButton
            width={isDesktop ? "20%" : "100%"}
            type="button"
            label={label}
            margin="auto auto auto 0"
            bgColor="#39cd4f"
            disabledBgColor="#676767"
            disabledTextColor="#030303cc"
            disabled={false}
            loading={loading}
            percent={percent}
            onClick={handleLoading}
          />
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={progressButtonCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="LoadingButton.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default ProgressButtonPage;
