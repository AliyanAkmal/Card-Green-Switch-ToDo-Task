import React from "react";
import Button from "../button/index";
const CardToDo = ({
  handleInputChange,
  inputVal,
  handleAddTo,
  handleClose,
}) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid black",
        width: "300px",
        margin: "20px",
        borderRadius: "5px",
        background: "#535C91",
      }}
    >
      <button style={{ padding: "5px 10px" }} onClick={handleClose}>
        X
      </button>
      <h1>card</h1>
      <input
        onChange={handleInputChange}
        type="text"
        defaultValue={inputVal}
        color="black"
        style={{ padding: "8px 14px", borderRadius: "5px", outline: "none" }}
      />
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <Button content="add" handleClick={handleAddTo} />
      </div>
    </div>
  );
};

export default CardToDo;
