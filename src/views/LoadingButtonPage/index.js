import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import LoadingButton from "../../components/LoadingButton";
import { loadingButtonCode } from "../../components/LoadingButton/loadingButtonCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMedia";

const LoadingButtonPage = () => {
  const [loading, setLoading] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <ComponentTemplate
      title="Loading Button"
      component={
        <LoadingButton
          width={isDesktop && "25%"}
          type="button"
          label="Click me"
          margin="auto auto auto 0"
          bgColor="#22da6b"
          textColor="#030303"
          disabledBgColor="#676767"
          disabledTextColor="#030303cc"
          disabled={false}
          loading={loading}
          onClick={() => setLoading(!loading)}
        />
      }
      codeBlock={
        <CodeBlock
          lang="jsx"
          content={loadingButtonCode}
          icon={<FaReact size="2rem" className="react" />}
          file="LoadingButton.jsx"
        />
      }
    />
  );
};

export default LoadingButtonPage;
