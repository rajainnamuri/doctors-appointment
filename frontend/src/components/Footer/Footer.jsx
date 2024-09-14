import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import './Footer.css'; // Assuming you have a CSS file for styling

const socialLinks = [
  {
    path: '',
    icon: <AiFillYoutube className="w-6 h-6 group-hover:text-white" />,
  },
  {
    path: '',
    icon: <AiFillGithub className="w-6 h-6 group-hover:text-white" />,
  },
  {
    path: '',
    icon: <AiOutlineInstagram className="w-6 h-6 group-hover:text-white" />,
  },
  {
    path: '',
    icon: <RiLinkedinFill className="w-6 h-6 group-hover:text-white" />,
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Logo, Copyright, and Social Media Links */}
        <div className="logo-container">
          <img src={logo2} alt="Alpha Medical Care" className="logo" />
          <p className="footer-text">© {new Date().getFullYear()} ALPHA MEDICAL CARE. All rights reserved.</p>
          
          <div className="social-media">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>

        {/* I Want To Section */}
        <div className="footer-section">
          <h4>I Want To:</h4>
          <ul>
            <li><Link to="/find-doctor">Find a Doctor</Link></li>
            <li><Link to="/request-appointment">Request Appointment</Link></li>
            <li><Link to="/find-location">Find a Location</Link></li>
            <li><Link to="/get-opinion">Get an Opinion</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
