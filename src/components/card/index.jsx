import React from "react";
import "./style.css";
import { MdVerified } from "react-icons/md";

const Card = ({ data, setbuyCard }) => {
  const handleBuySubmit = (data) => {
    setbuyCard((pre) => {
      return [...pre, data];
    });
  };
  const handleDelete = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="wholeCard">
        <div style={{ height: "200px", width: "100%" }}>
          <img className="image" src={data.image} alt="" />
        </div>

        <div className="mainContainer">
          <div className="title">
            <p style={{ fontSize: "16px", fontWeight: "600" }}>
              {data.titleOne}
            </p>
            {data.boolean ? (
              <p>
                <MdVerified style={{ color: "#2081E2", fontSize: "18px" }} />
              </p>
            ) : null}
          </div>
          <div className="textContainer">
            <div>
              <p style={{ color: "grey" }}>Floor</p>
              <p style={{ fontWeight: "600" }}>{data.price}</p>
            </div>
            <div>
              <p style={{ color: "grey" }}>Total volume</p>
              <p style={{ fontWeight: "600" }}>{data.volume}</p>
            </div>
          </div>
        </div>
        <div style={{ padding: "10px" }}>
          {!setbuyCard ? (
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "whiteSmoke",
                borderRadius: "6px",
                fontWeight: "bolder",
              }}
              onClick={() => handleDelete(data)}
            >
              delete
            </button>
          ) : (
            <button
              onClick={() => handleBuySubmit(data)}
              style={{
                padding: "8px 15px",
                backgroundColor: "whiteSmoke",
                borderRadius: "6px",
                fontWeight: "bolder",
              }}
            >
              Buy
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
