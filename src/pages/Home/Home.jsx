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
        <div>
          <div className="home-button-outer">
            <a href="#ABOUT US">
              <p>EXPLORE<br></br>UNNATHI</p>
              <button style={{ background: "transparent", border: "none" }}>
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
               
              </button>
            </a>
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
