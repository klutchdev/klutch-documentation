import { createContext } from "react";
import { auth } from "../../firebase";
// import useAuthState from "../../hooks/useAuthState";
import { useAuthState } from "klutch-fire-hooks/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  return <AuthContext.Provider value={{ user, loading, error }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
