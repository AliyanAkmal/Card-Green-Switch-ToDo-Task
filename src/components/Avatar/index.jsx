import React from "react";

function Avatar({ src, alt }) {
  return (
    <img src={src} alt={alt} style={{ borderRadius: "25px", width: "30px" }} />
  );
}

export default Avatar;
