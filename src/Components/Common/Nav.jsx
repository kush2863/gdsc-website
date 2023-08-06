import React from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
    <div className="Nav_Container center-div">
      <div>
        <NavLink to="/">
          <img src="/images/logo.svg" alt="gdsc_logo" />
        </NavLink>
      </div>
      <div className="Nav_Links" id="TopNav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/team">Team</NavLink>
      </div>
      <NavLink
        className="icon"
        id="Hambuger"
        onClick="myFunction()"
      >
        <i className="fa fa-bars"></i>
      </NavLink>
    </div>
  </nav>
  )
}

export default Nav
