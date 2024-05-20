import React from "react";
import SearchBar from "../../components/searchBar";
import Button from "../../components/button";
import logoImg from "../../assets/google logo.png";
import MenuComp from "../../components/menu/MenuComp";

const Main = () => {
  return (
    <>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "3rem",
          alignItems: "center",
          gap: "1.8rem",
          height: "85.5vh",
        }}
      >
        <img src={logoImg} alt="" width="270px" />
        <SearchBar />
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button content="Google Search" />
          <Button content="I'm Feeling Lucky" />
        </div>
        <div style={{ fontSize: "12px" }}>
          <p>
            Google Offered in:
            <span style={{ color: "blue", paddingLeft: "7px" }}>
              اردو پښتو سنڌي
            </span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
