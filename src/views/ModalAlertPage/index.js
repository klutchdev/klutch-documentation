import React, { useState } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import BasicButton from "../../components/BasicButton";
import useMediaQuery from "../../hooks/useMedia";
import { modalAlertCode } from "../../components/ModalAlert/modalAlertCode";
import ModalAlertFramer from "../../components/ModalAlertFramer";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariant } from "../../animations";

const ModalAlertPage = () => {
  const [showAlert, setShowAlert] = useState(false);
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
        handleClose={() => setShowAlert(false)}
        showModal={showAlert}
        text="Basic alert modal"
        width={isDesktop ? "40%" : isLandscape ? "60%" : "95%"}
        height={isLandscape ? "calc(65vh)" : "calc(30vh)"}
        background="linear-gradient(150deg, #272829 0%,#131313 100%)"
        textColor="#e562ff"
      />

      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          setShowAlert(false);
        }}
      >
        <ComponentTemplate
          title="Alert Modal"
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
                label="Show alert"
                margin="auto auto 1rem 0"
                bgColor="#e562ff"
                textColor="#030303"
                disabled={false}
                onClick={() => setShowAlert(true)}
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
