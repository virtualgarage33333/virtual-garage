import Slider from "../components/Slider.jsx";
import React from "react";
import Announcement from "../components/Announcement.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
