import React from 'react' ;
import { Link } from 'react-router-dom';
import "./footer.css"
const Footer = () => {
  return (
        <footer>
<div className="Footer_Social center-div">
            <Link to="https://www.facebook.com/pccoerpune/" className="icon-link" > <i className="fa-brands fa-facebook"></i></Link>
            <Link to="https://www.linkedin.com/company/pccoer-pcet/" className="icon-link" > <i className="fa-brands fa-linkedin"></i></Link>
            <Link to = "https://www.instagram.com/pccoerpcet/" className="icon-link" > <i className="fa-brands fa-instagram"></i></Link>
            <Link to="https://github.com/shreeramshanmugasundaram/gdsc-website" className="icon-link" > <i className="fa-brands fa-github"></i></Link>
            <Link to="https://www.youtube.com/channel/UChJFHByu-xP4ti5O-HSKvFA" className="icon-link" > <i className="fa-brands fa-youtube"></i></Link>
            <Link to="mailto:pccoer.ravet@gmail.com?subject=Write Your Message" className="icon-link" > <i className="fa-solid fa-envelope" ></i></Link>

          </div>
    </footer>
  )
}

export default Footer
