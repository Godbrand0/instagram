import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import ProfileImage from "../Reuse/ProfileImage";
import Dots from "../assets/Frame 36.png";
import Post from "../assets/Rectangle 55.png";
import Like from "../assets/Vector.png";
import Comment from "../assets/Vector (1).png";
import Share from "../assets/Vector (Stroke).png";
import Bookmark from "../assets/Group 33.png";
import Emoji from "../assets/Group 34.png";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1/post_info",
        params: {
          code_or_id_or_url: "CxYQJO8xuC6",
          url_embed_safe: "true",
          include_insights: "true",
        },
        headers: {
          "x-rapidapi-key":
            "d69dcb98e0msh1f3c5c95ebbc67ep146c90jsn3e9bf6fdffd3",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setPosts(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data:" + error);
        setLoading(false);
        setError("Error fetching data:" + error.message);
      }
    };

    fetchData();
  }, []);
  // {
  //   loading ? <div>loading</div> : <div> {error} </div>;
  // }
  return (
    <div className="feed_board">
      <div className="feed_header">
        <div className="feed_header_left">
          <ProfileImage />
          <p>mediamodifier</p>
        </div>

        <img src={Dots} alt="" />
      </div>
      <div className="feed_image">
        <img src={Post} alt="" />
      </div>
      <div className="feed_icons">
        <div className="feed_icons_left">
          <img src={Like} alt="" />
          <img src={Comment} alt="" />
          <img src={Share} alt="" />
        </div>
        <img src={Bookmark} alt="" />
      </div>
      <div className="feed_infos">
        <p className="likes">
          Liked by <span>you</span> and <span>900,000 others</span>
        </p>
        <div className="tags">#media #mockup #design #blackfriday #sale</div>
        <p className="comments">View all 103 comments</p>
        <p className="time">hour ago</p>
      </div>
      <div className="comment_section">
        <div className="input">
          <img src={Emoji} alt="" />
          <input type="text" placeholder="Add a comment ..." />
        </div>
        <p>Publish</p>
      </div>
    </div>
  );
}
