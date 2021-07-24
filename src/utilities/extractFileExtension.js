const extractFileExtension = (filename) => {
  let ext = /(?:\.([^.]+))?$/.exec(filename);

  if (ext != null && ext[0] != null) {
    return ext[0];
  } else {
    return "";
  }
};

export default extractFileExtension;
