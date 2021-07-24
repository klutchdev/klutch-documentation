/* eslint-disable react-hooks/exhaustive-deps */
import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations";
import AvatarImage from "../../components/AvatarImage";
import { avatarCode } from "../../components/AvatarImage/avatarCode";

const AvatarPage = () => {
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ComponentTemplate
        title="Avatar"
        component={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <AvatarImage />
          </div>
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={avatarCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="Avatar.jsx"
          />
        }
      />
    </motion.div>
  );
};

export default AvatarPage;
