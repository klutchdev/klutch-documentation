import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import MenuToggle from "../../components/MenuToggle";
import { menuToggleCode } from "../../components/MenuToggle/menuToggleCode";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";

const MenuTogglePage = () => (
  <motion.div
    variants={pageVariant}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <ComponentTemplate
      title="Burger"
      component={<MenuToggle width="50" height="50" />}
      codeBlock={
        <CodeBlock
          lang="jsx"
          content={menuToggleCode}
          icon={<FaReact size="1.75rem" className="react" />}
          file="MenuToggle.jsx"
        />
      }
    />
  </motion.div>
);

export default MenuTogglePage;
