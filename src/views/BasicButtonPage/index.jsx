import { useState } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import BasicButton from "../../components/BasicButton";
import { basicButtonCode } from "../../components/BasicButton/basicButtonCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";
import ModalAlertFramer from "../../components/ModalAlertFramer";

const BasicButtonPage = () => {
  const [showModal, setShowModal] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isLandscape = useMediaQuery(
    "(min-width: 480px) and (max-height: 600px)"
  );
  const history = useHistory();
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
        text="Hello there!"
        width={isDesktop ? "40%" : isLandscape ? "60%" : "95%"}
        height={isLandscape ? "calc(65vh)" : "calc(30vh)"}
        textColor="#22da6b"
        background="linear-gradient(135deg, #272829 0%,#090909 100%)"
      />
      <ComponentTemplate
        title="Button"
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
              label="Greetings"
              width={isDesktop ? "20%" : "auto"}
              margin="auto auto 1rem 0"
              bgColor="#22da6b"
              textColor="#030303ee"
              disabledBgColor="#5eaf7ebe"
              disabledTextColor="#030303aa"
              disabled={false}
              onClick={() => setShowModal(true)}
            />
            <BasicButton
              type="button"
              label="Disabled"
              width={isDesktop ? "20%" : "auto"}
              margin="auto auto 1rem 0"
              bgColor="#22da6b"
              textColor="#030303ee"
              disabledBgColor="#5eaf7ebe"
              disabledTextColor="#030303aa"
              disabled={true}
              onClick={() => alert("Disabled")}
            />
            <BasicButton
              type="button"
              label="Cancel"
              width={isDesktop ? "15%" : "auto"}
              margin="auto auto auto 0"
              bgColor="#c74d4d"
              textColor="#030303"
              disabledBgColor="#9b3a3a"
              disabledTextColor="#030303cc"
              disabled={false}
              onClick={() => history.goBack()}
            />
          </div>
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={basicButtonCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="BasicButton.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default BasicButtonPage;
