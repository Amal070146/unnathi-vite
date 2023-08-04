import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import VM from "../../components/VM/VM";
import Curious from "../../components/JoinUs/JoinUs";
import Testimonial from "../../components/Testimonial/Testimonial";
import Gallery from "../../components/Testimonial/Gallery";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";
import Swiper from "../../components/Testimonial/Slider";


import img1 from "../../assets/home/one.png";
import img2 from "../../assets/home/two.png";
import img3 from "../../assets/home/three.png";
import img4 from "../../assets/home/four.png";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="home-screen-wrapper">
        <div className="home-heading-wrapper">
          <h1>
            <span style={{ color: "red" }}>REALIZING</span>{" "}
            <span style={{ fontWeight: 400 }}>
              THE<br></br> DEVELOPMENT
            </span>{" "}
            <span style={{ color: "#FBBA16" }}>GOALS</span>
          </h1>
        </div>
        <div className="home-img-button-wrapper">
          <div className="home-button-outer">
            <a href="#ABOUT US">
              <p>
                EXPLORE<br></br>UNNATHI
              </p>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
              </button>
            </a>
          </div>
          <div className="home-slider-container">
            <div className="home-slider-wrapper">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <About />

      <VM />
      <Curious />

      <Gallery />
      {/* <Testimonial /> */}

      <Swiper />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
