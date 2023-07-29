import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import VM from "../../components/VM/VM";
import Curious from "../../components/Curious/Curious";
import Testimonial from "../../components/Testimonial/Testimonial";
import Gallery from "../../components/Testimonial/Gallery";
const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="home-screen-wrapper">
        <h2>Realizing the</h2> <h1>Development Goals</h1>
      </div>
      <About />
      <VM />
      <Curious />
      <Gallery />
      <Testimonial />
    </div>
  );
};

export default Home;
