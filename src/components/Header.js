import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logoImage from "./assets/logo.svg";
import { faX,faBars } from '@fortawesome/free-solid-svg-icons';

import  "./styles/header.css";

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);


  return (
    <header>
      <div className='container'>
        <nav>
            <Link to="/">
              <img src={logoImage} alt="Logo" className='navbar-logo'/>
            </Link>

              <ul className={`nav-links ${isMobile ? "nav-links-mobile" : "" }`} onClick={() => setIsMobile(!isMobile)}>
                  <li><Link to="/" className="home">HOME</Link></li>
                  <li><Link to="/" className='about'>ABOUT</Link></li>
                  <li><Link to="/" className='menu'>MENU</Link></li>
                  <li><Link to="/reservation" className='reservation'>RESERVATION</Link></li>
                  <li><Link to="/" className="order-online">ORDER ONLINE</Link></li>
                  <li><Link to="/" className='login'>LOGIN</Link></li>
              </ul>
            <div
              className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}
            >
              {
                isMobile ? <FontAwesomeIcon icon={faX} size="2x"/> : <FontAwesomeIcon icon={faBars} size="2x"/>
              }
            </div>
        </nav>
      </div>
    </header>
  )
}

export default Header