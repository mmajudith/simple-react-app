import React from 'react';
import { FaBatteryFull } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Header() {

  return (
    <header>
      <div className="app-ear-speak">
          <div className="ear-speak"></div>
          <div className="camera"></div>
      </div>

      <div className="headings">
          <p>4:02</p>
          <div className="networks">
              <FaSignal className="marginLeft"/>
              <FaWifi className="marginLeft"/>
              <FaBatteryFull className="marginLeft" id="marRight"/>
          </div>
      </div>

      <div className="menu">
          <div className="logo-wrapper">
              <Link className="activeStyle" to="/simple-react-app/logo"><p>logo</p></Link>
          </div>
          <div className="userNoti-wrapper">
              <Link to="/simple-react-app/profile"><FaUserCircle className="user"/></Link>
              <Link to="/simple-react-app/notification"><FaBell className="bell"/></Link>
          </div>
      </div>
    </header>
  )
}

export default Header
