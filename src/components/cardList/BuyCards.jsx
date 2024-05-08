import React from "react";
import Card from "../card";

function BuyCards({ buyCard, setbfilterBuy, filterBuy }) {
  return (
    <>
      {buyCard?.length > 0 &&
        buyCard?.map((item, index) => {
          return (
            <Card
              data={item}
              key={index}
              filterBuy={filterBuy}
              setbfilterBuy={setbfilterBuy}
            />
          );
        })}
    </>
  );
}

export default BuyCards;
