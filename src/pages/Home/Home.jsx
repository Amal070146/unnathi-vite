import React from "react";
import "./Home.css";
import About from "../../components/About/About";
import VM from "../../components/VM/VM";
import Curious from "../../components/Curious/Curious";
import Testimonial from "../../components/Testimonial/Testimonial";
import Gallery from "../../components/Testimonial/Gallery";
const Home = () => {
  return (
    <div>
      <About />
      <VM />
      <Curious />
      <Gallery />
      <Testimonial />

    </div>
  );
};

export default Home;
