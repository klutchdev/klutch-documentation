import ComponentTemplate from "../../components/ComponentTemplate";
import CodeBlock from "../../components/CodeBlock";
import { FaReact } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMedia";
import SearchInput from "../../components/SearchInput";
import { searchInputCode } from "../../components/SearchInput/searchInputCode";
import { motion } from "framer-motion";
import { pageVariant, pathVariants } from "../../animations";

const SearchInputPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ComponentTemplate
        title="Search Input"
        component={
          <SearchInput
            width={isDesktop ? "calc(50%)" : "calc(100%)"}
            leftIcon={<SearchSVG />}
            type="text"
            placeholder="Search fruits"
          />
        }
        codeBlock={
          <CodeBlock
            lang="jsx"
            content={searchInputCode}
            icon={<FaReact size="1.75rem" className="react" />}
            file="SearchInput.jsx"
          />
        }
      />
    </motion.div>
  );
};

const SearchSVG = () => (
  <motion.svg
    initial="hidden"
    animate="visible"
    style={{ margin: `auto` }}
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <motion.path
      variants={pathVariants}
      path
      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
    />
  </motion.svg>
);

export default SearchInputPage;
