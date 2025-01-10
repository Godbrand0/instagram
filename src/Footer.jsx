import React from "react";
import Home from "../assets/Vector.png";
import Search from "../assets/Group (1).png";
import Video from "../assets/Video.png";
import Shop from "../assets/Vector (1).png";
import Like from "../assets/Vector (2).png";

import HomeLight from "../assets/Home_white.png";
import LikeWhite from "../assets/like_white.png";
import SearchWhite from "../assets/search_white.png";
import videoWhite from "../assets/video_white.png";
import shopWhite from "../assets/shop_white.png";

export default function Footer({ theme }) {
  return (
    <div className="footer">
      <div className="footer_section">
        <img src={theme === "light" ? Home : HomeLight} alt="" />
        <img src={theme === "light" ? Search : SearchWhite} alt="" />
        <img src={theme === "light" ? Video : videoWhite} alt="" />
        <img src={theme === "light" ? Shop : shopWhite} alt="" />
        <img src={theme === "light" ? Like : LikeWhite} alt="" />
      </div>
    </div>
  );
}