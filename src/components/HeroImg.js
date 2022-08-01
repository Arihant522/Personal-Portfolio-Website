import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="intro-img"/>
        </div>
        <div className="content">
           <p>HI, I am a WEB DEVELOPER</p>
           <h1>REACT <br/>DEVELOPER</h1>
           <Link to="/project" className="btn">PROJECTS</Link>
           <Link to="/contact" className="btn btn-light">Contacts</Link>
        </div>
    </div>
  )
}

export default HeroImg
