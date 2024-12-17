import React from "react";
import Profile from "../assets/Profile-Pic-S.png";

export default function ProfileImage({ profileStyle }) {
  return (
    <div>
      <img src={Profile} className={profileStyle} alt="" />
    </div>
  );
}
