/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import avatarImg from "../../img/avatar.png";
import { motion } from "framer-motion";
import useFirebaseStorage from "../../hooks/useFirebaseStorage";
import { AuthContext } from "../../contexts/AuthContext";
const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

const AvatarImage = () => {
  const { user } = useContext(AuthContext);
  const hiddenInput = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = (e) => hiddenInput.current.click();

  const handleChange = (e) => {
    const picked = Array.from(e.target.files)[0];

    if (picked) {
      setFile(picked);
    } else {
      setFile(null);
    }
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
            }}
            src={avatarImg}
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
        onChange={handleChange}
      />
      {file && <Loader file={file} setFile={setFile} />}
    </motion.div>
  );
};

const Loader = ({ file, setFile }) => {
  const { user } = useContext(AuthContext);
  const { progress, url } = useFirebaseStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      user.updateProfile({ photoURL: url });
    }
    return () => {
      setFile(null);
      user.updateProfile({ photoURL: url });
    };
  }, [url, setFile]);

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
