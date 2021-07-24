import { useState } from "react";

const useMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => setExpanded(!expanded);

  return [expanded, setExpanded, handleExpand];
};

export default useMenu;
