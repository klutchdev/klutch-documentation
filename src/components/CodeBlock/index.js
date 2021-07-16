/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { string, element } from "prop-types";
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/atom-one-dark.css";
import { FaReact } from "react-icons/fa";

const CodeBlock = ({ content, lang, icon, file }) => {
  useEffect(() => {
    hljs.highlightAll();
    return () => hljs.highlightAll();
  }, []);

  return (
    <div className="code-block">
      <div className="filename">
        {icon || <FaReact size="2rem" className="react" />} <h5>{file}</h5>
      </div>
      <pre className="pre">
        <code
          style={{ fontFamily: `Fira Code` }}
          className={`code language-${lang || "jsx"}`}
        >
          {content}
        </code>
      </pre>
    </div>
  );
};

CodeBlock.propTypes = {
  content: string.isRequired,
  lang: string.isRequired,
  icon: element.isRequired,
  file: string.isRequired,
};

export default CodeBlock;
