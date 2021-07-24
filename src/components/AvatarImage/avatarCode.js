export const avatarCode = `import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import extractFileExtension from "../../utilities/extractFileExtension";
import resizeAndCropImage from "../../utilities/resizeImage";
import { storage } from "../../firebase";
import useAuthState from "../../hooks/useAuthState";

const maxHeight = 200;
const maxWidth = 200;

const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

const AvatarImage = () => {
  const hiddenInput = useRef(null);
  const [ext, setExt] = useState("");
  const [filename, setFilename] = useState("");
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const currentUser = useAuthState();
  const { uid } = currentUser;

  const ref = storage.ref("avatars/" + uid + "/" + filename + "." + ext);

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

    Promise.resolve()
      .then(() => {
        const match = file.type.match(/image.*/);
        const max = maxHeight || maxWidth;
        if (match && max) resizeAndCropImage(file, maxWidth, maxHeight);
        return file;
      })
      .then((file) => {
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
              setUrl(URL);
              setLoading(false);
            });
          }
        );
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <motion.div
        onClick={handleClick}
        src={url}
        style={{
          width: "auto",
          height: "150px",
          maxHeight: "200px",
          borderRadius: "50%",
          backgroundPosition: "center",
          backgroundSize: 'cover',
          display: "block",
          backgroundImage: url
            ? 'url(' + url + ')'
            : "url('https://getavataaars.com/?accessoriesType=Round&avatarStyle=Circle&clotheColor=Blue01&clotheType=CollarSweater&eyeType=Squint&eyebrowType=UnibrowNatural&facialHairColor=BrownDark&facialHairType=MoustacheMagnum&graphicType=Cumbia&hairColor=PastelPink&hatColor=PastelOrange&mouthType=Eating&skinColor=Light&topType=LongHairCurvy')",
        }}
      />
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
          display: 'flex',
          margin: 'auto',
          alignItems: 'center',
          alignContent: 'center',
          height: '100%',
        }}
      >
        <h3
          style={{
            margin: 'auto',
            fontSize: '2.75rem',
            fontWeight: 400,
            color: '#40a530',
          }}
        >
          Uploading {progress}%
        </h3>
      </div>
    </motion.div>
  );
};

export default AvatarImage;

`;
