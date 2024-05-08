import React from "react";
import Card from "../card";

function CardList({ data, setbuyCard }) {
  return (
    <>
      {data?.length > 0 &&
        data?.map((item, index) => {
          return <Card data={item} key={index} setbuyCard={setbuyCard} />;
        })}
    </>
  );
}

export default CardList;
