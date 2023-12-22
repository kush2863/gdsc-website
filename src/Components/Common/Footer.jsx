import React from 'react' ;
import { Link } from 'react-router-dom';
import "./footer.css"

const Footer = () => {
  return (
        <footer>
          <div className="Footer_Social center-div">
            <Link to="https://www.facebook.com/gdscpccoer " className="icon-link"  target='blank'> <i className="fa-brands fa-facebook" ></i></Link>
            <Link to="https://www.linkedin.com/in/google-developer-student-clubs-pccoer-180841219/"  target='blank'className="icon-link" > <i className="fa-brands fa-linkedin"></i></Link>
            <Link to = "https://www.instagram.com/gdscpccoer/ " className="icon-link"  target='blank'> <i className="fa-brands fa-instagram"></i></Link>
            <Link to="https://github.com/shreeramshanmugasundaram/gdsc-website" className="icon-link"  target='blank'> <i className="fa-brands fa-github"></i></Link>
            <Link to=" https://www.youtube.com/@googledscpccoer6296 " className="icon-link" target='blank' > <i className="fa-brands fa-youtube"></i></Link>
         
          </div>
    </footer>
  )
}

export default Footer
