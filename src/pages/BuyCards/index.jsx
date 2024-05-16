import React, { useState } from "react";

import cardsData from "../../components/card/data";

import CardList from "../../components/cardList";
import BuyCards from "../../components/cardList/BuyCards";
import { useDisclosure } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";
import { Box, useToast } from "@chakra-ui/react";
import emptyCart from "../../assets/empty-cart.png";

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

  return (
    <>
      {/* <WrapperLayout> */}
      <CardList
        data={cardsData}
        setbuyCard={setbuyCard}
        handleTheCard={handleTheCard}
      />
      <div style={{ padding: "10px" }}>
        <div>
          <h1
            style={{
              textAlign: "center",
              padding: "20px, 0px",
              fontSize: "36px",
              fontWeight: "bold",
            }}
          >
            Cart
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",

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
};
