/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { storage, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const useFirebaseStorage = (file) => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setURL] = useState("");

  const uploadFile = async () => {
    const ext = file.type.split("/")[1];
    const ref = storage.ref().child(`Avatars/${user.uid}/${Date.now()}.${ext}`);
    const uploadTask = ref.put(file);

    uploadTask.on(
      "state_changed",
      (snap) => {
        let pct = (snap.bytesTransferred / snap.totalBytes).toFixed(2) * 100;
        setProgress(pct);
      },
      function (error) {
        setError(error);
        alert(error);
      },
      () => {
        ref.getDownloadURL().then((downloadURL) => setURL(downloadURL));
      }
    );
  };

  useEffect(() => {
    uploadFile(file);
    return () => uploadFile();
  }, [file]);

  return { progress, error, url };
};

export default useFirebaseStorage;
