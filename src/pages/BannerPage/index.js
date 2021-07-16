import React from "react";
import ComponentPage from "../../components/ComponentPage";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import { bannerCode } from "../../components/Banner/loadingButtonCode";
import TopBanner from "../../components/Banner";

const BannerPage = () => {
  return (
    <ComponentPage
      title="Alert Banner"
      component={<TopBanner content="This an alert banner" />}
      codeBlock={
        <CodeBlock
          lang="jsx"
          content={bannerCode}
          icon={<FaReact size="2rem" className="react" />}
          file="Button.jsx"
        />
      }
    />
  );
};

export default BannerPage;
