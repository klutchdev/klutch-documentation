import React, { useRef, useState } from "react";
import avatarImg from "../../img/avatar.png";
import { motion } from "framer-motion";
import extractFileExtension from "../../utilities/extractFileExtension";
import { auth, storage } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

const AvatarImage = () => {
  const [user] = useAuthState(auth);
  const hiddenInput = useRef(null);
  const [ext, setExt] = useState("");
  const [filename, setFilename] = useState("");
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const ref = storage.ref(`avatars/${filename}.${ext}`);

  const handleClick = (e) => hiddenInput.current.click();

  const handleFileSelection = (e) => {
    const picked = Array.from(e.target.files)[0];

    if (picked) {
      startUpload(picked);
    } else {
      return Error("No file selected");
    }
  };

  const startUpload = (file) => {
    const extension = extractFileExtension(file.name);
    if (extension) {
      setFilename(file.name);
      setExt(extension);
    }

    const task = ref.put(file);
    setLoading(true);

    task.on(
      "state_changed",
      (snap) => {
        let pct = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(pct);
      },
      (error) => {
        setLoading(false);
        alert(error);
      },
      () => {
        ref.getDownloadURL().then((URL) => {
          if (url) {
            setUrl(URL);
            setLoading(false);
            user.updateProfile({ photoURL: url });
          } else {
            return Error("Unable to get Url");
          }
        });
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <motion.div
        onClick={handleClick}
        style={{
          margin: "1rem auto",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {user && (
          <img
            style={{
              margin: "auto",
              minWidth: "150px",
              width: "auto",
              minHeight: "150px",
              maxHeight: "200px",
              borderRadius: "50%",
              boxShadow: "1px 1px 12px #030303aa",
              // border: "solid 2px #cd57ff",
            }}
            src={user.photoURL || avatarImg}
            alt=""
          />
        )}
        {!user && (
          <img
            style={{
              margin: "auto",
              minWidth: "150px",
              width: "auto",
              minHeight: "150px",
              maxHeight: "200px",
              borderRadius: "50%",
              boxShadow: "1px 1px 12px #030303aa",
              // border: "solid 2px #cd57ff",
            }}
            src={url || avatarImg}
            alt=""
          />
        )}
      </motion.div>

      <input
        type="file"
        hidden={true}
        ref={hiddenInput}
        accept={types.join(",")}
        style={{ display: "none" }}
        onChange={handleFileSelection}
      />
      {loading && progress !== null && <Loader progress={progress} />}
    </motion.div>
  );
};

const Loader = ({ progress }) => {
  return (
    <motion.div
      animate={{ opacity: 0.95 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.15 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background: "#000000f9",
      }}
    >
      <div
        style={{
          display: `flex`,
          margin: `auto`,
          alignItems: `center`,
          alignContent: `center`,
          height: `100%`,
        }}
      >
        <h3
          style={{
            margin: `auto`,
            fontSize: `2.75rem`,
            fontWeight: 400,
            color: `#40a530`,
          }}
        >
          Uploading {progress}%
        </h3>
      </div>
    </motion.div>
  );
};

export default AvatarImage;
