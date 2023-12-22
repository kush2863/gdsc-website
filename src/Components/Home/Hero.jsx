import React from "react";
import "./hero.css";
import gdsc_logo from "../../Images/gdsc-logo.svg";
import gdsc_text from "../../Images/gdsc-text.svg";
import "./borderStrip.css";
const Hero = () => {
  return (
    <main>
      <div className="Main_Conatiner center-div">
        <div className="center-content">
          <img src={gdsc_logo} alt="GDSCLogo" />
          <img src={gdsc_text} alt="GDSCLogoText" />
        </div>

        <div>
          <h2>Bridging Technology and Teamwork for a Brighter Tomorrow</h2>
          <p className="desc">
            GDSCxPCCOER - Empowering Tomorrow’s Innovators. Explore Workshops,
            Hackathons, and Mentorship Opportunities. Where Code Meets
            Community, and Skills Blossom into Solutions
          </p>
          <button className="btn-1"><a href="https://gdsc.community.dev/pimpri-chinchwad-college-of-engineering-and-research-pune/#">Join Us</a></button>
        </div>
      </div>
      <div className="dot-deco"></div>
      <div className="dot-deco"></div>
      <div className="dot-deco"></div>
      <div className="dot-deco"></div>

      <section className="bg-1 center-div">
        <div className="center-div Border_Strip">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
