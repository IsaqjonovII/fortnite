import React from 'react';
import "./Footer.css"
import { useLocation } from 'react-router-dom'
import { FaChevronUp, FaFacebookSquare, FaTwitter, FaTwitch, FaYoutube, FaSnapchatGhost } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const Footer = () => {
  const { pathname } = useLocation()

  if (pathname === "/login") {
    return <></>
  }
  return (
    <div className='footer'>
      <div className="footermain">
        <div className="social_network">
          <ul className="network_collection">
            <li className="network_item"><FaFacebookSquare /></li>
            <li className="network_item"><FaTwitter /></li>
            <li className="network_item"><FaTwitch /></li>
            <li className="network_item"><FaYoutube /></li>
            <li className="network_item"><GrInstagram /></li>
            <li className="network_item">< FaSnapchatGhost /></li>
          </ul>
          <button className='backtop_btn'><FaChevronUp />Back to top</button>
        </div>
        <div className="footerpages">
          <ul className='pages_collection'>
            <li className="pages_item">Home</li>
            <li className="pages_item">News</li>
            <li className="pages_item">V-Bucks Card</li>
            <li className="pages_item">Battle Pass</li>
            <li className="pages_item">FAQ</li>
            <li className="pages_item">Help</li>
            <li className="pages_item">Watch</li>
            <li className="pages_item">EULA</li>
            <li className="pages_item">Safety and Security</li>
            <li className="pages_item">Get Fortnite</li>
            <li className="pages_item">Competitive</li>
            <li className="pages_item">Comunity Rules</li>
          </ul>
        </div>
        <p className='footer_description'>© 2022, Epic Games, Inc. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine 4 and UE4 are trademarks or registered <br /> trademarks of Epic Games, Inc. in the United States of America and elsewhere. All rights reserved.</p>
        <div className='text'><p>Terms of Service</p><p>Privacy Policy</p></div>
      </div>
    </div>
  )
}

export default Footer