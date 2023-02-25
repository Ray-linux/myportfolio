import React from "react";
import CTA from "./CTA";

import ME from "../../assets/profile.jpg";
import HeaderSocial from "./HeaderSocial";
import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="container header_container">
          <h4>Hello I'm</h4>
          <h1 className="name">Rahul Ray</h1>
          <h5 className="text-light">Fullstack developer</h5>
          <CTA />
          <HeaderSocial />
          <div className="rahul-ray">
            <img src={ME} alt="Rahul Ray" className="rahulray" />
          </div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
}
