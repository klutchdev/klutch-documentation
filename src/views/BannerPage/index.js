/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import TopBanner from "../../components/Banner";
import { bannerCode } from "../../components/Banner/bannerCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariant } from "../../animations";

const handleDismiss = (arr, item) => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((i) => i === item),
    1
  );
  return newArr;
};
const gradients = [
  "linear-gradient(to bottom right,#22da6bee,#22da6b)",
  "linear-gradient(to bottom right,#ffe733ee,#ffe733)",
  "linear-gradient(to bottom right,#ff3860ee,#ff3860)",
];

const text = [
  "Tall and wide dismissable success alert banner",
  "Warning dismissable alert",
  "Dismissable alert",
];

const height = ["6rem", "4rem", "4rem"];
const width = ["100%", "100%", "75%"];

const BannerPage = () => {
  const [banners, setBanners] = useState([0, 1, 2]);

  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
            <AnimatePresence initial={false}>
              {banners.map((id) => (
                <TopBanner
                  key={id}
                  margin="0.5rem auto"
                  content={text[id]}
                  gradient={gradients[id]}
                  bgColor="#39393925"
                  height={height[id]}
                  width={width[id]}
                  handleDismiss={() => setBanners(handleDismiss(banners, id))}
                />
              ))}
            </AnimatePresence>
          </div>
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={bannerCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="AlertBanner.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default BannerPage;
