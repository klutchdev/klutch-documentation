import React, { useState } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import ModalAlert from "../../components/ModalAlert";
import BasicButton from "../../components/BasicButton";
import useMediaQuery from "../../hooks/useMedia";
import { modalAlertCode } from "../../components/ModalAlert/modalAlertCode";

const ModalAlertPage = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isLandscape = useMediaQuery(
    "(min-width: 480px) and (max-height: 480px)"
  );

  return (
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
            onClick={() => setOpen(true)}
          />
        </div>
      }
      codeBlock={
        open ? (
          <ModalAlert
            handleClose={() => setOpen(false)}
            text="Modal Alert!"
            width={isDesktop ? "40%" : isLandscape ? "60%" : "95%"}
            height={isLandscape ? "75vh" : "25vh"}
            textColor="#e562ff"
            bodyText="This is a basic modal window"
            // width={isDesktop ? "calc(25vw)" : "calc(95vw)"}
          />
        ) : (
          <CodeBlock
            lang="jsx"
            content={modalAlertCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="ModalALert.jsx"
          />
        )
      }
    />
  );
};

export default ModalAlertPage;
