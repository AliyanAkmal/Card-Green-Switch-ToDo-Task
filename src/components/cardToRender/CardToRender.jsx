import React, { useState } from "react";
// import Button from "../button";
import { imageURL } from "../../config/Constants";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  background,
} from "@chakra-ui/react";

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
  // image,
  // index,
}) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(CurrentListdata);
  // const [newImage, setNewImage] = useState(image);
  // console.log(title);
  const handleEdit = () => {
    setEdit(true);
  };

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSave = () => {
    setCurrentList((prev) => {
      return prev.map((item, index) =>
        index === currentIdex ? newTitle : item
      );
    });
  };

  const handleCLoseContainer = () => {
    handleDeleteButton(
      CurrentListdata,
      currentList,
      setCurrentList,
      currentIdex,
      onClose
    );
  };

  const handleNext = () => {
    handleNextClick(CurrentListdata, currentList, setCurrentList, currentIdex);
  };

  const handleBack = () => {
    handleBackClick(CurrentListdata, currentList, setCurrentList, currentIdex);
  };
  //////////////////////////////////////
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

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
      {/* {newImage && <img src={ti} alt="api-pic" width="100%" />} */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        {titleOne ? null : (
          <button style={style.btn} content="Back" onClick={handleBack}>
            Back
          </button>
        )}
        {edit ? (
          <button style={style.btn} onClick={handleSave}>
            Save
          </button>
        ) : (
          <button style={style.btn} onClick={handleEdit}>
            Edit
          </button>
        )}
        <button style={style.btn} onClick={onOpen}>
          Delete
        </button>
        {titleThree ? null : (
          <button style={style.btn} onClick={handleNext}>
            Next
          </button>
        )}
      </div>
      {/* ///////////////////////////// */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleCLoseContainer} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default CardToRender;

////////////////
const style = {
  btn: {
    padding: "6px 14px",
    background: "whitesmoke",
    color: "black",
    borderRadius: "6px",
    fontWeight: "500",
  },
};
