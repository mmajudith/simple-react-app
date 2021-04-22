import React from 'react'
import { FaGift } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { IoFileTrayFull } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">

            <div className="home">
                <ImHome className="img"/>
                <p>Home</p>
            </div>

            <div>
                <FaListAlt className="img"/>
                <p>Activity</p>
            </div>

            <div>
                <IoFileTrayFull className="img"/>
                <p>Wallet</p> 
            </div>

            <div>
                <IoStorefrontOutline className="img"/>
                <p>Market</p>
            </div>

            <div>
                <FaGift className="img"/>
                <p>Earn</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
