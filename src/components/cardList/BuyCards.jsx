import React, { useState } from "react";
import Card from "../card";

function BuyCards({ buyCard, setbfilterBuy, filterBuy, handleCLose }) {
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
              filterBuy={filterBuy}
              setbfilterBuy={setbfilterBuy}
              buyContainer={buyContainer}
              handleCLose={handleCLose}
              buyCard={buyCard}
            />
          );
        })}
    </>
  );
}

export default BuyCards;
