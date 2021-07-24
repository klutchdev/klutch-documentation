import { useState } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import BasicButton from "../../components/BasicButton";
import useMediaQuery from "../../hooks/useMedia";
import { modalAlertCode } from "../../components/ModalAlert/modalAlertCode";
import ModalAlertFramer from "../../components/ModalAlertFramer";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariant } from "../../animations";
import TextButton from "../../components/TextButton";

const ModalPromptPage = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showPrompt2, setShowPrompt2] = useState(false);
  const [promptLabel, setPromptLabel] = useState("Show prompt");
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
        handleClose={() => setShowPrompt(false)}
        showModal={showPrompt}
        text="Show some stuff?"
        fontSize="1.5rem"
        width={isDesktop ? "40%" : isLandscape ? "60%" : "95%"}
        height={isLandscape ? "calc(65vh)" : "calc(30vh)"}
        background="linear-gradient(150deg, #272829 0%,#131313 100%)"
        textColor="#dcdcdc"
      >
        <BasicButton
          type="button"
          label="Heckin yeah!"
          width="75%"
          height="2.75rem"
          margin="0 auto 1rem auto"
          bgColor="#65e625"
          textColor="#030303"
          disabled={false}
          onClick={() => {
            setShowPrompt(false);
            setShowPrompt2(true);
          }}
        />
        <TextButton
          type="button"
          label="No, stuff sucks!"
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
      <ModalAlertFramer
        handleClose={() => setShowPrompt2(false)}
        showModal={showPrompt2}
        text="Stuff is fun?"
        fontSize="1.75rem"
        width={isDesktop ? "40%" : isLandscape ? "60%" : "95%"}
        height={isLandscape ? "calc(65vh)" : "calc(30vh)"}
        background="linear-gradient(150deg, #272829 0%,#131313 100%)"
        textColor="#dcdcdc"
      >
        <BasicButton
          type="button"
          label="Affirmative!"
          width="60%"
          height="2.75rem"
          margin="0 auto 1rem auto"
          bgColor="#65e625"
          textColor="#030303"
          disabled={false}
          onClick={() => {
            setShowPrompt2(false);
            setPromptLabel("Did stuff");
            setTimeout(() => setPromptLabel("Show prompt"), 3000);
          }}
        />
        <TextButton
          type="button"
          label="Negative!"
          width="60%"
          height="2.75rem"
          margin="0 auto 1rem auto"
          border="1px dashed #393939"
          bgColor="#7b1b1b"
          textColor="#f75555"
          disabled={false}
          onClick={() => setShowPrompt2(false)}
        />
      </ModalAlertFramer>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          setShowPrompt(false);
        }}
      >
        <ComponentTemplate
          title="Modal Prompt"
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
                label={promptLabel}
                margin="auto auto 1rem 0"
                bgColor="#65e625"
                textColor="#030303"
                disabled={false}
                onClick={() => setShowPrompt(true)}
              />
            </div>
          }
          codeBlock={
            <CodeBlock
              lang="jsx"
              content={modalAlertCode}
              icon={<FaReact size="1.75rem" className="react" />}
              file="ModalPrompt.jsx"
            />
          }
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default ModalPromptPage;
