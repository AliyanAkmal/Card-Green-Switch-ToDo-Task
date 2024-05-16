import React from "react";
import "./style.css";
import image from "../../assets/cardImgs/cardFive.avif";

import { TbGridDots } from "react-icons/tb";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          padding: "20px 25px",
        }}
      >
        <div style={{ display: "flex", gap: "2rem" }}>
          <p>
            <Link style={links.allLinks} to="/">
              Buy Cards
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="main">
              Main
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="list">
              List
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="ui">
              Ui
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="accordian">
              accordian
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="tabs">
              Table Tabs
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="visual">
              Visual BTN
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="alert">
              Alert
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="line">
              Progress Line
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="drawer">
              Drawer
            </Link>
          </p>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {" "}
          <p style={{ fontSize: "14px" }}>Gmail</p>
          <p style={{ fontSize: "14px" }}>Images</p>
          <TbGridDots style={{ fontSize: "22px", color: "grey" }} />
          <Avatar src={image} alt="Profile_Picture" />
        </div>
      </div>
    </>
  );
}

export default Header;

////////////
const links = {
  allLinks: {
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
  },
};
