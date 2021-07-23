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
import BasicButton from "../../components/BasicButton";

const TextButtonPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [dashedLabel, setDashedLabel] = useState("Dashed Button");
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
      <ModalAlertFramer
        handleClose={() => setShowPrompt(false)}
        showModal={showPrompt}
        text="Open Fireship.io?"
        fontSize="1.5rem"
        width={isDesktop ? "40%" : isLandscape ? "60%" : "95%"}
        height={isLandscape ? "calc(65vh)" : "calc(30vh)"}
        background="linear-gradient(150deg, #272829 0%,#131313 100%)"
        textColor="#ff8c00"
      >
        <BasicButton
          type="button"
          label="Heck yeah!"
          width="75%"
          height="2.75rem"
          margin="0 auto 1rem auto"
          bgColor="#65e625"
          textColor="#030303"
          disabled={false}
          onClick={() => {
            setShowPrompt(false);
            window.open(
              "https://fireship.io/contributors/kyle-leary/",
              "_blank"
            );
          }}
        />
        <TextButton
          type="button"
          label="No thanks"
          width="75%"
          height="2.75rem"
          margin="0 auto 1rem auto"
          border="1px dashed #333333"
          bgColor="#7b1b1b"
          textColor="#f75555"
          disabled={false}
          onClick={() => setShowPrompt(false)}
        />
      </ModalAlertFramer>
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
              width={isDesktop ? "20%" : "auto"}
              margin="auto auto 1rem 0"
              bgColor="#21222b"
              textColor="#00b7ff"
              disabled={false}
              onClick={() => setShowModal(true)}
            />
            <TextButton
              type="button"
              label="View Profile 🔥"
              width={isDesktop ? "20%" : "auto"}
              margin="auto auto 1rem 0"
              textColor="#ffb700"
              bgColor="#e34400de"
              disabled={false}
              onClick={() => setShowPrompt(true)}
            />
            <TextButton
              type="button"
              label={dashedLabel}
              width={isDesktop ? "20%" : "auto"}
              margin="auto auto 1rem 0"
              border="1px dashed #333333"
              bgColor="#21222b"
              textColor="#22da6b"
              disabled={false}
              onClick={() => setDashedLabel("Mashed Button!")}
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
