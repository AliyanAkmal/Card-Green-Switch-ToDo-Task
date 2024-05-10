import React from "react";
import Card from "../card";

function CardList({ data, setbuyCard }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "15px",
      }}
    >
      {data?.length > 0 &&
        data?.map((item, index) => {
          return <Card data={item} key={index} setbuyCard={setbuyCard} />;
        })}
    </div>
  );
}

export default CardList;
