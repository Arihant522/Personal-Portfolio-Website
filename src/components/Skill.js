import "./SkillStyles.css"
import React from 'react'
import Skillcard from "./Skillcard"
import SkillDataCard from "./SkillCardData"
function Skill() {
  return (
    <div className="skill-container">
        <h1 className="skill-heading">SKILLS</h1>
       <div className="skill-card-container"> 
          {SkillDataCard.map((val)=>{
            return(
              <Skillcard
              src={val.src}
              heading={val.heading}
              description={val.description}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Skill
