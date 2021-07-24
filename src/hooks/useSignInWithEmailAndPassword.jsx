import { useState } from "react";

const useSignInWithEmailAndPassword = (auth) => {
  const [error, setError] = useState();
  const [loggedInUser, setLoggedInUser] = useState();
  const [loading, setLoading] = useState(false);

  const signInWithEmailAndPassword = async (email, password) => {
    setLoading(true);
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      setLoggedInUser(user);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return [error, loading, loggedInUser, signInWithEmailAndPassword];
};

export default useSignInWithEmailAndPassword;
