import React from "react";

const Button = ({ content, handleClick }) => {
  return (
    <>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 16px",
          backgroundColor: "#F2F6FA",
          border: "none",
          fontSize: "14px",
          fontWeight: "700",
          borderRadius: "5px",
          color: "black",
        }}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
