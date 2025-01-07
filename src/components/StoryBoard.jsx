import React, { useEffect } from "react";
import axios from "axios";
import "../App.css";
import "../components/storyboard.css";
import NavBar from "./NavBar";
import profileItems from "../DataSource/ProfileItems";
import ScrollArrow from "../assets/ScrollArrow.png";

export default function StoryBoard() {
  function ImageScroll() {
    return(
      <img className="scroll-arrow" src={ScrollArrow} alt="" />

    );
  }

  function Profile() {
    return profileItems.map((profileItem) => {
      return (
        <div className="profile-item">
          <div className="gradient-border">
            <div className="profile">
              <img className="profile-image" src={profileItem.image} alt=""/>
              <p className="profile-name">{profileItem.name}</p>
            </div>
          </div>
          
        </div>
      );
    });
    
  }
  
  return <div className="story_board">
    {Profile()}
    {ImageScroll()}
  </div>;
}

