import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import VM from "../../components/VM/VM";
import Curious from "../../components/Curious/Curious";
import Testimonial from "../../components/Testimonial/Testimonial";
import Gallery from "../../components/Testimonial/Gallery";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";
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
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
