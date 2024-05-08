import React, { useState } from "react";
import Button from "../button";
import { imageURL } from "../../config/Constants";

const CardToRender = ({
  handleNextClick,
  currentList,
  setCurrentList,
  CurrentListdata,
  currentIdex,
  handleBackClick,
  handleDeleteButton,
  titleOne,
  titleThree,
  title,
  image,
  index,
}) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSave = () => {
    setEdit(false);
    setCurrentList((prev) => {
      const updatedList = [...prev];
      updatedList[currentIdex] = newTitle;
      return updatedList;
    });
  };

  const handleDelete = () => {
    handleDeleteButton(
      CurrentListdata,
      currentList,
      setCurrentList,
      currentIdex
    );
  };

  const handleNext = () => {
    handleNextClick(CurrentListdata, currentList, setCurrentList, currentIdex);
  };

  const handleBack = () => {
    handleBackClick(CurrentListdata, currentList, setCurrentList, currentIdex);
  };

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid black",
        margin: "10px",
        borderRadius: "10px",
        background: "transparent",
      }}
    >
      <input
        type="text"
        style={{
          border: "none",
          padding: "5px 10px",
          background: "#1B1A55",
          fontSize: "20px",
          fontWeight: "900",
          textAlign: "center",
          color: "white",
          outline: `${edit ? "solid 2px" : "none"}`,
          marginBottom: "5px",
          borderRadius: "5px",
        }}
        readOnly={!edit}
        value={newTitle}
        onChange={handleOnChange}
      />
      {newImage && <img src={imageURL + newImage} alt="api-pic" width="100%" />}
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        {titleOne ? null : <Button content="Back" handleClick={handleBack} />}
        {edit ? (
          <Button content="Save" handleClick={handleSave} />
        ) : (
          <Button content="Edit" handleClick={handleEdit} />
        )}
        <Button content="Delete" handleClick={handleDelete} />
        {titleThree ? null : <Button content="Next" handleClick={handleNext} />}
      </div>
    </div>
  );
};

export default CardToRender;
