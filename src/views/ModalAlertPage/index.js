import React, { useState } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import { bannerCode } from "../../components/Banner/bannerCode";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import ModalAlert from "../../components/ModalAlert";
import BasicButton from "../../components/BasicButton";
import useMediaQuery from "../../hooks/useMedia";

const ModalAlertPage = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

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
            width={isDesktop ? "20%" : "100%"}
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
            textColor="#e562ff"
            bodyText="This is a basic modal window"
            width={isDesktop ? "calc(25vw)" : "calc(95vw)"}
          />
        ) : (
          <CodeBlock
            lang="jsx"
            content={bannerCode}
            icon={<FaReact size="2rem" className="react" />}
            file="AlertBanner.jsx"
          />
        )
      }
    />
  );
};

export default ModalAlertPage;
