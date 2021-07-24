import { useState } from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import { passwordInputCode } from "../../components/PasswordInput/passwordInputCode";
import useMediaQuery from "../../hooks/useMedia";
import PasswordInput from "../../components/PasswordInput";
import { motion } from "framer-motion";
import { pageVariant, pathVariants } from "../../animations";

const PasswordInputPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ComponentTemplate
        title="Password Input"
        component={
          <PasswordInput
            width={isDesktop ? "50%" : "100%"}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            placeholder="Enter password"
            leftIcon={<KeySVG />}
            rightIcon={<VisibleSVG isVisible={isVisible} />}
          />
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={passwordInputCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="Input.jsx"
          />
        }
      />
    </motion.div>
  );
};

const KeySVG = () => (
  <motion.svg
    initial="hidden"
    animate="visible"
    style={{ margin: `auto`, transition: "all 350ms ease" }}
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <motion.path
      variants={pathVariants}
      d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"
    />
    <motion.path
      variants={pathVariants}
      d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
    />{" "}
  </motion.svg>
);

const VisibleSVG = ({ isVisible }) => (
  <motion.svg
    initial="hidden"
    animate="visible"
    style={{ margin: `auto`, transition: "all 350ms ease" }}
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    {isVisible ? (
      <>
        <motion.path
          variants={pathVariants}
          d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
        />
        <motion.path
          variants={pathVariants}
          d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
        />
      </>
    ) : (
      <>
        <motion.path
          variants={pathVariants}
          d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
        />
        <motion.path
          variants={pathVariants}
          d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
        />
      </>
    )}
  </motion.svg>
);

export default PasswordInputPage;
