import React from "react";
import "../Header/style.css";

const Footer = () => {
  return (
    <>
      <div className="tagsContainer">
        <div
          style={{
            backgroundColor: "#F2F2F2",
            padding: "0px 15px",
            borderBottom: "1px solid #adb5bd",
          }}
        >
          <p style={{ paddingTop: "8px" }}>Pakistan</p>
        </div>
        <div
          style={{
            display: "flex",
            listStyle: "none",
            backgroundColor: "#F2F2F2",
            // height: "40px",
            padding: "0.5rem 15px",
            justifyContent: "space-between",
            fontSize: "14px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "1.2rem" }}>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Advertising</li>
            </a>
            <a href="#">
              <li>Business</li>
            </a>
            <a href="#">
              <li>How search works</li>
            </a>
          </div>
          <div style={{ display: "flex", gap: "1.2rem" }}>
            <a href="#">
              <li>Privacy</li>
            </a>
            <a href="#">
              <li>Terms</li>
            </a>
            <a href="#">
              <li>Setting</li>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
