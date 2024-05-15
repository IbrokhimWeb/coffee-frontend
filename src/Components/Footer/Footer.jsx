// Import React
import React from "react";

// Import Icons
import { MdLocationOn, MdLocalPhone, MdMail } from "react-icons/md";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// Import Css
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-get-in">
          <h4>GET IN TOUCH</h4>
          <div className="footer-get-in__item">
            <MdLocationOn />
            <p>Parkent, Tashkent ,Uzb</p>
          </div>
          <div className="footer-get-in__item">
            <MdLocalPhone />
            <p>+998 99 6057845</p>
          </div>
          <div className="footer-get-in__item">
            <MdMail />
            <p>Ibrokhimweb@gmai.com</p>
          </div>
        </div>
        <div className="footer-follow-us">
          <h4>FOLLOW US</h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <dir className="footer-follow-us__icons">
            <FaTwitter className="footer-follow-us__icon" />
            <FaFacebookF className="footer-follow-us__icon" />
            <FaLinkedinIn className="footer-follow-us__icon" />
            <FaInstagram className="footer-follow-us__icon" />
          </dir>
        </div>
        <div className="footer-open-hour">
          <h4>OPEN HOURS</h4>
          <p>MONDAY - FRIDAY</p>
          <p className="footer-open-hour__margin">8.00 AM - 8.00 PM</p>
          <p>SATURDAY - SUNDAY</p>
          <p>2.00 PM - 8.00 PM</p>
        </div>
        <div className="footer-newsletter">
          <h4>NEWSLETTER</h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <div className="footer__sign-up">
            <input type="text" placeholder="Your Email" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="footer-after">
        <p>
          Copyright © <a href="#">Domain</a>. All Rights Reserved.
        </p>
        <p>
          Designed by <a href="#">CYBER STEP</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
