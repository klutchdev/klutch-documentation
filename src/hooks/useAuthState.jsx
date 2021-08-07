/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";

// const useAuthState= (auth) => {
//   const { error, loading, setError, setValue, value } = (() => auth.currentUser);

//   useEffect(() => {
//     const listener = onAuthStateChanged(auth, setValue, setError);

//     return () => {
//       listener();
//     };
//   }, [auth]);

//   const resArray = [value, loading, error];
//   return useMemo(() => resArray, resArray);
// };

// const useAuthState = (auth) => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     if (!auth) {
//       setLoading(false);
//       setError("Error loading firebase authentication ");
//       throw new Error("Error loading firebase authentication ");
//     }

//     const unsub = onAuthStateChanged(auth, (authUser) => {
//       if (authUser) {
//         setUser(authUser);
//         setError(false);
//         setLoading(false);
//       } else {
//         setUser(null);
//         setError(false);
//         setLoading(false);
//       }
//     });

//     return () => unsub;
//   }, []);

//   return { user, loading, error };
// };

// export default useAuthState;
