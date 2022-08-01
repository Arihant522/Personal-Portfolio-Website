import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import resume from "../assets/Arihant-Resume.pdf"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="intro">
        <h1>Who am I?</h1>
        <p>
            I am a Web developer Looking for new oppurtunities to learn and grow my skills
        </p>
        <a href={resume} download className="btn">Download CV</a>
        </div>
    </div>
  )
}

export default AboutContent
