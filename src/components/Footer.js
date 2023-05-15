import React from 'react';
import footerLogo from  "./assets/footer-logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,
         faPhone,
         faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faPinterest,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"
import "./footer.css";



const Footer = () => {
  return (
    <footer className="footer">
      <div className='container grid'>
          <img src={footerLogo} alt="logo" className="footer-logo"/>
        <div className="footer-nav">
            <h4>Navigate the site</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Menu</Link></li>
              <li><Link to="/reservation">Reservation</Link></li>
              <li><Link to="/">Order Online</Link></li>
              <li><Link to="/">Login</Link></li>
            </ul>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <address>
            <p><FontAwesomeIcon icon={faLocationDot} /> 789 Maple Street, Portland, Oregon, 97201.</p>
            <p><FontAwesomeIcon icon={faPhone} /> (555) 123-4567</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> littlelemon@gmail.com</p>
          </address>
        </div>

        <div className="socials">
          <h4>Connect with us on social Media</h4>
          <a href="www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="wwww.facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="www.pintrest.com" target="_blank"><FontAwesomeIcon icon={faPinterest} /></a>
          <a href="www.youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="wwww.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;