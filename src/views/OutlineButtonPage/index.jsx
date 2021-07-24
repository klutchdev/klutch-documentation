import { useState } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";
import OutlineButton from "../../components/OutlineButton";
import { outlineButtonCode } from "../../components/OutlineButton/outlineButtonCode";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";
import ModalAlertFramer from "../../components/ModalAlertFramer";

const OutlineButtonPage = () => {
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
        text="💰 🍀 🌈 🍀 💰"
        fontSize="250%"
        width={isDesktop ? "40%" : isLandscape ? "60%" : "95%"}
        height={isLandscape ? "calc(65vh)" : "calc(30vh)"}
        textColor="#e253ff"
        background="linear-gradient(135deg, #272829 0%,#090909 100%)"
      />
      <ComponentTemplate
        title="Outline Button"
        component={
          <OutlineButton
            type="button"
            label="Get Lucky ☘️"
            width={isDesktop ? "15%" : "auto"}
            margin="auto auto auto 0"
            border="1px solid #22da6b"
            textColor="#22da6b"
            bgColor="#151718"
            disabledTextColor="#22da6bcc"
            disabled={false}
            onClick={() => setShowModal(true)}
          />
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={outlineButtonCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="OutlineButton.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default OutlineButtonPage;
