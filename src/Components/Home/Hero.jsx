import React from 'react'
import "./hero.css"
import gdsc_logo from "../../Images/gdsc-logo.svg"
import gdsc_text from "../../Images/gdsc-text.svg"
import "./borderStrip.css"
const Hero = () => {
  return (
    <main>
    <div className="Main_Conatiner center-div">
      <div className="center-content">
        <img src={gdsc_logo} alt="GDSCLogo" /><img
          src={gdsc_text}
          alt="GDSCLogoText"
        />
      </div>

      <div>
        <h2>
          Talent wins games, but teamwork and intelligence win championships.
        </h2>
        <p className='desc'>
          GDSCxPCCOER offer workshops, hackathons, and mentorship opportunities, empowering students to gain practical coding skills and solve problems through technology. It's a hub for aspiring developers to grow their skills, connect with peers, and embark on a journey of innovation.
        </p>
        <button className="btn-1">Join Us</button>
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
  )
}

export default Hero
