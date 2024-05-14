import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cumque, reiciendis quia blanditiis laboriosam vel quasi recusandae atque mollitia. Quia, architecto explicabo ipsam accusamus quam quisquam optio porro autem quibusdam?</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-333-4144</li>
            <li>tomato@toma.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; tomato.com - All right Reserved.</p>
    </div>
  )
}

export default Footer