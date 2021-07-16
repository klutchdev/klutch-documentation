import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import MenuToggle from "../../components/MenuToggle";
import { menuToggleCode } from "../../components/MenuToggle/menuToggleCode";

const MenuTogglePage = () => (
  <ComponentTemplate
    title="Menu Toggle"
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
);

export default MenuTogglePage;
