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

const HomePage = () => {
  const [buyCard, setbuyCard] = useState([]);
  const [filterBuy, setbfilterBuy] = useState(buyCard);
  /////////test net/////////////////////////////
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const cancelRef = React.useRef();
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
            paddingTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          <BuyCards
            buyCard={buyCard}
            filterBuy={filterBuy}
            setbfilterBuy={setbfilterBuy}
            setbuyCard={setbuyCard}
            handleCLose={handleCLose}
            // onOpen={onOpen}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
