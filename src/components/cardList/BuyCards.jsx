import React, { useState } from "react";
import Card from "../card";

function BuyCards({ buyCard, handleCLose, setNum, num, decrement, increment }) {
  const [buyContainer, setBuyContainer] = useState(false);
  return (
    <>
      {buyCard?.length > 0 &&
        buyCard?.map((item, index) => {
          return (
            <Card
              data={item}
              key={index}
              currentIndex={index}
              buyContainer={buyContainer}
              handleCLose={handleCLose}
              buyCard={buyCard}
              setNum={setNum}
              num={num}
              decrement={decrement}
              increment={increment}
            />
          );
        })}
    </>
  );
}

export default BuyCards;
