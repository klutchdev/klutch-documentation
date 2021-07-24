/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { storage, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import extractFileExtension from "../utilities/extractFileExtension";

const useFirebaseStorage = (file) => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setURL] = useState("");

  const uploadFile = async () => {
    const ext = file.type.split("/")[1];
    // const ext = extractFileExtension(file.name);
    const ref = storage.ref(`Avatars/${user.uid}/${Date.now()}.${ext}`);
    const task = ref.put(file);

    task.on(
      "state_changed",
      (snap) => {
        let pct = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(pct);
      },
      (error) => setError(error),
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