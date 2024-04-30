import React from "react";

const Button = ({ content, handleClick }) => {
  return (
    <>
      <button
        onClick={handleClick}
        style={{
          padding: "8px 13px",
          backgroundColor: "#9290C3",
          border: "none",
          fontSize: "14px",
          fontWeight: "700",
          borderRadius: "5px",
          color: "white",
        }}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
