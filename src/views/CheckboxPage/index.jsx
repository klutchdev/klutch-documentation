import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import Checkbox from "../../components/Checkbox";
import { checkboxCode } from "../../components/Checkbox/checkboxCode";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";

const CheckboxPage = () => (
  <motion.div
    variants={pageVariant}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <ComponentTemplate
      title="Checkbox"
      component={<Checkbox />}
      codeBlock={
        <CodeBlock
          lang="jsx"
          content={checkboxCode}
          icon={<FaReact size="1.75rem" className="react" />}
          file="Checkbox.jsx"
        />
      }
    />
  </motion.div>
);

export default CheckboxPage;
