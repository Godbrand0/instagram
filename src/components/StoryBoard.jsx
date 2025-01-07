import React, { useEffect } from "react";
import axios from "axios";
import "../App.css";
import "../components/storyboard.css";
import NavBar from "./NavBar";
import profileItems from "../DataSource/ProfileItems";
import ScrollArrow from "../assets/Exclude.png";

// export default function StoryBoard(props) {
//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: "GET",
//         url: "https://instagram-scraper-api2.p.rapidapi.com/v1/stories",
//         params: {
//           username_or_id_or_url: "mrbeast",
//         },
//         headers: {
//           "x-rapidapi-key":
//             "d69dcb98e0msh1f3c5c95ebbc67ep146c90jsn3e9bf6fdffd3",
//           "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         console.log(response.data);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

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

