import React, { useState } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
// import ModalAlert from "../../components/ModalAlert";
import BasicButton from "../../components/BasicButton";
import useMediaQuery from "../../hooks/useMedia";
import { modalAlertCode } from "../../components/ModalAlert/modalAlertCode";
import ModalAlertFramer from "../../components/ModalAlertFramer";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariant } from "../../animations";

const ModalAlertPage = () => {
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
        text="Modal Alert!"
        width={isDesktop ? "40%" : isLandscape ? "60%" : "95%"}
        height={isLandscape ? "calc(65vh)" : "calc(30vh)"}
        textColor="#e562ff"
      />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <ComponentTemplate
          title="Modal Alert"
          component={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <BasicButton
                type="button"
                label="Open Modal"
                margin="auto auto 1rem 0"
                bgColor="#22da6b"
                textColor="#030303"
                disabledBgColor="#676767"
                disabledTextColor="#030303cc"
                disabled={false}
                onClick={() => setShowModal(true)}
              />
            </div>
          }
          codeBlock={
            <CodeBlock
              lang="jsx"
              content={modalAlertCode}
              icon={<FaReact size="1.75rem" className="react" />}
              file="ModalAlert.jsx"
            />
          }
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default ModalAlertPage;
