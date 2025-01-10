import React from "react";
import Logo from "../assets/Logo.png";
import Menu from "../assets/Menu-Button-Item (3).png";
import Heart from "../assets/Vector (2).png";
import Message from "../assets/Menu-Button-Item (2).png";
import "../App.css";

import LogoWhite from "../assets/logos_instagram.png";
import Menu_white from "../assets/Added.png";
import Heart_white from "../assets/like_white.png";
import Message_white from "../assets/Vector (4).png";

export default function Nav({ theme }) {
  return (
    <div className="header">
      <img src={theme === "light" ? Logo : LogoWhite} alt="Logo" />
      <div className="header_right">
        <img src={theme === "light" ? Menu : Menu_white} alt="Menu" />
        <img src={theme === "light" ? Heart : Heart_white} alt="Heart" />
        <img src={theme === "light" ? Message : Message_white} alt="Message" />
      </div>
    </div>
  );
}