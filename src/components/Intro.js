import Profile from "../assets/profile-img.jpeg"
import React from 'react'
import "./IntroStyles.css";
function Intro() {
  return (
    <div className="intro-container">
        <div className="about-me">
            <h2 className="about-me-heading">ABOUT ME</h2>
        </div>
        <div className="intro-img-container">
      <img className="intro-description-img" src={Profile}/>
      </div>
      <div className="intro-content-container">
      <div className="intro-content">
        <p className="content">Hello! My Name is Arihant Jain and I am a third year Btech Student from Shivalik College Of Engineering.I am an Aspiring Developer who loves to create new things.I am a Problem-Solver.I believe in collaborating with other people to learn and grow with them.Currently I am learning Web Development and Data Structures and Algorithms.</p>
      </div> 
      </div>
    </div>
  )
}

export default Intro
