import React, { useState } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import { textButtonCode } from "../../components/TextButton/textButtonCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";
import TextButton from "../../components/TextButton";
import ModalAlertFramer from "../../components/ModalAlertFramer";

const TextButtonPage = () => {
  const [showModal, setShowModal] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isLandscape = useMediaQuery(
    "(min-width: 480px) and (max-height: 600px)"
  );

  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ModalAlertFramer
        handleClose={() => setShowModal(false)}
        showModal={showModal}
        text="💩"
        fontSize="500%"
        width={isDesktop ? "40%" : isLandscape ? "60%" : "80%"}
        height={isLandscape ? "calc(65vh)" : "calc(30vh)"}
        textColor="#94531a"
        background="linear-gradient(135deg, #272829 0%,#090909 100%)"
      />
      <ComponentTemplate
        title="Text Button"
        component={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <TextButton
              type="button"
              label="Text Button"
              hoverLabel=" 💩 💩 💩 💩 "
              width={isDesktop ? "20%" : "auto"}
              margin="auto auto 1rem 0"
              bgColor="#21222b"
              textColor="#00b7ff"
              disabled={false}
              onClick={() => setShowModal(true)}
            />
            <TextButton
              type="button"
              label="Link Button"
              hoverLabel="Fireship 🔥 bio"
              width={isDesktop ? "20%" : "auto"}
              margin="auto auto 1rem 0"
              bgColor="#e35a11"
              textColor="#ffcb59"
              disabled={false}
              onClick={() =>
                window.open(
                  "https://fireship.io/contributors/kyle-leary/",
                  "_blank"
                )
              }
            />
            <TextButton
              type="button"
              label="Dashed Button"
              hoverLabel="Check console 👨🏻‍💻"
              width={isDesktop ? "20%" : "auto"}
              margin="auto auto 1rem 0"
              border="1px dashed #333333"
              bgColor="#21222b"
              textColor="#22da6b"
              disabled={false}
              onClick={() => console.info("Dashed Button!")}
            />
          </div>
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={textButtonCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="TextButton.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default TextButtonPage;
