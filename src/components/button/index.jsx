import React from "react";

const Button = ({ content, handleClick }) => {
  return (
    <>
      <button
        onClick={handleClick}
        style={{
          padding: "8px 13px",
          backgroundColor: "mediumSeaGreen",
          border: "none",
          fontSize: "14px",
          fontWeight: "700",
          borderRadius: "5px",
        }}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
