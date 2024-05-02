import React, { useState } from "react";
import Button from "../button";

const CardToRender = ({
  // firstList,
  contentInCard,

  handleNextClick,
  currentList,
  setCurrentList,
  CurrentListdata,
  currentIdex,
  handleBackClick,
  handleDeleteButton,
  titleOne,
  titleThree,
}) => {
  // const isFirstCard = index === 0;
  // const isLastCard = index === currentList.length - 1;
  const [edit, setEdit] = useState(false);
  const [newvalu, setNewval] = useState(contentInCard);
  const handleEdit = () => {
    setEdit(true);
  };
  const handleOnchage = (e) => {
    setNewval(() => [e.target.value]);
  };
  const handleSave = () => {
    setEdit(false);
    setCurrentList(newvalu);
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
  console.log(currentIdex);
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
      <h1>card </h1>
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
        value={newvalu}
        onChange={handleOnchage}
      />
      {/* <h2>{contentInCard}</h2> */}
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
          <Button content="edit" handleClick={handleEdit} />
        )}

        <Button content="Delete" handleClick={handleDelete} />
        {titleThree ? null : <Button content="next" handleClick={handleNext} />}
      </div>
    </div>
  );
};

export default CardToRender;
