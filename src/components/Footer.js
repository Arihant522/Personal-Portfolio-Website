import "./FooterStyles.css";
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
         <div className="left">
           <div className="location">
              <FaHome size={30} style={{color:"white", marginRight:"2rem"}}/>
              <div>
                <p>108 Park Road </p>
                <p>Dehradun Uttrakhand</p>
                <p>India</p>
              </div>
           </div>
           <div className="phone">
           <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/> 7668863813</h4>
           </div>
         
         <div className="email">
           <a href="mailto:connectwitharihant@gmail.com"><h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>connectwitharihant@gmail.com</h4></a>
           </div>
           </div>
         <div className="right">
              <div className="social">
              <a href="https://www.facebook.com/profile.php?id=100069767854918" rel="noopener" target="_blank"><FaFacebook className="icon" size={30} style={{ marginRight:"1rem"}}/></a>

              <a href="https://www.linkedin.com/in/arihant-jain-b93b2a19a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSHHPtqu5TQ%2BeS5kFmJRF%2BQ%3D%3D" rel="noopener" target="_blank"><FaLinkedin className="icon" size={30} style={{ marginRight:"1rem"}}/></a>

              <a href="https://www.instagram.com/arihantjain502" rel="noopener" target="_blank"><FaInstagram className="icon" size={30} style={{ marginRight:"1rem"}}/></a>

              <a href="https://twitter.com/Arihant05Jain" rel="noopener" target="_blank"><FaTwitter className="icon" size={30} style={{ marginRight:"1rem"}}/></a>

              <a href="https://github.com/Arihant522" rel="noopener" target="_blank"><FaGithub className="icon" size={30} style={{ marginRight:"1rem"}}/></a>
              </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
