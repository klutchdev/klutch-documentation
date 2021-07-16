import React from "react";
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import Checkbox from "../../components/Checkbox";
import { checkboxCode } from "../../components/Checkbox/checkboxCode";

const CheckboxPage = () => (
  <ComponentTemplate
    title="Checkbox"
    component={<Checkbox />}
    codeBlock={
      <CodeBlock
        lang="jsx"
        content={checkboxCode}
        icon={<FaReact size="2rem" className="react" />}
        file="Checkbox.jsx"
      />
    }
  />
);

export default CheckboxPage;
