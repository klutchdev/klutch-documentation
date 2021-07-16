import React from "react";
import hljs from "highlight.js/lib/common";
import { useEffect } from "react";

const CodeBlock = ({ content, lang, icon, file }) => {
  useEffect(() => {
    hljs.highlightAll();
    return () => hljs.highlightAll();
  }, []);

  return (
    <div className="code-block">
      <div className="filename">
        {icon} <h5>{file}</h5>
      </div>
      <pre className="pre">
        <code className={`code language-${lang}`}>{content}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
