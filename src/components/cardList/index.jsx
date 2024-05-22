import React from "react";
import Card from "../card";

function CardList({ data, handleTheCard }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "3rem 10px",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {data?.length > 0 &&
        data?.map((item, index) => {
          return (
            <Card
              data={item}
              key={index}
              id={item.id}
              // currentIndex={index}
              handleTheCard={handleTheCard}
            />
          );
        })}
    </div>
  );
}

export default CardList;
