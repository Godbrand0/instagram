import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "../components/storyboard.css";
import NavBar from "./NavBar";
import ScrollArrow from "../assets/ScrollArrow.png";

export default function StoryBoard() {
  const [profileItems, setProfileItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFollowers = async (username) => {
    const options = {
      method: "GET",
      url: "https://instagram-scraper-api2.p.rapidapi.com/v1/followers",
      params: { username_or_id_or_url: username, url_embed_safe: 'true' },
      headers: {
        "x-rapidapi-key": "4cbe213f84msh26c5c6ddc59e76ap10de30jsn686e4a4ffeb2",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      
      
      const followers = response.data?.data?.items || []; // Adjust based on API response structure
      console.log(followers);
      return followers.map((follower) => ({id : follower.id,
        image : follower.img,
        username : follower.username
      })); // Extract IDs
    } catch (err) {
      setError(err.message || "Failed to fetch followers");
      return [];
    }
  };

  const fetchStoriesByIds = async (users) => {
    const promises = users.map(async (user) => {
      const options = {
        method: "GET",
        url: `https://instagram-scraper-api2.p.rapidapi.com/v1/followers`,
        params: { username_or_id_or_url: user.id},
        headers: {
          "x-rapidapi-key": "4cbe213f84msh26c5c6ddc59e76ap10de30jsn686e4a4ffeb2",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response);
        
        return {...user, stories:response.data?.data.items ? response.data?.data.items : []}; // Adjust based on API response structure
      } catch (err) {
        console.error(`Failed to fetch stories for ID: ${user}`, err);
        return [];
      }
    });

    // Wait for all requests to resolve and flatten the results
    const stories = await Promise.all(promises);
    return stories.flat();
  };

  const fetchProfileAndStories = async (username) => {
    setLoading(true);
    setError(null);
    setProfileItems([]);

    try {
      const followerIds = await fetchFollowers(username);
    
      
      if (followerIds.length === 0) {
        throw new Error("No followers found");
      }
  	  
      const stories = await fetchStoriesByIds(followerIds);
      setProfileItems(stories);
    } catch (err) {
      setError(err.message || "Failed to fetch profile and stories");
    } finally {
      setLoading(false);
    }
  };

  // Fetch stories for "mrbeast" followers on component mount
  useEffect(() => {
    fetchProfileAndStories("mrbeast");
  }, []);

  function ImageScroll() {
    return <img className="scroll-arrow" src={ScrollArrow} alt="Scroll arrow" />;
  }

  function Profile() {
    if (loading) return <p>Loading profiles...</p>;
    if (error) return <p>Error: {error}</p>;
    if (profileItems.length === 0) return <p>No profiles available for this user.</p>;

    return profileItems.map((profileItem, index) => (
      <div className="profile-item" key={index}>
        <div className="gradient-border">
          <div className="profile">
            <img
              className="profile-image"
              src={profileItem.image || "default-image.png"} // Fallback image
              alt={profileItem.username || "Profile"}
            />
            <p className="profile-name">{profileItem.username || "Unknown"}</p>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      {/* <NavBar /> */}
      <div className="story_board">
        <Profile />
        <ImageScroll />
      </div>
    </div>
  );
}
