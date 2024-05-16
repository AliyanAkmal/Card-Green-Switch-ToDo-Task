import React from "react";
import camera from "../../assets/cam.webp";
import { MdSearch } from "react-icons/md";
import microPhone from "../../assets/mic.webp";

const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #e9ecef",
        padding: "6px 10px",
        borderRadius: "25px",
        width: "45vw",
      }}
    >
      <MdSearch style={{ fontSize: "20px", color: "#adb5bd" }} />
      <input
        type="text"
        style={{ border: "none", width: "75%", outline: "none" }}
      />
      <div style={{ display: "flex" }}>
        <img src={microPhone} alt="" width="32px" />
        <img src={camera} alt="" width="35px" />
      </div>
    </div>
  );
};

export default SearchBar;
