import React from "react";
import ComponentPage from "../../components/ComponentPage";
import TopBanner from "../../components/Banner";
import { bannerCode } from "../../components/Banner/bannerCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";

const BannerPage = () => (
  <ComponentPage
    title="Alert Banner"
    component={
      <TopBanner
        content="This is a dismissable alert banner"
        gradient="linear-gradient(to bottom right, #22da6b, #25c47c)"
        height="6rem"
      />
    }
    codeBlock={
      <CodeBlock
        lang="jsx"
        content={bannerCode}
        icon={<FaReact size="2rem" className="react" />}
        file="AlertBanner.jsx"
      />
    }
  />
);

export default BannerPage;
