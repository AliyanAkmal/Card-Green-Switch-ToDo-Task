import React from "react";
import Card from "../card";

function CardList({ data, onOpen, handleTheCard, buyContainer }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "15px",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {data?.length > 0 &&
        data?.map((item, index) => {
          return <Card data={item} key={index} handleTheCard={handleTheCard} />;
        })}
    </div>
  );
}

export default CardList;
