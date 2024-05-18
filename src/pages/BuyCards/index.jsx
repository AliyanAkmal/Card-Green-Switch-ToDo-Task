import React, { useState } from "react";

import cardsData from "../../components/card/data";

import CardList from "../../components/cardList";
import BuyCards from "../../components/cardList/BuyCards";

import { Box, useToast } from "@chakra-ui/react";
import emptyCart from "../../assets/empty-cart.png";
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

const HomePage = () => {
  const toast = useToast();
  const [buyCard, setbuyCard] = useState([]);
  const [filterBuy, setbfilterBuy] = useState(buyCard);
  /////////test net/////////////////////////////

  //////////////////////////////////////////
  const handleTheCard = (data) => {
    setbuyCard((pre) => {
      return [...pre, data];
    });
  };
  //////////////////
  const handleCLose = (data, currentIndex, buyCard, onClose) => {
    const filterData = buyCard.filter((data, index) => {
      return index !== currentIndex;
    });
    setbuyCard(filterData);
    onClose();

    if (filterData.length === 0) {
      toast({
        title: "Cart is empty.",
        // description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        // isClosable: true,
        colorScheme: "red",
      });
    }
    if (filterData.length > 0) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Item removed
          </Box>
        ),
      });
    }
  };
  ///////////////////////////
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  ///////////////////////////////
  const handleOnOpen = () => {
    if (buyCard.length !== 0) {
      onOpen();
    }
  };
  //////////////////////////////////////////
  const handleEmptyAllItems = () => {
    if (buyCard.length !== 0) {
      setbuyCard([]);
      onClose();
      toast({
        title: "Cart is empty.",
        // description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        // isClosable: true,
        colorScheme: "red",
      });
    }
  };

  return (
    <>
      {/* <WrapperLayout> */}
      <CardList
        data={cardsData}
        setbuyCard={setbuyCard}
        handleTheCard={handleTheCard}
      />
      <div>
        <div>
          <h1
            style={{
              textAlign: "center",

              fontSize: "36px",
              fontWeight: "bold",
            }}
          >
            Cart
          </h1>
          <div style={style.btnDiv}>
            {" "}
            <button onClick={handleOnOpen} style={style.btn}>
              Empty All
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            padding: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          {buyCard.length === 0 ? (
            <img src={emptyCart} alt="empty-Cart" style={style.img} />
          ) : (
            <BuyCards
              buyCard={buyCard}
              filterBuy={filterBuy}
              setbfilterBuy={setbfilterBuy}
              setbuyCard={setbuyCard}
              handleCLose={handleCLose}
              // onOpen={onOpen}
            />
          )}
        </div>
      </div>
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
              <Button colorScheme="red" onClick={handleEmptyAllItems} ml={3}>
                Delete All
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default HomePage;

const style = {
  cart: {
    fontSize: "2rem",
  },
  img: {
    width: "40vw",
  },
  btn: {
    padding: "6px 12px",
    backgroundColor: "#D3D6DD",
    borderRadius: "5px",
  },
  btnDiv: {
    textAlign: "end",
  },
};
