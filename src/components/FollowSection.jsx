import React, { useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function FollowSection() {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1/followers",
        params: {
          username_or_id_or_url: "mrbeast",
        },
        headers: {
          "x-rapidapi-key":
            "d69dcb98e0msh1f3c5c95ebbc67ep146c90jsn3e9bf6fdffd3",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return <div className="follow_section"> the follow section</div>;
}
