import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import TopBanner from "../../components/Banner";
import { bannerCode } from "../../components/Banner/bannerCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";

const BannerPage = () => (
  <ComponentTemplate
    title="Banner"
    component={
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <TopBanner
          margin="0.5rem 0"
          content="This is a short dismissable alert"
          gradient="linear-gradient(to bottom right, #22da6b, #25c47c)"
          bgColor="#22da6b"
          height="4rem"
        />
        <TopBanner
          margin="0.5rem 0"
          content="This is a tall dismissable alert"
          gradient="linear-gradient(to bottom right, #fff835, #d7b119)"
          bgColor="#fff835"
          height="8rem"
        />
        <TopBanner
          margin="0.5rem auto"
          content="This is a centered dismissable alert"
          gradient="linear-gradient(to bottom right, #ff4444, #ff224a)"
          bgColor="#ff3535"
          height="5rem"
          width="75%"
        />
      </div>
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
