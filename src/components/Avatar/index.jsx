import React from "react";

function Avatar({ src, alt, onClick }) {
  return (
    <img
      src={src}
      onClick={onClick}
      alt={alt}
      style={{ borderRadius: "25px", width: "40px" }}
    />
  );
}

export default Avatar;
