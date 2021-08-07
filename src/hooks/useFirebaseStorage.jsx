/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { auth, storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useAuthState } from "klutch-fire-hooks/auth";

const useFirebaseStorage = (file) => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setURL] = useState("");

  const uploadFile = async () => {
    const ext = file.type.split("/")[1];
    const storageRef = ref(storage, `Avatars/${user.uid}/${Date.now()}.${ext}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snap) => {
        let pct = Math.floor((snap.bytesTransferred / snap.totalBytes) * 100);
        setProgress(pct);
      },
      function (error) {
        setError(error);
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => setURL(downloadURL));
      }
    );
  };

  useEffect(() => {
    uploadFile(file);
    return () => {
      uploadFile();
    };
  }, [file]);

  return { progress, error, url };
};

export default useFirebaseStorage;
