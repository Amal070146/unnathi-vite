import React, { useEffect } from "react";
import "./Testimonial.css";
import img1 from "../../assets/gallery/img1.png";
import img2 from "../../assets/gallery/img2.png";
import img3 from "../../assets/gallery/img3.png";

const Gallery = () => {


  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <img className="slideshow-image" src={img1} alt="Image " />
        <img className="slideshow-image" src={img2} alt="Image 2" />
        <img className="slideshow-image" src={img3} alt="Image 3" />
        <img className="slideshow-image" src={img1} alt="Image 1" />
        <img className="slideshow-image" src={img2} alt="Image 2" />
        <img className="slideshow-image" src={img3} alt="Image 3" />
      </div>
    </div>
  );
};

export default Gallery;
