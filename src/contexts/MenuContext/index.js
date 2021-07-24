import { createContext } from "react";
import useMenu from "../../hooks/useMenu";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [expanded, setExpanded, handleExpand] = useMenu();

  return (
    <MenuContext.Provider value={{ expanded, setExpanded, handleExpand }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
