import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaGithub, FaReact, FaTwitter, FaYoutube } from "react-icons/fa";
import IconButton from "../../components/IconButton";
import { iconButtonCode } from "../../components/IconButton/iconButtonCode";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";

const IconButtonPage = () => {
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ComponentTemplate
        title="Icon Button"
        component={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <IconButton
              type="button"
              icon={
                <FaYoutube size="1.5rem" style={{ marginRight: "0.5rem" }} />
              }
              label="Subscribe"
              width="auto"
              margin="auto auto 1rem 0"
              bgColor="#dc4040"
              textColor="#030303"
              disabledBgColor="#676767"
              disabledTextColor="#030303cc"
              disabled={false}
              onClick={() =>
                window.open("https://www.youtube.com/fireship", "_blank")
              }
            />
            <IconButton
              type="button"
              icon={
                <FaGithub size="1.5rem" style={{ marginRight: "0.5rem" }} />
              }
              label="View on Github"
              width="auto"
              margin="auto auto 1rem 0"
              bgColor="linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)"
              textColor="#030303"
              fontSize="110%"
              disabled={false}
              onClick={() =>
                window.open(
                  "https://github.com/klutchdev/klutch-documentation",
                  "_blank"
                )
              }
            />
            <IconButton
              type="button"
              icon={
                <FaTwitter size="1.5rem" style={{ marginRight: "0.5rem" }} />
              }
              label="Follow @klutchDev"
              width="auto"
              margin="auto auto auto 0"
              bgColor="#1da1f2"
              textColor="#d9d9d9"
              disabled={false}
              onClick={() =>
                window.open("https://twitter.com/klutchdev", "_blank")
              }
            />
          </div>
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={iconButtonCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="IconButton.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default IconButtonPage;
