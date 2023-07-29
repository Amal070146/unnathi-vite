import React from "react";
import "./Home.css";
import About from "../../components/About/About";
import VM from "../../components/VM/VM";
import Curious from "../../components/Curious/Curious";

const Home = () => {
  return (
    <div>
      <About />
      <VM />
      <Curious />
    </div>
  );
};

export default Home;
