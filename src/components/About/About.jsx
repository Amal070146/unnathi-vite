import React from 'react'
import './About.css'
import img from '../../assets/about-img.png'

const About = () => {
  return (
    <div className="about-home-wrapper" id="ABOUT US">
      <div className="about-home-img-wrap">
        <img src={img} alt="" />
      </div>
      <div className="about-home-content-wrap">
        <h1>
          <span className="color-font">About</span> Us
        </h1>
        <p>
          Unnathi (Kerala Empowerment Society), a government of Kerala
          initiative, registered under the The Travancore-Cochin Literary,
          Scientific and Charitable Societies Registration Act.<br></br> Our
          primary focus is the welfare of vulnerable Scheduled Caste (SC) &
          Scheduled Tribe (ST)communities. We are committed to empowerment,
          operating through the dedicated efforts of interns from esteemed
          universities and passionate volunteers.
        </p>
      </div>
    </div>
  );
}

export default About
