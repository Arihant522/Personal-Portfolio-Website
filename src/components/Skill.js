import "./SkillStyles.css"
import React from 'react'

function Skill() {
  return (
    <div className="skill-container">
        <h1 className="skill-heading">SKILLS</h1>
       <div className="skill-card-container"> 
      <div className="skill-card">
          <img src="https://th.bing.com/th/id/OIP.pt-un_-pN3pgggv7EVHMBAHaDK?pid=ImgDet&rs=1" alt="html-img"/>
          <div className="skill-card-heading"><h3 >HTML</h3></div>
          <div className="skill-description"><p>HTML, or Hypertext Markup Language,<br/> is a markup language for the web that defines the structure of web pages. </p></div>
      </div>

      <div className="skill-card">
          <img src="https://th.bing.com/th/id/OIP._XZ-1rIXCIDyeGHw6KmPKgHaFU?w=258&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7"/>
          <div className="skill-card-heading"><h3>CSS</h3></div>
          <div className="skill-description"><p>CSS is what’s called a Cascading Style Sheet language, and is used to stylize elements written in a markup language such as HTML. </p></div>
      </div>

      <div className="skill-card">
          <img src="https://th.bing.com/th/id/OIP.ZEu_2nVjitpB-jhLRgfn4AHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"/>
          <div className="skill-card-heading"><h3>JAVASCRIPT</h3></div>
          <div className="skill-description"><p>JavaScript is a lightweight programming language that web developers commonly use to create more dynamic interactions when developing web pages, applications, servers, and or even games.</p></div>
      </div>
      </div>
    </div>
  )
}

export default Skill
