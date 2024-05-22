import React from "react";
import "./style.css";
import { MdVerified } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const Card = ({
  data,
  buyContainer,
  handleTheCard,
  handleCLose,
  currentIndex,
  buyCard,
  id,
}) => {
  const handleBuySubmit = () => {
    handleTheCard(data, id);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleCLoseContainer = () => {
    handleCLose(data, currentIndex, buyCard, onClose);
  };
  return (
    <>
      <div className="wholeCard">
        <div style={{ height: "200px", width: "100%" }}>
          <img className="image" src={data.image} alt="" />
        </div>

        <div className="mainContainer">
          <div className="title">
            <p style={{ fontSize: "16px", fontWeight: "600" }}>
              {data.titleOne}
            </p>
            {data.boolean ? (
              <p>
                <MdVerified style={{ color: "#2081E2", fontSize: "18px" }} />
              </p>
            ) : null}
          </div>
          <div className="textContainer">
            <div>
              <p style={{ color: "grey" }}>Floor</p>
              <p style={{ fontWeight: "600" }}>{data.price}</p>
            </div>
            <div>
              <p style={{ color: "grey" }}>Total volume</p>
              <p style={{ fontWeight: "600" }}>{data.volume}</p>
            </div>
          </div>
        </div>
        <div style={{ padding: "10px" }}>
          {buyContainer === false ? (
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "whiteSmoke",
                borderRadius: "6px",
                fontWeight: "bolder",
              }}
              onClick={onOpen}
            >
              Remove
            </button>
          ) : (
            <button
              onClick={handleBuySubmit}
              style={{
                padding: "8px 15px",
                backgroundColor: "whiteSmoke",
                borderRadius: "6px",
                fontWeight: "bolder",
              }}
            >
              Buy
            </button>
          )}
        </div>
      </div>
      {/* /////////////////////////////// */}
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
    </>
  );
};

export default Card;
