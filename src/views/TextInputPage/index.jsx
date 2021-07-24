import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";
import TextInput from "../../components/TextInput";
import { textInputCode } from "../../components/TextInput/textInputCode";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";

const TextInputPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ComponentTemplate
        title="Text Input"
        component={
          <TextInput
            width={isDesktop ? "50%" : "100%"}
            type="text"
            placeholder="Enter some text"
          />
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={textInputCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="TextInput.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default TextInputPage;
