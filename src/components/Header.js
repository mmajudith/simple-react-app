import React from 'react';
import { FaBatteryFull } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

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
              <p>logo</p>
          </div>
          <div className="userNoti-wrapper">
              <FaUserCircle className="user"/>
              <FaBell className="bell"/>
          </div>
      </div>
    </header>
  )
}

export default Header
