import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import resume from "../assets/Arihant-Resume.pdf"
import CodingProfile from "./Coding-Profile"
import Skill from "./Skill"
import Intro from "./Intro"

const AboutContent = () => {
  return (
    <div className="about-section">
    <div className="about">
        <div className="intro">
        <h1>Who am I?</h1>
        <p>
            I am a Web developer Looking for new opportunities to learn and grow my skills
        </p>
        <a href={resume} download className="btn">Download CV</a>
        </div>
    </div>
    <Intro/>
    <CodingProfile/>
    <Skill/>
    </div>
    
    
  )
}

export default AboutContent
