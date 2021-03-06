import ComponentTemplate from "../../components/ComponentTemplate";
import LoadingButton from "../../components/LoadingButton";
import { loadingButtonCode } from "../../components/LoadingButton/loadingButtonCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMedia";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";

const LoadingButtonPage = () => {
  const [loading, setLoading] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleLoading = () => {
    setLoading(!loading);
  };

  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ComponentTemplate
        title="Loading Button"
        component={
          <LoadingButton
            width={isDesktop ? "20%" : "70%"}
            type="button"
            label="Load stuff"
            margin="auto auto auto 0"
            bgColor="#22da6b"
            textColor="#030303"
            disabledBgColor="#676767"
            disabledTextColor="#030303cc"
            disabled={false}
            loading={loading}
            onClick={handleLoading}
          />
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={loadingButtonCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="LoadingButton.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default LoadingButtonPage;
