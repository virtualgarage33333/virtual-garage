import Slider from "../components/Slider.jsx";
import React from "react";
import Announcement from "../components/Announcement.jsx";
import Navbar from "../components/Navbar.jsx";
import Categories from "../components/Categories.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
