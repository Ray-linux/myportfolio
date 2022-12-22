import React from "react";
import CTA from "./CTA";

import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="container header_container">
          <h4>Hello I'm</h4>
          <h1>Rahul Ray</h1>
          <h5 className="text-light">Fullstack developer</h5>
          <CTA />
          <HeaderSocial/>
          <div className="me">
            <img src={ME} alt="me" className="me2" />
          </div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>

        </div>
      </header>
    </>
  );
}
